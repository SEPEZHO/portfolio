const https = require("https");
const pool = require("../MysqlCon.js").pool;

const sendReq = () => {
  pool.getConnection((erra, con) => {
    con.query(
      "SELECT Name FROM `Info` where LastUpdate=(SELECT MAX(LastUpdate) from Info);",
      (err, result) => {
        const optionsHttp = {
          host: "api.github.com",
          path: "/repos/sepezho/" + result[0].Name + "/commits",
          method: "GET",
          headers: {
            "user-agent": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"
          }
        };

        const request = https.request(optionsHttp, res => {
          let body = "";
          res.on("data", chunk => {
            body += chunk;
          });
          res.on("end", () => {
            con.query(
              "SELECT Date FROM Commits where Date=(SELECT MAX(Date) from Commits)",
              (erro, results) => {
                body = JSON.parse(body);
                body.forEach(repo => {
                  if (
                    new Date(repo.commit.author.date) >
                    new Date(results[0].Date)
                  ) {
                    let sql =
                      "INSERT INTO Commits (Project, Message, Date, UrlProj, UrlCommit) VALUES ('" +
                      result[0].Name +
                      "', '" +
                      repo.commit.message +
                      "', '" +
                      repo.commit.author.date.substring(0, 10) +
                      " " +
                      repo.commit.author.date.substring(11).slice(0, -1) +
                      "', 'https://github.com/SEPEZHO/" +
                      result[0].Name +
                      "', '" +
                      repo.html_url +
                      "')";

                    con.query(sql);
                  }
                });
              }
            );
          });
        });
        request.on("error", e => {
          console.error("Request error: " + e);
        });
        request.end();
      }
    );
  });
};

// setInterval every 10 minutes
setInterval(sendReq, 600000);

