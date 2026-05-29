/* =========================================
   12. FINALE
========================================= */
function triggerFinale() {
  document.getElementById('finale-btn').style.display = 'none';
  document.getElementById('finale-message').classList.remove('hidden');
  launchHeartBurst();
}

function launchHeartBurst() {
  const burst = document.getElementById('heart-burst');
  const symbols = ['❤️','💗','💖','💓','💕','🌸','🌺','💞','🌷','✨','💫'];

  for (let i = 0; i < 80; i++) {
    setTimeout(() => {
      const h = document.createElement('div');
      h.className = 'burst-heart';
      h.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      h.style.left = Math.random() * 100 + 'vw';
      h.style.fontSize = (Math.random() * 18 + 10) + 'px';
      const dur = Math.random() * 4 + 3;
      h.style.animationDuration = dur + 's';
      burst.appendChild(h);
      setTimeout(() => h.remove(), dur * 1000 + 200);
    }, i * 80);
  }

  // Continuous gentle burst after
  setInterval(() => {
    const h = document.createElement('div');
    h.className = 'burst-heart';
    h.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    h.style.left = Math.random() * 100 + 'vw';
    h.style.fontSize = (Math.random() * 14 + 8) + 'px';
    const dur = Math.random() * 5 + 4;
    h.style.animationDuration = dur + 's';
    burst.appendChild(h);
    setTimeout(() => h.remove(), dur * 1000 + 200);
  }, 400);
}

/* =========================================
   13. HIDDEN HEARTS HUNT
========================================= */
let heartsFound = 0;
const huntCountEl = document.getElementById('hunt-count');

document.querySelectorAll('.hidden-heart').forEach(h => {
  h.addEventListener('click', function () {
    if (this.classList.contains('found')) return;
    this.classList.add('found');
    this.textContent = '❤️';
    heartsFound++;
    huntCountEl.textContent = heartsFound;

    showToast(this.dataset.msg);

    if (heartsFound >= 5) {
      setTimeout(() => {
        document.getElementById('hunt-modal').classList.remove('hidden');
        launchHeartBurst();
      }, 800);
    }
  });
});

function closeModal() {
  document.getElementById('hunt-modal').classList.add('hidden');
}

/* =========================================
   14. TOAST
========================================= */
function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
/* =========================================
   15. COMPLIMENT RAIN
========================================= */
const rainWords = [
  'Beautiful ❤️', 'Amazing ❤️', 'Cute ❤️', 'Lovely ❤️', 'Kind ❤️',
  'Radiant ❤️', 'Precious ❤️', 'Wonderful ❤️', 'Sweet ❤️', 'Adorable ❤️',
  'Brilliant ❤️', 'Graceful ❤️', 'Sunshine ❤️', 'Magical ❤️', 'Caring ❤️',
  'Charming ❤️', 'Gentle ❤️', 'Special ❤️', 'Glowing ❤️', 'Warm ❤️',
];

let rainRunning  = false;
let rainTimer    = null;

function toggleRain() {
  const btn  = document.getElementById('rain-btn');
  const hint = document.getElementById('rain-hint');

  if (rainRunning) {
    // — Stop —
    clearInterval(rainTimer);
    rainTimer   = null;
    rainRunning = false;
    btn.textContent = 'Make It Rain ❤️';
    btn.classList.remove('active');
    hint.textContent = '';
  } else {
    // — Start —
    rainRunning = true;
    btn.textContent = 'Stop the Rain 🌸';
    btn.classList.add('active');
    hint.textContent = 'Raining compliments just for you ✨';

    // Initial burst
    for (let i = 0; i < 14; i++) setTimeout(dropWord, i * 100);

    // Steady drizzle every 350 ms, 1–3 drops
    rainTimer = setInterval(() => {
      const n = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < n; i++) setTimeout(dropWord, i * 110);
    }, 350);
  }
}

function dropWord() {
  const container = document.getElementById('rain-container');
  const text  = rainWords[Math.floor(Math.random() * rainWords.length)];
  const el    = document.createElement('div');
  el.className   = 'rain-drop';
  el.textContent = text;

  // Random horizontal position (keep fully on screen)
  el.style.left = (Math.random() * 88 + 2) + 'vw';

  // Fall duration 4 – 8 s
  const dur = (Math.random() * 4 + 4).toFixed(2);
  el.style.animationDuration = dur + 's';

  // Slight tilt
  const tilt = (Math.random() * 12 - 6).toFixed(1) + 'deg';
  el.style.setProperty('--r', tilt);

  // Size variation 14 – 21 px
  el.style.fontSize = (Math.random() * 7 + 14).toFixed(1) + 'px';

  // Colour — pinks, roses, mauves
  const hue = Math.floor(Math.random() * 50 + 320);
  const lit = Math.floor(Math.random() * 20 + 45);
  el.style.color = `hsl(${hue},70%,${lit}%)`;

  container.appendChild(el);
  setTimeout(() => el.remove(), parseFloat(dur) * 1000 + 300);
}
