const express = require("express");
const router = express.Router();
const fs = require("fs");

router.route("/home").get((req, res) => {
  fs.readFile("./index.html", "utf8", (err, html) => {
    if (err) {
      console.log("Error reading file", err);
      res.status(500).send("Error reading file");
    }

    res.send(html);
  });
});

module.exports = router;
