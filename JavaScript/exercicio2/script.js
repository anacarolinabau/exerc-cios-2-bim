let ipvalorkg = document.querySelector("#ipvalorkg");
let ipvalorkgconsumido = document.querySelector("#ipvalorkgconsumido");
let btmultiplicar = document.querySelector("#btmultiplicar");
let h3Resultado = document.querySelector("#h3Resultado");

function multiplicarValores(){

    let valor1 = Number(ipvalorkg.value);
    let valor2 = Number(ipvalorkgconsumido.value);
    let resultado = valor1 * valor2;
    h3Resultado.textContent = String(resultado);

}


btmultiplicar.onclick = function(){

    multiplicarValores();
}