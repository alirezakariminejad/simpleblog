const express = require("express");
const app = express();
require("./bootstrap")(app);

app.get("/", (req, res) => {
  res.render("main", { layout: false, userid: 09 });
});

module.exports = () => {
  const port = process.env.APP_PORT;
  app.listen(5000, () => {
    console.log(`app is listening on port ${port}`);
  });
};
