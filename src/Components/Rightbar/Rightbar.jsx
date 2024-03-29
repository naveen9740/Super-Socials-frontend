import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Rightbar.css";
import { Link } from "react-router-dom";
import { Users } from "../../dummyData";
import { useAuth } from "../../Context/AuthContext";
import { Add, Remove } from "@material-ui/icons";

export const Rightbar = ({ user }) => {
  const link = process.env.PORT || "http://localhost:3000/";
  const backend = process.env.REACT_APP_APIURL;

  const [friends, setFriends] = useState([]);
  const [users, setUsers] = useState();
  const {
    user: { user: currentUser },
    dispatch,
  } = useAuth();

  const [followed, setFollowed] = useState(
    currentUser.following.includes(user?.id)
  );

  useEffect(() => {
    setFollowed(currentUser.following.includes(user?.id));
  }, [currentUser, user?.id]);

  useEffect(() => {
    (async () => {
      try {
        const friendList = await axios.get(
          `${backend}/users/friends/${user._id}`
        );
        setFriends(friendList.data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [user?._id]);

  useEffect(async () => {
    try {
      const users = await axios.get(`${backend}/users/users`);

      setUsers(users.data.users);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={`/assets/gift.png`} alt="" />
          <span className="birthdayText">
            <b>Naveen</b> and <b>3 other friends</b> have a birthday Today
          </span>
        </div>
        <img src="/assets/adv.jfif" alt="" className="rightBarAd" />
        <h4 className="rightBarTitle">Other Online Friends</h4>
        <ul className="rightBarFriendsList">
          {users?.map(({ _id, profilePicture, username }) => {
            return (
              <>
                <Link
                  to={`/profile/${username}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <li key={_id} className="rightBarFriend">
                    <div className="rightBarImgContainer">
                      <img
                        className="rightBarProfileImg"
                        src={`${process.env.REACT_APP_URL}/${profilePicture}`}
                        alt=""
                      />
                      <span className="rightBarOnline"></span>
                    </div>
                    <div className="rightBarUserName">{username}</div>
                  </li>
                </Link>
              </>
            );
          })}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        {user?.username !== currentUser?.username && (
          <button
            className="rightBarFollowBtn"
            onClick={async () => {
              try {
                if (followed) {
                  await axios.put(`${backend}/users/${user?._id}/unfollow`, {
                    userId: currentUser._id,
                  });
                  dispatch({ type: "FOLLOW", payload: user?._id });
                } else {
                  await axios.put(`${backend}/users/${user?._id}/follow`, {
                    userId: currentUser._id,
                  });
                  dispatch({ type: "FOLLOW", payload: user?._id });
                }
              } catch (error) {
                console.log(error.message);
              }
              setFollowed(!followed);
            }}
          >
            {followed ? "UnFollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoValue">City:</span>
            <span className="rightBarInfoKey">{user.city}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoValue">From:</span>
            <span className="rightBarInfoKey">{user.from}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoValue">Relationship:</span>
            <span className="rightBarInfoKey">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightBarFollowings">Followers</h4>
        <div className="rightBarFollowing">
          {friends.map(({ _id, username, profilePicture }) => {
            return (
              <Link
                style={{ textDecoration: "none", color: "black" }}
                key={_id}
                to={`/profile/${username}`}
              >
                <div>
                  <img
                    src={
                      profilePicture
                        ? `https://super-social.netlify.app/${profilePicture}`
                        : link + "/assets/person/noAvatar.jpeg"
                    }
                    alt=""
                    className="rightBarFollowingImg"
                  />
                  <div className="rightBarFollowingName">{username}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};
