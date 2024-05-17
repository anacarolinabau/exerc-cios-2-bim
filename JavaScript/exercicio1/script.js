let ipvalor1 = document.querySelector("#ipvalor1");
let ipvalor2 = document.querySelector("#ipvalor2");
let btsubtrair = document.querySelector("#btsubtrair");
let h3Resultado = document.querySelector("#h3Resultado");

function subtrairValores (){
    let valor1 = Number (ipvalor1.value);
    let valor2 = Number (ipvalor2.value);
    let resultado = valor1 - valor2;
    h3Resultado.textContent = String (resultado);
}

btsubtrair.onclick = function(){
    subtrairValores();
}