let ipvendido = document.querySelector("#ipvendido");
let ipmeta = document.querySelector("#ipmeta");
let ipmetaMin = document.querySelector("#ipmetaMin");
let btverificar = document.querySelector("#btverificar");
let h3Resultado = document.querySelector("#h3Resultado");


function verifique(){
    let venda = Number(ipvendido.value);
    let metadomes = Number(ipmeta.value);
    let metaminima = Number(ipmetaMin.value);

        if(venda >= metadomes){
        alert("Meta atingida");
        }
        else if( venda >= metaminima){
        alert("Meta mínima atingida");
        }
        else if(venda < metadomes, venda < metaminima){
        alert("Nenhuma meta atingida");
        }
        else{
            
        }
        let meta = venda / metadomes;
        let metaMin = venda / metaminima;

        h3Resultado.innerHTML = 
        "Percentual para atingir meta: "+meta+
        "Percentual para atingir meta mínima: "+metaMin;
}

btverificar.onclick = function(){
    verifique();
}