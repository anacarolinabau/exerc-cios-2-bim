let ipnumero1 = document.querySelector("#ipnumero1");
let ipnumero2 = document.querySelector("#ipnumero2");
let btverifique = document.querySelector("#btverifique");

function verificar (){
    let valor1 = (ipnumero1.value);
    let valor2 =(ipnumero2.value);
    if(valor1 > valor2){
        alert("numero 1 maior que numero 2");

    } else if(valor1 < valor2){
        alert("numero 1 menor que numero 2");

    } else{
        alert("numero 1 igual numero 2");

    }
}

btverifique.onclick = function() {
    verificar();
}
