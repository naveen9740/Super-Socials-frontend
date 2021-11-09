import { Feed } from "../Feed/Feed";
import { Rightbar } from "../Rightbar/Rightbar";
import { Sidebar } from "../Sidebar/Sidebar";
import { Topbar } from "../Topbar/Topbar";
import "./Profile.css";
export const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="/assets/post/9.jpeg"
                alt=""
                className="profileCoverImage"
              />
              <img
                src="/assets/person/8.jpeg"
                alt=""
                className="profileUserImage"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Naveen Kamath</h4>
              <span className="profileInfoDesc">Js Dev @ Microsoft</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};
