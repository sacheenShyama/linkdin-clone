const express = require("express");

const myNetwork = require("../models/network.model");

const router = express.Router();

//================USER CRUD============================
// router.post("/posts", crudController(myNetwork).post);

router.post("/posts", async (req, res) => {
  try {
    const item = await myNetwork.create(req.body);

    return res.status(201).send(item);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const items = await myNetwork.find().lean().exec();

    return res.send(items);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
