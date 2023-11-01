let valorPacote = 0;

function calcularValorPacote() {
    let pacotes = document.querySelectorAll("input[name='pacotes']:checked");
    let qtdPacotes = pacotes.length;

    if (qtdPacotes == 1)
        return parseInt(pacotes[0].value);

    return 0;
}

function calcularValorServicos() {
    let valorServicos = 0
    let servicos = document.querySelectorAll("input[type='checkbox']:checked");
    for (let i = 0; i < servicos.length; i++) {
        valorServicos += parseInt(servicos[i].value);
    }
    return valorServicos;
}

function calcularDesconto() {
    const valorPacoteCalculado = calcularValorPacote();
    const valorServicoCalculado = calcularValorServicos();
    valorPacote = valorPacoteCalculado + valorServicoCalculado;
    const texto = document.getElementById("texto-final");
    const nome = document.getElementById("nome").value;
    texto.innerHTML = `${nome}, seu pacote custará ${valorPacoteCalculado} e os serviços adicionais custarão ${valorServicoCalculado}.`
    console.log(valorPacote)
}

