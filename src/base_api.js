const mysql = require('mysql');
const https = require('https');

console.log('-----------------------------------------------------');

// connect ot mysql data
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'guthub_proj'
});

// request to gitHub options
const options = {
    host: 'api.github.com',
    path: '/users/sepezho/repos',
    method: 'GET',
    headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)' },
}

let bodyOld = '';

const sendReq = () => {

    // send request to gitHub
    const request = https.request(options, res => {

        // get all request data from git and put it in 'body'
        let body = '';
        res.on('data', chunk => {
            body += chunk;
        });

        // if we have new data ( != data from DB )
        if (bodyOld != JSON.stringify(body)) {
            // bodyOld = JSON.stringify(body);
            // connect to mysql
            con.connect(err => {
                if (err) {
                    console.log('Error ' + err)
                } else {

                    // dell all old data in DB
                    let sql = "DELETE FROM info";
                    con.query(sql, (err, result) => {
                        err ? console.log('Error ' + err) :
                            console.log("All old data was deleted.");
                    })

                    // parce data and put in DB
                    res.on('end', () => {
                        body = JSON.parse(body);
                        body.forEach(repo => {
                            let sql = "INSERT INTO info (name, url, description, language, create_at, last_update, size) VALUES ('" +
                                repo.name + "', '" + repo.html_url + "', '" + repo.description + "', '" + repo.language + "', '" +
                                repo.created_at.substring(0, 10) + "', '" + repo.updated_at.substring(0, 10) + "', '" + repo.size + "')";

                            con.query(sql, (err, result) => {
                                err ? console.log('Error ' + err) :
                                    console.log("One new record.");
                            })
                        })
                    })
                }
            })
            // con.end();
        }else{
            console.log('It alreadey update.');
            request.end();
            return;
        }
    })

    // check err
    request.on('error', e => {
        console.error('Error is: ' + e);
    });

    request.end();
}

// setInterval every 10 minutes
setInterval(sendReq, 600);