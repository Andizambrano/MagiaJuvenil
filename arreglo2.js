// Arreglos parte 2  concatenar arreglos
var arreglo1 = ["ANDIZ","MARCE", "PAO", "MELI"];
var arreglo2 = ["2020", "FEBERO", "29"];
var arregloNumeros=[10, 30, 5,18,24];


console.log(arreglo1.concat(arreglo2));

// Ordenar los elementos de un arreglo y devolver el arreglo ordenado
arreglo1.sort();
console.log(arreglo1);

arregloNumeros.sort();
console.log(arregloNumeros);

// Estructura de control FOR
var contador=0;
for( contador; contador < 3; contador++){
    console.log("hola mundo", contador);
}
var d=0;
var c=0;
for( c; c <= 8; c=c+2){
    console.log("hola andiz", c, d);
    d=d+=2;
    console.log("d", d, "c", c);
}

// ingresar 5 notas en un arreglo con for
const prompt = require ('prompt-sync')();
var arregloNotas=[];
var contadorNotas =0; 

for (contadorNotas; contadorNotas< 5; contadorNotas++){
     arregloNotas[contadorNotas]= prompt("Ingrese la nota: ");
     console.log(arregloNotas, contadorNotas);
     //contadorNotas= contadorNotas+1;
     //console.log(arregloNotas, contadorNotas);
}
console.log("El contador termina en: ", contadorNotas , "por esa razón termina el programa");