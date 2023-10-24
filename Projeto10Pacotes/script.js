let valorPacote = 0;

function calcularValorPacote() {
    let pacotes = document.querySelectorAll("input[name='pacotes']:checked");
    let qtdPacotes = pacotes.length;

    if (qtdPacotes == 1)
        return parseInt(pacotes[0].value);
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
    valorPacote = calcularValorPacote() + calcularValorServicos();
    console.log(valorPacote)
}