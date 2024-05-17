let ipn1 = document.querySelector("#ipn1");
let ipn2 = document.querySelector("#ipn2");
let btcalcular = document.querySelector("#btcalcular");

function maiorvalor() {
    let valor1 = Number(ipn1.value);
    let valor2 = Number(ipn2.value);
    if(valor1 > valor2) {
        alert (valor1);
    }
    else{
        alert (valor2);
    }
}

btcalcular.onclick = function(){
    maiorvalor();
}