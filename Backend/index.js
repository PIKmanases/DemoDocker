var express = require('express');
var bodyParser = require('body-parser');
const mysql = require('mysql');

var app = express();
var port = 3000;

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var connection  = mysql.createPool({
  host     : 'localhost',
  port:33060,
  user     : 'root',
  password : 'password',
  database : 'ejemplo'
});

app.get('/', function(req, res){
    res.status(200).json({msg: "ok"});
  /*connection.query('SELECT * FROM estudiante;', function(err, result){
    if(err) throw err;
    res.status(200).json(result);
  });*/
});

app.listen(port, function(){
	console.log(`Server running in http://localhost:${port}`);
});