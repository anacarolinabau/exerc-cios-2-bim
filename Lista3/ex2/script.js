let ipquant = document.querySelector("#ipquant");
let btcalcular = document.querySelector("#btcalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcular(){
    let cavalos = (ipquant.value);
    let result = cavalos * 4;
    h3Resultado.innerHTML = 
    "Quantidade de ferraduras necessarias:"+result;
} 

btcalcular.onclick = function(){
    calcular();
}