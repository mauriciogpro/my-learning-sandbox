'use strict'

var numero1 = parseInt(prompt('Introduce el primer numero', 0));


console.log(numero1);

while (numero1 <= 0 ||isNaN(numero1)){
        numero1 = parseInt(prompt('Introduce el primer numero', 0));
        
    } 

if (numero1% 2== 0){
        console.log('numero par ; ' + numero1);
    } else
    {
        console.log('numero impar; ' + numero1); 
    }

    

