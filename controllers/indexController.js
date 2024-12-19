const newDB = require("../db/queries");

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

async function renderHomepage(req, res) {
  const messages = await requestAllMessages();
  res.render("../views/index", { messages: messages });
}

async function requestAllMessages() {
  const messages = await newDB.getAllMessages();
  return messages;
}

async function addMessage(req, res) {
  const userName = req.body.author;
  const newMessage = req.body.message;
  //   db.push({ text: newMessage, user: userName, added: new Date() });
  await newDB.addMessageToDB(userName, newMessage);
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
  const messageToShow = await newDB.viewMessageByID(arrayPosition);
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
