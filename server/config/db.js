const mysql = require("mysql");
require("dotenv").config();
let db = mysql.createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "querypop15",
  database: "mydatabase",
});

module.exports = db;
