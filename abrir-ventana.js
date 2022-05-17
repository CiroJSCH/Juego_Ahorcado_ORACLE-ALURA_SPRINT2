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