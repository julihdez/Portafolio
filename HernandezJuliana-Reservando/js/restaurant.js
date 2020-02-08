var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

//FUNCIONES REFACTORIZADAS

Restaurant.prototype.reservarHorario = function(horarioReservado) {
    let horariosFiltrados = this.horarios.filter(horariosParaFiltrar => horariosParaFiltrar !== horarioReservado);
    this.horarios = horariosFiltrados;
}


Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPuntuacion = function() {
    if(this.calificaciones.length === 0) {
        return 0;
    } else {
            sumatoria(this.calificaciones);
        }
    return promedio(this.calificaciones);
}

//FUNCIONES ORIGINALES

/*Restaurant.prototype.reservarHorario = function(horarioReservado) {
    for (var i = 0; i < this.horarios.length; i++) {
        if (this.horarios[i] === horarioReservado) {
            this.horarios.splice(i, 1);
            return;
        }
    }
}*/

/*Restaurant.prototype.obtenerPuntuacion = function() {
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
        var sumatoria = 0;
        for (var i = 0; i < this.calificaciones.length; i++) {
            sumatoria += this.calificaciones[i]
        }
        var promedio = sumatoria / this.calificaciones.length;
        return Math.round(promedio * 10) / 10;
    }

}*/


    
//FUNCIONES AUXILIARES


function sumatoria(numeros) {
  return numeros.reduce((accum, current) => accum + current);
};

function promedio(numeros) {
    let resultadoPromedio = sumatoria(numeros) / numeros.length;
    return Math.round(resultadoPromedio * 10) / 10;
};





