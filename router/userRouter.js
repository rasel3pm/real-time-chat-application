const getUser = require("../controller/userController");
const decorateHtmlResponse = require("../middelwear/common/decorateHtmlResponse");

const router = require("express").Router();

router.get("/users", decorateHtmlResponse("users"), getUser);

module.exports = router;
