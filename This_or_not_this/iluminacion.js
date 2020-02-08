//damos de alta un Objeto que va a manejar la iluminación

var Iluminacion = function (tipo, cantidadL1, cantidadL2, cantidadL3) {
    //Tipo de iluminación - alógena, led, fluorecente
    this.tipo = tipo;

    //Puede manejar hasta 3 líneas de iluminación sin importar la cantidad de luces por línea
    this.cantidadLinea1 = cantidadL1;
    this.cantidadLinea2 = cantidadL2;
    this.cantidadLinea3 = cantidadL3;

    //Estado de cada línea
    this.estadoL1 = "Off";
    this.estadoL2 = "On";
    this.estadoL3 = "Off";
}

//Se declaran los métodos 

