'use strict'

// Local storage

// Comprobacion del local storage
if (typeof(Storage) !== "undefined"){
    console.log("Localstorage dispobible")
} else{
    console.log("Localstorage NO dispobible")
}

// Guardar dato / KEY  en el local storage
localStorage.setItem("titulo", "Curso de Mauri");

// Recuperar elemento / KEY
var div =document.querySelector("div");
var titulo =localStorage.getItem("titulo");
div.innerHTML= titulo

//Guardar objetos con el metodo JSON.stringfy
var greenl = {
    hero: "Hal Jordan", power: "Magic ring", city: "Central"
}
localStorage.setItem("linterna", JSON.stringify(greenl));

//Recuperar objeto con el metodo JSON.parse
var greenl2 = JSON.parse(localStorage.getItem("linterna"));
console.log(greenl2)
//IMPORTANTE APPEND
div.append(greenl2.hero)
// para borrar
localStorage.removeItem('usuario')

// para limpiar todo
localStorage.clear()
