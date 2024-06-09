let ipraio = document.querySelector("#ipraio");
let btarea = document.querySelector("#btarea");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularA (){
    let raio = (ipraio.value);
    let area = raio * 3.14;
    h3Resultado.innerHTML = area;
}
btcalcular.onclick = function(){
    calcularA();
}