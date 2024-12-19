const db = require("../db/queries");

async function renderHomepage(req, res) {
  const messages = await requestAllMessages();
  res.render("../views/index", { messages: messages });
}

async function requestAllMessages() {
  const messages = await db.getAllMessages();
  return messages;
}

async function addMessage(req, res) {
  const userName = req.body.author;
  const newMessage = req.body.message;
  //   db.push({ text: newMessage, user: userName, added: new Date() });
  await db.addMessageToDB(userName, newMessage);
  res.redirect("/");
}

function renderNew(req, res) {
  res.render("../views/form");
}

async function viewMessage(req, res) {
  const arrayPosition = req.params.messageId;
  //   const messageToView = db[arrayPosition];
  //   const user = messageToView.user;
  //   const text = messageToView.text;
  //   const added = messageToView.added;
  const messageToShow = await db.viewMessageByID(arrayPosition);
  const user = messageToShow[0].user;
  const text = messageToShow[0].text;
  const added = messageToShow[0].added;
  res.render("../views/view-message", { user: user, text: text, added: added });
}

module.exports = {
  renderHomepage,
  addMessage,
  renderNew,
  viewMessage,
};
