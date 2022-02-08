'use strict'

//Rest
// Se usa cuando no se sabe cuantos parametros entran
console.log("Soy un ejemeplor de  Rest")
function listadoFruta (fruta1,fruta2, ...otrasFrutas){
console.log("Fruta 1:" + fruta1);
console.log("Fruta 2:" + fruta2);
console.log(otrasFrutas);
}
listadoFruta('manzana', 'pera', 'naranja', 'sandia')

//Spread
//Sirve para dividir la interpretacion del array
// y que lo use como 1 argumento a cada uno
console.log("---------------")
console.log("Soy un ejemeplor de  spread")
var verduras = ["papa","zanahoria"];

function listadoVerdura (Verd1,Verd2, ...otrasVerd){
console.log("Verdura 1:" + Verd1);
console.log("Verdura 2:" + Verd2);
console.log(otrasVerd);
}
listadoVerdura(...verduras, "tomate", "brocoli");

