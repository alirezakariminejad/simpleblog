const postModel = require("@models/post");
const userModel = require("@models/user");
const dateService = require("@services/dateService");

exports.index = async (req, res) => {
  const posts = await postModel.findAll();
  const presentPosts = posts.map((post) => {
    post.created_at_persian = dateService.toPersianDate(post.create_at);
    return post;
  });
  res.render("admin/posts/index", { layout: "admin", posts: presentPosts });
};

exports.create = async (req, res) => {
  const users = await userModel.findAll(["id", "full_name"]);
  res.render("admin/posts/create", { layout: "admin", users });
};

exports.store = async (req, res) => {
  const postDate = {
    title: req.body.postTitle,
    author_id: req.body.author,
    image: req.body.postFile,
    slug: req.body.postSlug,
    content: req.body.postContent,
    status: req.body.postStatus,
  };
  const result = await postModel.create(postDate);
  res.send(req.body);
};
