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

indexRouter.get("/viewmessage/:messageId", (req, res) => {
  const arrayPosition = req.params.messageId;
  const messageToView = messages[arrayPosition];
  const user = messageToView.user;
  const text = messageToView.text;
  const added = messageToView.added;
  res.render("../views/view-message", { user: user, text: text, added: added });
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
indexRouter.get("/", (req, res) => {
  res.render("../views/index", { messages: messages });
});

module.exports = indexRouter;
