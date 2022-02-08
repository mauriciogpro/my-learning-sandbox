'use stric'

var nombre = 'Mauricio Gonzalez'

console.log("---------------------------------------")
console.log("Creacion de arrays ")
var nombres = ["Mauricio Gonzalez", "Fernanda Tarraga", "Chanchi", "Euge"];
console.log(nombres);
console.log(nombres[2]);

console.log("---------------------------------------")
console.log("Creacion de arrays como Objeto");
var nombres2 = new Array("Mauricio Gonzalez", "Fernanda Tarraga", "Chanchi", "Euge");
console.log(nombres2);

console.log(nombres2[3]);

// Propiedad .length
console.log(nombres2.length);
console.log(nombres2[3].length);

// var elemento = parseInt(prompt("Que elemento del array quieres?", 0))

// while (elemento > nombres2.length)
// { elemento = parseInt(prompt("Que elemento del array quieres?", 0)); 
// }
// alert(nombres[elemento])
// alert("El elemento tiene una longitud de: " + nombres[elemento].length)

 document.write("<h1>Todos los nombres de casa</h1>")
 document.write("<ul>")
// for(var i = 0; i < nombres2.length; i++)
// {
//     document.write(`<li>${nombres2[i]}</li>`)
// }

    //For each
nombres2.forEach((elemento, indice, arr)=>{
    console.log('Mostrado desde el for each' + arr);
    document.write(`<li>El ${indice} de este elemento: ${elemento}</li>`);
});
    
 document.write("</ul>")

