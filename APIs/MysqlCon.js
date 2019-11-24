const mysql = require('mysql')
// connect ot mysql data for PC
const optionsMysql = {
    user: "root",
    password: "123",
    database: "DataBase"
}

const pool = mysql.createPool(optionsMysql)

exports.pool = pool;