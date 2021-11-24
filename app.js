var numeroSecreto = parseInt(Math.random() * 101);
console.log(numeroSecreto);
var couterVal = 0;

function chutar() {
    var gameOver = updateDisplay(++couterVal);
    console.log(gameOver)
    var resultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    if (chute == numeroSecreto) {
        resultado.innerHTML = "Você acertou";
    } else if (gameOver >= 5) {
        resultado.innerHTML = "VOCÊ É UMA AMEBA";
    } else if (chute > 100 || chute < 0) {
        resultado.innerHTML = "Você deve digitar um número de 0 a 100";
    } else if (numeroSecreto > chute) {
        resultado.innerHTML = "O Numero secreto é maior que " + chute;
    } else if (numeroSecreto < chute) {
        resultado.innerHTML = "O Numero secreto é menor que " + chute;
    }
    document.getElementById("valor").value = "";
}
function updateDisplay(val) {
    console.log("val", val);
    document.getElementById("counter-label").innerHTML = val;
    return val;
}
