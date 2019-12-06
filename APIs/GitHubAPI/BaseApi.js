const https = require("https");
const pool = require("../MysqlCon.js").pool;

// request to gitHub options
const optionsHttp = {
  host: "api.github.com",
  path: "/users/sepezho/repos",
  method: "GET",
  headers: {
    "user-agent": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"
  }
};

let bodyOld = "";

const sendReq = () => {
  // send request to gitHub
  const request = https.request(optionsHttp, res => {
    // get all request data from git and put it in 'body'
    let body = "";
    res.on("data", chunk => {
      body += chunk;
    });

    // if we have new data ( != data from DB )
    if (bodyOld != JSON.stringify(body)) {
      bodyOld = JSON.stringify(body);

      // connect to mysql
      pool.getConnection((err, con) => {
        if (err) {
          console.log("Error " + err);
        } else {
          // dell all old data in DB
          con.query("DELETE FROM Info", err => {
            err
              ? console.log("Error " + err)
              : console.log("All old data was deleted.");
          });

          // parce data and put in DB
          res.on("end", () => {
            body = JSON.parse(body);
            body.forEach(repo => {
              let sql =
                "INSERT INTO Info (Name, Url, Description, Language, CreateAt, LastUpdate, Size) VALUES ('" +
                repo.name +
                "', '" +
                repo.html_url +
                "', '" +
                repo.description +
                "', '" +
                repo.language +
                "', '" +
                repo.created_at.substring(0, 10) +
                " " +
                repo.created_at.substring(11).slice(0, -1) +
                "', '" +
                repo.updated_at.substring(0, 10) +
                " " +
                repo.updated_at.substring(11).slice(0, -1) +
                "', '" +
                repo.size +
                "')";

              con.query(sql, (err, result) => {
                err
                  ? console.log("Error " + err)
                  : console.log("One new record.");
              });
            });
          });
        }
      });
    } else {
      console.log("It alreadey update.");
      return;
    }
  });

  // check err
  request.on("error", e => {
    console.error("Error is: " + e);
  });
  request.end();
};

// setInterval every 10 minutes
setInterval(sendReq, 600000);