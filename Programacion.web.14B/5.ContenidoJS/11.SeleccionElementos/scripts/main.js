'use strict';
//Seleccion de elementos del DOM
//Seleccion por id
const main = document.getElementById('main');
console.log(main);

//Seleccion por clase
const seccion1 = document.getElementsByClassName('seccion_1');
console.log(seccion1);

//Seleccion por name
const div_1 = document.getElementsByName('div_1');
console.log(div_1);

//Seleccion por queryselector #id,.class, mombre etiqueta

const titulo1 = document.querySelector('h1');
console.log(titulo1.textContent);

const div2 = document.querySelector('#div2');
console.log(div2.innerHTML);

const div3 = document.querySelector('.div3');
console.log(div3.innerHTML);
const mandarDato =() =>{
    const inputValor = document.querySelector('#valor').value;
    alert('El valor que usted introdujó es: ' + inputValor)
}


