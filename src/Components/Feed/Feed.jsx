import React, { useEffect, useState } from "react";
import { Post } from "../Post/Post";
import { Share } from "../Share/Share";
import "./Feed.css";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";

export const Feed = ({ username }) => {
  const link = process.env.PORT || "http://localhost:3000/";
  const backend = "https://socialmediabackend2.herokuapp.com/";
  const {
    user: { user },
  } = useAuth();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = username
        ? await axios.get(`${backend}posts/profile/${username}`)
        : await axios.get(`${backend}posts/timeline/${user._id}`);
      setPosts(
        response.data.sort(
          (p1, p2) => new Date(p2.createdAt) - new Date(p1.createdAt)
        )
      );
    })();
  }, [username, user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {username !== user.username && <Share />}

        {posts.map(({ _id, desc, img, likes, userId, comment, createdAt }) => {
          return (
            <Post
              key={_id}
              _id={_id}
              desc={desc}
              photo={img}
              createdAt={createdAt}
              likes={likes}
              comment={comment}
              userId={userId}
            />
          );
        })}
      </div>
    </div>
  );
};
