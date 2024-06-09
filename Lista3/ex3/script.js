let ipbroas = document.querySelector("#ipbroas");
let ippaes = document.querySelector("#ippaes");
let btcalcular = document.querySelector("#ipcalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcular(){
    let pao = (ippaes.value);
    let broa = (ipbroas.value);
    let paov = pao * 0.12;
    let broav = broa * 1.50;
    let result = paov + broav;
    let result10 = (paov + broav) - 0.10;
    h3Resultado.innerHTML = "Foram vendidos:"+result+"reais"+
    result10+"vai para a poupança";
}

btcalcular.onclick = function(){
    calcular();
}