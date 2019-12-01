const pool = require("../MysqlCon.js").pool;

const Response = app => {
  app.post("/API/ChatLikes", function(req, res) {
    pool.getConnection((err, con) => {
      con.query("SELECT * FROM Comment", (error, resultsChat) => {
        pool.getConnection((err, con) => {
          result = new Object();
          result.Chat = resultsChat;
          con.query(
            "SELECT `AUTO_INCREMENT` FROM  INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME   = 'Likes'",
            (error, resultsLikes) => {
              let ip = req.connection.remoteAddress;
              let incriment = resultsLikes[0].AUTO_INCREMENT;
              incriment--;
              con.query(
                "SELECT * FROM Likes WHERE Ip = '" + ip + "'",
                (errorB, resultsLikesB) => {
                  let IsLiked = resultsLikesB.length == 0 ? false : true;
                  result.Likes = incriment;
                  result.IsLiked = IsLiked;
                  res.send(result);
                }
              );
            }
          );
        });
      });
    });
  });
};

module.exports = Response;
