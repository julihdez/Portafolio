//paquetes necesarios para el proyecto
var express = require('express');//Framework ppal de node
var bodyParser = require('body-parser');//Parsear peticiones POST
var cors = require('cors');//Midleware que otorga permisos para peticiobnes de otros dominios


var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({//se puede modificar para usar express 
    extended: true
}));

app.use(bodyParser.json());

//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
var puerto = '8080';

app.listen(puerto, function () {
  console.log( "Escuchando en el puerto " + puerto );
});

