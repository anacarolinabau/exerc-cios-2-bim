let ipdia = document.querySelector("#ipdia");
let ipmes = document.querySelector("#ipmes");
let btcalcular = document.querySelector("#btcalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calc(){
    let dia = (ipdia.value);
    let mes = (ipmes.value);
    let result = mes * 30;
    let result2 = result + dia;
    h3Resultado.innerHTML = result2;
}

btcalcular.onclick = function(){
    calc();
}