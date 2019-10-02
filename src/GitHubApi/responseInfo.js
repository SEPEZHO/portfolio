const express = require('express')
const app = express()
const port = 3001
const pool = require('./MysqlCon.js').pool;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/req', function(req, res) {

    pool.getConnection((err, con) => {
        if (err) console.log('Err: ' + err); // not connected!

        // Use the connection
        con.query('SELECT * FROM `info`', (error, results) => {
            if (error) console.log('Err: ' + error); // not connected!
            con.release();
            res.send(results);
        });
    });
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log('\n-------------------------------------------');
    console.log(`API server is listening on ${port}`)
    console.log('-------------------------------------------\n');
})