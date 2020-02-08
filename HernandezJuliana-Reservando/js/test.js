var expect = chai.expect;


describe('Testeando la clase Restaurante', function(){
    let restaurantePrueba = new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [1, 2, 3, 4, 5]);
    
	it('Reservar un horario existente - Eliminar un horario del array de horarios',function(){
       restaurantePrueba.reservarHorario("21:00");
		expect(restaurantePrueba.horarios).to.include("22:30", "15:00").but.not.include("21:00");
    })
    
	it('Reservar un horario inexistente - El arreglo se mantiene igual',function(){
        restaurantePrueba.reservarHorario("13:00");
		expect(restaurantePrueba.horarios.length).to.equal(2);
    })
    
    it('Reservar un horario pero no se le pasa ningún parámetro - El arreglo se mantiene igual',function(){
        restaurantePrueba.reservarHorario("");
		expect(restaurantePrueba.horarios.length).to.equal(2);
    }) 

    it('El promedio de la puntuación se calcula correctamente', function(){
        let promedio = restaurantePrueba.obtenerPuntuacion();
		expect(promedio).to.equal(3);
    })

    it('El restaurant no tiene ninguna calificación - la puntuación es igual a 0', function(){
       restaurantePrueba.calificaciones = [];
        expect(restaurantePrueba.obtenerPuntuacion()).to.equal(0);
    })

    it('Agrega la calificacion en el arreglo calificaciones', function(){
        restaurantePrueba.calificar(8);
        expect(restaurantePrueba.calificaciones).to.eql([8]);
    })
})



describe('Testeando la clase Listado', function(){
    var listadoDePrueba = new Listado(listadoDeRestaurantes)
    
    it('Dado el id de un restaurante, devuelve el restaurante del listado que posee ese id', function(){
        let idPrueba = 1;
        for (i = 1; i < listadoDePrueba.length; i++){
        idPrueba = [i]
        idPrueba++;
        };
        listadoDePrueba.buscarRestaurante(idPrueba);
        expect(idPrueba).to.equal(i);
    })

    it('Dado un id inexistente, devuelve el mensaje de error', function(){
        let idPrueba = 30;
        expect(listadoDePrueba.buscarRestaurante(idPrueba)).to.not.include(idPrueba)
    })

    it('Probando la funcion obtener restaurante - Que al recibir null  no filtre', function(){
        expect(listadoDePrueba.obtenerRestaurantes(null,null,null)).to.be.an('array').to.have.lengthOf(24);
    })

    it('Probando que funcione el filtro Rubro', function(){
        let rubroPizza = listadoDePrueba.obtenerRestaurantes('Pizza',null,null);
        console.log(rubroPizza);
        expect(rubroPizza).to.be.an('array');
    })

    it('Probando que funcione el filtro Ubicacion', function(){
        let ubicacion = listadoDePrueba.obtenerRestaurantes(null,'Nueva York',null);
        console.log(ubicacion);
        expect(ubicacion).to.be.an('array');
    })

    it('Probando que funcione el filtro Horario', function(){
        let horarios = listadoDePrueba.obtenerRestaurantes(null,null,'15:00');
        console.log(horarios);
        expect(horarios).to.be.an('array');
    })
})


describe('Testeando la clase Reserva', function(){
    let reservaDePrueba = new Reserva(new Date(2018, 7, 24, 11, 00), 3, 200, "DES1")
    
    it('El precio base de una reserva es igual a la cantidad de personas por el precio por persona', function(){
         let precioBaseDePrueba = reservaDePrueba.obtenerPrecioBase();
        expect(600).to.equal(precioBaseDePrueba); 
    })

    it('la funcionalidad calcula el precio total de una reserva', function(){
        let precioFinalDePrueba = reservaDePrueba.obtenerPrecioFinal();
        expect(400).to.equal(precioFinalDePrueba);
    })

    it('Probando que se realicen correctamente los descuentos', function(){
        expect(reservaDePrueba.calculandoDescuento()).to.be.equal(200);
    })

    it('Probando que se realicen correctamente los adicionales', function(){
        expect(reservaDePrueba.sumandoAdicionales()).to.be.equal(0)
    })
});

