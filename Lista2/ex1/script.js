let ipdolaratual = document.querySelector("#ipdolaratual");
let btcalcular = document.querySelector("#btcalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularaumento (){
    let valor1 = Number(ipdolaratual.value);

    let r0 = valor1 * 0.01;
    let r1 = valor1 + r0;

    let r2 = valor1 * 0.02;
    let r3 = valor1 + r2;

    let r4 = valor1 * 0.05;
    let r5 = valor1 + r4;

    let r6 = valor1 * 0.10;
    let r7 = valor1 + r6;

    h3Resultado.innerHTML = 
    "Aumento de 1% = "+r1+
    "Aumento de 2% = "+r3+
    "Aumento de 5% = "+r5+
    "Aumento de 10% = "+r7;

}

btcalcular.onclick = function(){
    calcularaumento();
}