/*
 * Vista administrador
 */
var VistaAdministrador = function(modelo, controlador, elementos) {
  this.modelo = modelo;
  this.controlador = controlador;
  this.elementos = elementos;
  var contexto = this;

  // suscripción de observadores
  this.modelo.preguntaAgregada.suscribir(function() {
    contexto.reconstruirLista();
  });

  this.modelo.preguntaEliminada.suscribir(function() {
    contexto.reconstruirLista();
  }); 

  this.modelo.eliminarTodo.suscribir(function() {
    contexto.reconstruirLista();
  }); 

  //this.modelo.preguntasGuardadas.suscribir(function() {
  //  contexto.reconstruirLista();
  //});

  this.modelo.preguntaEditada.suscribir(function() {
    contexto.reconstruirLista();
  }); 
};


VistaAdministrador.prototype = {
  //lista
  inicializar: function() {
   
    //llamar a los metodos para reconstruir la lista, configurar botones y validar formularios
    validacionDeFormulario(); 
    this.configuracionDeBotones();
    this.reconstruirLista();
  },

  construirElementoPregunta: function(pregunta){
    //let contexto = this;
    let nuevoItem = $(`<li class= "list-group-item" id="${pregunta.id}"> ${pregunta.textoPregunta} </li>`)
    //$(`<li class= "list-group-item" id="${pregunta.id}"> ${pregunta.textoPregunta} </li>`)
    //$(<li></li>.addClass("list-group-item").attr("id", pregunta.id) JQUERY 
    //asignar a nuevoitem un elemento li con clase "list-group-item", id "pregunta.id" y texto "pregunta.textoPregunta"
    //nuevo

    var interiorItem = $('.d-flex');
    var titulo = interiorItem.find('h5');
    titulo.text(pregunta.textoPregunta);
    interiorItem.find('small').text(pregunta.cantidadPorRespuesta.map(function(resp){
      return " " + resp.textoRespuesta;
    }));
    nuevoItem.html($('.d-flex').html());
    return nuevoItem;
  },

  reconstruirLista: function() {
    let lista = this.elementos.lista;
    lista.html('');
    let preguntas = this.modelo.getPreguntas();
    for (var i=0;i<preguntas.length;++i){
      lista.append(this.construirElementoPregunta(preguntas[i]));
    }
  } ,

  configuracionDeBotones: function(){
    let e = this.elementos;
    let contexto = this;

    //asociacion de eventos a boton
    e.botonAgregarPregunta.click(function() {
      let value = e.pregunta.val();
      let respuestas = [];

      $('[name="option[]"]').each(function() {
      respuesta = $(this).val();
      respuestas.push({textoRespuesta: respuesta, cantidad: 0});
      });
      contexto.limpiarFormulario();
      contexto.controlador.agregarPregunta(value, respuestas);
    });
    //asociar el resto de los botones a eventos

    e.botonBorrarPregunta.click(function(){
      let id = parseInt($('.list-group-item.active').attr('id'));
      contexto.limpiarFormulario();
      contexto.controlador.borrarPregunta(id);
     
    }); 
    
    e.borrarTodo.click(function(){
      contexto.controlador.borrarTodo();
      
    }); 

    e.botonEditarPregunta.click(function(){
      let id = parseInt($('.list-group-item.active').attr('id'));
      let nuevoTexto = prompt("Edita tu pregunta");
      contexto.controlador.editarPregunta(id, nuevoTexto);
      
     
    }); 

  },

  limpiarFormulario: function(){
    $('.form-group.answer.has-feedback.has-success').remove();
  },
};
