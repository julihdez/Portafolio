var encender = function(linea1, linea2,linea3) { 
    return function() {

    //Chequeamos si la Línea se quiere encender o no
    if(linea1){
        //Cheuqeuamos si está encendida o no
        if(/*COMPLETAR*/ == "Off"){
            //Encendemos la Línea correspondiente
            /*COMPLETAR*/ = "On"
        }else {
            console.log(`La línea de iluminación 1 de la cancha ya está encendida!`)
        }
    }

    if(linea2){
        if(/*COMPLETAR*/ == "Off"){
            /*COMPLETAR*/ = "On"
        }else {
            console.log(`La línea de iluminación 2 de la cancha ya está encendida!`)
        }
    }

    
    if(linea3){
        if(/*COMPLETAR*/ == "Off"){
            /*COMPLETAR*/ = "On"
        }else {
            console.log(`La línea de iluminación 3 de la cancha ya está encendida!`)
        }
    }
}};