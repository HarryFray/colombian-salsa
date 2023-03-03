const express = require("express");
const {
  getAllDances,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controllers/danceController");

const router = express.Router();

router.route("/").get(getAllDances).post(createContact);

router
  .route("/:id")
  .get(getContactById)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
