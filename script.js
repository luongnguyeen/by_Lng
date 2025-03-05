const startScreen = document.getElementById('start-screen');
const mainContent = document.getElementById('main-content');
const startText = document.getElementById('start-text');
const typingText = document.getElementById('typing-text');
const nextButton = document.getElementById('next-button');
const treeCanvas = document.getElementById('treeCanvas');
const ctx = treeCanvas.getContext('2d');

const messages = [
    "Chúc em ngày 8/3 thật nhiều niềm vui và hạnh phúc!",
    "Em là người con gái tuyệt vời nhất mà anh từng gặp.",
    "Anh mong rằng chúng ta sẽ có thật nhiều kỷ niệm đẹp bên nhau.",
    "Anh yêu em!"
];

let messageIndex = 0;
let charIndex = 0;
let hearts = [];

startText.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    messageScreen.classList.remove('hidden');
    typeMessage();
    drawTree();
});

function typeMessage() {
    if (messageIndex < messages.length) {
        if (charIndex < messages[messageIndex].length) {
            messageText.innerHTML += messages[messageIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeMessage, 50);
        } else {
            messageIndex++;
            charIndex = 0;
            messageText.innerHTML += '<br><br>';
            setTimeout(typeMessage, 500);
        }
    } else {
        nextButton.classList.remove('hidden');
    }
}

function drawTree() {
    // Vẽ thân cây
    ctx.beginPath();
    ctx.moveTo(150, 400);
    ctx.lineTo(150, 100);
    ctx.strokeStyle = 'brown';
    ctx.lineWidth = 10;
    ctx.stroke();

    // Vẽ cành cây
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(250, 100);
    ctx.strokeStyle = 'brown';
    ctx.lineWidth = 8;
    ctx.stroke();

    // Vẽ lá (hình trái tim)
    for (let i = 0; i < 10; i++) {
        const x = Math.random() * 200 + 50;
        const y = Math.random() * 100 + 50;
        const size = Math.random() * 20 + 10;
        const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        hearts.push({ x, y, size, color, speed: Math.random() * 2 + 1 });
    }

    animateHearts();
}

function drawHeart(x, y, size, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(Math.PI / 4);
    ctx.beginPath();
    ctx.moveTo(0, size);
    ctx.bezierCurveTo(size / 2, size / 4, size, -size / 3, 0, -size);
    ctx.bezierCurveTo(-size, -size / 3, -size / 2, size / 4, 0, size);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
}

function animateHearts() {
    ctx.clearRect(0, 0, treeCanvas.width, treeCanvas.height);
    drawTree(); // Vẽ lại cây để không bị mất cành

    hearts.forEach((heart, index) => {
        drawHeart(heart.x, heart.y, heart.size, heart.color);
        heart.y += heart.speed;
        if (heart.y > treeCanvas.height) {
            hearts.splice(index, 1);
            const x = Math.random() * 200 + 50;
            const y = Math.random() * 100 + 50;
            const size = Math.random() * 20 + 10;
            const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
            hearts.push({ x, y, size, color, speed: Math.random() * 2 + 1 });
        }
    });

    requestAnimationFrame(animateHearts);
}

nextButton.addEventListener('click', ()
