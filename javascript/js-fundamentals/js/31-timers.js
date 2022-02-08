'use strict'
// setInterval
// para que el clearTimeOut y el clearInterval funcionen 
// hay que guardarlo en una variable

var stop = document.querySelector('#stop')
var start = document.querySelector('#start')


function laFuncionIntervalo(){
    var laVariableIdDelIntervalo = setInterval(function(){
        console.log("Set interval ejecutado");
        console.log(laVariableIdDelIntervalo);
        console.log("=======================")
        
        var encabezado = document.querySelector("h1");
        if (encabezado.style.backgroundColor == "black"){
            encabezado.style.backgroundColor = "red";
            
        } else {
            encabezado.style.backgroundColor = "black";
        }
    }, 1000);
    return laVariableIdDelIntervalo;
};
var laVariableIdDelIntervalo = laFuncionIntervalo();
console.log(laVariableIdDelIntervalo);
console.log("+++++++++++++++");

stop.addEventListener("click", function(){
    console.log("Has parado el intervalo");
    clearInterval(laVariableIdDelIntervalo)
});

start.addEventListener("click", function(){
    console.log("Has iniciado el intervalo");
    clearInterval(laVariableIdDelIntervalo)
    laFuncionIntervalo();
})