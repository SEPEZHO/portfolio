const https = require("https");
const pool = require("../MysqlCon.js").pool;

let optionsHttps = {
  host: "api.github.com",
  path: "/users/sepezho/repos",
  method: "GET",
  headers: {
    "user-agent": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"
  }
};

let GitHubLastResponse = "";
const GitHubRequestRepos = https.request(optionsHttps, ResEventRepos => {
  let GitHubResponse = "";
  ResEventRepos.on("data", chunk => {
    GitHubResponse += chunk;
  });
  ResEventRepos.on("end", () => {
    if ((GitHubLastResponse != GitHubResponse) && GitHubResponse) {
      GitHubLastResponse = GitHubResponse;
      SqlToRepos(GitHubResponse)
    }
  });
});
GitHubRequestRepos.end();

const SqlToRepos = (GitHubResponse) => {
  pool.getConnection((getConnectionError, con) => {
    con.query("DELETE FROM `Repos`", () => {
      JSON.parse(GitHubResponse).forEach(repo => {
        const optionsHttpsBranch = {
          host: "api.github.com",
          path: "/repos/sepezho/" + repo.name + "/branches",
          method: "GET",
          headers: {
            "user-agent": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"
          }
        };
        const GitHubRequestBranches = https.request(
          optionsHttpsBranch,
          ResBranches => {
            let Branches = "";
            ResBranches.on("data", brunchChunk => {
              Branches += brunchChunk;
            });
            ResBranches.on("end", () => {
                  let sql =
                    "INSERT INTO `Repos` (Name, Branches, Url, Description, Language, CreateAt, LastUpdate, Size) VALUES ('" +
                    repo.name +
                    "', '" +
                    JSON.stringify(JSON.parse(Branches).map(e => e.name)) +
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
        GitHubRequestBranches.end()
      });
    });
  });
}