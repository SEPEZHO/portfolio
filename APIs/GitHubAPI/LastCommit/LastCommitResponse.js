const pool = require("../../MysqlCon.js").pool;

const LastCommitResponse = app => {
  app.post("/API/Commits", function(req, res) {
    pool.getConnection((err, con) => {
      con.query("SELECT * FROM `Commits` ORDER BY `Date` DESC", (error, results) => {
        res.send(results);
      });
    });
  });
};

module.exports = LastCommitResponse;
