/** Determinar si un numero es positivo o negativo */
'use strict';
let numero = parseFloat(prompt('Introduzca el número a evaluar'));
/**
 * Estructura de control
 * if else, switch, for, while, do while
 */
if (numero > 0) {
    alert(`El número: ${numero} es positivo`); //template string, interpoleracion de variables
    let suma = numero + 2;
    alert("La suma es:" +suma)
} else{
    if (numero < 0)
        alert(`El número: ${numero} es negativo`);
    else alert(`El número: ${numero} es cero`);
}

/**
 * Ternario. Determinar si un numero es par o inpar
 */
let parImpar = parseFloat(prompt("Dame un número"));
let resultado = (parImpar %2 === 0) ? "Es par" : "Es impar";
alert(resultado);
