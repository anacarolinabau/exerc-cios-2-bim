let idtime = document.querySelector("#idtime");
let btcalc = document.querySelector("#btcalc");
let h3Resultado = document.querySelector("#h3Resultado");

function timesacidentes(){

    let time = Number(idtime.value);
    let anos = time/365;
    let meses = time/30;
    let dias = time;
    h3Resultado.innerHTML =
    "tempo em anos:"+anos+
    "tempo em meses:"+meses+
    "tempo em dias:"+dias;
}

btcalc.onclick = function(){
    timesacidentes();
}
