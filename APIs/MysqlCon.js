const mysql = require('mysql')
// connect ot mysql data for PC
const optionsMysql = {
    // host: "localhost",
    // user: "s55910_DataBase_",
    // password: "j#T_#?0Lk<*J7gA~",
    // database: "s55910_DataBase "
    user: "root",
    password: "123",
    database: "DataBase"
}

const pool = mysql.createPool(optionsMysql)

exports.pool = pool;