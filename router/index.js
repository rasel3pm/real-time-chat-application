const router = require("express").Router();
const userRouter = require("./userRouter");
const inboxRouter = require("./inboxRouter");
const logInRouter = require("./logInRouter");

router.use("/", logInRouter);
router.use("/", inboxRouter);
router.use("/", userRouter);

module.exports = router;
