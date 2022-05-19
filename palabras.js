//const palabras = ["aire", "ojos", "piel", "anteojos", "joven", "viejo", "alto", "bajo", "pequeño", "gordo", "delgado", "bella", "azul", "verde","negro", "sombrero", "guantes", "corbata", "gemelos", "paraguas", "plata", "oro", "perla", "diamante", "esmeralda", "anillo","pulsera", "reloj", "elegante", "sencillo", "chaqueta", "traje", "camisa", "zapatos", "pelo", "maquillaje", "peine", "dedo", "hueso", "cara", "ojo","calor", "ambulancia", "enfermera", "farmacia", "vitaminas", "pastillas", "dentista", "ciego", "correr", "caminar", "regresar", "saltar", "fin","cerrar", "nombre", "mujer", "hombre", "soltero", "novio", "nacer", "vivir", "edad", "anciana","trabajar", "cobrar", "azafata", "artista", "panadero", "carpintero", "cocinero", "maestro", "bombero", "juez", "modelo", "monje", "pintor", "piloto", "secretaria", "taxista", "escritor", "jefe", "aprendiz", "jubilado", "empleo", "industria", "taller", "tienda", "vacaciones", "sueldo", "impuesto", "huelga", "obedecer", "locura", "humor", "inteligencia", "orgullo", "timidez", "valiente", "aburrido", "loco", "divertido", "bueno", "feliz", "amable", "pobre", "serio", "extraño", "gritar", "llorar", "suspirar", "preocupado", "risa", "amor", "suerte", "enamorado", "ver", "apagar", "luz", "color", "lupa", "microscopio", "claro", "cantar", "silbar", "voz", "eco", "trueno", "altavoz", "radio", "auricular", "liso", "comer", "dulce", "salado", "perfume", "despertarse", "vestirse", "desayunar", "leer", "dormirse", "toalla", "cobija", "almuerzo", "sopa", "agua", "leche", "jugo", "sal", "pimienta", "vinagre", "ajo", "perejil", "menta", "canela", "mayonesa", "pan", "mantequilla", "miel", "manzana", "pera", "durazno", "cereza", "papa", "lechuga", "arroz", "pollo", "pavo", "hamburguesa", "camarones", "tortilla", "espagueti", "sopa", "helado", "chocolate", "galletas", "bombones", "limpiar", "cortar", "hervir", "planchar", "aspiradora", "plancha", "horno", "abrelatas", "vajilla", "vaso", "cafetera", "azucarera", "comprar", "gastar", "vender", "barato", "caro", "gratis", "cliente", "bolsa", "precio", "recibo", "ascensor", "esquiar", "ciclismo", "golf", "pelota", "tenis", "bicicleta", "estadio", "gol", "torneo", "caca", "pedo", "culo", "pis", "viento", "padre", "madre", "hijo", "abuela", "estudioso", "aula", "tiza", "regla", "computadora", "diccionario"];
const letrasTocadas = [];
var intentos = 0;
var resultado = document.getElementById ('resultado');
var teclado = document.querySelector ('.teclado');
var zonaMensaje = document.querySelector ('.mensaje-resultado');
var botonDesistir = document.querySelector ('.boton-desistir');

botonDesistir.addEventListener ('click', function(){

    resultado.textContent = 'La palabra era: ' + palabraSecretoMayus;
    zonaMensaje.classList.add ('mostrarMensaje');
    teclado.classList.add ('deshabilitar');
    
    botonDesistir.classList.add ('deshabilitar');

})

var listaP = listaPalabras();
console.log (listaP);

/*Selecciono una palabra al azar*/
var indiceSecreto = Math.floor(Math.random()*listaP.length);  
var palabraSecreto = listaP[indiceSecreto];

/*Paso la palabra seleccionada a mayusculas*/
var palabraSecretoMayus = palabraSecreto.toUpperCase(); 

/*Divido la palabra en mayusculas en letras*/
var letras = palabraSecretoMayus.split('');
// console.log (letras);

var cantLetras = letras.length;
const palabraFormada = [cantLetras];
    // console.log (cantLetras);

for (var i=0; i<cantLetras; i++) {

    var rayita = document.createElement("span");
    var zonaLetrasCorrectas = document.getElementById ("letras-correctas");

    var idLinea = 'linea' + i;

    zonaLetrasCorrectas.appendChild (rayita);
    rayita.classList.add('rayas');
    rayita.setAttribute("id", idLinea);
    // rayita.textContent = letras [i];
}


function obtenerLetra (letra) {

    var letraPresionada = letra;
    // console.log (letraPresionada);

    var correctas = 0;

    for (var i=0; i<cantLetras; i++) {

        if (letraPresionada == letras[i]) {

            palabraFormada [i] = letraPresionada;
            console.log (palabraFormada);

            var letraCorrecta = document.getElementById ('linea' + i);
            letraCorrecta.textContent = letraPresionada;

            correctas+=1;
            intentos = intentos;
         }

     }
    
    if (correctas==0) {

        intentos += 1;
        // console.log (intentos);

        if (letrasTocadas.length == 0) {

            var letraIncorrecta = document.createElement ('span');
            var zonaIncorrectas = document.getElementById ("letras-incorrectas");

            zonaIncorrectas.appendChild (letraIncorrecta);
            letraIncorrecta.classList.add('letInc');
            letraIncorrecta.textContent =  letraPresionada;

            letrasTocadas.push (letraPresionada);
            // console.log (letrasTocadas);

        }

        else if ( (letrasTocadas.length != 0) && (letrasTocadas.indexOf (letraPresionada) !=0) ) {

            var letraIncorrecta = document.createElement ('span');
            var zonaIncorrectas = document.getElementById ("letras-incorrectas");

            zonaIncorrectas.appendChild (letraIncorrecta);
            letraIncorrecta.classList.add('letInc');
            letraIncorrecta.textContent =  letraPresionada;

            letrasTocadas.push (letraPresionada);
            // console.log (letrasTocadas);

        }

        else {

            intentos -= 1;
            // console.log ("Letra repetida");
            // console.log (letrasTocadas);

        }

    }

    switch (intentos) {

        case 1:
                dibujarCabeza();
    
                break;
    
        case 2:
                dibujarCuerpo ();
    
                break;

        case 3:
                dibujarPiernaIzq();

                break;

        case 4:
                dibujarPiernaDer();

                break;

        case 5:
                dibujarBrazoIzq();

                break;

        case 6:
                dibujarBrazoDer();

                break;

        case 7:
                ahorcarlo();

                break;
    
    }

    if (intentos >=7) {

        resultado.textContent = 'Has perdido';
        zonaMensaje.classList.add ('mostrarMensaje');
        teclado.classList.add ('deshabilitar');

    }

    if (JSON.stringify(palabraFormada) === JSON.stringify(letras)) {

        resultado.textContent = 'Has ganado';
        zonaMensaje.classList.add ('mostrarMensaje');
        teclado.classList.add ('deshabilitar');
        botonDesistir.classList.add ('deshabilitar');

        }

}






