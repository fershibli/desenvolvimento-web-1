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

function switchLampada(imageId) {
    const element = document.getElementById(imageId)
    if (element.removido) {
        element.style.display = "Initial"
        element.removido = false
    } else {
        element.style.display = "None"
        element.removido = true
    }
}

for (let i = 0; i < 1000; i++) {
    const img = document.createElement('img')
    const id = `lampada${i}`
    img.id = id
    img.src = './img/LuzDesligada.gif'
    img.className = 'imagemLampada'
    img.addEventListener('click', () => toggleLampada(id))
    button = document.createElement('button')
    button.innerText = 'Trocar'
    button.addEventListener('click', () => switchLampada(id))
    div = document.createElement('div')
    div.className = 'verticalFlex'
    div.appendChild(img)
    div.appendChild(button)
    main.getElementsByTagName('div')[0].appendChild(div)
}