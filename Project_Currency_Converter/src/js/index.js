//Utilizar esse valor (fixo) como base para atualizar a conversão
let dolar = 5.1

//São os input levados em consideração
let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

//Eventos para identificar quando houve o toque no teclado
usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
})

//Evento que quando clicar fora do campo, deixa o campo formatado
usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value)
})

//Definir o valor padrão de preenchimento do campo com a string e converter de dólar para real
usdInput.value = "1000,00"
convert("usd-to-brl")

//Funções

function formatCurrency(value) {
    //Ajustar o valor, trocar a vírgula do número pelo ponto
    let fixedValue = fixValue(value)

    //Utilizar a função de formatar com a biblioteca de internacionalização do JS
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }

    let formatter = new Intl.NumberFormat("pt-BR", options)

    //Retornar o valor formatado
    return formatter.format(fixedValue)

}

function fixValue(value) {

    //Substitui a "," pelo "."
    let fixedValue = value.replace(",", ".")

    //Transforma o texto em número
    let floatValue = parseFloat(fixedValue)

    //Realiza uma verificação de segurança, caso alguém digitar algo errado, o sistema continua funcionando
    if (floatValue == NaN) {
        floatValue = 0
    }
    return floatValue
}

function convert(type) {
    if (type == "usd-to-brl") {

        // Ajustar o valor, trocar a vírgula do número pelo ponto
        let fixedValue = fixValue(usdInput.value)

        // Converter o valor de dólar para real
        let result = fixedValue * dolar
        result = result.toFixed(2)

        // Mostrar no campo referente ao real
        brlInput.value = formatCurrency(result)
    }

    if (type == "brl-to-usd") {

        // Ajustar o valor, trocar a vírgula do número pelo ponto
        let fixedValue = fixValue(brlInput.value)

        // Converter o valor de real para dólar
        let result = fixedValue / dolar
        result = result.toFixed(2)

        // Mostrar no campo referente ao dólar
        usdInput.value = formatCurrency(result)
    }
}