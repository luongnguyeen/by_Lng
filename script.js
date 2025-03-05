const startScreen = document.getElementById('start-screen');
const mainContent = document.getElementById('main-content');
const startText = document.getElementById('start-text');
const typingText = document.getElementById('typing-text');
const nextButton = document.getElementById('next-button');
const tree = document.getElementById('tree');

const messages = [
    "Chúc em ngày 8/3 thật xinh đẹp và hạnh phúc!",
    "Em là người con gái tuyệt vời nhất anh từng gặp.",
    "Anh mong rằng mỗi ngày của em đều tràn ngập niềm vui.",
    "Anh luôn ở đây để ủng hộ và yêu thương em."
];

let messageIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (messageIndex < messages.length) {
        if (charIndex < messages[messageIndex].length) {
            typingText.innerHTML += messages[messageIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50); // Tốc độ gõ chữ
        } else {
            messageIndex++;
            charIndex = 0;
            typingText.innerHTML += "<br><br>";
            setTimeout(typeWriter, 1000); // Dừng 1 giây trước khi gõ câu tiếp theo
        }
    } else {
        nextButton.style.display = 'block';
        tree.style.display = 'block';
        createFallingHearts();
    }
}

function createFallingHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.style.position = 'absolute';
        heart.style.width = '20px';
        heart.style.height = '20px';
        heart.style.backgroundImage = "url('heart.png')"; // Thay thế bằng ảnh trái tim của bạn
        heart.style.backgroundSize = 'cover';
        heart.style.left = Math.random() * 200 + 'px';
        heart.style.top = Math.random() * 100 + 'px';
        heart.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
        tree.appendChild(heart);
    }
}

startText.addEventListener('click', () => {
    startScreen.style.display = 'none';
    mainContent.style.display = 'flex';
    typeWriter();
});

nextButton.addEventListener('click', () => {
    // Thêm logic chuyển sang trang tiếp theo nếu cần
    alert("Chưa code trang tiếp theo");
});
