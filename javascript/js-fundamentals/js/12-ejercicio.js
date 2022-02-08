 'use strict'




var counter = 0;
var suma = 0;


   do {
    var numero1 = parseInt(prompt("Int. un numero hasta que sea neg.", 2));
    if(isNaN(numero1)){
        numero = 0;

    } else if(numero1 >= 0) {
        suma += numero1;
        counter++;
    }
    console.log("La suma es : " + suma);   
   } while (numero1 >= 0);
   
   console.log("El promedio es : " + suma / counter);   
   