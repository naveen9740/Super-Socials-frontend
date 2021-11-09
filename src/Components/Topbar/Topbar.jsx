import "./Topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Super-Social</span>
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
        <img src="/assets/person/2.jpeg" alt="" className="img" />
      </div>
    </div>
  );
};

// 15.37
