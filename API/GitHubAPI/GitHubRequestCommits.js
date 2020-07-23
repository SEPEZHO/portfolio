const https = require("https");
const pool = require("../MysqlCon.js").pool;

const SqlToCommits = (body, name, con, branch) => {
  let sqlAddRow =
    "INSERT INTO Commits (Project, Branch, Date, Message, UrlProj, UrlCommit) VALUES ('" +
    name +
    "', '" +
    branch +
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
  // let sqlDelRow =
    // "DELETE FROM Commits WHERE Date IN ( SELECT Date FROM ( SELECT Date FROM Commits ORDER BY `Date` ASC LIMIT 1 ) a )";
  con.query(sqlAddRow);
  // con.query(sqlDelRow);
};


const GitHubRequest = (LastDateOfCommit, con, LastUpdatedRepo, branch) => {
  let optionsHttps = {
    host: "api.github.com",
    path: "/repos/sepezho/" + LastUpdatedRepo[0].Name + "/commits/" + branch,
    method: "GET",
    headers: {
      "user-agent": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"
    }
  }
  const GitHubHttpsRequest = https.request(optionsHttps, ResCommits => {
    let CommitFromBranchStr = "";
    ResCommits.on("data", chunk => {
      CommitFromBranchStr += chunk;
    });
    ResCommits.on("end", () => {
      CommitFromBranchArr = JSON.parse(CommitFromBranchStr)
      let dateOfCommit = CommitFromBranchArr.commit.committer.date;
      let interval = setInterval(() => {
        if (CommitFromBranchArr.parents.length != 0) {
          optionsHttps.path =
            "/repos/sepezho/" +
            LastUpdatedRepo[0].Name +
            "/commits/" +
            CommitFromBranchArr.parents[0].sha;

          if (new Date(dateOfCommit) > new Date(LastDateOfCommit[0].Date)) {
            SqlToCommits(
              CommitFromBranchArr,
              LastUpdatedRepo[0].Name,
              con,
              branch
            );
            let request = https.request(optionsHttps, res => {
              let body = "";
              res.on("data", chunk => {
                body += chunk;
              });
              res.on("end", () => {
                CommitFromBranchArr = JSON.parse(body)
                if (CommitFromBranchArr.parents.length != 0) {
                  optionsHttps.path =
                    "/repos/sepezho/" +
                    LastUpdatedRepo[0].Name +
                    "/commits/" +
                    CommitFromBranchArr.parents[0].sha;
                  dateOfCommit = JSON.parse(body).commit.author.date;
                }
              });
            });
            request.end();
          } else {
            clearInterval(interval);
            return;
          }
        } else {
          if (new Date(dateOfCommit) > new Date(LastDateOfCommit[0].Date)) {
            SqlToCommits(
              CommitFromBranchArr,
              LastUpdatedRepo[0].Name,
              con,
              branch
            );
            clearInterval(interval);
            return;
          }
        }
      }, 1000);
    });
  });
  GitHubHttpsRequest.end();
}

pool.getConnection((getConnectionErr, con) => {
  con.query(
    "SELECT * FROM `Repos` where LastUpdate=(SELECT MAX(LastUpdate) from Repos);",
    (ReposErr, LastUpdatedRepo) => {
      JSON.parse(LastUpdatedRepo[0].Branches).forEach(branch => {
        con.query(
          "SELECT * FROM Commits where Date=(SELECT MAX(Date) from Commits)",
          (CommitsErr, LastDateOfCommit) => {
            GitHubRequest(LastDateOfCommit, con, LastUpdatedRepo, branch)
          }
        );
      });
    }
  );
})