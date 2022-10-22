const palabras = ["aire", "ojos", "piel", "anteojos", "joven", "viejo", "alto", "bajo", "pequeño", "gordo", "delgado", "bella", "azul", "verde","negro", "sombrero", "guantes", "corbata", "gemelos", "paraguas", "plata", "oro", "perla", "diamante", "esmeralda", "anillo","pulsera", "reloj", "elegante", "sencillo", "chaqueta", "traje", "camisa", "zapatos", "pelo", "maquillaje", "peine", "dedo", "hueso", "cara", "ojo","calor", "ambulancia", "enfermera", "farmacia", "vitaminas", "pastillas", "dentista", "ciego", "correr", "caminar", "regresar", "saltar", "fin","cerrar", "nombre", "mujer", "hombre", "soltero", "novio", "nacer", "vivir", "edad", "anciana","trabajar", "cobrar", "azafata", "artista", "panadero", "carpintero", "cocinero", "maestro", "bombero", "juez", "modelo", "monje", "pintor", "piloto", "secretaria", "taxista", "escritor", "jefe", "aprendiz", "jubilado", "empleo", "industria", "taller", "tienda", "vacaciones", "sueldo", "impuesto", "huelga", "obedecer", "locura", "humor", "inteligencia", "orgullo", "timidez", "valiente", "aburrido", "loco", "divertido", "bueno", "feliz", "amable", "pobre", "serio", "extraño", "gritar", "llorar", "suspirar", "preocupado", "risa", "amor", "suerte", "enamorado", "ver", "apagar", "luz", "color", "lupa", "microscopio", "claro", "cantar", "silbar", "voz", "eco", "trueno", "altavoz", "radio", "auricular", "liso", "comer", "dulce", "salado", "perfume", "despertarse", "vestirse", "desayunar", "leer", "dormirse", "toalla", "cobija", "almuerzo", "sopa", "agua", "leche", "jugo", "sal", "pimienta", "vinagre", "ajo", "perejil", "menta", "canela", "mayonesa", "pan", "mantequilla", "miel", "manzana", "pera", "durazno", "cereza", "papa", "lechuga", "arroz", "pollo", "pavo", "hamburguesa", "camarones", "tortilla", "espagueti", "sopa", "helado", "chocolate", "galletas", "bombones", "limpiar", "cortar", "hervir", "planchar", "aspiradora", "plancha", "horno", "abrelatas", "vajilla", "vaso", "cafetera", "azucarera", "comprar", "gastar", "vender", "barato", "caro", "gratis", "cliente", "bolsa", "precio", "recibo", "ascensor", "esquiar", "ciclismo", "golf", "pelota", "tenis", "bicicleta", "estadio", "gol", "torneo", "caca", "pedo", "culo", "pis", "viento", "padre", "madre", "hijo", "abuela", "estudioso", "aula", "tiza", "regla", "computadora", "diccionario"];

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

localStorage.setItem("palabras", JSON.stringify(palabras));
 
botonAgregarPalabra.addEventListener ('click', function(){

    var palabraIngresada = document.getElementById ('ingresar-palabra');

    if (validarEntrada (palabraIngresada.value)) {
        //Si está bien, la agrego a la lista
        
        palabras.push (palabraIngresada.value);
        // Se guarda en localStorage despues de JSON stringificarlo 
        localStorage.setItem('palabras', JSON.stringify(palabras));

        
        advertencia.classList.remove ('incorrecto');
        palabraIngresada.value = '';
        advertencia.textContent = 'Guardada'
        advertencia.classList.add ('correcto');

        // console.log (listaPal);

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