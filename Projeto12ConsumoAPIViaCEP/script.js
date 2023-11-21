const submitCep = document.getElementById('submitCep');
const inputCep = document.getElementById('inputCep');
const logradouroFromCep = document.getElementById("logradouroFromCep");
const complementoFromCep = document.getElementById("complementoFromCep");
const bairroFromCep = document.getElementById("bairroFromCep");
const localidadeFromCep = document.getElementById("localidadeFromCep");
const ufFromCep = document.getElementById("ufFromCep");

function cepMask(event) {
    if (event.keyCode == 8) { //backspace
        return;
    }
    let cepInput = event.target
    let cepValue = cepInput.value;
    cepValue = cepValue.replace(/\D/g, '');

    if (cepValue.length >= 5) {
        cepValue = cepValue.substring(0, 5) + "-" + cepValue.substring(5)
    }

    inputCep.value = cepValue;
}

submitCep.addEventListener("click", async function () {
    if (inputCep.value.length < 9) {
        return alert("Digite seu cep!");
    }
    cep = inputCep.value.replace(/\D/g, '');
    cepData = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
    logradouroFromCep.value = cepData.logradouro
    complementoFromCep.value = cepData.complemento
    bairroFromCep.value = cepData.bairro
    localidadeFromCep.value = cepData.localidade
    ufFromCep.value = cepData.uf
})