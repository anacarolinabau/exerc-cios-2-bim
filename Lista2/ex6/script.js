let ipMedia = document.querySelector("#ipMedia");
let btVerificar = document.querySelector("#btVerificar");

function VerificarMedia(){
    let media = Number (ipMedia.value);

if(media >= 6.0){
alert("Aluno Aprovado!!");

}else if(media > 4.0) {
    alert("Fazer prova substitutiva :|");

}else{
    alert("Aluno Reprovado :(");

}
}
btVerificar.onclick = function(){
    VerificarMedia();
}