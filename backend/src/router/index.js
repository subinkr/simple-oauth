const express = require("express");
const { github } = require("../controller/github");
const { google } = require("../controller/google");
const { kakao } = require("../controller/kakao");
const router = express.Router();

router.post("/github/callback", github);
router.post("/google/callback", google);
router.post("/kakao/callback", kakao);

module.exports = router;
