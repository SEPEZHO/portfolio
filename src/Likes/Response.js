const fs = require('fs')
const srcToFile = './src/Likes/NumLikes.txt';

const ReadFile = () => {
    let number = fs.readFileSync(srcToFile);
    fs.truncate(srcToFile, ()=>{
    	number++;
    	fs.writeFile(srcToFile, number, () => {
		    console.log('U liked '+number+' times');
		}); 	
    });
}

const GetCon = (app) => {
    app.post('/Likes', function(req, res) {
        ReadFile();    
    })
}

module.exports = GetCon;