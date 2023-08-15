'use strict';
/**
 * Aritmeticos = suma +, resta -, * multiplicación, / división, % módulo, ^ potencia.
 * +=suma y asignacion (*=, /=,%/)
 * Lógicos: >mayor, <menor, >=mayor igual, <=menor igual, == comparación no
 * estricta, === comparacación estricta, != no igual, !== no igual exacto, =asignación
 * Boolean: Y lógico &&, O lógico ||
 */
let number1 = 19;
let number2 = 19;
let suma = number1 + number2;
let resta = number1 - number2;
let multiplicación = number1 * number2;
let división = number1 / number2;
let módulo = number1 % number2;
let potencia = number1 ^ number2;
console.log(suma, resta, multiplicacion, división, potencia, módulo);

let mayor = number1 > 2;
console.log(mayor);