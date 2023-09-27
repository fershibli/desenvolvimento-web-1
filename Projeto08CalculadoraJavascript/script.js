const elemento_n1 = document.getElementById('n1');
const elemento_n2 = document.getElementById('n2');
const elemento_resposta = document.getElementById('resposta');

function somar() {
    const resultado = (Number(elemento_n1.value) + Number(elemento_n2.value));
    elemento_resposta.innerHTML = "Número 1 + Número 2 = " + resultado;
}

function multiplicar() {
    const resultado = (Number(elemento_n1.value) * Number(elemento_n2.value));
    elemento_resposta.innerHTML = "Número 1 * Número 2 = " + resultado;
}