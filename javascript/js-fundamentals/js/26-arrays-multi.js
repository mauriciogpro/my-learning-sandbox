'use strict'

var marvel = new Array("Cap America", "Ironman", "Black Widow", "Black Phanter", "Falcon");
var dc = new Array("Superman","Batman","Wonder Woman");

var heroes = [marvel, dc];

//console.log(heroes[0][1])
//console.log(heroes[1][2])

//Metodo PUSH

//marvel.push("Thor");
//console.log(marvel);

// var elemento = prompt("Introduce tu heroe de marvel / ACABAR = salir")

//     while (elemento != "ACABAR"){
//         elemento = prompt("Introduce tu heroe de marvel / ACABAR = salir")
//         marvel.push(elemento)
//         console.log(marvel)
//}


        //Metodo POP

marvel.pop() // Elimina el ultimo  

        //Metodo INDEXOF y SPLICE 

        var indice= dc.indexOf("Wonder Woman");
console.log(indice);

if(indice != -1){ 
//se pone -1 por que el indexof
//deberia devolver un numero si lo encuentra sino da -1
    dc.splice(indice, 1)
}
console.log(dc)

    //Metodo JOIN

var heroes_marvel = marvel.join() // se guarda la union en una variable
console.log(heroes_marvel) 

    //Metodo SPLIT
//string to array
//ver  23-funciones

    //METODOS DE ORDEN

    //Metodo SORT
console.log(marvel.sort())
    

    //Metodo REVERSE
console.log(marvel.reverse()) 

    // FOR IN
for (let heroes in marvel){ 
// Aca la variable es un objeto con el indice
    console.log(marvel[heroes]) 
//Por eso necesito aclararlo aca como que heroes
//es el interior, si lo pongo solo me saldra unicamente
// el orden
}
    //METODOS DE BUSQUEDA

    //Metodo FIND
//El método find() devuelve el valor del elemento del
//array que pasa una prueba 
//(proporcionada por una función).


var busqueda=dc.find(extraterreste => extraterreste == "Superman")
//aca puse extraterrestr pero puede ser cualquier cosa que quiero que 
//retorne con la palabra que busco. Podria ser heroe, pero 
//

console.log(busqueda) 

//Metodo FIND INDEX
//Devuelve el indice de lo buscado 
    var busqueda2=dc.findIndex(vigilante => vigilante == "Batman")
console.log(busqueda2) 

    //Metodo SOME 
//Devuelve los items que cumplen condiciones. Como por ejemplo
//precios.