const startScreen = document.getElementById('start-screen');
const mainScreen = document.getElementById('main-screen');
const startMessage = document.getElementById('start-message');
const typingText = document.getElementById('typing-text');
const nextButton = document.getElementById('next-button');
const treeContainer = document.getElementById('tree-container');
const treeCanvas = document.getElementById('tree-canvas');
const ctx = treeCanvas.getContext('2d');

startMessage.addEventListener('click', () => {
    startScreen.classList.remove('active');
    mainScreen.classList.add('active');
    startTyping();
});

const messages = [
    "Chúc em ngày 8/3 thật nhiều niềm vui và hạnh phúc!",
    "Em là người con gái tuyệt vời nhất anh từng gặp.",
    "Anh mong rằng mỗi ngày của em đều tràn ngập tiếng cười.",
    "Cảm ơn em đã đến và làm cho cuộc sống của anh thêm tươi đẹp."
];

let messageIndex = 0;
let charIndex = 0;

function startTyping() {
    if (messageIndex < messages.length) {
        if (charIndex < messages[messageIndex].length) {
            typingText.textContent += messages[messageIndex].charAt(charIndex);
            charIndex++;
            setTimeout(startTyping, 50); // Tốc độ gõ chữ (điều chỉnh theo ý muốn)
        } else {
            messageIndex++;
            charIndex = 0;
            typingText.innerHTML += "<br><br>"; // Thêm dòng trống giữa các câu
            setTimeout(startTyping, 1000); // Thời gian chờ trước khi gõ câu tiếp theo
        }
    } else {
        nextButton.style.display = 'block';
        drawTree();
    }
}

nextButton.addEventListener('click', () => {
    // Chuyển sang giao diện tiếp theo (bạn có thể thêm mã ở đây)
    alert("Chức năng đang được phát triển");
});

function drawTree() {
    treeContainer.style.display = 'block';
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
