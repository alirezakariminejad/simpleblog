const postModel = require("@models/post");
const dateService = require("@services/dateService");

exports.index = async (req, res) => {
  const posts = await postModel.findAll();
  const presentPosts = posts.map((post) => {
    post.created_at_persian = dateService.toPersianDate(post.create_at);
    return post;
  });
  res.render("admin/posts/index", { layout: "admin", posts: presentPosts });
};
