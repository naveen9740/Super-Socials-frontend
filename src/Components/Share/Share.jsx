import React, { useRef, useState } from "react";
import "./Share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";

export const Share = () => {
  const link = process.env.PORT || "http://localhost:3000/";

  const {
    user: { user },
  } = useAuth();
  const desc = useRef();
  const [file, setFile] = useState(null);
  console.log({ file });

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
            placeholder={`What's in your Mind ${user.username}?`}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form
          className="shareBottom"
          onSubmit={async (e) => {
            e.preventDefault();
            const newPost = {
              userId: user._id,
              desc: desc.current.value,
            };

            if (file) {
              const data = new FormData();
              const fileName = file.name;
              data.append("file", file);
              data.append("name", fileName);
              newPost.img = `assets/post/${fileName}`;
              try {
                await axios.post("/upload", data);
              } catch (err) {
                console.log(err.message);
              }
            }
            try {
              await axios.post("posts/", newPost);
              window.location.reload();
            } catch (error) {
              console.log({ error: error.message });
            }
          }}
        >
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
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
          <button className="shareBtn" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};
