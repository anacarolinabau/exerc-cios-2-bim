let ipx1 = document.querySelector("#ipx1"); 
let ipx2 = document.querySelector("#ipx2"); 
let ipy1 = document.querySelector("#ipy1"); 
let ipy2 = document.querySelector("#ipy2"); 
let btcalcular = document.querySelector("#btcalcular"); 
let h3Resultado = document.querySelector("#h3Resultado");

function calcular(){
   let X1 = Number (ipx1.value); 
   let X2 = Number (ipx2.value); 
   let Y1 = Number (ipy1.value); 
   let Y2 = Number (ipy2.value); 
   let subx = X2 - X1; 
   let suby = Y2 - Y1; 
   let quadx = subx * subx; 
   let quady = suby * suby; 
   let soma = quadx + quady; I

   let raiz = Math.sqrt(soma);
   h3Resultado.innerHTML = "A distancia entre os dois pontos é: "+raiz;
   }

   btcalcular.onclick = function(){
      calcular();
   }