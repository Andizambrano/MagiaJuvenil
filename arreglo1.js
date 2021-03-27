
// arreglo

var arregloNom = [ "Andrés", "Meli", "Pablo", "Pao"];
console.log(arregloNom[0]);
arregloNom[3] = "Naty";
console.log(arregloNom);
//delete arregloNom[2];
console.log(arregloNom);
// para saber el tamaño del arreglo
var cuanto = arregloNom.length;
console.log("La cantidad de elementos en el arreglo es: ",cuanto);

// agregar un elemento al final de un arreglo
arregloNom.push("Pamela");
console.log(arregloNom);

//Eliminar un elemento al final del arreglo
arregloNom.pop();
console.log("Elemento borrado: ", arregloNom);

//Agregar elemento a un arreglo en una determinada posición
arregloNom.splice(2,1, "Daniela");
console.log("Elemento agregado:", arregloNom);


// Enlaces para buscar más información sobre el funcionamiento de JAVA
// https://developer.mozilla.org/es/docs/Web/JavaScript
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array


// programa que lea 5 notas y sacar promedio mediante arreglos
const prompt = require('prompt-sync')();
var arregloNotas = [];
var resultado;
arregloNotas[0] = prompt("Nota 1: ");
arregloNotas[1] = prompt("Nota 2: ");
arregloNotas[2] = prompt("Nota 3: ");
arregloNotas[3] = prompt("Nota 4: ");
arregloNotas[4] = prompt("Nota 5: ");
console.log(arregloNotas);
resultado = (parseInt(arregloNotas[0]) + parseInt(arregloNotas[1])+ parseInt(arregloNotas[2])+ 
             parseInt(arregloNotas[3])+ parseInt(arregloNotas[4]));
console.log(resultado);
resultado = resultado/5;
console.log(resultado);


// concaquetar 2 arreglos

var arreglo1 = ["andiz"];
var arreglo2 =["88", "100"];
console.log(arreglo1.concat(arreglo2));

