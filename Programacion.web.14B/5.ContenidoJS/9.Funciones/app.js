'use strict';
//1.Funcion clasica
function multiplicacion(num1, num2) {
    return num1 * num2;
}

//Invocacion de la función

console.log(multiplicacion(3,6));

//Funcionn tipo flecha
const potencia = (base, potencia)=>{
    return (Math.pow(base,potencia));
}

let resultado = potencia(2,4);
console.log(resultado);
