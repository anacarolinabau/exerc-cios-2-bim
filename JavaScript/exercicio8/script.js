let ipcodigo = document.querySelector("#ipcodigo");
let btprocure = document.querySelector("#btprocure");

function procurarp (){
    let codigo = Number(ipcodigo.value);
    if(codigo == 0o1){
        alert("Parafuso");
    }else if(codigo == 0o2){
        alert("Porca");
    }else if(codigo == 0o3){
        alert("Prego");
    }else{
        alert("Diversos");
    }
}

btprocure.onclick = function(){
    procurarp();
}