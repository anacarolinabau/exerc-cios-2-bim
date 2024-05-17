let ipn1 = document.querySelector("#ipn1");
let ipn2 = document.querySelector("#ipn2");
let ipn3 = document.querySelector("#ipn3");
let ipn4 = document.querySelector("#ipn4");
let btcalcular = document.querySelector("#btcalcular");

function menorvalor(){
    let valor1 = Number(ipn1.value);
    let valor2 = Number(ipn2.value);
    let valor3 = Number(ipn3.value);
    let valor4 = Number(ipn4.value);
    if(valor1 < valor2, valor1 < valor3, valor1 < valor4) {
        alert (valor1);
    }
    else if(valor2 < valor1, valor2 < valor3, valor2 < valor4) {
        alert (valor2);
    }
    else if(valor3 < valor1, valor3 < valor2, valor3 < valor4) {
        alert (valor3);
    }
    else{
        alert (valor4);
    }
}

btcalcular.onclick = function() {
    menorvalor();
}