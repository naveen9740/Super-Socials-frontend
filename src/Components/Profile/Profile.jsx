import axios from "axios";
import { useEffect, useState } from "react";
import { Feed } from "../Feed/Feed";
import { Rightbar } from "../Rightbar/Rightbar";
import { Sidebar } from "../Sidebar/Sidebar";
import { Topbar } from "../Topbar/Topbar";
import "./Profile.css";
export const Profile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users?username=raghu`);
      setUser(response.data.other);
    })();
  }, []);
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={user.coverPicture}
                alt=""
                className="profileCoverImage"
              />
              <img
                src={user.profilePicture}
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
            <Feed username="raghu" />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};
