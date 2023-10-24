function calcularDesconto() {
    let pacotes = document.querySelectorAll("input[name='pacotes']:checked");
    let qtdPacotes = pacotes.length;

    if (qtdPacotes == 1)
        console.log(pacotes[0].value);
}