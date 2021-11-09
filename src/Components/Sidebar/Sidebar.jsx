import React from "react";
import "./Sidebar.css";
import {
  Bookmark,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
} from "@material-ui/icons";

export const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <RssFeed className="sideBarIcon" />
            <span className="sideBarListItemText">Feed</span>
          </li>
          <li className="sideBarListItem">
            <PlayCircleFilledOutlined className="sideBarIcon" />
            <span className="sideBarListItemText">Videos</span>
          </li>
          <li className="sideBarListItem">
            <Group className="sideBarIcon" />
            <span className="sideBarListItemText">Groups</span>
          </li>
          <li className="sideBarListItem">
            <Bookmark className="sideBarIcon" />
            <span className="sideBarListItemText">BookMarks</span>
          </li>
          <li className="sideBarListItem">
            <HelpOutline className="sideBarIcon" />
            <span className="sideBarListItemText">Questions</span>
          </li>
          <li className="sideBarListItem">
            <WorkOutline className="sideBarIcon" />
            <span className="sideBarListItemText">Jobs</span>
          </li>
          <li className="sideBarListItem">
            <Event className="sideBarIcon" />
            <span className="sideBarListItemText">Events</span>
          </li>
          <li className="sideBarListItem">
            <School className="sideBarIcon" />
            <span className="sideBarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sideBarBtn">Show More</button>
        <hr className="sideBarHr" />
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img
              src="/assets/person/7.jpeg"
              alt="profile"
              className="sidebarProfileImg"
            />
            <span className="sideBarFriendName">Person</span>
          </li>
          <li className="sideBarFriend">
            <img
              src="/assets/person/7.jpeg"
              alt="profile"
              className="sidebarProfileImg"
            />
            <span className="sideBarFriendName">Person</span>
          </li>{" "}
          <li className="sideBarFriend">
            <img
              src="/assets/person/7.jpeg"
              alt="profile"
              className="sidebarProfileImg"
            />
            <span className="sideBarFriendName">Person</span>
          </li>{" "}
          <li className="sideBarFriend">
            <img
              src="/assets/person/7.jpeg"
              alt="profile"
              className="sidebarProfileImg"
            />
            <span className="sideBarFriendName">Person</span>
          </li>{" "}
          <li className="sideBarFriend">
            <img
              src="/assets/person/7.jpeg"
              alt="profile"
              className="sidebarProfileImg"
            />
            <span className="sideBarFriendName">Person</span>
          </li>{" "}
          <li className="sideBarFriend">
            <img
              src="/assets/person/7.jpeg"
              alt="profile"
              className="sidebarProfileImg"
            />
            <span className="sideBarFriendName">Naveen</span>
          </li>
          <li className="sideBarFriend">
            <img
              src="/assets/person/7.jpeg"
              alt="profile"
              className="sidebarProfileImg"
            />
            <span className="sideBarFriendName">Naveen</span>
          </li>
          <li className="sideBarFriend">
            <img
              src="/assets/person/7.jpeg"
              alt="profile"
              className="sidebarProfileImg"
            />
            <span className="sideBarFriendName">Naveen</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
