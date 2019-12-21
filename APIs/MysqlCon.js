const mysql = require("mysql");
// connect ot mysql data for PC
const optionsMysql = {
<<<<<<< HEAD
  user: "root",
  password: "password123",
  database: "DataBase"
};
=======
    user: "root",
    password: "123",
    database: "DataBase"
}
>>>>>>> master

const pool = mysql.createPool(optionsMysql);

exports.pool = pool;
