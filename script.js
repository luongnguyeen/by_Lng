const startScreen = document.getElementById('start-screen');
const mainScreen = document.getElementById('main-screen');
const message = document.getElementById('message');
const leaves = document.querySelector('.leaves');

const messages = [
    "Chúc mừng ngày 8/3!",
    "Chúc em luôn xinh đẹp và hạnh phúc.",
    "Anh rất vui vì được quen biết em.",
    "Mong rằng chúng ta sẽ có nhiều kỷ niệm đẹp cùng nhau.",
    "Anh có một điều muốn nói...",
    "Anh thích em!"
];

startScreen.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    mainScreen.classList.remove('hidden');
    displayMessages(0);
    createLeaves();
});

function displayMessages(index) {
    if (index < messages.length) {
        let i = 0;
        const interval = setInterval(() => {
            message.textContent += messages[index][i];
            i++;
            if (i === messages[index].length) {
                clearInterval(interval);
                setTimeout(() => {
                    message.innerHTML += "<br>";
                    displayMessages(index + 1);
                }, 1000);
            }
        }, 50);
    }
}

function createLeaves() {
    for (let i = 0; i < 50; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        leaf.style.left = `${Math.random() * 100}%`;
        leaf.style.animationDuration = `${Math.random() * 5 + 5}s`;
        leaf.style.animationDelay = `${Math.random() * 5}s`;
        leaves.appendChild(leaf);
    }
}
