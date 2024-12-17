// 1
const chaveApi = "59fab766347247d48dd182816241111";
const botaoDeBusca = document.querySelector(".btn-busca");
const campoDeBusca = document.getElementById("inp-busca");

// 2
botaoDeBusca.addEventListener("click", buscarClima);
campoDeBusca.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        buscarClima();
    }
});

// 3
async function buscarClima() {
    const cidade = campoDeBusca.value;

    if (!cidade) return;

    const dados = await buscarDadosDeClima(cidade);

    if (dados) {
        preencherDadosNaTela(dados, cidade);
    }
}

// 4
async function buscarDadosDeClima(cidade) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveApi}&q=${cidade}&api=no&lang=pt`;

    const resposta = await fetch(apiUrl);

    if (resposta.status !== 200) return;

    const dados = await resposta.json();

    return dados;
}

// 5
function preencherDadosNaTela(dados, cidade) {
    const temperatura = Math.round(dados.current.temp_c);
    const umidade = dados.current.humidity;
    const condicao = dados.current.condition.text;
    const velocidadeDoVento = dados.current.wind_kph;
    const iconeCondicao = dados.current.condition.icon;

    document.getElementById("cidade").textContent = cidade;
    document.getElementById("temperatura").textContent = `${temperatura} °C`;
    document.getElementById("umidade").textContent = `${umidade} %`;
    document.getElementById("condicao").textContent = condicao;
    document.getElementById("velocidade-do-vento").textContent = `${velocidadeDoVento} km/h`;
    document.getElementById("icone-condicao").setAttribute("src", iconeCondicao);
}
