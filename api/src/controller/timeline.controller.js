const express = require("express");

const timelinePost = require("../models/timeline.models");

const router = express.Router();

router.post("/post", async (req, res) => {
  try {
    const item = await timelinePost.create(req.body);

    return res.status(201).send(item);
  } catch (error) {
    return res.send(error);
  }
});

router.get("/get", async (req, res) => {
  try {
    const items = await timelinePost.find().lean().exec();

    return res.send(items);
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;
