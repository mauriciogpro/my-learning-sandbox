'use strict' 

var edad = 10;
var imprime = "";

switch(edad){ 
    case 19:
    imprime = "Has cumplido la mayoria de edad";
    case 17:
    imprime = "No has cumplido la mayoria de edad";
    default:
    imprime = "Has selecionado otra edad";
    break;

}
// no olvidar referencia (edad). case(casos) y el breack(parar)
console.log(imprime)