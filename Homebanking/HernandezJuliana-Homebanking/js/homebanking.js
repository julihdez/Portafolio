//Declaración de variables
var nombreUsuario = 'Gabriel Barredo'
var saldoCuenta = 10000
var limiteExtraccion = 1000
var codigoDeSeguridad = 1234

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

iniciarSesion();


//Funciones que tenes que completar

function haySaldoDisponible (valor){
    if (saldoCuenta >= parseInt(valor)){
          return true }    
}        

function sumarDinero(cantidadSuma) {
	return saldoCuenta + cantidadSuma;
}

function restarDinero(cantidadResta){
	return saldoCuenta - cantidadResta;
}

function cambiarLimiteDeExtraccion() {
	var cambiarLimite = prompt("Ingrese su nuevo límite de extracción");

	function hayLimiteDisponible (){
		if ((parseInt(cambiarLimite)) <= saldoCuenta && (parseInt(cambiarLimite)) > 0) {
			limiteExtraccion = parseInt(cambiarLimite);
    		actualizarLimiteEnPantalla();
    		alert(`Su nuevo límite de extracción es: $ ${limiteExtraccion}`);
		} else {
			alert("No hay saldo disponible para realizar esta transacción ó el valor ingresado es incorrecto.\nPor favor intente nuevamente."); 
		}
	}	
   hayLimiteDisponible()
}


		
    
 
		

function extraerDinero() {
	var cantidadRetirada = prompt("Ingrese la cantidad de dinero que desea extraer");
	
	if (haySaldoDisponible(parseInt(cantidadRetirada)) && (parseInt(cantidadRetirada)) > 0){
		if (parseInt(cantidadRetirada) <= limiteExtraccion){
			
			function evaluarBilletes(){
				var billeteDe100 = 100;
				
				if(parseInt(cantidadRetirada) % billeteDe100 === 0){
				var saldoAnterior = saldoCuenta;
				
				saldoCuenta = restarDinero(parseInt(cantidadRetirada));
				actualizarSaldoEnPantalla();
				alert(`Has retirado: $ ${cantidadRetirada}\nSaldo Anterior: $ ${saldoAnterior}\nSaldo Actual: $ ${saldoCuenta}`);
				} else {
				alert("Este cajero sólo entrega billetes de $100.\nPor favor intente nuevamente.");
				}
			} 
			evaluarBilletes();
		} else{
			alert("La cantidad de dinero que desea extraer es mayor a su límite de extracción ó el valor ingresado es incorrecto.\nPor favor intente nuevamente.")
		} 
	} else {
			alert("No hay saldo disponible para realizar esta transacción ó el valor ingresado es incorrecto.\nPor favor intente nuevamente.");
		}
}
	
function depositarDinero() {
	var cantidadDepositada = prompt("Ingrese la cantidad de dinero que desea depositar");
	var saldoAnterior = saldoCuenta;

	if((parseInt(cantidadDepositada)) > 0){
	
	saldoCuenta = sumarDinero(parseInt(cantidadDepositada));
	actualizarSaldoEnPantalla();
	alert(`Has depositado: $ ${cantidadDepositada}\nSaldo Anterior: $ ${saldoAnterior}\nSaldo Actual: $ ${saldoCuenta}`)
	} else {
		alert("El valor ingresado es incorrecto.\nIntente nuevamente.")
	}
}

function pagarServicio() {
		var agua = 350;
		var telefono = 425;
		var luz = 210;
		var internet = 570;

		function seleccionServicio() { 
		var nroServicio = prompt("Ingrese el número que corresponda con el servicio que desea pagar:\n1-Agua\n2-Teléfono\n3-Luz\n4-Internet")

			switch(nroServicio){
			
			case'1':
			
			saldoCuenta >= parseInt(agua) 
			var saldoAnterior = saldoCuenta;
			saldoCuenta = restarDinero(parseInt(agua));
			actualizarSaldoEnPantalla();
			alert(`Has pagado el servicio: Agua\nSaldo Anterior: $ ${saldoAnterior}\nDinero descontado: $ ${agua}\nSaldo Actual: $ ${saldoCuenta}`);
			break;
			
			if (saldoCuenta < parseInt(agua)){
				alert("No hay dinero suficiente para realizar este pago.\nPor favor intente nuevamente.");
			}
			break;

			case'2':
			
			saldoCuenta >= parseInt(telefono) 
			var saldoAnterior = saldoCuenta;
			saldoCuenta = restarDinero(parseInt(telefono));
			actualizarSaldoEnPantalla();
			alert(`Has pagado el servicio: Teléfono\nSaldo Anterior: $ ${saldoAnterior}\nDinero descontado: $ ${telefono}\nSaldo Actual: $ ${saldoCuenta}`);
			break;
			
			if (saldoCuenta < parseInt(telefono)){
				alert("No hay dinero suficiente para realizar este pago.\nPor favor intente nuevamente.");
			}
			break;
			
			case'3':
			
			saldoCuenta >= parseInt(luz) 
			var saldoAnterior = saldoCuenta;
			saldoCuenta = restarDinero(parseInt(luz));
			actualizarSaldoEnPantalla();
			alert(`Has pagado el servicio: Luz\nSaldo Anterior: $ ${saldoAnterior}\nDinero descontado: $ ${luz}\nSaldo Actual: $ ${saldoCuenta}`);
			break;
			
			if (saldoCuenta < parseInt(luz)){
				alert("No hay dinero suficiente para realizar este pago.\nPor favor intente nuevamente.");
			}
			break;
			
			case'4':
			
			saldoCuenta >= parseInt(internet)
			var saldoAnterior = saldoCuenta;
			saldoCuenta = restarDinero(parseInt(internet));
			actualizarSaldoEnPantalla();
			alert(`Has pagado el servicio: Internet\nSaldo Anterior: $ ${saldoAnterior}\nDinero descontado: $ ${internet}\nSaldo Actual: $ ${saldoCuenta}`);
			break;
			
			if (saldoCuenta < parseInt(internet)){
				alert("No hay dinero suficiente para realizar este pago.\nPor favor intente nuevamente.");
			}
			break;

			default: 
			alert("No existe el servicio seleccionado.\nPor favor intente nuevamente.");
			}
 		}
 		seleccionServicio()
}
 		
function transferirDinero() {
	var cuentaAmiga1 = 1234567;
	var cuentaAmiga2 = 7654321;
	var montoParaTransferir = prompt("Ingrese el monto a transferir")
	
	if (haySaldoDisponible(montoParaTransferir) && (parseInt(montoParaTransferir)) > 0) {
				var nroDeCuenta = prompt("Ingrese el número de cuenta al que desea transferir el dinero");
				 if (nroDeCuenta == cuentaAmiga1 || nroDeCuenta == cuentaAmiga2) {
					var saldoAnterior = saldoCuenta;
					saldoCuenta = restarDinero(parseInt(montoParaTransferir));
					actualizarSaldoEnPantalla();
					alert(`Has transferido: $ ${montoParaTransferir}\nSaldo Anterior: $ ${saldoAnterior}\nSaldo Actual: $ ${saldoCuenta}`);
				} else {
				alert("Solo puede transferir dinero a una cuenta amiga.\nPor favor intente nuevamente."); 
				}
	} else {
		alert("No hay saldo disponible para realizar esta transacción ó el valor ingresado es incorrecto.\nPor favor intente nuevamente.")
	}		
}		
	
function iniciarSesion() {
	var preguntarCodigoDeSeguridad = prompt("Ingrese su código de seguridad");

	if (parseInt(preguntarCodigoDeSeguridad) === codigoDeSeguridad){
		alert(`Bienvenido/a ${nombreUsuario}`);
	} else{
		saldoCuenta = 0;
		actualizarSaldoEnPantalla;
		alert("Código incorrecto. Su dinero ha sido retenido por cuestiones de seguridad.")
	}
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}


 		
 			 



 		 
				

			





	
	
		
		


	

	
 			


		 


