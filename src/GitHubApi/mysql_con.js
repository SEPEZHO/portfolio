const mysql = require('mysql')
// connect ot mysql data for PC
const optionsMysql = {
    host: "localhost",
    user: "root",
    password: "123456",
    database: 'gitHub_proj'
}

const pool = mysql.createPool(optionsMysql)

exports.pool = pool;