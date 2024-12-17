const listaSelecaoDevclore = document.querySelectorAll(".listagem .devclore");

listaSelecaoDevclore.forEach(devclore => {
    devclore.addEventListener("click", () => {
        console.log("Devclore clicado: ", devclore.id);

        esconderCartaoDevclore();

        const idDevcloreSelecionado = mostrarCartaoDevcloreSelecionado(devclore);
        console.log("ID Devclore Selecionado: ", idDevcloreSelecionado);

        desativarDevcloreNaListagem();
        ativarDevcloreSelecionadoNaListagem(idDevcloreSelecionado);
    });
});

function ativarDevcloreSelecionadoNaListagem(idDevcloreSelecionado) {
    const devcloreSelecionadoNaListagem = document.getElementById(idDevcloreSelecionado);
    console.log("Elemento devclore selecionado na listagem: ", devcloreSelecionadoNaListagem);

    if (devcloreSelecionadoNaListagem) {
        devcloreSelecionadoNaListagem.classList.add("ativo");
    } else {
        console.error("Elemento com o ID ", idDevcloreSelecionado, " não encontrado.");
    }
}

function desativarDevcloreNaListagem() {
    const devcloreAtivoNaListagem = document.querySelector(".ativo");
    console.log("Devclore ativo na listagem: ", devcloreAtivoNaListagem);

    if (devcloreAtivoNaListagem) {
        devcloreAtivoNaListagem.classList.remove("ativo");
    } else {
        console.warn("Nenhum devclore está ativo na listagem.");
    }
}

function mostrarCartaoDevcloreSelecionado(devclore) {
    if (devclore.attributes.id) {
        const idDevcloreSelecionado = devclore.id;
        console.log("ID do devclore selecionado: ", idDevcloreSelecionado);

        const idDoCartaoDevcloreParaAbrir = "cartao-" + idDevcloreSelecionado;
        console.log("ID do cartão a ser aberto: ", idDoCartaoDevcloreParaAbrir);

        const cartaoDevcloreParaAbrir = document.getElementById(idDoCartaoDevcloreParaAbrir);
        if (cartaoDevcloreParaAbrir) {
            cartaoDevcloreParaAbrir.classList.add("aberto");
        } else {
            console.error("Cartão com o ID ", idDoCartaoDevcloreParaAbrir, " não encontrado.");
        }

        return idDevcloreSelecionado;
    } else {
        console.error("O elemento clicado não possui um atributo 'id'. Verifique o HTML: ", devclore);
        return null;
    }
}

function esconderCartaoDevclore() {
    const cartaoDevcloreAberto = document.querySelector(".aberto");
    console.log("Cartão atualmente aberto: ", cartaoDevcloreAberto);

    if (cartaoDevcloreAberto) {
        cartaoDevcloreAberto.classList.remove("aberto");
    } else {
        console.warn("Nenhum cartão está aberto no momento.");
    }
}
