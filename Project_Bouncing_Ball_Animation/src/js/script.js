// 1
const ball = document.getElementById('ball');

// 2
const container = document.querySelector('.animation-container');

// 3
let posX = 0;
let posY = 0;
let velocityX = 2;
let velocityY = 3;

// 4
function animationBall() {
    posX += velocityX;
    posY += velocityY;

    // 5
    if (posX + ball.offsetWidth >= container.clientWidth || posX <= 0) {
        velocityX *= -1
    }

    // 6
    if (posY + ball.offsetHeight >= container.clientHeight || posY <= 0) {
        velocityY *= -1
    }

    // 7
    ball.style.transform = `translate(${posX}px,${posY}px)`
    // 8
    requestAnimationFrame(animationBall)
}

// 9
animationBall()


// Modal
// 1
document.addEventListener('DOMContentLoaded', () => {
    const openSobre = document.getElementById('open-sobre');
    const openFuncionalidade = document.getElementById('open-funcionalidade');

    // 1.1  
    const modalSobre = document.getElementById('modal-sobre');
    const modalFuncionalidade = document.getElementById('modal-funcionalidade');

    // 1.2
    const closeSobre = document.getElementById('close-sobre');
    const closeFuncionalidade = document.getElementById('close-funcionalidade');

    // 2
    function openModal(modal) {
        modal.style.display = 'block';
    }

    // 2.1
    function closeModal(modal) {
        modal.style.display = 'none';
    }

    // 3
    openSobre.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(modalFuncionalidade);
        openModal(modalSobre);
    });

    openFuncionalidade.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(modalSobre);
        openModal(modalFuncionalidade);
    });

    // 4
    closeSobre.addEventListener('click', () => {
        closeModal(modalSobre);
    });

    closeFuncionalidade.addEventListener('click', () => {
        closeModal(modalFuncionalidade);
    });

    // 5
    window.addEventListener('click', (e) => {
        if (e.target == modalSobre) {
            closeModal(modalSobre);
        }
        if (e.target == modalFuncionalidade) {
            closeModal(modalFuncionalidade);
        }
    });

    modalSobre.addEventListener('click', (e) => {
        if (e.target === modalSobre) {
            closeModal(modalSobre);
        }
    });

    modalFuncionalidade.addEventListener('click', (e) => {
        if (e.target === modalFuncionalidade) {
            closeModal(modalFuncionalidade);
        }
    });
});
