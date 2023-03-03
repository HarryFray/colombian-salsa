const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// APP MIDDLEWARE
app.use(express.json());
app.use("/api/dance-moves", require("./routes/danceRoutes"));
app.use("/", require("./routes/uiRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`SalsaServer Running on port: ${port} 💃 💃 💃`));
