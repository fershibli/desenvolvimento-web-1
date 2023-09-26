function somaN1N2() {
    elemento_n1 = document.getElementById('n1').value
    elemento_n2 = document.getElementById('n2').value
    elemento_resposta = document.getElementById('resposta')
    resultado = (Number(elemento_n1) + Number(elemento_n2))
    elemento_resposta.innerHTML = "Número 1 + Número 2 = " + resultado
}