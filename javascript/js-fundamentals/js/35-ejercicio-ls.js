'use strict' 

var formulario = document.querySelector("#formulario");
var formulario2 = document.querySelector("#formulario2");
var removepelicula = document.querySelector("#removepelicula");

var list = document.querySelector("#list");



    
formulario.addEventListener('submit', function() {
    var titulo = document.querySelector("#addpelicula").value
    localStorage.setItem(titulo,titulo);

})

    

for (var i in localStorage){
    if (typeof localStorage[i]== "string"){
        var li = document.createElement("li");
        li.append(localStorage[i])
        list.append(li)
    }};



    formulario2.addEventListener('submit', function() {
        var titulo = document.querySelector("#removepelicula").value;
        if(titulo.length >=1){
            localStorage.removeItem(titulo,titulo);
            
        }}
    );



