const pool = require('../MysqlCon.js').pool;

const GetCon = (app) => {
    app.post('/likes/num', (req, res) => {
        pool.getConnection((err, con) => {
            if (err) {
                console.log('Error ' + err)
            } else {
                con.query("SELECT `AUTO_INCREMENT` FROM  INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME   = 'Likes'", (error, results) => {
                    if (error) {
                        console.log('Error ' + error)
                    } else {
                        let incriment = results[0].AUTO_INCREMENT;
                        res.send({ 'likes': incriment });
                    }
                });
            }
        })
    })

    app.post('/likes', (req, res) => {
        pool.getConnection((err, con) => {
            if (err) {
                console.log('Error ' + err)
            } else {
                let ip = req.connection.remoteAddress;
                con.query("SELECT * FROM Likes WHERE Ip = '" + ip + "'", (error, results, fields) => {
                    if (error) {
                        console.log('Error ' + error)
                    } else if (results.length == 0) {
                        con.query("INSERT INTO Likes (Likes, Ip) VALUES (NULL, '" + ip + "')");
                    }
                });
            }
        })
    })
}
module.exports = GetCon;