// Leer un número determinar si es par o impar e imprimir el mensaje.
'use strict';
let parImpar= parseFloat(prompt('dame un numero'));
let resultado= (parImpar%2===0)? "es par" : "es impar";
alert(resultado);