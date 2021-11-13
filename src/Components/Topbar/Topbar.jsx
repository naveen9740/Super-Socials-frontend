import "./Topbar.css";
import {
  Search,
  Person,
  Chat,
  Notifications,
  ExitToApp,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export const Topbar = () => {
  let {
    user: { user },
    dispatch,
  } = useAuth();
  const link = process.env.PORT || "http://localhost:3000/";

  console.log(user);

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Super-Social</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="search for Friends, Post or Video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="links">
          <span className="link">HomePage</span>
          <span className="link">Timeline</span>
        </div>
        <div className="icons">
          <div className="iconItem">
            <Person />
            <span className="iconBadge">1</span>
          </div>
          <div className="iconItem">
            <Chat />
            <span className="iconBadge">1</span>
          </div>
          <div className="iconItem">
            <Notifications />
            <span className="iconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? link + user.profilePicture
                : link + "assets/person/noAvatar.png"
            }
            alt=""
            className="img"
          />
        </Link>
        <div
          className="iconItem"
          onClick={() => {
            console.log({ user });
            return dispatch({ type: "LOGOUT" });
          }}
        >
          <ExitToApp />
        </div>
      </div>
    </div>
  );
};

// 15.37
