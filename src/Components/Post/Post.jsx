import React, { useEffect, useState } from "react";
import "./Post.css";
import { MoreVert } from "@material-ui/icons";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

export const Post = ({ desc, photo, createdAt, likes, comment, userId }) => {
  const [likePost, setLikePost] = useState(likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [{ profilePicture, username }, setUser] = useState({});

  const link = process.env.PORT || "http://localhost:3000/";

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users?userId=${userId}`);
      setUser(response.data.other);
    })();
  }, [userId]);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link
              to={`/profile/${username}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={profilePicture || link + "assets/person/noAvatar.png"}
                alt=""
                className="postProfileImg"
              />
            </Link>
            <span className="postUserName">{username}</span>
            <span className="postDate">{format(createdAt)}</span>
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
            <img
              className="likeIcon"
              src="/assets/like.png"
              alt=""
              onClick={() => {
                setIsLiked(!isLiked);
                return setLikePost(isLiked ? likePost - 1 : likePost + 1);
              }}
            />
            <img className="likeIcon" src="/assets/heart.png" alt="" />
            <span className="likeCounter">{likePost} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};
