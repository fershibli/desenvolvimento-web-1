function somaN1N2() {
    const elemento_n1 = document.getElementById('n1').value;
    const elemento_n2 = document.getElementById('n2').value;
    const elemento_resposta = document.getElementById('resposta');
    const resultado = (Number(elemento_n1) + Number(elemento_n2));
    elemento_resposta.innerHTML = "Número 1 + Número 2 = " + resultado;
}