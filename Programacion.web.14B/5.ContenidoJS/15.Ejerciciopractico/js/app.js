btnpromedio.onclick = function (){
    let arrayInput = document.querySelectorAll('#nota')
    let promedio = 0;
    arrayInput.forEach(e =>{
        if(parseFloat(e.value)){
            promedio = promedio + parseFloat(e.value);
        }
    })
}