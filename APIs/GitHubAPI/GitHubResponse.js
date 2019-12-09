const pool = require("../MysqlCon.js").pool;

const GetCon = app => {
  app.post("/API/RepCom", function(req, res) {
    pool.getConnection((err, con) => {
      con.query("SELECT * FROM Info", (error, resultsInf) => {
        result = new Object();
        result.Res = resultsInf;
        con.query("SELECT * FROM `Commits` ORDER BY `Date` DESC ", (error, resultsCom) => {
          result.Com = resultsCom;
          res.send(result);
        });
      });
    });
  });
};

module.exports = GetCon;

// DELETE FROM Commits WHERE ORDER BY date DESC LIMIT -1 OFFSET 10
// DELETE FROM Commits LIMIT 10 ORDER BY `Date` DESC
// DELETE FROM Commits WHERE date = (ORDER BY `Commits`.`Date` ASC LIMIT -1 OFFSET 10)
// DELETE FROM Commits WHERE date = (SELECT * FROM Commits WHERE ORDER BY `Commits`.`Date` ASC LIMIT -1 OFFSET 10)
