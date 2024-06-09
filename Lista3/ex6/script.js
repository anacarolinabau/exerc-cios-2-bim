let ipkilo = document.querySelector("#ipkilo");
let btcalc = document.querySelector("#btcalc");
let h3Resultado = document.querySelector("#h3Resultado");

function calcular(){
    let peso = (ipkilo.value);
    let result = peso * 12;
    h3Resultado.innerHTML = 
    "Preço:"+result;
} 

btcalc.onclick = function(){
    calcular();
}