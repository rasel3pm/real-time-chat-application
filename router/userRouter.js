const { getUser, addUser } = require("../controller/userController");
const decorateHtmlResponse = require("../middelwear/common/decorateHtmlResponse");
const avaterUploader = require("../middelwear/user/avaterUpload");
const {
  addUserValidator,
  addUserValidationResult,
} = require("../middelwear/user/userValidator");

const router = require("express").Router();

router.get("/users", decorateHtmlResponse("users"), getUser);

router.post(
  "/",
  avaterUploader,
  addUserValidator,
  addUserValidationResult,
  addUser
);

module.exports = router;
