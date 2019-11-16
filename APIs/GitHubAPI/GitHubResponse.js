const pool = require('../MysqlCon.js').pool;

const GetCon = (app) => {
app.post('/API/Repositories', function(req, res) {
    pool.getConnection((err, con) => {
        con.query('SELECT * FROM Info', (error, results) => {
            // res.send(JSON.stringify(results));
            res.send(results);
        });
    });
});
}

module.exports = GetCon;