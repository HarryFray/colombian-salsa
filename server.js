const express = require("express");
var bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// APP MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => console.log(`Server running on port ${port}`));
