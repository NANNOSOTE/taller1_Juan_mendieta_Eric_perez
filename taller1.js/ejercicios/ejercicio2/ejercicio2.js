//Leer un número e imprimir un mensaje si es positivo o negativo.
'use estrict';
let numero = prompt('introduzca el numero a evaluar');
if(numero>0){
    alert(`el numero:${numero} es positivo`);  
}else{
    if(numero<0)
        alert(`el numero:${numero} es negativo`);
    else alert(`el numero:${numero} es cero`);
}