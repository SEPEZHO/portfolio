const mysql = require("mysql");
// connect ot mysql data for PC
const optionsMysql = {
  user: "admin",
  password: "PASS",
  database: "DataBase"
};

const pool = mysql.createPool(optionsMysql);

exports.pool = pool;
