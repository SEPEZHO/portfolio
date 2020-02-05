const https = require("https");
const pool = require("../MysqlCon.js").pool;

const sendReq = () => {
  pool.getConnection((erra, con) => {
    con.query(
      "SELECT * FROM `Info` where LastUpdate=(SELECT MAX(LastUpdate) from Info);",
      (err, result) => {
        JSON.parse(result[0].Branches).forEach(branch => {
          con.query(
            "SELECT * FROM Commits where Date=(SELECT MAX(Date) from Commits)",
            (erro, results) => {
              let branchOld = branch;

              let optionsHttp = {
                host: "api.github.com",
                path: "/repos/sepezho/" + result[0].Name + "/commits/" + branch,
                method: "GET",
                headers: {
                  "user-agent":
                    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"
                }
              };

              let requestBegin = https.request(optionsHttp, resBegin => {
                let bodyBegin = "";

                resBegin.on("data", chunk => {
                  bodyBegin += chunk;
                });

                resBegin.on("end", () => {
                  let commiterDate = JSON.parse(bodyBegin).commit.author.date;
                  if (JSON.parse(bodyBegin).parents[0].sha){
                  optionsHttp.path =
                    "/repos/sepezho/" +
                    result[0].Name +
                    "/commits/" +
                    JSON.parse(bodyBegin).parents[0].sha;

                  let interval = setInterval(() => {
                    if (new Date(commiterDate) > new Date(results[0].Date)) {
                      sql(
                        JSON.parse(bodyBegin),
                        result[0].Name,
                        con,
                        branchOld
                      );
                      let request = https.request(optionsHttp, res => {
                        let body = "";
                        res.on("data", chunk => {
                          body += chunk;
                        });
                        res.on("end", () => {
                          bodyBegin = body;
                          optionsHttp.path =
                            "/repos/sepezho/" +
                            result[0].Name +
                            "/commits/" +
                            JSON.parse(body).parents[0].sha;
                          commiterDate = JSON.parse(body).commit.author.date;
                        });
                      });
                      request.on("error", e => {
                        console.error("Request error: " + e);
                      });
                      request.end();
                    } else {
                      clearInterval(interval);
                      return;
                    }
                  }, 1000);
                }
                });
              });
              requestBegin.on("error", e => {
                console.error("Request error: " + e);
              });
              requestBegin.end();
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
    body.commit.author.date.substring(0, 10) +
    " " +
    body.commit.author.date.substring(11).slice(0, -1) +
    "', '" +
    body.commit.message +
    "', 'https://github.com/SEPEZHO/" +
    name +
    "', '" +
    body.html_url +
    "')";
  let sqlDel =
    "DELETE FROM Commits WHERE Date IN ( SELECT Date FROM ( SELECT Date FROM Commits ORDER BY `Date` ASC LIMIT 1 ) a )";

  con.query(sql);
  con.query(sqlDel);
};

setInterval(sendReq, 600000);
