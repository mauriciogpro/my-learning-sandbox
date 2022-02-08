'use strict' 

function holaMundo(texto){
    var fuera = 'estoy dentro de la funcion'
    console.log(texto);
  
    console.log(fuera);
}

var texto = "soy una variable global"

holaMundo(texto);
// No funciona y da error ====> holaMundo(fuera);


var num = 5
console.log('Tipo de dato int');
console.log('--------------');
console.log(num.toString());
console.log(typeof num);
console.log('Convertido en string');
console.log('--------------');
console.log(num.toString());
console.log(typeof num.toString())