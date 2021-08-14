const db = require('../models')
const Post = db.Post
const Op = db.Sequelize.Op

exports.create = (req, res) => {
  const post = {
    idpost: null,
    idtag: req.body.idtag,
    iduser: req.session.user.iduser,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
  };
  console.log("post:",post)
  return Post.create(post)
};

exports.findAll = async () => {
  let posts = await Post.findAll({ raw: true });
  return posts
};

exports.findAllByUser = async (iduser) => {
  let posts = await Post.findAll({
    where: {
      iduser: `${iduser}`
    }
  });
  if (!posts || posts.length === 0)
    return null
  return posts
};

exports.findOne = async (req, res) => {
  const post = await Post.findOne({ where: {} });
  if (!post)
    return null
  return post
};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};

exports.findAllPublished = (req, res) => {

};