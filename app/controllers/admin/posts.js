const postModel = require("@models/post");
const userModel = require("@models/user");
const dateService = require("@services/dateService");
const postValidator = require("@validators/post");

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
  const postData = {
    title: req.body.postTitle,
    author_id: req.body.author,
    image: req.body.postFile,
    slug: req.body.postSlug,
    content: req.body.postContent,
    status: req.body.postStatus,
  };
  const errors = postValidator.create(postData);
  if (errors.length > 0) {
    const users = await userModel.findAll(["id", "full_name"]);
    return res.render("admin/posts/create", { layout: "admin", users, hasError: errors.length > 0, errors });
  }
  const insertId = await postModel.create(postData);
  if (insertId) {
    res.redirect("/admin/posts");
  }
  // res.send(req.body);
};

exports.remove = async (req, res) => {
  const postId = req.params.postID;
  if (parseInt(postId) === 0) {
    res.redirect("/admin/posts");
  }
  const result = await postModel.delete(postId);
  res.redirect("/admin/posts");
};
