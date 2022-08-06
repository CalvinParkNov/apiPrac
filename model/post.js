//게시글에 대한 db
const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    // postId :{
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    nickname:{
        type: String,
        required: [true, "닉네임은 필수 입니다."],
        unique: true
    },
    title:{
        type: String,
        required: [true, "title은 필수입니다."]
    },
    content:{
        type: String,
        required: [true, "content는 필수입니다."]
    }
});
// const post = new Post({
//     nickname: this.post
// });

// let error = post.validateSync();

// // //nickname
// assert.equal(error.errors["nickname"].message,
//     "nickname은 필수입니다.");

module.exports = mongoose.model("Posts", postSchema);


// assert.ok(!error.errors["nickname"]);

// //title
// assert.equal(error.errors["title"].message,
//     "`title`은 필수입니다.");
// assert.ok(!error.errors["title"]);

// //content
// assert.equal(error.errors["content"].message,
//     "`content`은 필수입니다.");
// assert.ok(!error.errors["content"])  ;
