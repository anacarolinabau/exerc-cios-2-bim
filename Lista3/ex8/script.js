let ippequenas = document.querySelector("#ippequenas");
let ipmedias = document.querySelector("#ipmedias");
let ipgrandes = document.querySelector("#ipgrandes");
let btcalcular = document.querySelector("#btcalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcular(){
    let peq = (ippequenas.value);
    let med = (ipmedias.value);
    let grand = (ipgrandes.value);
    let valor1 = peq * 10;
    let valor2 = med * 12;
    let valor3 = grand * 15;
    let result = valor1 + valor2 + valor3;
    h3Resultado.innerHTML = result;
}

btcalcular.onclick = function(){
    calcular();
}

