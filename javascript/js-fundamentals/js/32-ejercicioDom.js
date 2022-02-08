'use strict'
// con la funcion load no hace falta cargar con onload desde el html
window.addEventListener('load', function () {
    console.log('dom cargado')

    var formulario = document.querySelector("#formulario")
    
    var submit = document.querySelector("#submit")
    var recoger = document.querySelector("#recoger")

    // para que no me genere la pagina nuevamente
    // formulario.onsubmit = function (e) {
    //     e.preventDefault();
    // }
    //otra posibilidad es poner en form del html
    // action="#" onsubmit="return false"


    formulario.addEventListener("submit", function () {
        console.log("evento Submit capturado")
    })

    recoger.addEventListener("click", function () {
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = parseInt(document.querySelector("#edad").value);
        console.log(nombre, apellido, edad)
 
if(nombre.trim() == null || nombre.trim().length == 0){
    console.log("EL NOMBRE NO ES VALIDO");
    document.querySelector("#error").innerHTML = "nombre no valido";
    
    return false; // no deja que se siga ejecutando
}    else {
        document.querySelector("#error").style.display = "none"
    }

if(apellido.trim() == null || apellido.trim().length == 0){
    console.log("EL APELLIDO NO ES VALIDO");
    document.querySelector("#error").innerHTML = "apellido no valido";
    return false;
}    else {
        document.querySelector("#error").style.display = "none"
    }

if(edad == null || edad.length <= 0 || isNaN(edad)){
    console.log("EL EDAD NO ES VALIDO");
    document.querySelector("#error").innerHTML = "edad no valido";
    return false;
}else {
        document.querySelector("#error").style.display = "none"
    }


          // Crear tag VOLADOR
        var parrafo = document.createElement("p");
        // Crear texto VOLADOR
        var texto = document.createTextNode(nombre + " " + apellido + " " + edad  + " ");
            // Atar texto al tag
    parrafo.appendChild(texto);

    
    // Seleccionar un elemento y atar el parrafo
    document.querySelector("#midiv").appendChild(parrafo);

        console.log("evento Recoger capturado ")
        console.log(nombre, apellido, edad)
    })
})
