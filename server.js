const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require("cors");

connectDB();
const app = express();
const port = process.env.PORT || 5000;

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// APP MIDDLEWARE
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/dance-moves", require("./routes/danceRoutes"));
app.use("/", require("./routes/uiRoutes"));

app.use(errorHandler);

app.listen(port, () =>
  console.log(`SalsaServer Running on port: ${port} 💃 💃 💃`)
);
