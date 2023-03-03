//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getAllContacts = (req, res) => {
  res.status(200).json({
    message: "GET ALL CONTACTS",
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
};

//@desc Create new contact
//@route POST /api/contacts
//@access Public
const createContact = (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please provide name, email and phone number in the body");
  }
  res.status(201).json({ message: `CREATE CONTACT: ${req.body.name}` });
};

//@desc Get contact by id
//@route GET /api/contacts/:id
//@access Public
const getContactById = (req, res) => {
  res.status(200).json({ message: `GET CONTACT FOR ${req.params.id}` });
};

//@desc Update contact
//@route PUT /api/contacts:id
//@access Public
const updateContact = (req, res) => {
  res.status(200).json({ message: `UPDATE CONTACT FOR ${req.params.id}` });
};

//@desc Delete contact
//@route DELETE /api/contacts:id
//@access Public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `DELETE CONTACT FOR ${req.params.id}` });
};

module.exports = {
  getAllContacts,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
};
