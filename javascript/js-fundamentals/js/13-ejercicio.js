'use strict'

var numero1 = parseInt(prompt('Introduce el primer numero', 0));
var numero2 = parseInt(prompt('Introduce el segundo numero', 0));
var cantidad = numero1 - numero2
console.log(numero1, numero2);


for(var i=numero1; i <= numero2; i++){
    document.write(i+'<br/>')
}
