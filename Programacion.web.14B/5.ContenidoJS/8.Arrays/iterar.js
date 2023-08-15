'use strict';
const myArray1 =[3,6,9,12,15,18,'1',true]; //<-------Corchetes
let myArray2 = new Array('2','1','a','e','i'); 
//Iterar arreglos
for (let i = 0; i < myArray1.length; i++){
    //console.log(myArray1[i]);
}

//Variacion de for
for(let j of myArray2){
    //console.log(j);
}

for(let k in myArray1){
    //console.log(myArray1[k]);
}

//foreach
//=> Funcion anonima
myArray2.forEach((e)=>console.log(e));
