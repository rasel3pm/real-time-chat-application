const cookieParser = require("cookie-parser");
const connectDB = require("./config/config");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
require("colors");
dotenv.config();

const { commonError, notFound } = require("./middelwear/common/errorHandaler");
const router = require("./router/index");
app.set("views engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

//DB connection
connectDB();
const port = process.env.PORT || 8080;

//router setup
app.use(router);
//404 not found
app.use(notFound);
app.use(commonError);

//listen
app.listen(port, () => {
  console.log(`Server is runnig on port ${port}`.bgCyan.white);
});
