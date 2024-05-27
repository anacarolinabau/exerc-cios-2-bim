let ipsabor = document.querySelector("#ipsabor");
let iprefri = document.querySelector("#iprefri");
let btvalor = document.querySelector("#btvalor");
let h3Resultado = document.querySelector("#h3Resultado");


function valorfinal (){
    let valor1 = Number(iprefri.value);
    let escrita = (ipsabor.value);

    let refris = valor1 * 7;
    let sabor = escrita;
    let total = refris + 48;

    h3Resultado.innerHTML = 
    "Sabores de Pizza:"+sabor+
    "Valor do refri:"+refris+
    "Valor total:"+total;

}

btvalor.onclick = function(){
    valorfinal();
}