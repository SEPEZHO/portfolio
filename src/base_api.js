const express = require('express');
const mysql = require('mysql');
const https = require('https');

console.log('-----------------------------------------------------');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'guthub_proj'
});

con.connect((err) => {
    if (err) {
        console.log('Error ' + err)
    
    } else {
        
        let sql = "DELETE FROM info";
        con.query(sql, (err, result) => {
            err ? console.log('Error ' + err) :
                console.log("All old data was deleted.");
        })

        const options = {
            host: 'api.github.com',
            path: '/users/sepezho/repos',
            method: 'GET',
            headers: { 'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)' }
        }

        const request = https.request(options, res => {
            let body = '';

            res.on('data', chunk => {
                body += chunk;
            });

            res.on('end', () => {
                body = JSON.parse(body);

                body.forEach(repo => {
                    let sql = "INSERT INTO info (name, url, description, language, create_at, last_update, size) VALUES ('" +
                        repo.name + "', '" + repo.html_url + "', '" + repo.description + "', '" + repo.language + "', '"+
                        repo.created_at.substring(0, 10) + "', '" + repo.updated_at.substring(0, 10) + "', '" + repo.size + "')";

                    con.query(sql, (err, result) => {
                        err ? console.log('Error ' + err) :
                            console.log("One new record.");
                    })
                });
            });
        });

        request.on('error', function(e) {
            console.error('Error is: ' + e);
        });

        request.end();
    };
})