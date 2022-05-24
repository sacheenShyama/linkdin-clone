import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { LeftSideTop } from "./Top/LeftSideTop";
import { LeftSideBottom } from "./Bottom/LeftSideBottom";
import "./LeftStyle.css";

//left component
export const LeftSide = () => {
  let profilePic =
    JSON.parse(localStorage.getItem("profilePic")) ||
    "https://avatars.githubusercontent.com/u/67849097?s=400&u=153d075f3b171a4165fab40cd88b5f6b630cedc1&v=4";
  const classes = Style();
  return (
    <div className={classes.sidebar}>
      {/* Top_left */}
      <LeftSideTop profile={profilePic} />
      {/* Top_bottom */}
      <LeftSideBottom />
    </div>
  );
};

//Styling sidebar
const Style = makeStyles((theme) => ({
  sidebar: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));
