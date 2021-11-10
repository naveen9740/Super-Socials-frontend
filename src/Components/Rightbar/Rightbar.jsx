import React from "react";
import { Users } from "../../dummyData";
import "./Rightbar.css";

export const Rightbar = ({ user }) => {
  const link = process.env.PORT || "http://localhost:3000/";
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={`${link}assets/gift.png`} alt="" />
          <span className="birthdayText">
            <b>Naveen</b> and <b>3 other friends</b> have a birthday Today
          </span>
        </div>
        <img src="/assets/adv.jfif" alt="" className="rightBarAd" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendsList">
          {Users.map(({ id, profilePicture, username }) => {
            return (
              <li key={id} className="rightBarFriend">
                <div className="rightBarImgContainer">
                  <img
                    className="rightBarProfileImg"
                    src={link + profilePicture}
                    alt=""
                  />
                  <span className="rightBarOnline"></span>
                </div>
                <div className="rightBarUserName">{username}</div>
              </li>
            );
          })}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
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
        <h4 className="rightBarFollowings">User Friends</h4>
        <div className="rightBarFollowing">
          <div>
            <img
              src="/assets/person/7.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <div className="rightBarFollowingName">Naveen Kamath</div>
          </div>
          <div>
            <img
              src="/assets/person/7.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <div className="rightBarFollowingName">Naveen Kamath</div>
          </div>
          <div>
            <img
              src="/assets/person/7.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <div className="rightBarFollowingName">Naveen Kamath</div>
          </div>
          <div>
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <div className="rightBarFollowingName">Naveen Kamath</div>
          </div>
          <div>
            <img
              src="/assets/person/3.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <div className="rightBarFollowingName">Naveen Kamath</div>
          </div>
          <div>
            <img
              src="/assets/person/3.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <div className="rightBarFollowingName">Naveen Kamath</div>
          </div>
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
