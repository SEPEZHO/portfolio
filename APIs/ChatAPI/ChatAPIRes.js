const pool = require('../MysqlCon.js').pool;

const Response = (app) => {
app.post('https://api.sepezho.ru/API/Chat/Res', function(req, res) {
    pool.getConnection((err, con) => {
        con.query("SELECT * FROM Comment", (error, results) => {
            // res.send(JSON.stringify(results));
        	res.send(results);
        });
    });
});
}

module.exports = Response;