//route
const express = require("express");
const router = express.Router();
const {getAllPost,createPostPage,insertPost} = require("../controller/post")

router.route("/").get(getAllPost)
router.route("/createPostPage").get(createPostPage).post(insertPost);

module.exports = router;