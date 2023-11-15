const submitCep = document.getElementById('submitCep');
const inputCep = document.getElementById('inputCep');

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
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(value => {
            console.log(value.json())
        });
})