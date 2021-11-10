import React from "react";
import { Post } from "../Post/Post";
import { Share } from "../Share/Share";
import "./Feed.css";
import { Posts } from "../../dummyData";

export const Feed = () => {
  const link = process.env.PORT || "http://localhost:3000/";
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />

        {Posts.map(({ id, desc, photo, date, like, userId, comment }) => {
          return (
            <Post
              key={id}
              desc={desc}
              photo={link + photo}
              date={date}
              like={like}
              comment={comment}
              userId={userId}
            />
          );
        })}
      </div>
    </div>
  );
};
