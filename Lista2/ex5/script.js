let ipnome1 = document.querySelector("#ipnome1");
let ipnome2 = document.querySelector("#ipnome2");
let ipnome3 = document.querySelector("#ipnome3");
let ipano1 = document.querySelector("#ipano1");
let ipano2 = document.querySelector("#ipano2");
let ipano3 = document.querySelector("#ipano3");
let btverificar = document.querySelector("#btverificar");
let h3Resultado = document.querySelector("#h3Resultado");

function verificar (){
    let n1 = (ipnome1.value);
    let n2 = (ipnome2.value);
    let n3 = (ipnome3.value);
    let a1 = (ipano1.value);
    let a2 = (ipano2.value);
    let a3 = (ipano3.value);

    let ano1 = 2024 - a1;
    let ano2 = 2024 - a2;
    let ano3 = 2024 - a3;
    let nome1 = n1;
    let nome2 = n2;
    let nome3 = n3;


}

btverificar.onclick = function(){
    verificar();
}
