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