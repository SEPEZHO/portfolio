const pool = require("../MysqlCon.js").pool;

const GetCon = app => {
  app.post("/API/RepComViews", function(req, res) {
    pool.getConnection((err, con) => {
      con.query("SELECT * FROM Info", (errora, resultsInf) => {
        result = new Object();
        result.Res = resultsInf;
        con.query("SELECT * FROM `Commits` ORDER BY `Date` DESC ", (errorb, resultsCom) => {
          result.Com = resultsCom;
          con.query("SELECT * FROM `Views`", (errorc, resultsViews) => {
            result.Views = resultsViews[0].Views
            result.Views++;
            con.query("UPDATE `Views` SET `Views`= "+result.Views+ " WHERE "+resultsViews[0].Views+" ", () => {
              res.send(result);
            });
          });
        });
      });
    });
  });
};

module.exports = GetCon;
