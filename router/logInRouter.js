const getLogIn = require("../controller/loginController");
const decorateHtmlResponse = require("../middelwear/common/decorateHtmlResponse");

const router = require("express").Router();

router.get("/", decorateHtmlResponse("login"), getLogIn);

module.exports = router;
