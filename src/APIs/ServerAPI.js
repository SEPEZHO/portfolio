const express = require('express');
const app = express();
const port = 5000;

const LikesFunc = require('./LikesAPI/LikesResponse.js');
const GitHubResponse = require('./GitHubAPI/GitHubResponse.js');
const LastCommitResponse = require('./GitHubAPI/LastCommit/LastCommitResponse.js');
const ChatAPI = require('./ChatAPI/ChatAPI.js');
const ChatAPIRes = require('./ChatAPI/ChatAPIRes.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

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