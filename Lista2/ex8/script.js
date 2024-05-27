let ipNimpar = document.querySelector("#ipNimpar");
let btverificar = document.querySelector("#btverificar");

function verificarn () {
    let valor1 = Number(ipNimpar.value);
    if (valor1 % 2 == 0) {
        alert("numero par");
    }else{
        alert("numero impar");
    }
}

btverificar.onclick = function(){
    verificarn();
}