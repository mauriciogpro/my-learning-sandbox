'use strict'


var numero = 444;
var texto1 = "Bienvenido"
var texto2 = "Curso"

var dato = numero.toString();
    dato = texto1.toUpperCase();
    dato = texto1.toLowerCase();
    
console.log("Tipo de dato")
console.log(typeof dato)


var nombre = "murcielago"
var arrays = ["hoa","hola"]
console.log("Longitud de nombre")
console.log(nombre.length)
console.log("Longitud de array")
console.log(arrays.length)

var textototal = texto1.concat(" al "+texto2)
console.log(textototal)

        // Busqueda
console.log("--------------")
console.log("Busqueda")
var numero = 444;
var texto3 = "Palabra de palabra"
var texto4 = "Grupo"
// Primera coincidencia de bra
var busqueda = texto3.indexOf("bra"); // el .search es igual
console.log(busqueda)
// Busqueda de  coincidencia de bra
var busqueda = texto3.lastIndexOf("bra");
console.log(busqueda)
      // Metodo Match
var marcar = texto3.match("bra");
console.log(marcar)
/// El metodo match te devuelve un array con muchos datos
/// Entre ellos la frase completa
/// Numero de donde esta la palabra
/// etc.
var marcar2 = texto3.match(/palabra/g); 
// busqueda global en todal a frase
// puede ser varias palabras iguales
console.log(marcar2)


const oracion = 'El viento de la noche gira en el cielo y canta.  '
        //Substract y  CharAT
// Me permite extraer una palabra
// CharAt : Me permite exptaer una letra
// startWith: / endsWith: si empieza o termina con esa palabra`
console.log("-----------------")
console.log("Oracion con Substract y CharAt en Viento")
console.log(oracion.charAt(0));// Devuelve el caracter que en la posicion
console.log(oracion.substr(3,6));//Indicar el lugar donde cortar y cuantas letras
console.log("-----------------")
console.log("Oracion con startWith y endsWith")
console.log(oracion.startsWith('El'));
console.log(oracion.endsWith('canta'));//Es false por que falta el puito
        // Includes
//Devuelve si la palabra esta en el texto

console.log("-----------------")
console.log("Oracion con Includes / Devuelve TRUE")
console.log(oracion.includes('noche'));

//Reemplazo
        //Replace para reemplazar


console.log("-----------------");
console.log("Oracion con Replace");
console.log(oracion.replace('noche', 'dia'));


        //Slice para cortar
console.log("-----------------")
console.log("Oracion con Slice")

console.log(oracion.slice(10, 22));


        //Split para separar en un array
console.log("-----------------")
console.log("Oracion con Split")
console.log(oracion.split(" "));//el argumento indica como se separan

       //Trim
console.log("-----------------")
console.log("Oracion con Trim")
console.log(oracion.trim());

