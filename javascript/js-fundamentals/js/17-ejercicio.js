'use strict'

var numero = parseInt(prompt("Introduce un numero"))
document.write("<h1>Tabla de multiplicar de " + numero + "</h1>")
for (var i = 1; i<=10; i++){
    document.write("<h3>" + numero +" x "+i+" = " + numero*i + "</h3>")
}