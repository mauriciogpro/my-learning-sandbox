'use strict'

//Var
var numero = 40;
console.log(numero);

if(true){
    var numero =50;
    console.log(numero);
    console.log("Cambio tambien fuera de bloque");
}

console.log(numero)
// Let
console.log("Otro bloque");
var numero = 40;
console.log(numero);

if(true){
    let numero =50;
    console.log(numero);
    console.log("Solo cambio en este bloque");
}

console.log(numero)