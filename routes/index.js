const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("../views/index");
});

module.exports = indexRouter;
