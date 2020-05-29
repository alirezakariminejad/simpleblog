const postModel = require("@models/post");
const jmoment = require("jalali-moment");

exports.index = async (req, res) => {
  const posts = await postModel.findAll();
  const presentPosts = posts.map((post) => {
    post.created_at_persian = jmoment(post.create_at).locale("fa").format("YYYY/MM/DD");
    return post;
  });
  res.render("admin/posts/index", { layout: "admin", posts: presentPosts });
};
