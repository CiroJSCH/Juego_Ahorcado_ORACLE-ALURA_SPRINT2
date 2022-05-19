var canvas = document.getElementById ('grafico-ahorcado');
var pincel = canvas.getContext('2d'); //Vamos a graficar en 2D

function dibujarEstructuraAhorcado () {

    /*Base*/
    pincel.beginPath();
    pincel.lineWidth = 3;
    pincel.strokeStyle = "white";
    pincel.moveTo (10,140);
    pincel.lineTo (290,140);
    pincel.stroke ();

    /*Columna*/
    pincel.beginPath();
    pincel.lineWidth = 4;
    pincel.strokeStyle = "white";
    pincel.moveTo (30,140);
    pincel.lineTo (30,10);
    pincel.stroke ();

    /*Techo*/
    pincel.beginPath();
    pincel.lineWidth = 2;
    pincel.strokeStyle = "white";
    pincel.moveTo (30,11);
    pincel.lineTo (180,10);
    pincel.stroke ();

    /*Gancho*/
    pincel.beginPath();
    pincel.lineWidth = 2;
    pincel.strokeStyle = "white";
    pincel.moveTo (179,11);
    pincel.lineTo (179,19);
    pincel.stroke ();

}

function dibujarCabeza () {

    pincel.beginPath();
    pincel.lineWidth = 2;
    pincel.strokeStyle = "white";
    pincel.fillStyle = "grey";

    pincel.arc(179, 32, 15, 0, 2*3.14);
    pincel.stroke();
    pincel.fill();

}

function dibujarCuerpo () {

    pincel.beginPath();
    pincel.lineWidth = 4; 
    pincel.strokeStyle = "white";
    pincel.moveTo (179,47);
    pincel.lineTo (179,90);
    pincel.stroke ();

}

function dibujarPiernaIzq () {

    pincel.beginPath();
    pincel.lineWidth = 3; 
    pincel.strokeStyle = "white";
    pincel.moveTo (179,89);
    pincel.lineTo (151,114);
    pincel.stroke ();

}

function dibujarPiernaDer () {

    pincel.beginPath();
    pincel.lineWidth = 3; 
    pincel.strokeStyle = "white";
    pincel.moveTo (179,89);
    pincel.lineTo (207,114);
    pincel.stroke ();

}

function dibujarBrazoIzq () {

    pincel.beginPath();
    pincel.lineWidth = 3; 
    pincel.strokeStyle = "white";
    pincel.moveTo (179,60);
    pincel.lineTo (151,85);
    pincel.stroke ();

}

function dibujarBrazoDer () {

    pincel.beginPath();
    pincel.lineWidth = 3; 
    pincel.strokeStyle = "white";
    pincel.moveTo (179,60);
    pincel.lineTo (207,85);
    pincel.stroke ();

}

function ahorcarlo () {

    pincel.beginPath();
    pincel.lineWidth = 2; 
    pincel.strokeStyle = "red";
    pincel.moveTo (160,47);
    pincel.lineTo (198,47);
    pincel.stroke ();

}