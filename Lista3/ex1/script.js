let ipbase = document.querySelector("#ipbase");
let ipaltura = document.querySelector("#ipaltura");
let btcalcular = document.querySelector("#btcalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcular(){
    let base = (ipbase.value);
    let alt = (ipaltura.value);
    let result = base * alt;
    h3Resultado.innerHTML = 
    "Area:"+result;
} 

btcalcular.onclick = function(){
    calcular();
}