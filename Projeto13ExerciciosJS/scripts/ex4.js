function calcularEx4() {
    const ano_nascimento = parseInt(document.getElementById('anoNascimento').value);
    const resultadoElemento = document.getElementById('resultadoEx4');

    if (!ano_nascimento) {
        resultadoElemento.innerHTML = "ERRO: digite o ano de nascimento."
        resultadoElemento.style.color = "red";
        return;
    }

    const data_hoje = new Date();
    const data_nascimento = new Date(ano_nascimento, 1);
    const anos = Math.floor((data_hoje.getTime() - data_nascimento.getTime()) / (1000 * 60 * 60 * 24 * 365.25));
    const meses = anos * 12;
    const dias = meses * 30;
    const horas = dias * 24;
    const minutos = horas * 60;
    const semanas = Math.floor(dias / 7);

    console.log("Anos: ", anos);
    console.log("Meses: ", meses);
    console.log("Dias: ", dias);
    console.log("Horas: ", horas);
    console.log("Minutos: ", minutos);
    console.log("Semanas: ", semanas);

    const data_2050 = new Date(2050, 1)
    const anos2050 = Math.floor((data_2050.getTime() - data_nascimento.getTime()) / (1000 * 60 * 60 * 24 * 365.25));

    console.log(`Em 2050 terá ${anos2050} anos.`)

    resultadoElemento.innerHTML = "Verifique os resultados no console!";
    resultadoElemento.style.color = "";
}