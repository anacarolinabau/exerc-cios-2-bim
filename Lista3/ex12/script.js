
function separarNumero() {
    var numero = document.getElementById(ipnumero.value);

    if (numero < 100 || numero > 999) {
        document.getElementById("resultado").innerText = "Por favor, digite um número de três dígitos.";
    } else {
        var centena = Math.floor(numero / 100);
        var dezena = Math.floor((numero % 100) / 10);
        var unidade = numero % 10;

        document.getElementById("resultado").innerText = "Centena: " + centena + ", Dezena: " + dezena + ", Unidade: " + unidade;
    }}