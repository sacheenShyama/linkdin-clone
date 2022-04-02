import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { LeftSideTop } from "./Top/LeftSideTop";
import { LeftSideBottom } from "./Bottom/LeftSideBottom";
import "./LeftStyle.css";

//left component
export const LeftSide = () => {
  const classes = Style();
  return (
    <div className={classes.sidebar}>
      {/* Top_left */}
      <LeftSideTop />
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
