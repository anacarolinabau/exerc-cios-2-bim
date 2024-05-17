let ipvalor1 = document.querySelector("#ipvalor1");
let ipvalor2 = document.querySelector("#ipvalor2");
let ipvalor3 = document.querySelector("#ipvalor3");
let btcalcular = document.querySelector("#btcalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcular(){
    let vlr1 = Number(ipvalor1.value);
    let vlr2 = Number(ipvalor2.value);
    let vlr3 = Number(ipvalor3.value);

    //Calcular a média aritmética
    let mediaaritmetica = (vlr1 + vlr2 + vlr3) / 3;

    //Calcular a média ponderada (3,2,5)
    let somaValoresPesos = (vlr1 * 3) + (vlr2 * 2) + (vlr3 * 5);
    let somaPesos = 3 + 2 + 5;
    let mediaponderada = somaValoresPesos / somaPesos;

    //Soma das médias
    let somaMedias = mediaaritmetica + mediaponderada;

    //Média das médias
    let mediaMedias = somaMedias / 2;

    h3Resultado.innerHTML = 
    "Media Aritmetica: "+mediaaritmetica+
    "Media Ponderada: "+mediaponderada+
    "Soma das Medias: "+somaMedias+
    "Media das Medias: "+mediaMedias;
}

btcalcular.onclick = function(){
    calcular();

}