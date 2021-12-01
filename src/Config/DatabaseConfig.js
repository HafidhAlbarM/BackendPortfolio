const Knex = require("knex");
require("dotenv").config();

const knex = Knex({
  client: "pg",
  connection: {
    host: process.env.DATABSE_HOST,
    user: process.env.DATABASE_USERAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
});

module.exports = knex;
