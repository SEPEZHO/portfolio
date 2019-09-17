const mysql = require('mysql')
const https = require('https')

// console.log('-----------------------------------------------------');

// request to gitHub options
const optionsHttp = {
    host: 'api.github.com',
    path: '/users/sepezho/repos',
    method: 'GET',
    headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)' }
}

// connect ot mysql data for PC
const optionsMysql = {
    host: "localhost",
    user: "root",
    password: "",
    database: 'guthub_proj'
}

// connect ot mysql data for noteBook
// const optionsMysql = {
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: 'guthub_proj'
// }

const pool = mysql.createPool(optionsMysql)

let bodyOld = ''

const sendReq = () => {

    // send request to gitHub
    const request = https.request(optionsHttp, res => {

        // get all request data from git and put it in 'body'
        let body = '';
        res.on('data', chunk => {
            body += chunk;
        });

        // if we have new data ( != data from DB )
        if (bodyOld != JSON.stringify(body)) {
            bodyOld = JSON.stringify(body);
            // connect to mysql
            pool.getConnection(function(err, con) {
                if (err) {
                    console.log('Error ' + err)
                } else {

                    // dell all old data in DB
                    con.query("DELETE FROM `info`", err => {
                        err ? console.log('Error ' + err) :
                            console.log("All old data was deleted.");
                    });

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
        } else {
            console.log('It alreadey update.');
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
setInterval(sendReq, 600000);