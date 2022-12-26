const form = document.getElementById('formulario')

form.addEventListener('submit', function eventoForm (e) {
    e.preventDefault()
    const inputPeso = document.getElementById('peso')
    const inputAltura = document.getElementById('altura')

    


})


    let imc = 0
    let pesoForm = 0
    let alturaForm = 0

    const resultClass = ['final-result-success', 'final-result-alert', 'final-result-danger']

    function eventoForm(evento) {
        evento.preventDefault()

        pesoForm = Number(peso.value)
        alturaForm = Number(altura.value)

        function setResult (valorImc) {
            const finalResult = document.querySelector('.final-result')
            finalResult.innerHTML = ''
            const p = document.createElement('p')
            const errorMsg = 'Insira altura/peso válidos para o cálculo!'
            let msgObs = ''

            if (getImc(pesoForm, alturaForm)) {
                if (valorImc < 18.5) {
                    p.classList.add(resultClass[1])
                    msgObs = '(abaixo do peso)'
                    p.innerHTML = `Seu IMC é ${imc} ${msgObs}`
                } else if (valorImc >= 18.5 && valorImc <= 24.9) {
                    p.classList.add(resultClass[0])
                    msgObs = '(peso normal)'
                    p.innerHTML = `Seu IMC é ${imc} ${msgObs}`
                } else if (valorImc >= 25 && valorImc <= 29.9) {
                    p.classList.add(resultClass[1])
                    msgObs = '(sobrepeso)'
                    p.innerHTML = `Seu IMC é ${imc} ${msgObs}`
                } else if (valorImc >= 30 && valorImc <= 34.9) {
                    p.classList.add(resultClass[2])
                    msgObs = '(obesidade grau 1)'
                    p.innerHTML = `Seu IMC é ${imc} ${msgObs}`
                } else if (valorImc >= 35 && valorImc <= 39.9) {
                    p.classList.add(resultClass[2])
                    msgObs = '(obesidade grau 2)'
                    p.innerHTML = `Seu IMC é ${imc} ${msgObs}`
                } else if (valorImc >= 40 && valorImc !== Infinity) {
                    p.classList.add(resultClass[2])
                    msgObs = '(obesidade grau 3)'
                    p.innerHTML = `Seu IMC é ${imc} ${msgObs}`
                } else {
                    p.classList.add(resultClass[1])
                    p.innerHTML = errorMsg
                }
            } else {
                p.classList.add(resultClass[1])
                p.innerHTML = errorMsg
            }

            finalResult.appendChild(p)
        }

        setResult(imc)

    }

    function getImc (peso, altura) {
        const imc = peso / altura ** 2
        return imc
    }