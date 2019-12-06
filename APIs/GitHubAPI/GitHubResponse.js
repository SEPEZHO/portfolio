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
