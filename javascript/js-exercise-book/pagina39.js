//Pagina 39

/* let gatillo = ""

while (gatillo.length < 10){
     gatillo += "#"
    console.log(gatillo)
}

*/

//Ejercicio Fizz Buzz
/*
let number = 0;

for (i = 0; i < 51; i++ ){
    
    if (i % 3 === 0 && i % 5 === 0 ){
        console.log("FizzBuzz")
    } else if (  i % 3 === 0){
        console.log("Fizz")
    
    } else if ( i % 5 === 0 ){
        console.log("Buzz")
    } else {
    console.log(i)
    }
}
*/

// Tablero de Ajedrez
/* 
let board = "#_";
let tamaño = 16;
let tablero = ""
for (let i = 0; i < tamaño; i++){

    tablero = tablero + board
}

for (let i = 0; i < tamaño; i++){
    console.log(tablero)
     } */

/* function min(a, b){
    return a < b? a : b
}
console.log (min (3,9))
console.log (min (10,8)) */

/* function esPar(n){
    if (n !== NaN && n > 0 ){
        return true;
    }else{console.log("No es un numero o es negativo")}
}
console.log(esPar(50))
console.log(esPar(75))
console.log(esPar("a")) */

/* function contarFs(linea, letra){
    let cont = 0;    
    let cont2 = 0;
    for (let i = 0; i < linea.length; i++){
        if ( linea[i] === "F") {
            cont ++
        }

        if ( linea[i] === letra) {
            cont2 ++
        } else {"error"}
        
    }
    console.log( 'Lineas con F : ' + cont + '   Lineas con ' + letra + ' :' + cont2)
}
contarFs("Falafel")
contarFs("FalaFFel")
contarFs("FalaFFel", 'a')
contarFs("FalaFFEl", 'e') */