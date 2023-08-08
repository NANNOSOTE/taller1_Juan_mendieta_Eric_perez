// Dado 4 notas de un estudiante, calcular el promedio del estudiante, imprimir las notas y el promedio.
'use strict';
let nota1 = parseFloat(prompt('dame la primera nota'));
let nota2 = parseFloat(prompt('dame la segunda nota'));
let nota3 = parseFloat(prompt('dame la tercera nota'));
let nota4 = parseFloat(prompt('dame la cuarta nota'));

let promedio = nota1+nota2+nota3+nota4/4;
alert(`segun sus notas ${nota1}, ${nota2}, ${nota3}, ${nota4}, su promedio es ${promedio}`);