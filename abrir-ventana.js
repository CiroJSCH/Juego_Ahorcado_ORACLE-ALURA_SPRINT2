const agregarPalabra = document.getElementById ('abrir-ventana-emergente');

const ventana = document.getElementById ('ventana-emergente');

const cancelar = document.getElementById ('botonCancelar');

const imagenAhorcado = document.getElementById ('imagenAhorcado');

agregarPalabra.addEventListener ('click', function(){
    
    imagenAhorcado.classList.add ('cerrar');
    ventana.classList.remove ('cerrar');
    ventana.classList.add ('mostrar');

});

cancelar.addEventListener ('click', function(){

    imagenAhorcado.classList.remove ('cerrar');
    ventana.classList.remove ('mostrar');
    ventana.classList.add ('cerrar');

});

var botonAgregarPalabra = document.querySelector ('.boton-guardar');
var advertencia = document.querySelector ('.soloMayus');

var palabrasUsuario = [];
var array = localStorage.getItem('palabrasUs');
array = JSON.parse(array);

for (var i=0; i<array.length; i++){
    palabrasUsuario.push (array[i]);
}

console.log (palabrasUsuario);

botonAgregarPalabra.addEventListener ('click', function(){

    var palabraIngresada = document.getElementById ('ingresar-palabra');
    var listaPal = listaPalabras();

    if (validarEntrada (palabraIngresada.value)) {
        //Si está bien, la agrego a la lista
        
        palabrasUsuario.push (palabraIngresada.value);
        // Se guarda en localStorage despues de JSON stringificarlo 

        localStorage.setItem('palabrasUs', JSON.stringify(palabrasUsuario));

        advertencia.classList.remove ('incorrecto');
        palabraIngresada.value = '';
        advertencia.textContent = 'Guardada'
        advertencia.classList.add ('correcto');

        console.log (palabrasUsuario);
        console.log (listaPal);

    }

    else {
        //Si está mal, no la agrego y pongo la advertencia en rojo 
        advertencia.textContent = 'Solo letras mayúsculas';
        advertencia.classList.remove ('correcto');
        advertencia.classList.add ('incorrecto');

    }

    // console.log (palabras);

});

function validarEntrada(palabra) {
    const noPermitido = /[^A-Z]/;
    return !noPermitido.test(palabra);
  }
