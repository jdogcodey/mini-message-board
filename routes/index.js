const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("../views/index", { messages: messages });
});
indexRouter.get("/new", (req, res) => {
  res.render("../views/form");
});
indexRouter.post("/new", (req, res) => {
  const userName = req.body.author;
  const newMessage = req.body.message;
  messages.push({ text: newMessage, user: userName, added: new Date() });
  res.redirect("/");
});

module.exports = indexRouter;
