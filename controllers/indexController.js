const db = [
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

function renderHomepage(req, res) {
  res.render("../views/index", { messages: db });
}

function addUser(req, res) {
  const userName = req.body.author;
  const newMessage = req.body.message;
  db.push({ text: newMessage, user: userName, added: new Date() });
  res.redirect("/");
}

function renderNew(req, res) {
  res.render("../views/form");
}

function viewMessage(req, res) {
  const arrayPosition = req.params.messageId;
  const messageToView = db[arrayPosition];
  const user = messageToView.user;
  const text = messageToView.text;
  const added = messageToView.added;
  res.render("../views/view-message", { user: user, text: text, added: added });
}

module.exports = { renderHomepage, addUser, renderNew, viewMessage };
