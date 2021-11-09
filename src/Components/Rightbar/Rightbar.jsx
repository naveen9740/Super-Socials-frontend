import React from "react";
import { Users } from "../../dummyData";
import "./Rightbar.css";

export const Rightbar = () => {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
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
                    src={profilePicture}
                    alt=""
                  />
                  <span className="rightBarOnline"></span>
                </div>
                <div className="rightBarUserName">{username}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
