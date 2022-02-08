'use strict'

// DOM

var micaja = document.getElementById("micaja");

console.log(micaja);
// Dentro del objeto hay:

    // Inner HTML (ME PERMITE ASIGNAR UN NUEVO VALOR)
var innercaja = document.getElementById("micaja").innerHTML
console.log(innercaja);
// se puede cambiar
micaja.innerHTML =  "Texto desde js";
    //Style 
//los valores deben ir entre comullas
micaja.style.background = "grey";
micaja.style.padding = "3px";
micaja.style.color = "white";

function backcolor(color){
    // por alguna razon lo tengo que invocar con string 
    micaja.style.background = color; 
}

    //ClassName
    //sirve para agregar clases
micaja.className = "container box"
 
    //Query selector
    // Es mas elegante
var otraforma = document.querySelector("#micaja"); // el . es por id, # por clase igual que en className

otraforma.style.background = "red"

    // Conseguir elementos por sus etiqueta
console.log("Somos todos los divs")
    var todosLosDivs = document.getElementsByTagName("div")
console.log(todosLosDivs)
console.log(todosLosDivs[2].innerHTML)
todosLosDivs[2].innerHTML = "Otro texto para el segundo elemento"
console.log(todosLosDivs[2].innerHTML)
 
    //FOR IN con DOCUMENT CREATE Y APPEND
var palabras; 
for (palabras in todosLosDivs){
    // ESto se creo por que aparecieron unos undefined parte de
    // htmlcollection (array de html) y con esto se evita que se 
    // escriban
    if (typeof todosLosDivs[palabras].textContent == "string"){
    // Crear tag VOLADOR
    var parrafo = document.createElement("p");
    // Crear texto VOLADOR
    var texto = document.createTextNode(todosLosDivs[palabras].textContent);
    // Atar texto al tag
    parrafo.appendChild(texto);
    // Seleccionar un elemento y atar el parrafo
    document.querySelector("#misection").appendChild(parrafo);
}
};
//  ppend() & prepend()
//  son para insertar contenido dentro de un
//  elemento (haciendo que el contenido sea su hijo) mientras que 
//  after() & before() 
//  insertar contenido fuera de un elemento 
//  (haciendo que el contenido sea su hermano). 

    // Conseguir elementos por sus clase (Mejor para varios elementos)
console.log('==============================')
var divRojos=document.getElementsByClassName("rojos")

var rojo;
console.log(divRojos[rojo])
for (rojo in divRojos){
    if (divRojos[rojo].className == "rojos"){
    divRojos[rojo].style.background = "red"
}
}; 