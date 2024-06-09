let ipvalor = document.querySelector("#ipvalor");
let btcalc = document.querySelector("#btcalc");
let h3Resultado = document.querySelector("#h3Resultado");

function conta(){
    let valor = Number (ipvalor.value);
    let carlos = Math.trunc (valor/3);
    let andre = Math.trunc (valor/3);
    let felipe = valor - (carlos/andre);

    h3Resultado.innerHTML = 
    "valor de Carlos:"+carlos+
    "valor de Andre:"+andre+
    "valor de Felipe:"+felipe;

}

btcalc.onclick = function(){
    conta();
}