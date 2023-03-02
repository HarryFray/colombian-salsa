const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "GET ALL CONTACTS" });
});

router.route("/").post((req, res) => {
  res.status(200).json({ message: `CREATE CONTACT: ${req.body.name}` });
});

router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `GET CONTACT FOR ${req.params.id}` });
});

router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `UPDATE CONTACT FOR ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `DELETE CONTACT FOR ${req.params.id}` });
});

module.exports = router;
