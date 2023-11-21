function calcularEx7(){
    const resultadoElemento = document.getElementById('resultadoEx7');
    let aleatorio = Math.random().toString();
    if (aleatorio.length > 1){
        aleatorio = aleatorio.slice(2);
    }
    aleatorio = parseInt(aleatorio);
    resultadoElemento.innerHTML=`O número sorteado foi ${aleatorio}, `
    if (aleatorio%2 == 0){
        resultadoElemento.innerHTML += 'que é par.'
        resultadoElemento.style.color = "indigo"
    } else {
        resultadoElemento.innerHTML += 'que é ímpar.'
        resultadoElemento.style.color = "darkorange"
    }
}