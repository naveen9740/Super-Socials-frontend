import React from "react";
import "./Post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";

export const Post = ({ desc, photo, date, like, comment, userId }) => {
  const user = Users.filter((user) => user.id === 1);
  console.log(user[0].username);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === userId)[0].username}
            </span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img src={photo} alt="" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="" />
            <img className="likeIcon" src="/assets/heart.png" alt="" />
            <span className="likeCounter">{like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};
