const asyncHandler = require("express-async-handler");

//@desc Get all dance-moves
//@route GET /api/dance-moves
//@access Public
const getAllDances = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "GET ALL DANCES",
    data: {
      allSalsaDanceMoves: [
        "The Basic",
        "The Cross Body Lead",
        "The Underarm Turn",
        "The Back Ocho",
        "The Back Cross",
        "The Back Lock",
        "The Back Rock Step",
        "The Back Spot Turn",
        "The Back Whip",
        "The Backward Break",
      ],
    },
  });
});

//@desc Create new dance
//@route POST /api/dance-moves
//@access Public
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please provide name, email and phone number in the body");
  }
  res.status(201).json({ message: `CREATE DANCE: ${req.body.name}` });
});

//@desc Get dance by id
//@route GET /api/dance-moves/:id
//@access Public
const getContactById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `GET DANCE FOR ${req.params.id}` });
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
