/*
 * Modelo
 */
var Modelo = function() {
  this.preguntas = [];
  this.ultimoId = 0;

  //inicializacion de eventos
  this.preguntaAgregada = new Evento(this);
  this.preguntaEliminada = new Evento(this);
  this.eliminarTodo = new Evento(this);
  //this.preguntasGuardadas = new Evento(this);
  this.preguntaEditada = new Evento(this);
};

Modelo.prototype = {
  //se obtiene el id más grande asignado a una pregunta

  getPreguntas: function() {
    if (localStorage != null) {
      this.preguntas = JSON.parse(localStorage.getItem('preguntasAlmacenadas'));
    } else {
      this.preguntas = [];
    }
    return this.preguntas;
  },
 
  obtenerUltimoId: function () {
    
    ultimoId = -1;
    for (var i = 0; i < this.preguntas.length; i++) {
        if (this.preguntas[i].id > ultimoId) {
            ultimoId = this.preguntas[i].id;
        }
    }
    return ultimoId;

},

  //se agrega una pregunta dado un nombre y sus respuestas
  agregarPregunta: function(nombre, respuestas) {
    let id = this.obtenerUltimoId();
    id++;
    let nuevaPregunta = {'textoPregunta': nombre, 'id': id, 'cantidadPorRespuesta': respuestas};
    this.preguntas.push(nuevaPregunta);
    this.guardar();
    this.preguntaAgregada.notificar();
  },

  //se guardan las preguntas
  guardar: function(){
    let preguntasParaGuardar = JSON.stringify(this.preguntas);
    localStorage.setItem("preguntasAlmacenadas", preguntasParaGuardar);
    //this.preguntasGuardadas.notificar();
  },

  borrarPregunta: function(id) {
    this.preguntas.splice(id, 1);
    this.guardar();
    this.preguntaEliminada.notificar();
  },
    
    

  borrarTodo: function() {
    this.preguntas = localStorage.setItem("preguntasAlmacenadas", []);
    this.guardar();
    this.eliminarTodo.notificar();
  },

  editarPregunta: function(id, nuevoTexto) {
    this.preguntas.splice(id, 1, nuevoTexto);
    this.guardar();
    this.preguntaEditada.notificar();


  }


};