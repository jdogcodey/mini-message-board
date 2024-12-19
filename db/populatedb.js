#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user VARCHAR ( 255 ),
  text VARCHAR ( 255 ), 
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, user) 
VALUES
  ('Amando', 'Hi there!'),
  ('Charles', 'Hi world!');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${user}:${password}@localhost:5432/mini-message`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

module.exports = main;
