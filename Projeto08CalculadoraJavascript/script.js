const elemento_n1 = document.getElementById('n1');
const elemento_n2 = document.getElementById('n2');
const elemento_resposta = document.getElementById('resposta');

function verificaVazio() {
    if (elemento_n1.value == "" || elemento_n2.value == "") {
        elemento_resposta.innerHTML = "Você esqueceu de preencher todos os campos!"
        elemento_resposta.style.color = "red"
        return true
    } else {
        elemento_resposta.style.color = "unset"
    }
    return false
}

function somar() {
    if (verificaVazio()) return;
    const resultado = (Number(elemento_n1.value) + Number(elemento_n2.value));
    elemento_resposta.innerHTML = "Número 1 + Número 2 = " + resultado;
}

function multiplicar() {
    if (verificaVazio()) return;
    const resultado = (Number(elemento_n1.value) * Number(elemento_n2.value));
    elemento_resposta.innerHTML = "Número 1 * Número 2 = " + resultado;
}