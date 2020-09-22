const express = require("express");
const router = express.Router();
const { base } = require("../controllers/index");

router.get("/", base);

module.exports = router;
