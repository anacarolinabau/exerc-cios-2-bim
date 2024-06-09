let ipgasolina = document.querySelector("#ipgasolina");
let btcalcular = document.querySelector("#btcalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcular(){
    let gasolina = (ipgasolina.value);
    let resultado = gasolina / 4.50;
    h3Resultado.innerHTML = "Com o valor colocado foi possível colocar"+resultado+"litros de gasolina a 4,50 o litro";
}

btcalcular.onclick = function(){
    calcular();
}