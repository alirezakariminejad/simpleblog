const express = require("express");
const app = express();

module.exports = () => {
  const port = process.env.APP_PORT;
  app.listen(8080, () => {
    console.log(`app is listening on port ${port}`);
  });
};
