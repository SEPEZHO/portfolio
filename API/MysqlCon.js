const mysql = require("mysql");
// connect ot mysql data for PC
const optionsMysql = {
  user: "MYLOGIN",
  password: "MYPASS",
  database: "DataBase"
};

const pool = mysql.createPool(optionsMysql);

exports.pool = pool;
