function calcularEx6() {
    const salarioBruto = parseFloat(document.getElementById('salarioBruto').value);
    const horasTrabalhadas = parseFloat(document.getElementById('horasTrabalhadas').value);
    const refeicoes = parseFloat(document.getElementById('refeicoes').value);
    const resultadoElemento = document.getElementById('resultadoEx6');

    if (!horasTrabalhadas || isNaN(refeicoes) || !salarioBruto) {
        resultadoElemento.innerHTML = "ERRO: preencha os campos de salário bruto, horas semanais e refeições."
        resultadoElemento.style.color = "red";
        return;
    }

    const calculoRefeicoes = refeicoes * 1.5;

    const valorPorHora = (salarioBruto / (22*8));
    let salarioLiquido;
    if (horasTrabalhadas > 40) {
        salarioLiquido = (valorPorHora * 40) + ((horasTrabalhadas - 40) * valorPorHora * 3);
    } else {
        salarioLiquido = valorPorHora * horasTrabalhadas;
    }

    salarioLiquido -= calculoRefeicoes;

    resultadoElemento.innerHTML = `salário bruto: ${salarioBruto}\ndesconto de refeição: ${calculoRefeicoes}\nsalário líquido: ${salarioLiquido.toFixed(2)}`;
    resultadoElemento.style.color = "";
}