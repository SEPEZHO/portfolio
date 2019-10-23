const pool = require('../../MysqlCon.js').pool;

const LastCommitResponse = (app) => {
app.post('/API/Commits', function(req, res) {
    pool.getConnection((err, con) => {
        con.query('SELECT * FROM Commits', (error, results) => {
            con.release();
            res.send(results);
        });
    });
});
}

module.exports = LastCommitResponse;