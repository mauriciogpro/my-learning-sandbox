'use strict'

 var numero1 = parseInt(prompt('Introduce el primer numero', 0));
 var numero2 = parseInt(prompt('Introduce el segundo numero', 0));

 console.log(numero1, numero2);

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('Introduce el primer numero', 0));
    numero2 = parseInt(prompt('Introduce el segundo numero', 0));
}

  if (numero1 == numero2){
      alert('los numero son iguales')
  } else if (numero1 > numero2) {
      alert(`el numero ${numero1} es mayor a ${numero2} `)
  }else if (numero1 < numero2)
  alert(`el numero ${numero2} es mayor a ${numero1} `)