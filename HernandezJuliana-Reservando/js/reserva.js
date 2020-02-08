var Reserva = function(horarioReserva, cantidadDePersonas, precioPorPersona, codigoDeDescuento) {
    this.horarioReserva = horarioReserva;
    this.cantidadDePersonas = cantidadDePersonas;
    this.precioPorPersona = precioPorPersona;
    this.codigoDeDescuento = codigoDeDescuento;
}



Reserva.prototype.obtenerPrecioBase = function(){
   return precioBase = this.cantidadDePersonas * this.precioPorPersona;
    
}

Reserva.prototype.obtenerPrecioFinal = function(){
    return this.obtenerPrecioBase() + this.sumandoAdicionales() - this.calculandoDescuento();
}


Reserva.prototype.calculandoDescuento = function() {

    let descuentos;
    
    if (this.cantidadDePersonas >= 4 && this.cantidadDePersonas <= 6) {
            descuentos = this.obtenerPrecioBase() * 0,05;
    } 
    
    else if (this.cantidadDePersonas >= 7 && this.cantidadDePersonas <= 8) {
        descuentos = this.obtenerPrecioBase() * 0,10;
    }
    
    else if(this.cantidadDePersonas > 8) {
        descuentos = this.obtenerPrecioBase() * 0,15;
    } 

    else if (this.codigoDeDescuento === "DES15") {
        descuentos = this.obtenerPrecioBase() * 0,15;
    }

    else if (this.codigoDeDescuento === "DES200") {
       descuentos = 200; 
    }

    else if (this.codigoDeDescuento === "DES1") {
        descuentos = this.precioPorPersona;
    }

    else {
        return 0;
    }

    return descuentos
}    


Reserva.prototype.sumandoAdicionales = function() {

    let adicionales;

   if (this.horarioReserva.getHours() === 13 || this.horarioReserva.getHours() === 14 || this.horarioReserva.getHours() === 20 || this.horarioReserva.getHours() === 21 ) {
       adicionales = this.obtenerPrecioBase() * 0,05; 
       return adicionales;
   }
   
   if (this.horarioReserva.getDay() === 0 || this.horarioReserva.getDay() === 5 || this.horarioReserva.getDay() === 6){
       adicionales = this.obtenerPrecioBase() * 0,1;
       return adicionales
   }

   else {
       return 0;
   }

   
}

