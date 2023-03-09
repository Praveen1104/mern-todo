const express = require("express");
const task = require("../models/schema");
const router = express.Router();
const mongoose = require("mongoose");
const app = express();

router.use(express.json());
mongoose.set("strictQuery", true);
router.get("/create", (req, res) => {
  task
    .find()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/new", async (req, res) => {
  const t = req.body;
  console.log(req.body, t);
  await task
    .create(t)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.put("/:id", (req, res) => {
  task.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    req.body,
    {
      new: true,
    }
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      })
  );
});
router.delete("/:id", (req, res) => {
  task
    .findByIdAndDelete(req.params.id)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
