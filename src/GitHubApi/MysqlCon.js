const mysql = require('mysql')
// connect ot mysql data for PC
const optionsMysql = {
    host: "localhost",
    user: "root",
    password: "",
    database: 'GitHubProj'
}

const pool = mysql.createPool(optionsMysql)

exports.pool = pool;