const express = require("express");
const router = express.Router();

// routers
const dashboardRouter = require("./dashboard");
const postRouter = require("./posts");

router.use("/dashboard", dashboardRouter);
router.use("/posts", postRouter);

module.exports = router;
