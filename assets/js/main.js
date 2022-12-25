function myScope() {
    const finalResultDiv = document.querySelector('.final-result')
    const form = document.getElementById('formulario')
    const peso = document.getElementById('peso')
    const altura = document.getElementById('altura')
    let imc = 0
    let pesoForm = 0
    let alturaForm = 0

    const resultClass = ['final-result-success', 'final-result-alert', 'final-result-danger']

    function eventoForm(evento) {
        evento.preventDefault()

        pesoForm = Number(peso.value)
        alturaForm = Number(altura.value)

        imc = pesoForm / (alturaForm * alturaForm)

        if (imc) {

            imc = imc.toFixed(2)

            if (imc < 18.5) {
                finalResultDiv.innerHTML = `<p class='${resultClass[1]}'>O IMC é: ${imc} (abaixo do peso)</p>`
            } else if (imc >= 18.5 && imc <= 24.9) {
                finalResultDiv.innerHTML = `<p class='${resultClass[0]}'>O IMC é: ${imc} (peso normal)</p>`
            } else if (imc >= 25 && imc <= 29.9) {
                finalResultDiv.innerHTML = `<p class='${resultClass[1]}'>O IMC é: ${imc} (sobrepeso)</p>`
            } else if (imc >= 30 && imc <= 34.9) {
                finalResultDiv.innerHTML = `<p class='${resultClass[2]}'>O IMC é: ${imc} (obesidade grau 1)</p>`
            } else if (imc >= 35 && imc <= 39.9) {
                finalResultDiv.innerHTML = `<p class='${resultClass[2]}'>O IMC é: ${imc} (obesidade grau 2)</p>`
            } else if (imc >= 40) {
                if (imc === Infinity) {
                    finalResultDiv.innerHTML = `<p class='${resultClass[2]}'>Insira um valor real para o cálculo!</p>`
                } else {
                finalResultDiv.innerHTML = `<p class='${resultClass[2]}'>O IMC é: ${imc} (obesidade grau 3)</p>`
                }
            }
        } else {
            finalResultDiv.innerHTML = `<p class='${resultClass[2]}'>Insira um valor real para o cálculo!</p>`
        }
    }
    form.addEventListener('submit', eventoForm)
}
myScope()