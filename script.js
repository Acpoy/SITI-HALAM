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
  "Your smile can brighten any room.",
  "You make ordinary moments feel special.",
  "You are stronger than you think.",
  "You are beautiful inside and out.",
  "You make life feel lighter.",
  "Your kindness leaves a mark on everyone you meet.",
  "You have a heart that truly cares.",
  "You are braver than you know.",
  "You bring warmth to every space you enter.",
  "The world is genuinely better with you in it.",
  "You have a laugh that is absolutely contagious.",
  "You notice the little things others miss.",
  "You are more capable than you give yourself credit for.",
  "You have a way of making people feel heard.",
  "You turn small gestures into big memories.",
  "You handle difficult things with quiet grace.",
  "You are a rare kind of person.",
  "Your energy is magnetic.",
  "You inspire others without even realizing it.",
  "You are worthy of all the love you give away.",
  "You have a mind full of beautiful thoughts.",
  "You are someone worth knowing deeply.",
  "You make hard days easier for the people around you.",
  "Your presence is a gift.",
  "You keep going even when it's hard.",
  "You are full of potential waiting to bloom.",
  "You have a gentle strength that moves mountains.",
  "You deserve every good thing coming your way.",
  "You make the people around you feel important.",
  "You have a soul that shines.",
  "You are curious and that makes you extraordinary.",
  "You have the courage to feel things deeply.",
  "You are someone others are lucky to have.",
  "You create comfort wherever you are.",
  "You know how to find beauty in simple things.",
  "You are endlessly fascinating.",
  "You have wisdom beyond what you realize.",
  "You remind people that softness is a superpower.",
  "You are the kind of person worth waiting for.",
  "You have a heart full of good intentions.",
  "You are someone I am glad exists.",
  "You carry yourself with a quiet dignity.",
  "You are patient when it counts the most.",
  "You make effort look effortless.",
  "You have a depth to you that is truly captivating.",
  "You are exactly who you are meant to be.",
  "You light up every room you walk into.",
  "You make even the hardest things feel possible.",
  "You are a masterpiece in progress.",
  "You deserve to hear how special you are, every day.",
  "You have a way of seeing the good in people.",
  "You are steadfast in ways that matter.",
  "You know how to love whole-heartedly.",
  "You carry hope even in heavy moments.",
  "You are a safe place for the people who know you.",
  "You dream beautifully.",
  "You have a creativity that lights things up.",
  "You are someone who makes others want to be better.",
  "You are filled with a warmth that cannot be faked.",
  "You deserve to rest, truly rest.",
  "You are allowed to take up space.",
  "You have an imagination that is absolutely lovely.",
  "You are thoughtful in everything you do.",
  "You have a quiet power in you.",
  "You are a whole universe of wonderful things.",
  "You deserve gentleness, especially from yourself.",
  "You are deeply, truly enough.",
  "You make the world prettier just by being in it.",
  "You have the most beautiful way of caring.",
  "You are full of surprises, all of them wonderful.",
  "You have survived every hard day so far.",
  "You are resilient in ways that move me.",
  "You deserve to be celebrated today and always.",
  "You are someone worth holding onto.",
  "You are everything someone could hope for.",
  "You have a spirit that cannot be dimmed.",
  "You are radiant, always.",
  "You are someone who turns ordinary into extraordinary.",
  "You deserve to feel loved, deeply and always.",
  "You are a soft landing place for the people who need it.",
  "You have a way of making silence feel comfortable.",
  "You are endlessly, genuinely lovable.",
  "You hold more light than you know.",
  "You are the kind of person people remember fondly.",
  "You have a way of making hard things feel manageable.",
  "You are not just good — you are remarkable.",
  "You carry so much love in you.",
  "You are courageous in the most human ways.",
  "You are never too much and always enough.",
  "You have the most wonderful way of showing up.",
  "You deserve all the flowers and then some.",
  "You are gentle where gentleness matters.",
  "You have a spirit that is impossible not to admire.",
  "You are someone the world is lucky to have.",
  "You make people feel like they belong.",
  "You are truly, profoundly amazing.",
  "You are a reason for someone to smile today.",
  "You are precious beyond measure.",
  "You are loved more than you know.",
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
  { emoji: '🎬', idea: 'Movie marathon with your favorite snacks' },
  { emoji: '☕', idea: 'Cozy coffee date at a quiet café' },
  { emoji: '🌅', idea: 'Sunset picnic in the park' },
  { emoji: '🌙', idea: 'Midnight walk under the stars' },
  { emoji: '🍳', idea: 'Cook a new recipe together at home' },
  { emoji: '🏖️', idea: 'A lazy day at the beach' },
  { emoji: '🌠', idea: 'Stargazing on a clear night' },
  { emoji: '🍦', idea: 'Ice cream date — every flavour you can find' },
  { emoji: '📚', idea: 'Browse a bookstore all afternoon' },
  { emoji: '🎨', idea: 'Paint together and see what happens' },
  { emoji: '🎡', idea: 'Visit a theme park and ride everything twice' },
  { emoji: '🧁', idea: 'Bake something sweet together' },
  { emoji: '🌿', idea: 'Explore a botanical garden' },
  { emoji: '🎪', idea: 'Find a local night market to wander through' },
  { emoji: '📸', idea: 'Photography walk in a beautiful neighbourhood' },
  { emoji: '🎵', idea: 'Attend a live music event' },
  { emoji: '🌁', idea: 'Drive somewhere new with no destination' },
  { emoji: '🍣', idea: 'Try a restaurant neither of you has been to' },
  { emoji: '🛶', idea: 'Rent a boat and drift slowly' },
  { emoji: '🎲', idea: 'Game night with your favourite board games' },
  { emoji: '🌻', idea: 'Visit a flower farm or sunflower field' },
  { emoji: '🧋', idea: 'Boba run and walk around the city' },
  { emoji: '🎤', idea: 'Karaoke night — no judgment, just fun' },
  { emoji: '🎠', idea: 'Explore a night carnival together' },
  { emoji: '🌊', idea: 'Watch the waves at the sea at golden hour' },
  { emoji: '🍕', idea: 'Pizza-making competition at home' },
  { emoji: '🚴', idea: 'Cycling through a scenic route' },
  { emoji: '🌧️', idea: 'Rainy day movie + blanket fort at home' },
  { emoji: '🦋', idea: 'Visit a butterfly sanctuary' },
  { emoji: '🏔️', idea: 'Hike somewhere scenic and pack a lunch' },
  { emoji: '🎀', idea: 'Make a scrapbook of your favourite memories' },
  { emoji: '🌺', idea: 'Flower arranging class together' },
  { emoji: '🎯', idea: 'Arcade date — winner buys dessert' },
  { emoji: '🚂', idea: 'Take a train ride to a nearby town' },
  { emoji: '🧊', idea: 'Ice skating, even if you both fall' },
  { emoji: '🌈', idea: 'Chase a sunset to the highest point in town' },
  { emoji: '📖', idea: 'Read the same book and discuss it over tea' },
  { emoji: '🎋', idea: 'Visit a Japanese garden for peace and quiet' },
  { emoji: '🍰', idea: 'Café hopping to find the best cake in the city' },
  { emoji: '🌏', idea: 'Plan a dream trip together — even just for fun' },
  { emoji: '🎗️', idea: 'Volunteer together for a cause you both care about' },
  { emoji: '🧺', idea: 'Picnic breakfast at sunrise' },
  { emoji: '🛍️', idea: 'Thrift shopping adventure' },
  { emoji: '🎆', idea: 'Watch fireworks from the best spot in town' },
  { emoji: '🌌', idea: 'Drive to the countryside and gaze at the Milky Way' },
  { emoji: '🍫', idea: 'Visit a chocolate shop and try everything' },
  { emoji: '🏄', idea: 'Try something new and adventurous together' },
  { emoji: '💌', idea: 'Write letters to each other and read them out loud' },
  { emoji: '🎑', idea: 'A quiet evening at home with candles and good music' },
  { emoji: '🌷', idea: 'Visit a tulip field in bloom' },
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
  "One day we'll laugh about this moment.",
  "The best memories often start unexpectedly.",
  "Some moments become treasures without warning.",
  "Small moments can mean everything.",
  "The most beautiful things are rarely planned.",
  "Every adventure begins with one small step.",
  "There are moments that stay in your heart forever.",
  "The simplest memories are often the most precious.",
  "Some conversations change everything.",
  "You're building something beautiful without knowing it.",
  "There are days that quietly become your favourites.",
  "Little things done with love become lifelong memories.",
  "Some moments need no photo — they live inside you.",
  "Every shared laugh is a memory being made.",
  "The stories you'll tell one day are being written right now.",
  "Some places only feel magical because of who was there.",
  "You'll one day miss what you have right now.",
  "Ordinary days are secretly extraordinary.",
  "Some moments feel like warm light in a dark room.",
  "Every experience carries a gift, even the hard ones.",
  "The small things are actually the big things.",
  "One day you'll remember today and smile.",
  "The best chapters are still being written.",
  "Time turns experiences into something golden.",
  "Every moment you savour becomes a treasure.",
  "Some memories feel like a warm hug from the past.",
  "You're in the middle of someone's favourite story right now.",
  "The unexpected ones are always the most beautiful.",
  "Time slows down for the moments that matter.",
  "Every little memory is a thread in something magnificent.",
  "You'll look back and be so proud of how far you came.",
  "A simple day can become someone's favourite memory.",
  "The moments that catch you off guard are often the best.",
  "You are creating memories right now, even in stillness.",
  "One day this quiet moment will feel like gold.",
  "Every kind word you've spoken lives on somewhere.",
  "The small kindnesses matter more than you know.",
  "Some seasons of life feel magical only in hindsight.",
  "You are in someone's warmest memory right now.",
  "The best things often happen when you stop looking.",
  "One day you'll tell this story and realise how beautiful it was.",
  "Memory is love's way of staying forever.",
  "The things you give without thinking are often the most cherished.",
  "There are moments when the world is exactly right.",
  "Every chapter ends to make room for something beautiful.",
  "The softness of a moment can linger for a lifetime.",
  "You are more than you know, and one day you'll see it clearly.",
  "Some days quietly become the ones you miss the most.",
  "The world keeps a record of every good thing you've done.",
  "The best gift you ever gave someone was your time.",
  "There are stories inside you worth telling.",
  "You've already made a difference in more ways than you know.",
  "Every quiet moment is a chance to create something wonderful.",
  "The memories that matter most are the ones made simply.",
  "You carry light even when you don't realise it.",
  "Some moments are so beautiful they don't need words.",
  "You are weaving something wonderful without knowing it.",
  "Presence is the rarest and most beautiful gift.",
  "Some moments only become precious when they're past.",
  "You'll look back on this season with so much warmth.",
  "The most meaningful things rarely announce themselves.",
  "One day this will be the good old days.",
  "You are creating something beautiful just by being yourself.",
  "The quiet moments between us are the ones I'd choose again.",
  "Some things only make sense later — and then they make everything.",
  "Every morning is a chance to make a memory worth keeping.",
  "You are loved in moments you don't even see.",
  "Some days write themselves in gold.",
  "The warmth of a memory can travel across years.",
  "You matter to more people than you'll ever fully know.",
  "Today is quietly becoming a memory you'll treasure.",
  "Every smile you've given lives on in someone's heart.",
  "The most beautiful things happen slowly, without fanfare.",
  "You are part of stories being told long after today.",
  "Some feelings only have one name: unforgettable.",
  "You leave warmth wherever you go.",
  "One day you'll realise — this was a good time.",
  "The little moments are the ones we come back to.",
  "You've already given so much to those around you.",
  "Some days feel like a soft glow that never quite fades.",
  "The things worth holding onto often can't be held at all.",
  "You are building a life full of moments worth remembering.",
  "Every act of kindness ripples further than you'll ever see.",
  "Some memories feel like coming home.",
  "You make things beautiful just by being part of them.",
  "The world is richer for having you in it.",
  "One day this moment will be a story you love to tell.",
  "The best kind of ordinary is the kind spent with someone who matters.",
  "You are in the middle of your own wonderful story.",
  "Every memory you cherish once felt just like today.",
  "Time has a way of turning golden what once felt simple.",
  "You are someone's favourite chapter.",
  "The moments that shape us often feel small at the time.",
  "What a beautiful life this is becoming.",
  "The best memories are built from love and ordinary days.",
  "You were here, and that was enough to make things beautiful.",
  "Some moments stay with us like a melody we never forget.",
  "You are making memories right now — even in the quiet.",
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

Thank you for being part of my life.

Thank you for your kindness, your laughter, and all the little things that make you who you are.

I made this website because I wanted to create something special that could always remind you how appreciated you are.

I hope whenever you visit this website, it makes you smile — even for just a moment.

Take care of yourself.
Keep smiling.
Never forget how wonderful you truly are.

With love ❤️`;

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
