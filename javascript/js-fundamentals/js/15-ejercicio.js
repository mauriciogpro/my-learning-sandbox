'use strict'

var numero1 = parseInt(prompt('Introduce el primer numero', 0));


console.log(numero1);

document.write("<h3/>Numeros divisores del " + numero1 + "<h3/>");
for(var i=0; i <= numero1; i++){
    if (numero1% i== 0){
        document.write(i+ "<br/>");
    } else
    {
        console.log('numero no divisor; ' + i);   
    }
    
}