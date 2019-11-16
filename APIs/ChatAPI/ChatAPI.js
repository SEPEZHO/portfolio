const pool = require('../MysqlCon.js').pool;

const Chat = (app) => {
app.post('/API/Chat', function(req, res) {

	let date = new Date();
	let day = date.getMonth()+1;
	let dateAll = date.getFullYear() + '-' + day + '-' + date.getDate();
	let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
	dateAll = dateAll + ' ' + time;

    pool.getConnection((err, con) => {
        con.query("INSERT INTO Comment (Id, Date, Message, Name) VALUES (NULL, '"+ dateAll +"', '"+ req.body.valMessage +"', '"+ req.body.valName+"')");
    });
});
}

module.exports = Chat;