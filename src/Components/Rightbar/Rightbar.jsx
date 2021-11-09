import React from "react";
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
          <li className="rightBarFriend">
            <div className="rightBarImgContainer">
              <img
                className="rightBarProfileImg"
                src="/assets/person/3.jpeg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <div className="rightBarUserName">Naveen Kamath</div>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarImgContainer">
              <img
                className="rightBarProfileImg"
                src="/assets/person/3.jpeg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <div className="rightBarUserName">Naveen Kamath</div>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarImgContainer">
              <img
                className="rightBarProfileImg"
                src="/assets/person/3.jpeg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <div className="rightBarUserName">Naveen Kamath</div>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarImgContainer">
              <img
                className="rightBarProfileImg"
                src="/assets/person/3.jpeg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <div className="rightBarUserName">Naveen Kamath</div>
          </li>
        </ul>
      </div>
    </div>
  );
};
