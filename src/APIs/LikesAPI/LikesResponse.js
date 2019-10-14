const fs = require('fs')
const srcToFile = './src/APIs/LikesAPI/NumLikes.txt';

const ReadFile = () => {
    let number = fs.readFileSync(srcToFile);
    fs.truncate(srcToFile, ()=>{
    	number++;
    	fs.writeFile(srcToFile, number, ()=>{});
    });
}

const GetCon = (app) => {
    app.post('/likes/num', function(req, res) {
        let number = fs.readFileSync(srcToFile);
        res.send(number);
    })

    app.post('/likes', function(req, res) {
        ReadFile();    
    })
}

module.exports = GetCon;