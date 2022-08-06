//route
const express = require("express");
const router = express.Router();
const {getAllPost} = require("../controller/post")

router.route("/").get(getAllPost);

module.exports = router;