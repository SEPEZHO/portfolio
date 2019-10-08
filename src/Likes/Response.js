const fs = require('fs')

const ReadFile = () => {
    let data = fs.readFileSync('a.txt');
    console.log('U liked '+data+' times');
}

const GetCon = (app) => {
    app.post('/Likes', function(req, res) {
        ReadFile();    
    })
}

module.exports = GetCon;