const https = require("https");
const pool = require("../MysqlCon.js").pool;

const optionsHttps = {
  host: "api.github.com",
  path: "/users/sepezho/repos",
  method: "GET",
  headers: {
    "user-agent": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"
  }
};

let bodyOld = "";

const sendReq = () => {
  const request = https.request(optionsHttps, res => {
    let body = "";
    res.on("data", chunk => {
      body += chunk;
    });

    res.on("end", () => {
      if (bodyOld != body) {
        bodyOld = body;

        pool.getConnection((err, con) => {
          con.query("DELETE FROM Info", () => {
            JSON.parse(body).forEach(repo => {
              const optionsHttpsBranch = {
                host: "api.github.com",
                path: "/repos/sepezho/" + repo.name + "/branches",
                method: "GET",
                headers: {
                  "user-agent":
                    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"
                }
              };

              const requestBranch = https.request(
                optionsHttpsBranch,
                responseBranch => {
                  let bodyBranch = "";
                  responseBranch.on("data", chunka => {
                    bodyBranch += chunka;
                  });
                  responseBranch.on("end", () => {
                    branchesArr = new Array();

                    JSON.parse(bodyBranch).forEach(repoa => {
                      branchesArr.push(repoa.name);
                    });
                    let sql =
                      "INSERT INTO Info (Name, Branches, Url, Description, Language, CreateAt, LastUpdate, Size) VALUES ('" +
                      repo.name +
                      "', '" +
                      JSON.stringify(branchesArr) +
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

                    con.query(sql);
                  });
                }
              );

              requestBranch.on("error", e => {
                console.error("Error is: " + e);
              });
              requestBranch.end();
            });
          });
        });
      }
    });
  });
  request.on("error", e => {
    console.error("Error is: " + e);
  });
  request.end();
};

setInterval(sendReq, 600000);
