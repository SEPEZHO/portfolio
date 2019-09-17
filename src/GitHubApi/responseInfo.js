const express = require('express')
const app = express()
export default function response(){
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post("/", (req, res) =>{
    console.log(req.body.user.name);
    const name = JSON.stringify(req.body.user.name);
    res.send(name)
})
}

