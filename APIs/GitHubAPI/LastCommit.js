const https = require("https");
const pool = require("../MysqlCon.js").pool;

const sendReq = () => {
  pool.getConnection((erra, con) => {
    con.query(
      "SELECT * FROM `Info` where LastUpdate=(SELECT MAX(LastUpdate) from Info);",
      (err, result) => {
        JSON.parse(result[0].Branches).forEach(branch => {
          con.query(
            "SELECT Date FROM Commits where Date=(SELECT MAX(Date) from Commits)",
            (erro, results) => {
              let branchOld = branch;
              let commiterDate = "9999-12-28 00:00:00";

              let interval = setInterval(() => {
                if (new Date(commiterDate) > new Date("2019-09-08 00:00:00")) {
                  let optionsHttp = {
                    host: "api.github.com",
                    path:
                      "/repos/sepezho/" + result[0].Name + "/commits/" + branch,
                    method: "GET",
                    headers: {
                      "user-agent":
                        "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"
                    }
                  };

                  let request = https.request(optionsHttp, res => {
                    let body = "";
                    res.on("data", chunk => {
                      body += chunk;
                    });
                    res.on("end", () => {
                      sql(JSON.parse(body), result[0].Name, con, branchOld);
                      branch = JSON.parse(body).parents[0].sha;
                      commiterDate = JSON.parse(body).committer.author.date;
                      console.log("Path = " + JSON.parse(body).parents[0].sha);
                    });
                  });
                  request.on("error", e => {
                    console.error("Request error: " + e);
                  });
                  request.end();
                } else {
                  clearInterval(interval);
                }
              }, 10000);
            }
          );
        });
      }
    );
  });
};

const sql = (body, name, con, branchOld) => {
  let sql =
    "INSERT INTO Commits (Project, Branch, Date, Message, UrlProj, UrlCommit) VALUES ('" +
    name +
    "', '" +
    branchOld +
    "', '" +
    body.committer.author.date.substring(0, 10) +
    " " +
    body.committer.author.date.substring(11).slice(0, -1) +
    "', '" +
    body.commit.message +
    "', 'https://github.com/SEPEZHO/" +
    name +
    "', '" +
    body.html_url +
    "')";

  con.query(sql);
};

// setInterval(sendReq, 600000);
sendReq();
