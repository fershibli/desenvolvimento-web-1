main = document.getElementsByTagName('main')[0]

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

for (let i = 0; i < 1000; i++) {
    img = document.createElement('img')
    img.id = `lampada${i}`
    img.src = './img/LuzDesligada.gif'
    img.addEventListener('click', () => toggleLampada(`lampada${i}`))
    main.getElementsByTagName('div')[0].appendChild(img)
}