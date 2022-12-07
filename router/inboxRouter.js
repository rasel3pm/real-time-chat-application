const getInbox = require("../controller/inboxController");
const decorateHtmlResponse = require("../middelwear/common/decorateHtmlResponse");
const router = require("express").Router();

router.get("/inbox", decorateHtmlResponse("inbox"), getInbox);

module.exports = router;
