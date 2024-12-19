const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages;");
  return rows;
}

async function addMessageToDB(user, text) {
  await pool.query(`INSERT INTO messages ("user", text) VALUES ($1, $2)`, [
    user,
    text,
  ]);
}

module.exports = { getAllMessages, addMessageToDB };
