const pool = require('../MysqlCon.js').pool;

const GetCon = (app) => {
app.post('/req', function(req, res) {
    pool.getConnection((err, con) => {
        con.query('SELECT * FROM `info`', (error, results) => {
            con.release();
            res.send(results);
        });
    });
});
}

module.exports = GetCon;