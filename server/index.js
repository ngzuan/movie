const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const cookie = require("cookie-parser");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dbconnect = require("./config/mongodb");
const userRouter = require("./routers/userRouter");
dbconnect();
dotenv.config();

app.use(cookie());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("common"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("hello", PORT);
});

app.use("/api/user", userRouter);
