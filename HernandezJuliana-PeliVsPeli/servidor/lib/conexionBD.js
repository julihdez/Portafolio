var mysql = require('mysql');

var conexion = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'Iscar2704',
  database : 'competencias',
});

conexion.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = conexion;