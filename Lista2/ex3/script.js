let ipnumber1 = document.querySelector("#ipnumber1");
let ipnumber2 = document.querySelector("#ipnumber2");
let btcalcular = document.querySelector("#btcalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcular(){
    let valor1 = Number(ipnumber1.value);
    let valor2 = Number(ipnumber2.value);

    let r1 = valor1 + valor2;

    let r2 = valor1 - valor2;

    let r3 = valor1 * valor2;

    let r4 = valor1 / valor2;

    h3Resultado.innerHTML =
    "Soma: "+r1+
    "Subtracao: "+r2+
    "Multiplicacao: "+r3+
    "Divisao: "+r4; 

}

btcalcular.onclick = function(){
    calcular();
}