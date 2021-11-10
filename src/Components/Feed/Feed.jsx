import React, { useEffect, useState } from "react";
import { Post } from "../Post/Post";
import { Share } from "../Share/Share";
import "./Feed.css";
// import { Posts } from "../../dummyData";
import axios from "axios";

export const Feed = ({ username }) => {
  const link = process.env.PORT || "http://localhost:3000/";
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get("posts/timeline/6188e76d11ff875c8ed1523d");
      setPosts(response.data);
      console.log();
    })();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map(({ _id, desc, img, likes, userId, comment, createdAt }) => {
          return (
            <Post
              key={_id}
              desc={desc}
              photo={link + img}
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
