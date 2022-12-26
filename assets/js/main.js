const form = document.getElementById('formulario')

form.addEventListener('submit', function eventoForm (e) {
    e.preventDefault()
    const inputPeso = Number(document.getElementById('peso').value)
    const inputAltura = Number(document.getElementById('altura').value)

    const imc = getImc(inputPeso, inputAltura)
    const nivel = getNivel(imc)
    const message = `Seu IMC é ${imc} (${nivel})`

    if (!inputPeso) {
        setResultado('Peso inválido', false)
        return
    }
    if (!inputAltura) {
        setResultado('Altura inválida', false)
        return
    }
    setResultado(message, true)
})

function setResultado (msg, isValid) {
    const finalResultDiv = document.querySelector('.final-result')
    finalResultDiv.innerHTML = ''
    const nivelClass = ['final-result-success', 'final-result-danger']
    const p = setP()
    if(isValid) {
        p.classList.add(nivelClass[0])
    } else {
        p.classList.add(nivelClass[1])
    }
    p.innerHTML = msg
    finalResultDiv.appendChild(p)
}

function setP () {
    const p = document.createElement('p')
    return p
}

function getImc (peso, altura) {
    const imc = peso / (altura ** 2)
    return imc
}

function getNivel (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    let nivelMsg = ''

    if (imc < 18.5) {
        nivelMsg = nivel[0]
    } else if (imc >= 18.5 && imc < 25) {
        nivelMsg = nivel[1]
    } else if (imc >= 25 && imc < 30) {
        nivelMsg = nivel[2]
    } else if (imc >= 30 && imc <= 35) {
        nivelMsg = nivel[3]
    } else if (imc >= 35 && imc <= 40) {
        nivelMsg = nivel[4]
    } else {
        nivelMsg = nivel[5]
    }
    return nivelMsg
}