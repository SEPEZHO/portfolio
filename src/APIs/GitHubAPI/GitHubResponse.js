const pool = require('../MysqlCon.js').pool;

const GetCon = (app) => {
app.post('/API/Ropsitories', function(req, res) {
    pool.getConnection((err, con) => {
        con.query('SELECT * FROM Info', (error, results) => {
            con.release();
            res.send(results);
        });
    });
});
}

module.exports = GetCon;