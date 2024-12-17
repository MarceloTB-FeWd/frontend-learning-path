let botaoSom = document.querySelector(".botao-som")

let video = document.querySelector(".video")

let botao = document.querySelector(".link-info")

let modal = document.querySelector(".modal")

// Caminhos ou classes dos ícones
const iconeSomAtivo = "🔊"; // Pode ser uma classe CSS ou caminho para imagem
const iconeSomDesligado = "🔇"; // Pode ser uma classe CSS ou caminho para imagem

// Alternar entre Ligar e Desligar o Som
botaoSom.addEventListener("click", () => {
    if (video.muted) {
        ligarSom();
    } else {
        desligarSom();
    }
});

// Função para Ligar o Som
function ligarSom() {
    video.muted = false;
    botaoSom.textContent = iconeSomAtivo; // Atualiza o ícone para som ativo
}

// Função para Desligar o Som
function desligarSom() {
    video.muted = true;
    botaoSom.textContent = iconeSomDesligado; // Atualiza o ícone para som desligado
}

// Mostrar e Esconder o Modal
botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)

function mostrarModal(){
    modal.style.display = "block"
}

function esconderModal(){
     modal.style.display = "none"
}
