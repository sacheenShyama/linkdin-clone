import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Paper, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import firebase from "firebase/compat/app";
import { db } from "../../../firebase";
import Styles from "./style";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function AddPost() {
  let loginStatusFlag =
    JSON.parse(localStorage.getItem("loginStatusFlag")) || false;
  let profilePic =
    JSON.parse(localStorage.getItem("profilePic")) ||
    "https://avatars.githubusercontent.com/u/67849097?s=400&u=153d075f3b171a4165fab40cd88b5f6b630cedc1&v=4";
  const nav = useNavigate();
  const direct = () => {
    nav("/profile");
  };
  const user = useSelector(selectUser);

  const classes = Styles();
  const [URL, setURL] = useState("");
  const [enterpost, setEnterpost] = useState("");
  const [userDetails, setUserDetails] = useState([]);
  const [picture, setPicture] = useState(null);
  const [video, setVideo] = useState(null);

  const [allData, setAllData] = useState({});
  const [formData, setFormData] = useState({
    img: "",
    typeText: "",
    like: "",
    comment: [],
  });
  const submitPost = (e) => {
    e.preventDefault();
    console.log(enterpost);
    console.log(picture);
    console.log(video);
    db.collection("enterpost").add({
      // name: user.displayName,
      message: enterpost,
      // photoUrl: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setEnterpost("");
  };

  // https://pehlapehla.herokuapp.com/mynetwork/
  //  useEffect(() => {

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `https://pehlapehla.herokuapp.com/timeline/get`
      );
      const data = await res.data;
      setUserDetails(data);
      console.log("users",userDetails);
    };
    fetchUser();
  }, []);

  const onchangePicture = (e) => {
    setPicture(e.target.files);
    console.log("picture", picture);
  };

  return (
    <Paper className={classes.upload}>
      <div className={classes.upload__header}>
        <Avatar onClick={direct} src={profilePic} />
        <form className={classes.header__form} onSubmit={submitPost}>
          <input
            id="inputText"
            placeholder="Start a Add"
            value={enterpost}
            onChange={(e) => setEnterpost(e.target.value)}
          />
          <input
            id="upload-image"
            type="file"
            accept="image/*"
            onChange={(e) => setPicture(e.target.files[0])}
            hidden
          />

          <input
            id="upload-video"
            type="file"
            onChange={(e) => setVideo(e.target.files[0])}
            accept="video/*"
            hidden
          />
        </form>
      </div>
      <div className={classes.upload__media}>
        <label
          htmlFor={URL === "" ? "upload-image" : ""}
          className={classes.media__options}
        >
          <PhotoSizeSelectActualIcon
            style={{
              color: "#70b5f9",
            }}
          />
          <span>Photo</span>
        </label>
        <label
          htmlFor={URL === "" ? "upload-video" : ""}
          className={classes.media__options}
        >
          <YouTubeIcon style={{ color: "green" }} />
          <span style={{ color: "black" }}>Video</span>
        </label>
        <div className={classes.media__options}>
          <EventNoteIcon style={{ color: "orange", fontSize: 30 }} />
          <span>Event</span>
        </div>
        <div className={classes.media__options}>
          <CalendarViewDayIcon style={{ color: "#f5987e" }} />
          <span>Write article</span>
        </div>
      </div>
    </Paper>
  );
}
