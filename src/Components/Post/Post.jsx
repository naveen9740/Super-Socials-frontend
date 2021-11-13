import React, { useEffect, useState } from "react";
import "./Post.css";
import { MoreVert } from "@material-ui/icons";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export const Post = ({
  _id,
  desc,
  photo,
  createdAt,
  likes,
  comment,
  userId,
}) => {
  const [likePost, setLikePost] = useState(likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [{ profilePicture, username }, setUser] = useState({});
  const {
    user: { user },
  } = useAuth();
  const backend = "https://socialmediabackend2.herokuapp.com/";

  useEffect(() => {
    setIsLiked(likes.includes(user._id));
  }, [user._id, likes]);

  const link = process.env.PORT || "http://localhost:3000/";

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${backend}users?userId=${userId}`);
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
                src={
                  profilePicture
                    ? link + profilePicture
                    : link + "assets/person/noAvatar.png"
                }
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
              onClick={async () => {
                // console.log({ userId });
                console.log({ userId: user._id, _id });
                try {
                  const res = await axios.put(`${backend}posts/${_id}/like`, {
                    userId: user._id,
                  });
                  console.log({ res: res.data });

                  setLikePost(isLiked ? likePost - 1 : likePost + 1);
                  setIsLiked(!isLiked);
                } catch (error) {
                  console.log({ error });
                }
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
