function calcularEx2() {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoElemento = document.getElementById('resultadoEx2');

    if (!base || !altura) {
        resultadoElemento.value = "ERRO: digite base e altura."
        resultadoElemento.style.color = "red";
        return;
    }

    resultadoElemento.value = `${(base * altura) / 2}m²`;
    resultadoElemento.style.color = "";
}