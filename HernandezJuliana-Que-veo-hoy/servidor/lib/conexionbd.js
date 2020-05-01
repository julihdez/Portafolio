const mysql = require('mysql');

var conexion = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'Iscar2704',
  database : 'que_veo_hoy',
});

module.exports = conexion;

