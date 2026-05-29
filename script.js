/* ============================================
   FOR SITI HALAM — script.js
   All interactive magic lives here ❤️
============================================ */

/* =========================================
   1. CURSOR SPARKLES
========================================= */
const sparkleContainer = document.getElementById('sparkle-container');
const sparkleSymbols = ['✨', '💫', '⭐', '🌟', '💗', '🌸', '·', '✦'];

document.addEventListener('mousemove', (e) => {
  if (Math.random() > 0.6) createSparkle(e.clientX, e.clientY);
});

document.addEventListener('touchmove', (e) => {
  const t = e.touches[0];
  if (Math.random() > 0.5) createSparkle(t.clientX, t.clientY);
}, { passive: true });

function createSparkle(x, y) {
  const s = document.createElement('div');
  s.className = 'sparkle';
  s.textContent = sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];
  s.style.left = (x + (Math.random() * 20 - 10)) + 'px';
  s.style.top  = (y + (Math.random() * 20 - 10)) + 'px';
  s.style.fontSize = (Math.random() * 12 + 8) + 'px';
  sparkleContainer.appendChild(s);
  setTimeout(() => s.remove(), 800);
}

/* =========================================
   2. FLOATING HEARTS (Hero)
========================================= */
const heartBg = document.getElementById('heart-bg');
const heartSymbols = ['❤️','💗','💓','💖','💕','🌸','💞','🌷'];

function spawnHeroHeart() {
  const h = document.createElement('div');
  h.className = 'floating-heart';
  h.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  h.style.left = Math.random() * 100 + 'vw';
  h.style.fontSize = (Math.random() * 20 + 10) + 'px';
  const dur = Math.random() * 12 + 8;
  h.style.animationDuration = dur + 's';
  h.style.animationDelay = (Math.random() * 4) + 's';
  heartBg.appendChild(h);
  setTimeout(() => h.remove(), (dur + 4) * 1000);
}

setInterval(spawnHeroHeart, 600);
for (let i = 0; i < 15; i++) spawnHeroHeart();

/* =========================================
   3. SMOOTH SCROLL HELPER
========================================= */
function smoothTo(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

/* =========================================
   4. SCROLL REVEAL
========================================= */
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

/* =========================================
   5. SECTION 1 — 100 REASONS
========================================= */
const reasons = [
  "Your smile can brighten a bad day.",
  "You are kind to people.",
  "You always try your best.",
  "You have a beautiful heart.",
  "You make ordinary moments special.",
  "You care about others.",
  "You are thoughtful.",
  "You are unique.",
  "You make me happy.",
  "You have a calming presence.",
  "You are stronger than you realize.",
  "You never stop growing.",
  "You are genuine.",
  "You are trustworthy.",
  "You make people feel comfortable.",
  "You have beautiful eyes.",
  "You have a lovely laugh.",
  "You are patient.",
  "You inspire people around you.",
  "You have a warm personality.",
  "You are supportive.",
  "You are intelligent.",
  "You make conversations enjoyable.",
  "You notice little details.",
  "You have a beautiful soul.",
  "You are creative.",
  "You make life more colorful.",
  "You are brave.",
  "You are compassionate.",
  "You are unforgettable.",
  "You have a gentle heart.",
  "You are understanding.",
  "You make people feel valued.",
  "You are sincere.",
  "You are hardworking.",
  "You are respectful.",
  "You are caring.",
  "You have amazing energy.",
  "You spread positivity.",
  "You are dependable.",
  "You make me smile unexpectedly.",
  "You are graceful.",
  "You are beautiful inside and out.",
  "You have a lovely voice.",
  "You are honest.",
  "You are thoughtful with your words.",
  "You make every day brighter.",
  "You are adorable.",
  "You are resilient.",
  "You never give up easily.",
  "You make people feel heard.",
  "You are inspiring.",
  "You are full of potential.",
  "You are charming.",
  "You are naturally lovable.",
  "You have a beautiful perspective.",
  "You are encouraging.",
  "You bring peace to others.",
  "You make memories special.",
  "You are precious.",
  "You are sweet.",
  "You have a great sense of humor.",
  "You are lovable exactly as you are.",
  "You make the world better.",
  "You are unforgettable.",
  "You have a beautiful smile.",
  "You make people feel welcome.",
  "You are compassionate.",
  "You are genuine.",
  "You are thoughtful.",
  "You are patient.",
  "You make ordinary days magical.",
  "You are a wonderful listener.",
  "You are always learning.",
  "You have a kind spirit.",
  "You make life feel lighter.",
  "You are elegant.",
  "You have a beautiful heart.",
  "You are trustworthy.",
  "You are supportive.",
  "You make people feel safe.",
  "You are inspiring without trying.",
  "You have a warm smile.",
  "You are strong and gentle.",
  "You are thoughtful in little ways.",
  "You are naturally caring.",
  "You bring joy wherever you go.",
  "You are someone worth admiring.",
  "You are wonderful to be around.",
  "You make life more meaningful.",
  "You are appreciated.",
  "You are valued.",
  "You are special.",
  "You are amazing.",
  "You deserve happiness.",
  "You make every moment better.",
  "You are one of a kind.",
  "You are loved.",
];

let lastReasonIndex = -1;

function revealReason() {
  let idx;
  do { idx = Math.floor(Math.random() * reasons.length); } while (idx === lastReasonIndex);
  lastReasonIndex = idx;

  const el = document.getElementById('reason-text');
  el.classList.add('fading');
  setTimeout(() => {
    el.textContent = reasons[idx];
    el.classList.remove('fading');
  }, 400);
}

/* =========================================
   6. SECTION 2 — MOOD
========================================= */
const moodMessages = {
  happy: "Keep smiling. The world becomes brighter when you do. 🌸",
  sad: "It's okay to have difficult days. You don't have to carry everything alone. I'm here. ☁️",
  tired: "You've worked so hard. Rest is not weakness — it's wisdom. Please take care of yourself. 💤",
  stressed: "You've survived every difficult day so far. You are more capable than the weight on your shoulders. Breathe. 💗",
};

function showMood(type) {
  document.querySelectorAll('.mood-card').forEach(c => c.classList.remove('active'));
  event.currentTarget.classList.add('active');

  const msgEl = document.getElementById('mood-message');
  msgEl.classList.remove('hidden');
  msgEl.style.animation = 'none';
  msgEl.offsetHeight; // reflow
  msgEl.style.animation = '';
  msgEl.textContent = moodMessages[type];
}

/* =========================================
   7. SECTION 3 — GARDEN
========================================= */
const gardenArea = document.getElementById('garden-area');
const gardenHint = document.getElementById('garden-hint');
const flowerCountEl = document.getElementById('flower-count');
const gardenMsg = document.getElementById('garden-message');
let flowerCount = 0;

const flowerTypes = [
  { petals: 5, petalColor: '#FF8FB1', centerColor: '#FFE566', size: 28 },
  { petals: 6, petalColor: '#FF5C8A', centerColor: '#FFF', size: 24 },
  { petals: 8, petalColor: '#FFB8CE', centerColor: '#FFAA00', size: 32 },
  { petals: 4, petalColor: '#FF6B9D', centerColor: '#FFD700', size: 26 },
  { petals: 7, petalColor: '#FFC8DB', centerColor: '#FF5C8A', size: 30 },
];

gardenArea.addEventListener('click', (e) => {
  if (e.target === flowerCountEl || flowerCountEl.contains(e.target)) return;
  const rect = gardenArea.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  plantFlower(x, y);
});

gardenArea.addEventListener('touchstart', (e) => {
  e.preventDefault();
  const t = e.touches[0];
  const rect = gardenArea.getBoundingClientRect();
  plantFlower(t.clientX - rect.left, t.clientY - rect.top);
}, { passive: false });

function plantFlower(x, y) {
  flowerCount++;
  flowerCountEl.textContent = flowerCount;
  gardenHint.style.opacity = '0';

  const type = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
  const flower = document.createElement('div');
  flower.className = 'flower';

  const stemH = Math.random() * 40 + 30;
  const sw = type.size;

  // Build stem
  const stem = document.createElement('div');
  stem.className = 'flower-stem';
  stem.style.height = stemH + 'px';
  stem.style.width = '3px';

  // Build bloom
  const bloom = document.createElement('div');
  bloom.className = 'flower-bloom';
  bloom.style.width = sw + 'px';
  bloom.style.height = sw + 'px';

  // Petals
  for (let i = 0; i < type.petals; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    const pSize = sw * 0.55;
    petal.style.width = pSize + 'px';
    petal.style.height = pSize + 'px';
    petal.style.background = type.petalColor;
    petal.style.transform = `rotate(${(360 / type.petals) * i}deg) translate(${sw * 0.28}px)`;
    petal.style.transformOrigin = 'center';
    petal.style.borderRadius = '50% 50% 50% 0';
    petal.style.opacity = '0.9';
    bloom.appendChild(petal);
  }

  // Center
  const center = document.createElement('div');
  center.className = 'flower-center';
  center.style.width = (sw * 0.38) + 'px';
  center.style.height = (sw * 0.38) + 'px';
  center.style.background = type.centerColor;
  center.style.boxShadow = '0 0 6px rgba(0,0,0,0.15)';
  bloom.appendChild(center);

  flower.appendChild(bloom);
  flower.appendChild(stem);

  const totalH = sw + stemH;
  flower.style.left = Math.min(Math.max(x - sw / 2, 0), gardenArea.clientWidth - sw) + 'px';
  flower.style.top  = Math.min(Math.max(y - totalH, 0), gardenArea.clientHeight - totalH) + 'px';

  const delay = Math.random() * 2;
  flower.style.animationDelay = delay + 's';

  gardenArea.appendChild(flower);

  // Sparkles around flower
  for (let i = 0; i < 3; i++) {
    setTimeout(() => createSparkle(
      gardenArea.getBoundingClientRect().left + x + (Math.random() * 30 - 15),
      gardenArea.getBoundingClientRect().top  + y + (Math.random() * 30 - 15)
    ), i * 80);
  }

  if (flowerCount >= 20 && gardenMsg.classList.contains('hidden')) {
    gardenMsg.classList.remove('hidden');
  }
}

/* =========================================
   8. SECTION 4 — DATE IDEAS
========================================= */
const dateIdeas = [
  { emoji: '☕', idea: 'Visit a cozy cafe' },
  { emoji: '🌅', idea: 'Watch the sunset together' },
  { emoji: '🍦', idea: 'Try a new ice cream flavor' },
  { emoji: '🎬', idea: 'Have a movie night' },
  { emoji: '🌸', idea: 'Walk through a flower garden' },
  { emoji: '📸', idea: 'Take cute photos together' },
  { emoji: '🍜', idea: 'Try a new restaurant' },
  { emoji: '🎡', idea: 'Visit a theme park' },
  { emoji: '🌊', idea: 'Walk by the beach' },
  { emoji: '🚗', idea: 'Go on a random road trip' },
  { emoji: '🎨', idea: 'Paint together' },
  { emoji: '📚', idea: 'Read books beside each other' },
  { emoji: '🎮', idea: 'Play games together' },
  { emoji: '🍕', idea: 'Make homemade pizza' },
  { emoji: '🌙', idea: 'Stargaze at night' },
  { emoji: '🧋', idea: 'Go for bubble tea' },
  { emoji: '🎤', idea: 'Sing karaoke together' },
  { emoji: '🛍️', idea: 'Go window shopping' },
  { emoji: '🚴', idea: 'Ride bicycles together' },
  { emoji: '🌳', idea: 'Have a picnic' },
  { emoji: '🎳', idea: 'Go bowling' },
  { emoji: '🎯', idea: 'Play darts' },
  { emoji: '🍿', idea: 'Watch old movies' },
  { emoji: '🧩', idea: 'Build a puzzle together' },
  { emoji: '📷', idea: 'Make a photo album' },
  { emoji: '🍰', idea: 'Bake cookies together' },
  { emoji: '🏕️', idea: 'Go camping' },
  { emoji: '🛶', idea: 'Try kayaking' },
  { emoji: '🎣', idea: 'Go fishing' },
  { emoji: '🌄', idea: 'Watch sunrise together' },
  { emoji: '🍔', idea: 'Try street food' },
  { emoji: '🎭', idea: 'Attend an event' },
  { emoji: '🎪', idea: 'Visit a carnival' },
  { emoji: '🏞️', idea: 'Explore nature trails' },
  { emoji: '🛒', idea: 'Shop for snacks' },
  { emoji: '🎨', idea: 'Visit an art gallery' },
  { emoji: '📖', idea: 'Share favorite stories' },
  { emoji: '🌷', idea: 'Plant flowers together' },
  { emoji: '🎂', idea: 'Celebrate random milestones' },
  { emoji: '🍩', idea: 'Try every donut flavor' },
  { emoji: '🎲', idea: 'Play board games' },
  { emoji: '🎹', idea: 'Listen to music together' },
  { emoji: '🎧', idea: 'Share playlists' },
  { emoji: '📱', idea: 'Make silly videos' },
  { emoji: '🎬', idea: 'Recreate movie scenes' },
  { emoji: '🎤', idea: 'Record a duet' },
  { emoji: '🧸', idea: 'Win a plushie together' },
  { emoji: '🌧️', idea: 'Watch rain together' },
  { emoji: '🕯️', idea: 'Have a candlelight dinner' },
  { emoji: '🍜', idea: 'Cook dinner together' },
  { emoji: '🍓', idea: 'Pick strawberries' },
  { emoji: '🧋', idea: 'Rate cafes together' },
  { emoji: '🏖️', idea: 'Build sandcastles' },
  { emoji: '🎡', idea: 'Ride a Ferris wheel' },
  { emoji: '🚶', idea: 'Take a long walk' },
  { emoji: '🧃', idea: 'Try mystery drinks' },
  { emoji: '🎁', idea: 'Exchange surprise gifts' },
  { emoji: '📷', idea: 'Take Polaroid photos' },
  { emoji: '🛏️', idea: 'Build a blanket fort' },
  { emoji: '🍫', idea: 'Taste-test chocolates' },
  { emoji: '🎮', idea: 'Challenge each other in games' },
  { emoji: '🪁', idea: 'Fly a kite' },
  { emoji: '🌸', idea: 'Visit a park' },
  { emoji: '🚂', idea: 'Take a train ride' },
  { emoji: '🌉', idea: 'Explore a new town' },
  { emoji: '📖', idea: 'Write stories together' },
  { emoji: '📝', idea: 'Write letters to each other' },
  { emoji: '🎨', idea: 'Draw portraits' },
  { emoji: '🍕', idea: 'Try making weird pizzas' },
  { emoji: '🧋', idea: 'Find the best milk tea' },
  { emoji: '📸', idea: 'Take aesthetic photos' },
  { emoji: '🍜', idea: 'Have a ramen date' },
  { emoji: '🌙', idea: 'Stay up talking' },
  { emoji: '☁️', idea: 'Watch clouds' },
  { emoji: '🧸', idea: 'Shop for cute things' },
  { emoji: '🎭', idea: 'Dress up for fun' },
  { emoji: '🎬', idea: 'Create a mini film' },
  { emoji: '🏞️', idea: 'Explore hidden places' },
  { emoji: '🌅', idea: 'Chase sunsets' },
  { emoji: '🌠', idea: 'Watch meteor showers' },
  { emoji: '🎨', idea: 'Color together' },
  { emoji: '🛶', idea: 'Rent a boat' },
  { emoji: '🧁', idea: 'Decorate cupcakes' },
  { emoji: '🎵', idea: 'Guess songs' },
  { emoji: '📚', idea: 'Study together' },
  { emoji: '🎤', idea: 'Share embarrassing stories' },
  { emoji: '🍉', idea: 'Have a fruit picnic' },
  { emoji: '🎮', idea: 'Finish a co-op game' },
  { emoji: '🧩', idea: 'Complete a giant puzzle' },
  { emoji: '📸', idea: 'Make memories scrapbook' },
  { emoji: '🎁', idea: 'Surprise each other' },
  { emoji: '🧋', idea: 'Try every cafe nearby' },
  { emoji: '🌷', idea: 'Visit a botanical garden' },
  { emoji: '🍕', idea: 'Eat pizza under the stars' },
  { emoji: '💃', idea: 'Learn a dance together' },
  { emoji: '🕊️', idea: 'Feed birds at a park' },
  { emoji: '🎆', idea: 'Watch fireworks' },
  { emoji: '❤️', idea: 'Simply spend time together' },
];

let lastDateIdx = -1;

function generateDate() {
  let idx;
  do { idx = Math.floor(Math.random() * dateIdeas.length); } while (idx === lastDateIdx);
  lastDateIdx = idx;

  const textEl = document.getElementById('date-text');
  const emojiEl = document.getElementById('date-emoji');

  textEl.classList.add('fading');
  setTimeout(() => {
    emojiEl.textContent = dateIdeas[idx].emoji;
    textEl.textContent = dateIdeas[idx].idea;
    textEl.classList.remove('fading');
  }, 350);
}

/* =========================================
   9. SECTION 5 — MEMORY MACHINE
========================================= */
const memories = [
  "🌸 Remember the first time we talked?",
  "☕ Remember sharing our favorite drinks?",
  "📱 Remember staying up late texting?",
  "😂 Remember laughing at something silly?",
  "🌧️ Remember listening to the rain together?",
  "🎬 Remember our movie night?",
  "🌅 Remember watching the sunset?",
  "🍦 Remember sharing snacks?",
  "📸 Remember taking photos together?",
  "🧋 Remember our bubble tea date?",
  "🌸 Future memory: walking through cherry blossoms.",
  "🌙 Future memory: stargazing together.",
  "🏖️ Future memory: watching waves together.",
  "📚 Future memory: reading side by side.",
  "🎡 Future memory: riding a Ferris wheel.",
  "☁️ Future memory: cloud watching.",
  "🎮 Future memory: winning a game together.",
  "🎤 Future memory: singing badly together.",
  "🍕 Future memory: making pizza together.",
  "🎨 Future memory: painting together.",
  "🚗 Future memory: random road trip.",
  "🌄 Future memory: watching sunrise.",
  "🛍️ Future memory: shopping for fun.",
  "📸 Future memory: taking cute selfies.",
  "🎁 Future memory: surprising each other.",
  "🍰 Future memory: baking cookies.",
  "🎂 Future memory: celebrating milestones.",
  "🌷 Future memory: planting flowers.",
  "🧸 Future memory: winning a plushie.",
  "🎬 Future memory: creating a mini movie.",
  "❤️ Future memory: holding hands.",
  "🌙 Future memory: late-night conversations.",
  "☕ Future memory: cafe hopping.",
  "📖 Future memory: sharing stories.",
  "🍫 Future memory: chocolate tasting.",
  "🏞️ Future memory: exploring nature.",
  "🎵 Future memory: sharing playlists.",
  "🕯️ Future memory: candlelight dinner.",
  "📷 Future memory: filling a photo album.",
  "🌠 Future memory: meteor shower night.",
  "🧋 Future memory: trying every cafe.",
  "🎡 Future memory: carnival adventures.",
  "🏕️ Future memory: camping together.",
  "🌊 Future memory: beach walk.",
  "🎨 Future memory: doodling together.",
  "📖 Future memory: exchanging letters.",
  "🎁 Future memory: random gifts.",
  "🍉 Future memory: picnic day.",
  "🧩 Future memory: puzzle night.",
  "🎮 Future memory: co-op gaming.",
  "☔ Future memory: sharing an umbrella.",
  "🚶 Future memory: long walks.",
  "🌅 Future memory: chasing sunsets.",
  "🎆 Future memory: fireworks night.",
  "🍓 Future memory: strawberry picking.",
  "🌷 Future memory: botanical garden visit.",
  "🎭 Future memory: matching outfits.",
  "🎤 Future memory: karaoke battle.",
  "🍜 Future memory: ramen date.",
  "🛏️ Future memory: blanket fort.",
  "📸 Future memory: Polaroid collection.",
  "🌸 A memory waiting to happen.",
  "✨ A story not written yet.",
  "💖 A smile we haven't shared yet.",
  "🌙 A night we haven't experienced yet.",
  "📷 A photo we haven't taken yet.",
  "🎡 An adventure waiting for us.",
  "🌊 A beach walk waiting to happen.",
  "☕ A cafe visit waiting for us.",
  "🎬 A movie night still ahead.",
  "🍕 A pizza date in our future.",
  "🌄 A sunrise we'll watch someday.",
  "🎁 A surprise yet to come.",
  "📚 A book we'll recommend each other.",
  "🎵 A song we'll remember forever.",
  "🍰 A dessert we'll love.",
  "🎨 A drawing we'll laugh at.",
  "🧸 A plushie we'll fight over.",
  "😂 A joke we'll never forget.",
  "🌷 A flower we'll stop to admire.",
  "📸 A candid photo we'll treasure.",
  "❤️ A moment that becomes our favorite memory.",
  "✨ The day we look back and smile.",
  "🌙 A peaceful evening together.",
  "☁️ A lazy afternoon together.",
  "🌅 Another sunset waiting for us.",
  "🍓 Another sweet day together.",
  "📷 Another memory worth keeping.",
  "🎡 Another adventure waiting.",
  "🧋 Another drink to share.",
  "🍫 Another dessert to try.",
  "🎬 Another movie to watch.",
  "🎵 Another song to discover.",
  "🌷 Another beautiful day together.",
  "☕ Another conversation we'll remember.",
  "❤️ Another chapter in our story.",
  "✨ The best memories are still ahead.",
  "💖 The next memory starts today.",
];

let lastMemIdx = -1;

function generateMemory() {
  let idx;
  do { idx = Math.floor(Math.random() * memories.length); } while (idx === lastMemIdx);
  lastMemIdx = idx;

  const el = document.getElementById('memory-text');
  el.classList.add('fading');
  setTimeout(() => {
    el.textContent = memories[idx];
    el.classList.remove('fading');
  }, 400);
}

/* =========================================
   10. SECTION 6 — ENVELOPE / LETTER
========================================= */
const letterText = `Dear Siti Halam,

If you're reading this, I just want you to know how grateful I am that our paths crossed and that I had the chance to spend six years of my life with you.

Six years may sound like just a number to some people, but to me, those years are filled with countless memories, lessons, laughter, struggles, and moments that I will always cherish. Through all the ups and downs, you became such an important part of my life, and for that, I will always be thankful.

There are so many things I wish I could say, and perhaps there are things I should have said much earlier.

First of all, I am sorry.

I am sorry for the mistakes I made throughout our journey together. I know I was not perfect, and I know there were times when I hurt you, disappointed you, or made you feel uncomfortable. Looking back now, there are many moments I wish I could do differently.

I am sorry that I could not give you the things you deserved. I am sorry that I could not buy you a beautiful ring, surprise you with flowers, or give you gifts like other boyfriends do. It was never because I didn't want to. The truth is, I always wanted to make you happy, but sometimes I simply wasn't capable of giving you everything I wished I could.

I am sorry for the times when you needed me and I wasn't there. I am sorry for the moments when you felt alone when I should have been standing beside you. I know there were times when my presence, support, or understanding could have made things easier for you, and I deeply regret not being better in those moments.

I am sorry for the times I got angry. Out of all the memories we share, one thing that still weighs heavily on my heart is how I treated you when we worked at the burger shop. I still remember those moments, and honestly, I regret them so much. I hate knowing that I made someone I love feel hurt because of my temper. If I could go back in time, I would choose patience, understanding, and kindness every single time.

I am truly sorry.

Even after all these years, one thing has never changed.

I love you.

I love your smile.
I love your laugh.
I love the way you care about people.
I love the little things about you that most people probably don't even notice.

Thank you for every memory.
Thank you for every conversation.
Thank you for every moment you stayed.
Thank you for every moment you chose us.

You have brought happiness into my life in ways I can never fully explain. Even on difficult days, just knowing you were there often gave me strength.

If there is one thing I hope you can feel while reading this letter, it is how much I appreciate you.

You are important to me.
You always have been.

I know I cannot change the past. I cannot undo my mistakes, and I cannot erase the moments that caused pain. But if I could choose one thing, it would be for you to know that every apology written here comes from the deepest part of my heart.

No matter what happens in the future, I will always be grateful for the six years we shared together.

Please take care of yourself.
Please continue chasing your dreams.
Please continue smiling, because your smile has always been one of my favourite things in this world.

And if there is still a small place for me in your heart, I hope that one day we can create new memories together, stronger, wiser, and kinder than before.

Thank you for everything, Siti Halam.

With all my love,

❤️ Yours Always
`;

let letterOpened = false;

function openEnvelope() {
  if (letterOpened) return;
  letterOpened = true;

  const env = document.getElementById('envelope');
  env.classList.add('open');

  setTimeout(() => {
    const paper = document.getElementById('letter-paper');
    paper.classList.remove('hidden');
    typewriterEffect('letter-content', letterText, 28);
  }, 700);
}

function typewriterEffect(elId, text, speed = 30) {
  const el = document.getElementById(elId);
  el.textContent = '';
  let i = 0;
  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

/* =========================================
   11. SECTION 7 — LOVE METER
========================================= */
let meterValue = 0;
let meterDone = false;
const meterBar = document.getElementById('meter-bar');
const meterLabel = document.getElementById('meter-label');
const meterFinal = document.getElementById('meter-final');

function tickMeter() {
  if (meterDone) return;
  meterValue = Math.min(meterValue + 0.3, 100);
  meterBar.style.width = meterValue + '%';

  if (meterValue < 100) {
    meterLabel.textContent = Math.floor(meterValue) + '%';
  } else {
    meterLabel.textContent = '∞';
    meterFinal.classList.remove('hidden');
    meterDone = true;
  }
}

// Start meter when in view
const meterSection = document.getElementById('lovemeter');
const meterObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !meterDone) {
    const ticker = setInterval(() => {
      tickMeter();
      if (meterDone) clearInterval(ticker);
    }, 30);
    meterObserver.disconnect();
  }
}, { threshold: 0.3 });
meterObserver.observe(meterSection);

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
