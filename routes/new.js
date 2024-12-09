const { Router } = require("express");

const newRouter = Router();

newRouter.get("/new", (req, res) => {
  res.render("../views/new.ejs");
});
