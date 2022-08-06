//게시글에 대한 db
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    postId :{
        type: String,
        required: true,
        unique: true
    },
    nickname:{
        type: String,
        required: true,
        unique: true
    },
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
});

const Post = db.model("Post", postSchema);

const post = new Post();

let error = post.validateSync();

//nickname
assert.equal(error.errors["nickname"].message,
    "`nickname`은 필수입니다.");
assert.ok(!error.errors["nickname"]);

//title
assert.equal(error.errors["title"].message,
    "`title`은 필수입니다.");
assert.ok(!error.errors["title"]);

//content
assert.equal(error.errors["content"].message,
    "`content`은 필수입니다.");
assert.ok(!error.errors["content"])  ;

module.exports = mongoose.model("Posts", postSchema);