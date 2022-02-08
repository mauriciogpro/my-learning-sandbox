'use strict'

var numero1 = parseInt(prompt('Introduce el primer numero', 0));
var numero2 = parseInt(prompt('Introduce el segundo numero', 0));

console.log(numero1, numero2);

document.write("<h3/>Numeros impares entre " + numero1 + "y " + numero2 + "<h3/>");
for(var i=numero1; i <= numero2; i++){
    if (i% 2== 0){
        console.log('numero impar no imprimir; ' + i);
    } else
    {
        document.write(i+ "<br/>");
    }
    
}
