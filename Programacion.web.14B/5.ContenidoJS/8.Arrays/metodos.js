'use strict';
const myArray1 =[3,6,9,12,15,18,'1',true]; //<-------Corchetes
let myArray2 = new Array('2','1','a','e','i');

//1. Flitrar datos->filter
let myArrayResult = myArray1.filter((e)=> e>10);
//console.log(myArrayResult);

//2. Buscar -> some = arroja si encuentra el valor sino retorna false
//console.log(myArray2.some((e)=> e === "a"));

//3. BUscar, find -> si lo encuentra retorna el valor sino retorna undefined
console.log(myArrayResult.find((e)=> e == "18"));


/* Buscar metodos diferentes a los vistos para trabajar con arreglos*/
