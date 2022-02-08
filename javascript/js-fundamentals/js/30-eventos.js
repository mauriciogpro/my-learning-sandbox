'use strict'
// Si quiero que se carguen estos eventos mas alla de donde
// ubicado mi script en el html. lo pongo en el body
// como on load y pongo todos estos eventos en una funcion
//
//windows.addEventListener('load'),()=>{
//   'todo lo de abajo' 
//}
//
 // Eventos del Raton
 var boton = document.querySelector("#boton");
console.log(boton)

 function cambiarColor(){
     console.log("presiono el boton")
     var bg = boton.style.background;
     console.log(boton.style.background)
    if (bg.startsWith("blue") == true)
      {
        boton.style.background = "green";
        console.log(boton.style.background)
    }
    else{
      boton.style.background = "blue";
      console.log(boton.style.background)
    }
    return true;
 }
 //Funcion if me costo por que el condenado programa
 // no solo cambia el color en el boton style. sino que tambien
 // cambia otras caracteristicas.
 // Lo descrubri gracias al console log.
 // Si uso una backgroundColor es mas especigico

 var boton2 = document.querySelector("#boton2");
console.log(boton2)

 function cambiarColor2(){
     console.log("presiono el boton")
     var bg2 = boton2.style.backgroundColor;
     
    if (bg2 == "yellow")
      {
        boton2.style.backgroundColor= "red";
        boton2.style.padding= "4px";
        console.log(boton2.style.backgroundColor)
    }
    else{
      boton2.style.backgroundColor= "yellow";
      console.log(boton2.style.backgroundColor)
    }
 }

 var boton3 = document.querySelector("#boton3");
 console.log(boton3)
 boton3.addEventListener('click', function(){
   cambiarColor()
   cambiarColor2()
 })

 // Mouseover y Mouseout
 var boton3 = document.querySelector("#boton3");
 console.log(boton3)
 boton3.addEventListener('mouseover', function(){
   boton3.style.backgroundColor = '#ccc'
 })

 var boton3 = document.querySelector("#boton3");
 console.log(boton3)
 boton3.addEventListener('mouseout', function(){
   boton3.style.backgroundColor = 'cyan'
 })

// Focus
var nombre = document.querySelector("#campo_nombre")
nombre.addEventListener("focus", function(){
  console.log("Estas dentro del input de campo nombre")
});
// BLur
var nombre = document.querySelector("#campo_nombre")
nombre.addEventListener("blur", function(){
  console.log("Estas fuera del input de campo nombre")
});
// Keydown
var nombre = document.querySelector("#campo_nombre")
nombre.addEventListener("keydown", function(event){
  console.log("Estas pulsando la tecla", String.fromCharCode(event.keyCode))
});
// Keypress
var nombre = document.querySelector("#campo_nombre")
nombre.addEventListener("keypress", function(event){
  console.log("Estas presionando la tecla", String.fromCharCode(event.keyCode))
});
//Keyup
var nombre = document.querySelector("#campo_nombre")
nombre.addEventListener("keypress", function(event){
  console.log("Has soltado la tecla", String.fromCharCode(event.keyCode))
});