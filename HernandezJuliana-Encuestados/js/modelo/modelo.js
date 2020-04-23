/*
 * Modelo
 */
const Modelo = function() {
  // this.preguntas = JSON.parse(localStorage.getItem('preguntas')) || [];
  this.preguntas = [];
  this.ultimoId = 0;

  //inicializacion de eventos
  this.preguntaAgregadaEvent = new Evento(this);
  this.preguntaEliminadaEvent = new Evento(this);
  this.preguntaEditadaEvent = new Evento(this);
  this.eliminarTodoEvent = new Evento(this);
  this.agregarVotoEvent = new Evento(this);
};

Modelo.prototype = {
  
  getPreguntas: function() {
    this.preguntas = JSON.parse(localStorage.getItem('preguntas')) || [];
    return this.preguntas;
  },
  
  //se obtiene el id más grande asignado a una pregunta
  obtenerUltimoId: function() {
   let ultimoId = -1;
    for (let i = 0; i < this.preguntas.length; i++) {
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
    this.preguntaAgregadaEvent.notificar();
  },

  //se guardan las preguntas
  guardar: function(){
    let preguntasParaGuardar = JSON.stringify(this.preguntas) || "[]";
    localStorage.setItem('preguntas', preguntasParaGuardar);
  },

  borrarPregunta: function(id){
    this.preguntas.splice(id, 1);
    this.guardar();
    this.preguntaEliminadaEvent.notificar();
},

  editarPregunta: function(id, nuevoTexto){
    let preguntaOriginal = JSON.parse(localStorage.getItem('preguntas')).filter(p => p.id == id);
    let nuevaPregunta = preguntaOriginal[0];
    nuevaPregunta.textoPregunta = nuevoTexto;
    this.preguntas.splice(id, 1, nuevaPregunta);
    this.guardar();
    this.preguntaEditadaEvent.notificar();
   },

  borrarTodo: function(){
    this.preguntas = localStorage.setItem('preguntas', []);
    this.guardar();
    this.eliminarTodoEvent.notificar();
  },

  agregarVoto: function(nombrePregunta,respuestaSeleccionada){
    console.log(nombrePregunta,respuestaSeleccionada);
    let preguntaDelLocalStorage = JSON.parse(localStorage.getItem('preguntas'));
    
    let preguntaSeleccionada = preguntaDelLocalStorage.find(p => p.textoPregunta == nombrePregunta);
    
    let respuestaElegida = preguntaSeleccionada.cantidadPorRespuesta
    
    let respuestaParaSumar = respuestaElegida.find(r => r.textoRespuesta == respuestaSeleccionada);
    
    console.log(respuestaParaSumar);
    
    respuestaParaSumar.cantidad+=1;

    console.log(preguntaDelLocalStorage);

    localStorage.setItem("preguntas", JSON.stringify(preguntaDelLocalStorage));
    

    this.agregarVotoEvent.notificar();

  },
}

/*quitarDelStorageUna: function(id){
    let preguntasParseadas = JSON.parse(localStorage.getItem("preguntas"));
    let preguntaABorrar = preguntasParseadas.find((pregunta)=> pregunta.id == id);
    let preguntasActualizadas = preguntasParseadas.filter(function(pregunta){
      return pregunta != preguntaABorrar;
    })
    localStorage.setItem("preguntas", JSON.stringify(preguntasActualizadas));
    agregarVoto: function(nombrePregunta,respuestaSeleccionada){
    console.log(nombrePregunta,respuestaSeleccionada);
    let preguntaDellocalStorage = JSON.parse(localStorage.getItem('preguntas')).filter(p => p.textoPregunta == nombrePregunta);
    
    let preguntaSeleccionada = preguntaDellocalStorage[0];
    
    let respuestaElegida = preguntaSeleccionada.cantidadPorRespuesta.filter(r => r.textoRespuesta == respuestaSeleccionada)
    
    let respuestaParaSumar = respuestaElegida[0];
    console.log(respuestaParaSumar);
    respuestaParaSumar.cantidad++;

    this.agregarVotoEvent.notificar();

  },
    */