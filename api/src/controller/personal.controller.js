const express = require("express");

const personalpost = require("../models/personal.model");

const router = express.Router();

router.post("/post", async (req, res) => {
  try {
    const item = await personalpost.create(req.body);
    return res.status(201).send(item);
  } catch (error) {
    return res.send(error);
  }
});

router.get("/get/:fullname", async (req, res) => {
  try {
    //  const items = await personalpost.findOne(req.params.fullname).lean().exec();
    const items = await personalpost
      .findOne({ fullname: req.params.fullname })
      .lean()
      .exec();
    //  const items =  db.getUser(req.params.fullname);
    // console.log(req.params.fullname)

    return res.status(200).send(items);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/get/:id", async (req, res) => {
  try {
    const items = await personalpost.findById(req.params.id).lean().exec();

    return res.send(items);
  } catch (error) {
    return res.send(error.message);
  }
});

router.get("/get", async (req, res) => {
  try {
    const items = await personalpost.find().lean().exec();

    return res.send(items);
  } catch (error) {
    return res.send(error.message);
  }
});

module.exports = router;
