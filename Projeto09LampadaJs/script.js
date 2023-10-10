const main = document.getElementsByTagName('main')[0]

function toggleLampada(elementId, ligadoAttr) {
    const element = document.getElementById(elementId)
    const ligado = element.ligado || ligadoAttr
    if (ligado) {
        element.src = "./img/luzDesligada.gif"
        element.ligado = false
    } else {
        element.src = "./img/luzLigada.gif"
        element.ligado = true
    }
}

for (let i = 0; i < 1000; i++) {
    const img = document.createElement('img')
    const id = `lampada${i}`
    img.id = id
    img.src = './img/LuzDesligada.gif'
    img.addEventListener('click', () => toggleLampada(id))
    main.getElementsByTagName('div')[0].appendChild(img)
}