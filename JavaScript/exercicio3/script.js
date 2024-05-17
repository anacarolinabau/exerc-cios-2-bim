let ipsaldo1 = document.querySelector("#ipsaldo1");
let btreajustar = document.querySelector("#btreajustar");
let h2Resultado = document.querySelector("#h2Resultado");

function reajuste(){
    let valor1 = Number(ipsaldo1.value);
    let resultado = valor1 * 0.01;
    let resultado2 = valor1 + resultado;
    h2Resultado.textContent = String(resultado2);
}

btreajustar.onclick = function(){
    reajuste();
}