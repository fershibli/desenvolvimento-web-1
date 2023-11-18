function calcularEx3() {
    const nota1 = parseFloat(document.getElementById('nota1').value) * 0.3;
    const nota2 = parseFloat(document.getElementById('nota2').value) * 0.7;
    const resultadoElemento = document.getElementById('resultadoEx3');

    if (!nota1 || !nota2) {
        resultadoElemento.innerHTML = "ERRO: digite a 1ª e a 2ª nota."
        resultadoElemento.style.color = "red";
        return;
    }

    resultadoElemento.innerHTML = nota1 + nota2;
    resultadoElemento.style.color = "";
}