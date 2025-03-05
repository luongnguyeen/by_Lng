const startScreen = document.getElementById('start-screen');
const mainContent = document.getElementById('main-content');
const messageElement = document.getElementById('message');
const treeContainer = document.getElementById('tree-container');

const messages = [
    "Chúc mừng ngày 8/3!",
    "Chúc em luôn xinh đẹp và hạnh phúc.",
    "Anh rất vui vì có em trong cuộc đời.",
    "Em là người đặc biệt nhất đối với anh.",
    "Mong rằng em sẽ thích món quà nhỏ này."
];

let messageIndex = 0;
let charIndex = 0;

startScreen.addEventListener('click', () => {
    startScreen.style.display = 'none';
    mainContent.style.display = 'flex';
    treeContainer.style.display = 'block'; // Hiển thị cây xanh

    typeMessage();
    createFallingHearts();
});

function typeMessage() {
    if (messageIndex < messages.length) {
        if (charIndex < messages[messageIndex].length) {
            messageElement.textContent += messages[messageIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeMessage, 50); // Tốc độ gõ chữ
        } else {
            messageIndex++;
            charIndex = 0;
            messageElement.textContent += '<br>'; // Xuống dòng
            setTimeout(typeMessage, 1000); // Thời gian chờ trước khi gõ câu tiếp theo
        }
    }
}

function createFallingHearts() {
    setInterval(() => {
        const heart = document.createElement('img');
        heart.src = 'heart.png';
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + '%';
        treeContainer.appendChild(heart);

        heart.addEventListener('animationiteration', () => {
            heart.remove();
        });
    }, 500); // Tần suất tạo trái tim
}
