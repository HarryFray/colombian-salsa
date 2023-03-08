const asyncHandler = require("express-async-handler");
const Dance = require("../models/danceModel");

//@desc Get all dance-moves
//@route GET /api/dance-moves
//@access Public
const getAllDances = asyncHandler(async (req, res) => {
  const dances = await Dance.find();
  res.status(200).json(dances);
});

//@desc Create new dance
//@route POST /api/dance-moves
//@access Public
const createContact = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    res.status(400);
    throw new Error("Please provide name and description in the body");
  }

  await Dance.create({ name, description });
  res.status(201).json({ message: `CREATE DANCE: ${req.body.name}` });
});

//@desc Get dance by id
//@route GET /api/dance-moves/:id
//@access Public
const getContactById = asyncHandler(async (req, res) => {
  const dance = await Dance.findById(req.params.id);
  res.status(200).json(dance);
});

//@desc Update dance
//@route PUT /api/dance-moves:id
//@access Public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `UPDATE DANCE FOR ${req.params.id}` });
});

//@desc Delete dance
//@route DELETE /api/dance-moves:id
//@access Public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `DELETE DANCE FOR ${req.params.id}` });
});

module.exports = {
  getAllDances,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
};
