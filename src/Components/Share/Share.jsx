import React from "react";
import "./Share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import { useAuth } from "../../Context/AuthContext";

export const Share = () => {
  const {
    user: { user },
  } = useAuth();

  const link = process.env.PORT || "http://localhost:3000/";
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user.username
                ? link + user.profilePicture
                : link + "assets/person/noCover.png"
            }
            alt=""
          />
          <input
            placeholder="What's in your Mind Naveen?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>{" "}
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareBtn">Share</button>
        </div>
      </div>
    </div>
  );
};
