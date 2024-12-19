function renderHomepage(req, res) {
  res.render("../views/index", { messages: messages });
}

module.exports = { renderHomepage };
