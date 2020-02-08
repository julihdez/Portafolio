
//Funcion constructora de nuestro Objeto Cancha
var Cancha = function(tipoDeCancha, tipo, cantidadL1, cantidadL2, cantidadL3){
    this.tipoDeCancha = tipoDeCancha;
    //Se llama al Objeto Iluminación que será parte de nuestra cancha
    Iluminacion.call(this, tipo, cantidadL1, cantidadL2, cantidadL3)

}

// Heredar prototype de Iluminicaión

//  *COMPLETAR*

//Se declara el método preparar cancha q será el encargado de encender las luces al momento
//en que la invoquemos.
Cancha.prototype.preparaCancha = function(){
    this.arranque = encender(true, true, true)
    this.arranque();
}