let ipnome = document.querySelector("#ipnome");
let ipidade = document.querySelector("#ipidade");
let btcalc = document.querySelector("#btcalc");
let h3Resultado = document.querySelector("#h3Resultado");

function verificar(){
    let nome = (ipnome.value);
    let idade = (ipidade.value);
    let dias = idade * 365;
    h3Resultado.innerHTML = nome+ "voce tem" +dias;
}

btcalc.onclick = function(){
    verificar();
}