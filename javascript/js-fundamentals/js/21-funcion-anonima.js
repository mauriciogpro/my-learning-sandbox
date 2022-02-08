'use strict'

// Funcion anonima

var pelicula = function(nombre){
    return "La pelicula se llama " + nombre
}

 console.log(pelicula("the batman"));

 //Callback
var sumar;

 function sumame(num1, num2, sumaymuestra, sumapordos){
     var sumar = num1 + num2;

     //aca llamo a las funciones que en realidad son argumentos
     // no tienen nombre en una variable o este las invoca o ejecuta
     // es como si estuviera en el aire o no definida.
     // aca toman como argumento una variable
     //Claro. El argumento debe ser una funcion. No importa cual sea
     //afuera mientras tome el lugar de estas. 
     sumaymuestra(sumar);
     sumapordos(sumar);

     return sumar;
 }

 sumame(5,7,
            function(dato){//esta funcion es un argumento
                console.log("La suma es :", dato);
            },
            function(dato){//esta funcion es otro argumento
                console.log("La suma por dos es: ", dato*2)

            });

// funcion de flecha
// es lo mismo que la funcion anonima pero sin la necesidad de 
// usar la palabra function y en algunos casos los parentesis.