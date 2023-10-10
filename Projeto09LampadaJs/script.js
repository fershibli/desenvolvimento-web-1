function toggleLampada(elementId) {
    element = document.getElementById(elementId)
    if (element.ligado) {
        element.src = "./img/luzDesligada.gif"
        element.ligado = false
    } else {
        element.src = "./img/luzLigada.gif"
        element.ligado = true
    }
}