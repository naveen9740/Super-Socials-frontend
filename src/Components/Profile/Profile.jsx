import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Feed } from "../Feed/Feed";
import { Rightbar } from "../Rightbar/Rightbar";
import { Sidebar } from "../Sidebar/Sidebar";
import { Topbar } from "../Topbar/Topbar";
import "./Profile.css";
export const Profile = () => {
  const [user, setUser] = useState({});
  const { username } = useParams();
  const backend = "https://socialmediabackend2.herokuapp.com/";

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${backend}users?username=${username}`);
      console.log(response);
      setUser(response.data.other);
    })();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={
                  user?.coverPicture
                    ? `https://super-social.netlify.app/${user.coverPicture}`
                    : "https://super-social.netlify.app/assets/person/noCover.png"
                }
                alt=""
                className="profileCoverImage"
              />
              <img
                src={
                  user?.profilePicture
                    ? `https://super-social.netlify.app/${user.profilePicture}`
                    : "https://super-social.netlify.app/assets/person/noAvatar.png"
                }
                alt=""
                className="profileUserImage"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">
                {user?.username === undefined
                  ? "Dummy User :)"
                  : user?.username}
              </h4>
              <span className="profileInfoDesc">{user?.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};
