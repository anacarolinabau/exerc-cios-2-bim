let ipNpessoas = document.querySelector("#ipNpessoas");
let h3Resultado = document.querySelector("#h3Resultado");
let btcalcular = document.querySelector("#btcalcular");

function calcular(){
    let valor = Number(ipNpessoas.value);
    let ovos = valor * 2;
    let queijo = valor * 50;

    h3Resultado.innerHTML = 
    "Quantidade de ovos:"+ovos+
    "Gramas de queijo:"+queijo;
}

btcalcular.onclick = function(){
    calcular();
}