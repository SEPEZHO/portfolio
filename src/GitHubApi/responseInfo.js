const express = require('express')
const app = express()
const port = 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/req', function(req, res){
    const name = req.body.user.name;
    res.send(req.body)
    console.log(req.body);
});

app.get('/', function(req, res) {
  res.send('Hello world!');
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log('-------------------------------------------');
    console.log(`server is listening on ${port}`)
    console.log('-------------------------------------------');
})