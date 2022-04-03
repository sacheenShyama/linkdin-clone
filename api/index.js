const express = require("express");
const cors = require("cors");
const connect = require("./src/configs/db");
let port = process.env.PORT || 1234;

const myNetworkController = require("./src/controller/network.controller");
const authRoute = require("./src/controller/auth.controller");
const timelinepost = require("./src/controller/timeline.controller");
const personalpost = require("./src/controller/personal.controller");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/mynetwork", myNetworkController);
app.use("/timeline", timelinepost);
app.use("/personal", personalpost);

app.listen(port, async function () {
  try {
    await connect();
    console.log(`listing to ths  http://localhost:${port}`);
  } catch (error) {
    console.log(error);
  }
});
