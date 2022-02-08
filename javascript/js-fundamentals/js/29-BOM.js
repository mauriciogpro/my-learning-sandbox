'use strict'

function getBom(){
console.log("El alto de la ventana: " + window.innerHeight)
console.log("El ancho de la ventana: " + window.innerWidth)
console.log("El ancho de la pantalla: " + screen.width)
console.log("El alto de la pantalla: " + screen.height)
console.log("URL y datos completos: " + window.location)
console.log("URL: " + window.location.href)
}
getBom()  

function redirect(url){
    window.location.href=url; //redirect
}

function abrir(url){
    window.open(url,"", "width=400,height=600");
}
