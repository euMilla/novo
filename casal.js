
// ---------------------------------------------------------------------------------------------------------------------
// super corações flutuantes
// ---------------------------------------------------------------------------------------------------------------------
function createFloatingHearts() {
    const container = document.getElementById('floating-hearts');

    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${3 + Math.random() * 2}s`;
        heart.style.opacity = Math.random();
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
});


// ---------------------------------------------------------------------------------------------------------------------
// alteração dinâmica do title
// ---------------------------------------------------------------------------------------------------------------------
const titles = [
    "Oi, meu ursinho! 💖",
    "Você é especial! 🥰",
    "Eu te amo! ❤️",
    "Meu principe! 💕"
];

let titleIndex = 0;

function changeTitle() {
    document.title = titles[titleIndex];
    titleIndex = (titleIndex + 1) % titles.length; // Volta ao início se atingir o fim da lista
}

setInterval(changeTitle, 2000);
changeTitle();