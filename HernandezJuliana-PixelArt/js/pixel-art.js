var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var paleta = document.querySelector('#paleta');

var grilla = document.getElementById('grilla-pixeles');

var n = 1750;

var grillaPixeles = new Array(n);

var indicadorDeColor = document.querySelector('#indicador-de-color');

var colorPersonalizado = document.getElementById('color-personalizado');

var colorActual;  

var pixelIndividual = document.getElementsByClassName('pixel');

/*colorPersonalizado.addEventListener('change', 
  (function(e) {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorDeColor.style.backgroundColor = colorActual;


  })
);*/

//recorre el arreglo y crea la paleta de colores
function crearGrillaDeColores () {
  for (let i = 0; i < nombreColores.length; i++) {
    let paletaDeColores = document.createElement('div');
    let color = nombreColores[i];
    
    paleta.appendChild(paletaDeColores);
    paletaDeColores.style.backgroundColor = color;
    paletaDeColores.className = 'color-paleta'; 
  }  
}    
   
//Crea la grilla de pixeles de manera dinamica
function crearGrillaDePixeles (){
  for(let i = 0; i < 1750; i++){
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        grilla.appendChild(pixel);
  }  
}    
  
//Capturo el evento click y cambio el background color del indicador de acuerdo al valor del evento

  paleta.addEventListener ('click', function(e) {
    indicadorDeColor.style.backgroundColor = e.target.style.backgroundColor;
    });
     
  grilla.addEventListener('click', function(e) {
    e.target.style.backgroundColor = indicadorDeColor.style.backgroundColor;
    }); 


  colorPersonalizado.addEventListener('change', function(e) {
    colorActual = colorPersonalizado.value;
    indicadorDeColor.style.backgroundColor = colorActual;
    e.preventDefault();
    });

  grilla.addEventListener('click', function(e){
    colorActual = e.target.style.backgroundColor; 
    indicadorDeColor.style.backgroundColor = colorActual;
    e.preventDefault();
    });
  
//Pinta capturando el movimiento a traves del eventlistener y un valor booleano true    
function pintarEnMovimiento() {
 
  let pintar = true


  grilla.addEventListener('mousedown', function(e) {
    pintar = true;
    e.preventDefault();
  });
  
  grilla.addEventListener('mousemove', function(e) {
    if(pintar){
      e.target.style.backgroundColor = colorActual;
    } else {pintar = false
      }
      e.preventDefault();
  });

  grilla.addEventListener('mouseup', function(e) {
    pintar =false;
    e.preventDefault();
  }); 
} 
//Activo borrar con el eventlistener y borro todo cambiando el color, la animacion se realiza sin jquery
function borrarPantalla() {

  let borrar = document.getElementById('borrar')
    
    borrar.addEventListener('click', function(e) {

      for(let pixel of grilla.children) {
        pixel.style.backgroundColor = 'white';
      }
    animarByClassName(grilla, 'fadein');
    e.preventDefault();
    });

    
} 
//
function animarByClassName(element, className) {
  element.classList.remove(className);
  element.offsetWidth;
  element.classList.add(className);
}

function cargarSuperheroe(superheroe) {
  
  for (let i = 0; i < superheroe.length; i++) {
    pixelIndividual[i].style.backgroundColor = superheroe[i];
  }
}

document.getElementById('batman').addEventListener("click", function(e){
  cargarSuperheroe(batman);
});
document.getElementById('wonder').addEventListener("click", function(e){
  cargarSuperheroe(wonder);
});
document.getElementById('flash').addEventListener("click", function(e){
  cargarSuperheroe(flash);
});
document.getElementById('invisible').addEventListener("click", function(e){
  cargarSuperheroe(invisible);
});

function guardarPixelArt() {
  html2canvas(grilla , {
    onrendered: function(canvas) {
      theCanvas = canvas;
      canvas.toBlob(function(blob) {
        saveAs(blob, "pixel-art.png");
      });
    }
  }); 
}
      
   





  
 
 
 




function iniciar () {
  
  crearGrillaDeColores();
  crearGrillaDePixeles();
  pintarEnMovimiento();
  borrarPantalla();
  
  
}

iniciar();
  






  




  
  
 



  

    
  
  
 

    

     
 
    








  
  //nombreColores.forEach (elem => paleta.appendchild(color) && backgroundColor = innerText && className = 'color-paleta' );
  


  


/*conjunto.forEach(elem => console.log(elem + 1))
function mostrarInstruccionEnLista(instruccion, idLista) {
  var ul = document.getElementById(idLista);
  var li = document.createElement("li");
  li.textContent = instruccion;
  ul.appendChild(li);*/


