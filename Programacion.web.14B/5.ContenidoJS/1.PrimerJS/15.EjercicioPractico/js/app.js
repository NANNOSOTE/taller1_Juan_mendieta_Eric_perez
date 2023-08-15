'use strict';
const btnOK = document.querySelector('#btn1Promedio');
const listaNotas = document.querySelector ('#listaNotas');
//Crear los elementos para promedio
const btnPromedio = document.createElement('button');
btnPromedio.type = 'button';
btnPromedio.textContent = "Calculo Promedio";
//Generar evento OK
btnOK.addEventListener("click", () => {
    let cantNotas = document.getElementById('cantidad_notas');
    cantNotas = parseInt(cantNotas);
    if ((cantNotas>=2) && (cantNotas<=10)){
    }
});
