const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const popup = document.getElementById("popup");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const gif = document.getElementById("gif");
const music = document.getElementById("music");

let yesScale = 1;

let messages = [
  "Pucchi do 😘",
  "Dedo na Pucchi 🥺",
  "Muahhh muahhh chotuuu 💕",
  "Current Wai Wai khaoge? 🍜",
  "Kyun nahi doge Pucchi?",
  "Batki kahi ki 😏",
  "You’re enough ❤️",
  "Diljit Dosanjh sucks 😤",
  "I miss your cooking 🍲",
  "You look so good in specs 🤓",
  "Bade miyan lekar jaunga 😌",
  "Sumi aunty ke momo yaad aate hain?",
  "Chalo yaar sunset chalte hain 🌅",
  "Chai piyoge mere haath ki ☕",
  "Drama queen 👑",
  "Ab toh maan jao 🥹",
  "Dil toot raha hai 💔",
  "Last chance 😜",
  "Okay I give up… or not 😏"
];

let msgIndex = 0;

const gifs = [
  "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
  "https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif",
  "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
  "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif"
];

function showPopup() {
  popup.textContent = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;

  popup.classList.remove("hidden");
  setTimeout(() => popup.classList.add("hidden"), 3000);
}

function moveNoButton() {
  const x = Math.random() * 160 - 80;
  const y = Math.random() * 120 - 60;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  yesScale += 0.1;
  yesBtn.style.transform = `scale(${yesScale})`;

  showPopup();
}

/* Desktop + Mobile */
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", e => {
  e.preventDefault();
  moveNoButton();
});

yesBtn.addEventListener("click", () => {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");

  gif.src = gifs[Math.floor(Math.random() * gifs.length)];
  music.currentTime = 0;
  music.play();

  startConfetti();
});

/* Confetti */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let confetti = [];

function startConfetti() {
  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 8,
      color: `hsl(${Math.random() * 360},100%,70%)`
    });
  }
  animate();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
    c.y += c.d * 0.4;
    if (c.y > canvas.height) c.y = 0;
  });
  requestAnimationFrame(animate);
}
