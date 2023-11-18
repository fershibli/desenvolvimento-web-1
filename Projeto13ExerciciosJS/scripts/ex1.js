function ex1calcular() {
    const salario = parseFloat(document.getElementById('salario').value);
    const aumento = parseFloat(document.getElementById('aumento').value) / 100;
    const resultadoElemento = document.getElementById('resultadoEx1');

    if (!salario || !aumento) {
        resultadoElemento.innerHTML = "ERRO: digite salário e aumento."
        resultadoElemento.style.color = "red";
        return;
    }
    const novo_salario = salario * (1 + aumento);

    resultadoElemento.innerHTML = `R$ ${novo_salario}`;
    resultadoElemento.style.color = "";
}