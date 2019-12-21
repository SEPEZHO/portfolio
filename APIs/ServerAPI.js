<<<<<<< HEAD
const express = require("express");
const https = require("https");
const fs = require("fs");

const app = express();
const port = 7777;

const LikesCatch = require("./FooterApi/LikesCatch.js");
const GitHubResponse = require("./GitHubAPI/GitHubResponse.js");
const ChatAPI = require("./FooterApi/ChatAPI.js");
const FooterApiRes = require("./FooterApi/FooterApiRes.js");
const MailSnd = require("./MailSnd.js");

const privateKey = fs.readFileSync(
  "/home/admin/web/sepezho.ru/public_html/APIs/sslcert/key.key",
  "utf8"
);
const certificate = fs.readFileSync(
  "/home/admin/web/sepezho.ru/public_html/APIs/sslcert/cert.crt",
  "utf8"
);
const credentials = { key: privateKey, cert: certificate };

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
};
app.use(allowCrossDomain);

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log("\n-------------------------------------------");
  console.log(`API server is listening on ${port}`);
  console.log("-------------------------------------------\n");
});

GitHubResponse(app);
LikesCatch(app);
FooterApiRes(app);
ChatAPI(app);
MailSnd(app);
=======
const express = require('express');
const app = express();
const port = 7777;

const LikesFunc = require('./LikesAPI/LikesResponse.js');
const GitHubResponse = require('./GitHubAPI/GitHubResponse.js');
const LastCommitResponse = require('./GitHubAPI/LastCommit/LastCommitResponse.js');
const ChatAPI = require('./ChatAPI/ChatAPI.js');
const ChatAPIRes = require('./ChatAPI/ChatAPIRes.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

GitHubResponse(app);
LikesFunc(app);
LastCommitResponse(app);
ChatAPIRes(app);
ChatAPI(app);

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log('\n-------------------------------------------');
    console.log(`API server is listening on ${port}`)
    console.log('-------------------------------------------\n');
})
>>>>>>> master
