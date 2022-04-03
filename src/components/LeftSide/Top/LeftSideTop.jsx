import React, { useEffect, useState } from "react";
import { Paper, Avatar, Divider } from "@material-ui/core";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import Style from "./style";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/userSlice";
import { useNavigate } from "react-router-dom";

export const LeftSideTop = () => {
  const user = useSelector(selectUser);
  const classes = Style();
  const [groups, setGroups] = useState(true);

  const [viewed, setViewed] = useState(1);
  const [connections, setConnections] = useState(1);

  useEffect(() => {
    setViewed(Math.floor(Math.random() * 100));
    setConnections(Math.floor(Math.random() * 1000));
  }, []);

  const nav = useNavigate();

  const direct = () => {
    nav("/profile");
  };

  return (
    <Paper className={classes.sidebar}>
      <div
        className={classes.cover}
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1644982648774-83312909bbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <Avatar src="https://avatars.githubusercontent.com/u/93372997?v=4" onClick={direct} />
      {/* <h4 onClick={direct} className={classes.direct}>
        {user.displayName}
      </h4> */}
      <div className={classes.stats}>
        <Divider />
        <div className={classes.stat}>
          <h4>Who viewed your profile</h4>
          <p style={{ margin: 0, fontSize: 12 }}>{viewed}</p>
        </div>
        <div className={classes.stat}>
          <h4>Connections</h4>
          <p style={{ margin: 0, fontSize: 12 }}>{connections}</p>
        </div>
        <Divider />
      </div>
      <div className={classes.myItems}>
        <LabelImportantIcon
          style={{ transform: groups ? "rotate(-90deg)" : "" }}
          onClick={() => setGroups(!groups)}
        />
        <h4>My Items</h4>
      </div>
    </Paper>
  );
};
