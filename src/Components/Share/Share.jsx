import React, { useRef, useState } from "react";
import "./Share.css";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@material-ui/icons";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";

export const Share = () => {
  const backend = process.env.REACT_APP_APIURL;

  const {
    user: { user },
    setResult,
  } = useAuth();
  const desc = useRef();
  const [file, setFile] = useState(null);
  const [close, setClose] = useState(true);

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user.username
                ? `${process.env.REACT_APP_URL}/${user.profilePicture}`
                : `${process.env.REACT_APP_URL}/assets/person/noCover.png`
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
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel
              onClick={() => {
                setFile(null);
              }}
              className="shareImgCancel"
            />
          </div>
        )}
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
              console.log(fileName);
              data.append("file", file);
              data.append("name", fileName);
              newPost.img = `assets/post/${
                Math.floor(Math.random() * 10) + 1
              }.jpeg`;
              try {
                const result = await axios.post(`${backend}/upload`, data);
                setResult(result);
              } catch (err) {
                console.log(err.message);
              }
            }
            try {
              const result = await axios.post(`${backend}/posts/`, newPost);
              setResult(result);
              // window.location.reload();
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
