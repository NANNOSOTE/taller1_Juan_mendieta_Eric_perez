'use strict';
const mySection3 = document.createElement('section');
//Asociar atributos
mySection3.id = 'sec3';
mySection3.className = 'seccion_3';
mySection3.style= "color: red; font size: 12px; font-weight: bold";
mySection3.textContent = "<strong> Hola fui creado desde codigo</strong>";
//Insertar en el DOM
document.body.appendChild(mySection3);
let div1 = document.getElementById('div1');
mySection3.innerHTML = <b><i>Hola</i> soy texto con innerHTML</b>;
div1.appendChild(mySection3);


