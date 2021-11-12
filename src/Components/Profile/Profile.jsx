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
  const link = process.env.PORT || "http://localhost:3000/";
  const { username } = useParams();
  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users?username=${username}`);
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
                  user.coverPicture
                    ? link + user.coverPicture
                    : link + "assets/person/noCover.png"
                }
                alt=""
                className="profileCoverImage"
              />
              <img
                src={
                  user.profilePicture
                    ? link + user.profilePicture
                    : link + "assets/person/noAvatar.png"
                }
                alt=""
                className="profileUserImage"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
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
