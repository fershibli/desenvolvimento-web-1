let valorPacote = 0;

function calcularDesconto() {
    let pacotes = document.querySelectorAll("input[name='pacotes']:checked");
    let qtdPacotes = pacotes.length;

    if (qtdPacotes == 1)
        console.log(pacotes[0].value);

    let servicos = document.querySelectorAll("input[type='checkbox']:checked")
    for (let i = 0; i < servicos.length; i++) {
        console.log(servicos[i].value);
    }
}