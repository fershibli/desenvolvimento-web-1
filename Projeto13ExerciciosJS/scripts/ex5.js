function calcularEx5() {
    const gasolina = parseFloat(document.getElementById('gasolina').value);
    const distancia = parseFloat(document.getElementById('distancia').value);
    const resultadoElemento = document.getElementById('resultadoEx5');

    if (!gasolina || !distancia) {
        resultadoElemento.innerHTML = "ERRO: preencha os campos de gasolina e distância."
        resultadoElemento.style.color = "red";
        return;
    }

    resultadoElemento.innerHTML = `O consumo médio foi de ${distancia/gasolina}km/L`;
    resultadoElemento.style.color = "";
}