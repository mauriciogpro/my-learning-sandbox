'use strict'

// //definicion
// function definida(msg){
//     return console.log(msg);
    
// }
// console.log("------------------")
// //invocacion
// definida("fui definida y ahora soy invocada");
// console.log("------------------")
// var dentro_variable = definida("ahora èstoy dentro de una variable")

// console.log(dentro_variable)

// function calculadora(num1, num2){
//     console.log("Suma: " + (num1 + num2) )
//     console.log("Resta: " + (num1 - num2) )
//     console.log("Division: " + (num1 / num2) )
//     console.log("Multiplicar: " + (num1 * num2) )
//     console.log("------------------")
// }

// calculadora(12,23)
// calculadora(1,2)

// se puede iterar usando un for por cada numero.

// function calculadora(num1, num2, mostrar = false){
//     if (mostrar == false){
//         console.log("Suma: " + (num1 + num2) )
//         console.log("Resta: " + (num1 - num2) )
//         console.log("Division: " + (num1 / num2) )
//         console.log("Multiplicar: " + (num1 * num2) )
//         console.log("------------------")    
//     } else {
//     document.write("Suma: " + (num1 + num2) + "<br/>")
//     document.write("Resta: " + (num1 - num2) + "<br/>")
//     document.write("Division: " + (num1 / num2) + "<br/>")
//     document.write("Multiplicar: " + (num1 * num2) + "<br/>")
//     document.write("------------------"  + "<br/>")
// }
// }

// calculadora(10,10)
// calculadora(2,2,true)

function consola(num1, num2){
    console.log("Suma: " + (num1 + num2) )
    console.log("Resta: " + (num1 - num2) )
    console.log("Division: " + (num1 / num2) )
    console.log("Multiplicar: " + (num1 * num2) )
    console.log("------------------")     
}
function escribir(num1, num2){
document.write("Suma: " + (num1 + num2) + "<br/>")
        document.write("Resta: " + (num1 - num2) + "<br/>")
        document.write("Division: " + (num1 / num2) + "<br/>")
        document.write("Multiplicar: " + (num1 * num2) + "<br/>")
        document.write("------------------"  + "<br/>")
    }
function calculadora(num1, num2, mostrar = false){
    if (mostrar == false){
    consola(num1, num2)
        } else {
     escribir(num1, num2)   
    }
}
    
    calculadora(10,10);
    calculadora(2,2,true);