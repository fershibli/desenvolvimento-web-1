function somaN1N2() {
    n1 = document.getElementById('n1').value
    n2 = document.getElementById('n2').value
    resposta = document.getElementById('resposta')
    resposta.innerHTML = "Número 1 + Número 2 = " + (parseInt(n1) + parseInt(n2))
}