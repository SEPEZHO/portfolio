const express = require('express');
const app = express();
const port = 3001;

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