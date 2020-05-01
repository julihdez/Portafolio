//paquetes necesarios para el proyecto
const express = require('express');
//Se instala corriendo en la consola "npm install express --save"

// var bodyParser = require('body-parser'); Esto esta obsoleto. La funcion fue absorbida por express.

const cors = require('cors');
//Se instala corriendo en la consola "npm install cors --save"

const app = express();

//Se referencia al controlador como indica la guia.
const controlador = require('./controladores/controlador');

app.use(cors());

/*app.use(bodyParser.urlencoded({//se puede modificar para usar express 
    extended: true
}));

app.use(bodyParser.json());*/

app.get('/peliculas?', controlador.traerTodasLasPeliculas);
app.get('/generos', controlador.traerTodosLosGeneros);

//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
var puerto = '8080';

app.listen(puerto, function () {
  console.log( "Escuchando en el puerto " + puerto );
});

