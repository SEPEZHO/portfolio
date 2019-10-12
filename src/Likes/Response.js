const fs = require('fs')
const srcToFile = './src/Likes/NumLikes.txt';

const ReadFile = () => {
    let number = fs.readFileSync(srcToFile);
    fs.truncate(srcToFile, ()=>{
    	number++;
    	fs.writeFile(srcToFile, number, ()=>{console.log("LIKE")});
    });
}

const GetCon = (app) => {
    app.post('/Likes', function(req, res) {
        ReadFile();    
    })

    app.post('/Likes/Num', function(req, res) {
    	console.log('start')
    	let number = fs.readFileSync(srcToFile);
		res.send(number);
    })
}

module.exports = GetCon;