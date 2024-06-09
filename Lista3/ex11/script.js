let ipsalario = document.querySelector("#ipsalario");
let btcalcular = document.querySelector("#btcalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcular (){
    let salario = (ipsalario.value);

    let salario15 = salario * 0.15;
    let salario8 = salario15 - 0.08;
    h3Resultado.innerHTML = 
    "salario inicial:"+salario+
    "salario mais 15%:"+salario15+
    "salario final:"+salario8;
}

btcalcular.onclick = function(){
    calcular();
}