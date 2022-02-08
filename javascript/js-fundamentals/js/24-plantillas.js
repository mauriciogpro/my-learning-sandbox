'use strict'

// Plantilla de texto
var nombre = prompt("Ingresa tu nombre")
var apellido = prompt("Ingresa tu apellido")

var texto = `
<h1>Hola que tal</h1>
<h2> como estan? </h2>
<h3> mi nombre es: ${nombre}</h3>
<h3> mi apellido es: ${apellido}</h3>
`

document.write(texto);
