'use strict';
//Mediante propiedad
const btnPropiedad = document.getElementById('btn1Promedio');
btnPropiedad.onclick = function() {
    promedio();
};
//Mediante .addEventListener
const btnAddEvent = document.getElementById('btn2Promedio');
btnAddEvent.addEventListener = ('click', () =>{
    promedio();
});



//Funcion para calculo de promedio
const promedio = () => {
    let cantNotas =promt("Introduzca la cantidad de notas");
    if (!isNaN(parseInt(cantNotas))){
        /**
         * isNaN evalua si NO es un numero
         */
        let nota = 0;
        let sumaNotas = 0;
        for (let i = 0; i < cantNotas; i++) {
            nota = prompt("Introduzca la nota: ");
            sumaNotas += parseFloat(nota); //suma notas =   suma notas + nota;
        }
        let promedio = sumaNotas / cantNotas;
        alert("El promedio es: " + promedio);
    } else {
        alert(`La cantidad de notas ${cantNotas} es inválida`);
}
}