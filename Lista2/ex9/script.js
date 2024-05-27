let ipNalunos = document.querySelector("#ipNalunos");
let ipNsalas = document.querySelector("#ipNsalas");
let btcalcular = document.querySelector("#btcalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function dividir(){
    let alunos = Number(ipNalunos.value);
    let salas = Number(ipNsalas.value);
    let calcular = alunos/salas;
    h3Resultado.innerHTML = 
    "Quantidade de alunos por sala: "+calcular;
    
}

btcalcular.onclick = function(){
    dividir();
}