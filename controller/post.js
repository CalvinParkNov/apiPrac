//게시글에 대한 business logic
const Post = require("../model/post");
const assert = require("assert");

const getAllPost = async (req, res) => {
  const result = await Post.find({});
  res.send(result);
};
const createPostPage = async (req, res) => {
  res.send("Nickname, title, content를 입력해주세요");
};
const insertPost = async (req, res) => {
  const newPost = new Post(req.body);

  const existPost = await Post.findOne({ nickname: req.body.nickname });
  try {
    if (existPost) {
      return res.status(401).send({ errorMessage: "중복된 닉네임입니다." });
    }
    res.status(200).json({ msg: "게시글이 생성되었습니다." });
    await newPost.save();
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
};

module.exports = { getAllPost, createPostPage, insertPost };
