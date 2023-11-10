const Pool = require("pg").Pool

const pool = new Pool({
  user: "postgres",
  password: "",
  host: "localhost",
  port: 5432,
  database: "my_bookshop"
})

module.exports = pool;

//need to update password before commit