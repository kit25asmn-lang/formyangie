/**
 * ==============================================================================
 * 🎀 ROMANTIC BABY-PINK TULIP PROPOSAL WEBSITE
 * Interactive love letter + garden surprise with reactive tulips, runaway NO button,
 * 3D fluttering butterflies, and "Dada Pari" by Yabesh Thapa!
 * ==============================================================================
 */

// ==============================================================================
// 🫶 1. PERSONALIZATION CONFIGURATION (Easily edit anything here!)
// ==============================================================================
const CONFIG = {
  // Names
  herName: "Angie",            // Her name (appears in greetings, letter, finale)
  myName: "Suman",              // Your name (signed in the love letter)

  // Music Settings: "Dada Pari" by Yabesh Thapa
  songTitle: "Herai Basai - Yabesh Thapa",
  youtubeVideoId: "T16Ce6XTGfo", // Official "Dada Pari" by Yabesh Thapa
  musicUrl: "",                  // Optional local file path (e.g. "dadapari.mp3" if you place it in the folder)

  // Hero Section
  greetingBadge: "Hey Angie... 🌷",
  heroTitle: "I have a little question for you...",

  // Love Letter Section
  letterHeading: "For you 🌷",
  letterGreeting: "My dearest Angie,",
  letterParagraphs: [
    "I don't know exactly when it happened, but somewhere along the way, you became one of my favorite parts of every single day.",
    "And i know like hami xito vanda ni derai nai xito move gardai xam but its ok cause we both love each other haina ni.😭",
    "Huhu mro gf na vaa bela ta tmro matra yad aai rakhaa aaba vayeu vane omg ma k hunxu holaa yrr huhu hopee tmy le accpet garxau yrrr.",
    "I don't know your pastt malai kei pani tha nai xaina but i just wanna say is malai tesko matlab pani lagdaina hera am here to love you for who you are and malai yo ni thaxaina how were you treated before but i promise i will give my everthing just to make you smile and happy cause you deserve the world and more.",
    "Your smile brightens even my cloudiest afternoons, and everything feels softer, warmer, and sweeter when you're around.",
    "Thank you for being the most wonderful, genuine, and beautiful person in my life. You make my whole heart bloom.",
    "Aheem yo vanda badi english pani na bolam hola ni mro tuteko english padhera nai bhageu vanee ohh nooo... 😭",
    
  ],
  letterSignoff: "Forever & always,",
  letterSignature: "Yours truly, Suman 🌷",

  // Tulip Garden Section
  gardenTitle: "A little garden for you 🌷",
  gardenSubtitle: "Every flower here is cute... but somehow you're still prettier. 🌷",
  tulipCount: 8,               // Number of interactive tulips in the garden bed
  butterflyCount: 5,           // Number of 3D fluttering butterflies in the garden

  // Proposal Section
  proposalPrehead: "Okay... enough distractions.",
  proposalLead: "I have one very important question.",
  proposalQuestion: "Will you be mine? 💗",
  yesButtonBaseText: "YES 💗",

  // Playful runaway NO button texts (in order of evasion attempts)
  noButtonTexts: [
    "NO 😈",
    "Nope 😭",
    "Nice try 😂",
    "Catch me first! 🏃‍♀️",
    "You really thought? 💀",
    "Almost had it! 😜",
    "Wait, are you sure? 🥺",
    "Wrong button silly! 💕",
    "Error 404: 'No' not found 🤖",
    "Pretty please? 🥺💗",
    "Give up and press YES! 💖"
  ],

  // Playful commentary under the proposal card as NO escapes
  chatterMessages: [
    "Oops! That button seems slippery... 🤭",
    "Hehe, you can't click that! 🌸",
    "Look at how big the YES button is getting! 👀",
    "Resistance is futile, sweetie! 💗",
    "It's fate! Just press YES! 🌷✨"
  ],

  // Grand Finale / Celebration Section
  finaleHeading: "YAYYYYY!!! 💗🌷",
  finaleSubheading: "I knew you'd say yes. 🥰",
  finaleMessage: "Now I officially have my favorite person. ❤️ You make my entire world bloom with joy, warmth, and laughter every single day. Here's to us, our adventures, and a lifetime of happiness. And I lovee you a lotttttt 💗🌷 yaa vako vaye ta chuppah nai garthiye xainau ra matraa hoo.",
  finaleSignature: "Forever yours, Suman 🌷",

  // Colors
  colors: {
    primaryPink: "#f472b6",
    babyPink: "#fbcfe8",
    softBlush: "#fce7f3",
    deepPink: "#db2777",
    tulipGreen: "#86efac",
    darkAccent: "#831843"
  }
};

// ==============================================================================
// 🌟 2. INITIALIZATION & DOM HYDRATION
// ==============================================================================
document.addEventListener("DOMContentLoaded", () => {
  hydrateTextsFromConfig();
  initAmbientCanvas();
  initCursorGlow();
  initMusicPlayer();
  initHeroTulip();
  initGardenBed();
  initButterflies();
  initProposalInteraction();
  initScrollAnimations();
  initCelebrationButtons();
});

/**
 * Hydrates all static text placeholders with values from CONFIG
 */
function hydrateTextsFromConfig() {
  // Hero
  const heroBadge = document.getElementById("hero-badge");
  const heroTitle = document.getElementById("hero-title");
  if (heroBadge) heroBadge.textContent = CONFIG.greetingBadge;
  if (heroTitle) heroTitle.textContent = CONFIG.heroTitle;

  // Love Letter
  const letterTitle = document.getElementById("letter-title");
  const letterGreeting = document.getElementById("letter-greeting");
  const letterBody = document.getElementById("letter-body");
  const letterSignoff = document.getElementById("letter-signoff");
  const letterSignature = document.getElementById("letter-signature");

  if (letterTitle) letterTitle.textContent = CONFIG.letterHeading;
  if (letterGreeting) letterGreeting.textContent = CONFIG.letterGreeting;
  if (letterSignoff) letterSignoff.textContent = CONFIG.letterSignoff;
  if (letterSignature) letterSignature.textContent = CONFIG.letterSignature;

  if (letterBody && CONFIG.letterParagraphs) {
    letterBody.innerHTML = CONFIG.letterParagraphs.map(p => `<p>${escapeHTML(p)}</p>`).join("");
  }

  // Garden
  const gardenTitle = document.getElementById("garden-title");
  const gardenSubtitle = document.getElementById("garden-subtitle");
  if (gardenTitle) gardenTitle.textContent = CONFIG.gardenTitle;
  if (gardenSubtitle) gardenSubtitle.textContent = CONFIG.gardenSubtitle;

  // Proposal
  const proposalPrehead = document.getElementById("proposal-prehead");
  const proposalLead = document.getElementById("proposal-lead");
  const proposalQuestion = document.getElementById("proposal-question");
  const btnYesText = document.getElementById("btn-yes-text");
  const btnNoText = document.getElementById("btn-no-text");

  if (proposalPrehead) proposalPrehead.textContent = CONFIG.proposalPrehead;
  if (proposalLead) proposalLead.textContent = CONFIG.proposalLead;
  if (proposalQuestion) proposalQuestion.textContent = CONFIG.proposalQuestion;
  if (btnYesText) btnYesText.textContent = CONFIG.yesButtonBaseText;
  if (btnNoText && CONFIG.noButtonTexts.length > 0) {
    btnNoText.textContent = CONFIG.noButtonTexts[0];
  }

  // Finale
  const finaleTitle = document.getElementById("finale-title");
  const finaleSubtitle = document.getElementById("finale-subtitle");
  const finaleMessage = document.getElementById("finale-message");
  const finaleSignature = document.getElementById("finale-signature");

  if (finaleTitle) finaleTitle.textContent = CONFIG.finaleHeading;
  if (finaleSubtitle) finaleSubtitle.textContent = CONFIG.finaleSubheading;
  if (finaleMessage) finaleMessage.textContent = CONFIG.finaleMessage;
  if (finaleSignature) finaleSignature.textContent = CONFIG.finaleSignature;
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

// ==============================================================================
// 🌸 3. AMBIENT BACKGROUND PARTICLES (Floating Petals & Gentle Hearts)
// ==============================================================================
function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = window.innerWidth < 600 ? 24 : 45;
  const particles = [];

  class FloatingParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : -30;
      this.size = Math.random() * 12 + 8;
      this.speedY = Math.random() * 0.8 + 0.5;
      this.speedX = Math.random() * 0.6 - 0.3;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.02;
      this.opacity = Math.random() * 0.45 + 0.25;
      this.type = Math.random() > 0.4 ? "petal" : "heart";
      this.swaySpeed = Math.random() * 0.02 + 0.01;
      this.swayOffset = Math.random() * Math.PI * 2;
    }

    update() {
      this.y += this.speedY;
      this.swayOffset += this.swaySpeed;
      this.x += Math.sin(this.swayOffset) * 0.7 + this.speedX;
      this.rotation += this.rotSpeed;

      if (this.y > height + 40 || this.x < -40 || this.x > width + 40) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.globalAlpha = this.opacity;

      if (this.type === "petal") {
        ctx.fillStyle = "#fbcfe8";
        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        ctx.bezierCurveTo(this.size * 0.8, -this.size * 0.6, this.size * 0.8, this.size * 0.6, 0, this.size);
        ctx.bezierCurveTo(-this.size * 0.8, this.size * 0.6, -this.size * 0.8, -this.size * 0.6, 0, -this.size);
        ctx.fill();

        ctx.fillStyle = "#ffffff";
        ctx.globalAlpha = this.opacity * 0.5;
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size * 0.3, this.size * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = "#f472b6";
        const s = this.size * 0.6;
        ctx.beginPath();
        ctx.moveTo(0, s * 0.3);
        ctx.bezierCurveTo(-s, -s * 0.5, -s * 1.5, s * 0.5, 0, s * 1.5);
        ctx.bezierCurveTo(s * 1.5, s * 0.5, s, -s * 0.5, 0, s * 0.3);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new FloatingParticle());
  }

  let animationFrameId;
  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    animationFrameId = requestAnimationFrame(animate);
  }

  animate();

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else {
      animate();
    }
  });
}

// ==============================================================================
// ✨ 4. DESKTOP CURSOR GLOW & CLICK PETAL SPARKLES
// ==============================================================================
function initCursorGlow() {
  const glow = document.getElementById("cursor-glow");
  if (!glow || window.matchMedia("(hover: none)").matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener("pointermove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderGlow() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;
    glow.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
    requestAnimationFrame(renderGlow);
  }
  renderGlow();

  window.addEventListener("click", e => {
    if (e.target.closest("#hero-tulip") || e.target.closest(".garden-tulip-item") || e.target.closest(".butterfly")) return;
    createClickBurst(e.clientX, e.clientY, 5);
  });
}

function createClickBurst(x, y, count = 6) {
  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement("span");
    sparkle.innerText = Math.random() > 0.5 ? "🌸" : "✨";
    sparkle.style.position = "fixed";
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    sparkle.style.fontSize = `${Math.random() * 12 + 12}px`;
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "999";
    sparkle.style.transition = "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease";

    document.body.appendChild(sparkle);

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 50 + 20;
    const destX = Math.cos(angle) * distance;
    const destY = Math.sin(angle) * distance;

    requestAnimationFrame(() => {
      sparkle.style.transform = `translate(${destX}px, ${destY}px) scale(0)`;
      sparkle.style.opacity = "0";
    });

    setTimeout(() => sparkle.remove(), 850);
  }
}

// ==============================================================================
// 🎵 5. ROMANTIC MUSIC PLAYER ("Dada Pari" by Yabesh Thapa)
// ==============================================================================
let ytPlayer = null;
let ytReady = false;
let audioCtx = null;
let synthInterval = null;
let isAudioPlaying = false;

// YouTube Iframe API Callback
window.onYouTubeIframeAPIReady = function() {
  try {
    ytPlayer = new YT.Player("yt-audio-player", {
      height: "1",
      width: "1",
      videoId: CONFIG.youtubeVideoId || "T16Ce6XTGfo",
      playerVars: {
        autoplay: 0,
        controls: 0,
        loop: 1,
        playlist: CONFIG.youtubeVideoId || "T16Ce6XTGfo"
      },
      events: {
        onReady: () => {
          ytReady = true;
          console.log("YouTube Player loaded successfully for Dada Pari by Yabesh Thapa!");
        },
        onError: (err) => {
          console.warn("YouTube player encountered an issue, fallback audio ready:", err);
        }
      }
    });
  } catch (e) {
    console.warn("Could not initialize YouTube player:", e);
  }
};

function initMusicPlayer() {
  const musicBtn = document.getElementById("music-btn");
  const musicLabel = document.getElementById("music-label");
  const bgAudio = document.getElementById("bg-audio");

  if (!musicBtn) return;

  if (CONFIG.musicUrl && CONFIG.musicUrl.trim() !== "") {
    bgAudio.src = CONFIG.musicUrl;
  }

  musicBtn.addEventListener("click", () => {
    if (!isAudioPlaying) {
      startMusic();
    } else {
      stopMusic();
    }
  });

  function startMusic() {
    isAudioPlaying = true;
    musicBtn.classList.add("playing");
    if (musicLabel) musicLabel.textContent = "Herai Basai-Yabesh Thapa: Playing ♫";

    let playedViaYT = false;
    if (ytReady && ytPlayer && typeof ytPlayer.playVideo === "function") {
      try {
        ytPlayer.playVideo();
        playedViaYT = true;
      } catch (e) {
        playedViaYT = false;
      }
    }

    if (!playedViaYT) {
      if (CONFIG.musicUrl && CONFIG.musicUrl.trim() !== "") {
        bgAudio.play().catch(err => {
          console.warn("Local audio playback failed, playing synthesized Dada Pari melody:", err);
          startDadaPariSynth();
        });
      } else {
        startDadaPariSynth();
      }
    }
  }

  function stopMusic() {
    isAudioPlaying = false;
    musicBtn.classList.remove("playing");
    if (musicLabel) musicLabel.textContent = "Herai Basai-Yabesh Thapa: Off";

    if (ytReady && ytPlayer && typeof ytPlayer.pauseVideo === "function") {
      try { ytPlayer.pauseVideo(); } catch (e) {}
    }

    if (bgAudio && !bgAudio.paused) {
      bgAudio.pause();
    }
    stopDadaPariSynth();
  }
}

/**
 * Built-in Synthesizer Fallback: Acoustic Guitar & Melody of "Dada Pari" by Yabesh Thapa!
 * Plays the warm, romantic chord progression (C#m - A - E - B) and the beloved melody.
 */
function startDadaPariSynth() {
  if (synthInterval) clearInterval(synthInterval);

  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioCtx) audioCtx = new AudioContextClass();
    if (audioCtx.state === "suspended") audioCtx.resume();

    // Notes for "Dada Pari" (Key of E / C# minor)
    // C#m: C#3, G#3, C#4, E4
    // A: A2, E3, A3, C#4
    // E: E2, B2, E3, G#3
    // B: B2, F#3, B3, D#4
    const chords = [
      [138.59, 207.65, 277.18, 329.63], // C#m
      [110.00, 164.81, 220.00, 277.18], // A
      [82.41, 123.47, 164.81, 207.65],  // E
      [123.47, 185.00, 246.94, 311.13]  // B
    ];

    // Vocal melody fragments of Dada Pari:
    // "Dada pari kanchhi ko gaun... nachi raki chhe re..."
    const melodyPhrases = [
      [329.63, 415.30, 493.88, 554.37, 493.88, 415.30], // E4 - G#4 - B4 - C#5 - B4 - G#4
      [369.99, 329.63, 277.18, 329.63, 369.99],         // F#4 - E4 - C#4 - E4 - F#4
      [415.30, 493.88, 554.37, 659.25, 554.37],         // G#4 - B4 - C#5 - E5 - C#5
      [493.88, 415.30, 369.99, 329.63]                  // B4 - G#4 - F#4 - E4
    ];

    let step = 0;

    function playAcousticPluck(freq, time, duration = 1.6, volume = 0.07) {
      if (!audioCtx || audioCtx.state !== "running") return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      // Triangle oscillator gives a warm acoustic guitar / harp timbre
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, time);

      // Acoustic pluck envelope
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.linearRampToValueAtTime(volume, time + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(time);
      osc.stop(time + duration);
    }

    function playBar() {
      if (!isAudioPlaying || !audioCtx) return;
      const now = audioCtx.currentTime;

      // Play guitar arpeggio of current chord
      const currentChord = chords[step % chords.length];
      currentChord.forEach((note, idx) => {
        playAcousticPluck(note, now + idx * 0.16, 2.0, 0.05);
      });

      // Play signature Dada Pari melody note
      const phrase = melodyPhrases[step % melodyPhrases.length];
      phrase.forEach((note, idx) => {
        playAcousticPluck(note, now + 0.5 + idx * 0.32, 1.4, 0.08);
      });

      step++;
    }

    playBar();
    synthInterval = setInterval(playBar, 2600);
  } catch (e) {
    console.warn("Dada Pari synth error:", e);
  }
}

function stopDadaPariSynth() {
  if (synthInterval) {
    clearInterval(synthInterval);
    synthInterval = null;
  }
}

function playBloomChime() {
  if (!isAudioPlaying || !audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    const chimeFrequencies = [523.25, 659.25, 783.99, 1046.5];
    chimeFrequencies.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);
      gain.gain.setValueAtTime(0.001, now + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.05, now + idx * 0.06 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.06 + 0.5);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.6);
    });
  } catch (err) {}
}

// ==============================================================================
// 🦋 6. 3D FLUTTERING BUTTERFLIES
// ==============================================================================
const activeButterflies = [];

function initButterflies() {
  const heroHabitat = document.getElementById("hero-butterflies");
  const gardenHabitat = document.getElementById("garden-butterflies");

  if (heroHabitat) spawnButterfliesIn(heroHabitat, 2);
  if (gardenHabitat) spawnButterfliesIn(gardenHabitat, CONFIG.butterflyCount || 4);
}

function spawnButterfliesIn(container, count) {
  const wingColors = [
    { primary: "#f472b6", blush: "#fbcfe8", deep: "#db2777", spot: "#fef08a" },
    { primary: "#f43f5e", blush: "#fecdd3", deep: "#be123c", spot: "#ffffff" },
    { primary: "#ec4899", blush: "#fce7f3", deep: "#9d174d", spot: "#fef08a" },
    { primary: "#fb7185", blush: "#ffe4e6", deep: "#e11d48", spot: "#ffffff" }
  ];

  for (let i = 0; i < count; i++) {
    const color = wingColors[i % wingColors.length];
    const bf = document.createElement("div");
    bf.className = "butterfly";
    bf.id = `bf-${Math.random().toString(36).substr(2, 6)}`;

    // Create 3D butterfly SVG structure
    bf.innerHTML = `
      <div class="butterfly-wings-container">
        <!-- Left Wing -->
        <div class="bf-wing bf-wing-left">
          <svg viewBox="0 0 50 60" style="width: 100%; height: 100%;">
            <defs>
              <linearGradient id="bfGradL-${i}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ffffff" />
                <stop offset="35%" stop-color="${color.blush}" />
                <stop offset="80%" stop-color="${color.primary}" />
                <stop offset="100%" stop-color="${color.deep}" />
              </linearGradient>
            </defs>
            <path d="M48,32 C45,15 30,2 12,5 C2,7 0,22 15,35 C28,45 42,38 48,32 Z" fill="url(#bfGradL-${i})" />
            <path d="M46,33 C38,42 22,58 10,50 C4,45 8,36 24,32 C35,29 42,32 46,33 Z" fill="url(#bfGradL-${i})" opacity="0.9" />
            <circle cx="16" cy="16" r="3" fill="${color.spot}" opacity="0.9" />
            <circle cx="28" cy="22" r="2.2" fill="#ffffff" opacity="0.8" />
            <circle cx="18" cy="45" r="2" fill="${color.spot}" opacity="0.8" />
          </svg>
        </div>

        <!-- Slender Body -->
        <div class="bf-body">
          <svg viewBox="0 0 10 40" style="width: 100%; height: 100%;">
            <ellipse cx="5" cy="8" rx="2" ry="3" fill="#701a75" />
            <ellipse cx="5" cy="22" rx="1.6" ry="11" fill="#831843" />
            <path d="M4,5 Q2,0 0,0" stroke="#701a75" stroke-width="0.8" fill="none" />
            <path d="M6,5 Q8,0 10,0" stroke="#701a75" stroke-width="0.8" fill="none" />
          </svg>
        </div>

        <!-- Right Wing -->
        <div class="bf-wing bf-wing-right">
          <svg viewBox="0 0 50 60" style="width: 100%; height: 100%;">
            <defs>
              <linearGradient id="bfGradR-${i}" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#ffffff" />
                <stop offset="35%" stop-color="${color.blush}" />
                <stop offset="80%" stop-color="${color.primary}" />
                <stop offset="100%" stop-color="${color.deep}" />
              </linearGradient>
            </defs>
            <path d="M2,32 C5,15 20,2 38,5 C48,7 50,22 35,35 C22,45 8,38 2,32 Z" fill="url(#bfGradR-${i})" />
            <path d="M4,33 C12,42 28,58 40,50 C46,45 42,36 26,32 C15,29 8,32 4,33 Z" fill="url(#bfGradR-${i})" opacity="0.9" />
            <circle cx="34" cy="16" r="3" fill="${color.spot}" opacity="0.9" />
            <circle cx="22" cy="22" r="2.2" fill="#ffffff" opacity="0.8" />
            <circle cx="32" cy="45" r="2" fill="${color.spot}" opacity="0.8" />
          </svg>
        </div>
      </div>
    `;

    container.appendChild(bf);

    const bfObj = {
      el: bf,
      container: container,
      x: Math.random() * (container.offsetWidth || 300),
      y: Math.random() * (container.offsetHeight || 200),
      targetX: 0,
      targetY: 0
    };

    activeButterflies.push(bfObj);

    // Initial positioning
    moveButterflyRandomly(bfObj);

    // Continuous graceful wandering
    setInterval(() => {
      moveButterflyRandomly(bfObj);
    }, Math.random() * 2000 + 3500);

    // Proximity startle & flutter away on hover / move near
    container.addEventListener("pointermove", (e) => {
      const rect = bf.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

      if (dist < 70) {
        startleButterfly(bfObj);
      }
    });

    // Click / Tap reaction
    bf.addEventListener("click", () => {
      startleButterfly(bfObj);
      createClickBurst(bfObj.x, bfObj.y, 8);
    });
  }
}

function moveButterflyRandomly(bfObj) {
  const container = bfObj.container;
  const maxX = (container.offsetWidth || 350) - 50;
  const maxY = (container.offsetHeight || 250) - 50;

  const targetX = Math.max(10, Math.random() * maxX);
  const targetY = Math.max(10, Math.random() * maxY);

  const deltaX = targetX - bfObj.x;
  const angle = Math.max(-25, Math.min(25, deltaX * 0.2));

  bfObj.x = targetX;
  bfObj.y = targetY;

  bfObj.el.style.left = `${targetX}px`;
  bfObj.el.style.top = `${targetY}px`;
  bfObj.el.style.transform = `rotate(${angle}deg)`;
}

function startleButterfly(bfObj) {
  bfObj.el.classList.add("startled");
  createClickBurst(bfObj.x + 20, bfObj.y + 20, 6);

  setTimeout(() => {
    moveButterflyRandomly(bfObj);
    bfObj.el.classList.remove("startled");
  }, 700);
}

function attractButterflyTo(x, y) {
  if (activeButterflies.length === 0) return;
  // Pick the nearest butterfly to flutter toward the newly bloomed flower
  const nearest = activeButterflies[Math.floor(Math.random() * activeButterflies.length)];
  if (nearest && nearest.el) {
    nearest.el.style.left = `${Math.max(10, x - 25)}px`;
    nearest.el.style.top = `${Math.max(10, y - 60)}px`;
  }
}

// ==============================================================================
// 🌷 7. REACTIVE HERO TULIP
// ==============================================================================
function initHeroTulip() {
  const tulip = document.getElementById("hero-tulip");
  const heroSection = document.getElementById("hero");
  const scrollBtn = document.getElementById("hero-scroll-btn");
  if (!tulip || !heroSection) return;

  tulip.classList.add("natural-sway");

  // Track cursor and gently lean toward it
  heroSection.addEventListener("pointermove", e => {
    const rect = tulip.getBoundingClientRect();
    const tulipCenterX = rect.left + rect.width / 2;
    const tulipCenterY = rect.bottom;

    const deltaX = e.clientX - tulipCenterX;
    const maxTilt = 16;
    let tiltAngle = (deltaX / (window.innerWidth / 2)) * maxTilt;
    tiltAngle = Math.max(-maxTilt, Math.min(maxTilt, tiltAngle));

    tulip.classList.remove("natural-sway");
    tulip.style.transform = `rotate(${tiltAngle}deg)`;
  });

  heroSection.addEventListener("pointerleave", () => {
    tulip.style.transform = "";
    tulip.classList.add("natural-sway");
  });

  tulip.addEventListener("click", () => {
    bloomTulip(tulip);
  });

  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      const letterSection = document.getElementById("letter");
      if (letterSection) letterSection.scrollIntoView({ behavior: "smooth" });
    });
  }
}

function bloomTulip(tulipElement) {
  tulipElement.classList.toggle("bloomed");
  playBloomChime();

  const rect = tulipElement.getBoundingClientRect();
  const flowerHeadX = rect.left + rect.width / 2;
  const flowerHeadY = rect.top + rect.height * 0.28;

  // Attract butterfly to the newly bloomed tulip!
  attractButterflyTo(flowerHeadX, flowerHeadY);

  // Release 14 cute floating petals and hearts
  for (let i = 0; i < 14; i++) {
    const particle = document.createElement("div");
    particle.className = "floating-petal-burst";
    particle.innerText = ["🌸", "🌷", "💗", "✨", "🦋"][Math.floor(Math.random() * 5)];
    particle.style.position = "fixed";
    particle.style.left = `${flowerHeadX}px`;
    particle.style.top = `${flowerHeadY}px`;
    particle.style.fontSize = `${Math.random() * 14 + 14}px`;
    particle.style.pointerEvents = "none";
    particle.style.zIndex = "100";
    particle.style.transition = "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.2s ease";

    document.body.appendChild(particle);

    const angle = (Math.PI * 2 * i) / 14 + (Math.random() - 0.5) * 0.4;
    const distance = Math.random() * 70 + 40;
    const destX = Math.cos(angle) * distance;
    const destY = Math.sin(angle) * distance - 40;

    requestAnimationFrame(() => {
      particle.style.transform = `translate(${destX}px, ${destY}px) rotate(${Math.random() * 360}deg) scale(0.6)`;
      particle.style.opacity = "0";
    });

    setTimeout(() => particle.remove(), 1250);
  }
}

// ==============================================================================
// 🌷 8. INTERACTIVE BOTANICAL TULIP GARDEN SECTION
// ==============================================================================
let bloomedGardenCount = 0;

function initGardenBed() {
  const gardenBed = document.getElementById("garden-bed");
  const counterText = document.querySelector("#garden-counter .counter-text");
  const nextBtn = document.getElementById("garden-next-btn");
  const letterNextBtn = document.getElementById("letter-next-btn");

  if (!gardenBed) return;

  const count = CONFIG.tulipCount || 8;
  gardenBed.innerHTML = "";

  // Botanical color variations for baby pink tulips
  const pinkVariations = [
    { petalBack: "#db2777", petalOuter: "#fbcfe8", petalDeep: "#f472b6", centerHighlight: "#ffffff" },
    { petalBack: "#e11d48", petalOuter: "#fce7f3", petalDeep: "#ec4899", centerHighlight: "#fff5f7" },
    { petalBack: "#be185d", petalOuter: "#fdf2f8", petalDeep: "#f472b6", centerHighlight: "#ffffff" },
    { petalBack: "#9d174d", petalOuter: "#fbb6ce", petalDeep: "#db2777", centerHighlight: "#fff0f5" }
  ];

  for (let i = 0; i < count; i++) {
    const pal = pinkVariations[i % pinkVariations.length];
    const height = Math.floor(Math.random() * 45) + 165;
    const swayDelay = (Math.random() * 3).toFixed(2);
    const swayDuration = (Math.random() * 2 + 4).toFixed(2);
    const curveOffset = i % 2 === 0 ? 5 : -5;

    const tulipItem = document.createElement("div");
    tulipItem.className = "garden-tulip-item";
    tulipItem.style.height = `${height}px`;
    tulipItem.style.animation = `tulip-breeze ${swayDuration}s infinite ease-in-out ${swayDelay}s`;
    tulipItem.setAttribute("role", "button");
    tulipItem.setAttribute("tabindex", "0");
    tulipItem.setAttribute("aria-label", "Interactive botanical baby pink tulip in garden");

    tulipItem.innerHTML = `
      <svg viewBox="0 0 110 210" style="width: 75px; height: 100%; overflow: visible;">
        <defs>
          <linearGradient id="gStem-${i}" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#4a8f57" />
            <stop offset="50%" stop-color="#76be86" />
            <stop offset="100%" stop-color="#3d7949" />
          </linearGradient>
          <linearGradient id="gLeaf-${i}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#bbf7d0" />
            <stop offset="60%" stop-color="#86efac" />
            <stop offset="100%" stop-color="#4ade80" />
          </linearGradient>
          <linearGradient id="gBack-${i}" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stop-color="${pal.petalDeep}" />
            <stop offset="100%" stop-color="${pal.petalBack}" />
          </linearGradient>
          <radialGradient id="gPetal-${i}" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stop-color="${pal.centerHighlight}" />
            <stop offset="35%" stop-color="${pal.petalOuter}" />
            <stop offset="100%" stop-color="${pal.petalDeep}" />
          </radialGradient>
        </defs>

        <!-- Stem -->
        <path d="M55,75 Q${53 + curveOffset},145 55,208" stroke="url(#gStem-${i})" stroke-width="5.5" stroke-linecap="round" fill="none" />
        
        <!-- Foliage Leaf with Central Ridge -->
        <path d="M55,160 Q${i % 2 === 0 ? "10,130 22,85" : "100,130 88,85"} Q55,130 55,150 Z" fill="url(#gLeaf-${i})" />
        <path d="M55,160 Q${i % 2 === 0 ? "20,130 22,85" : "90,130 88,85"}" stroke="rgba(255,255,255,0.4)" stroke-width="1.2" fill="none" />
        
        <!-- Calyx -->
        <path d="M50,75 C52,80 58,80 60,75 C60,79 55,83 50,75 Z" fill="#66aa74" />

        <!-- Blossom Cup -->
        <g class="garden-blossom">
          <!-- Golden Stamen inside -->
          <g class="garden-stamen" opacity="0.3">
            <path d="M55,54 L55,72" stroke="#eab308" stroke-width="2" />
            <circle cx="55" cy="52" r="2.5" fill="#fef08a" />
          </g>
          <!-- Back Petals -->
          <path d="M55,28 C38,28 32,54 44,76 C50,81 60,81 66,76 C78,54 72,28 55,28 Z" fill="url(#gBack-${i})" />
          <!-- Left Petal -->
          <path d="M55,75 C36,75 22,54 28,36 C34,20 46,30 50,54 Z" fill="url(#gPetal-${i})" />
          <path d="M30,36 C36,22 46,30 50,52" stroke="rgba(255,255,255,0.6)" stroke-width="1.2" fill="none" />
          <!-- Right Petal -->
          <path d="M55,75 C74,75 88,54 82,36 C76,20 64,30 60,54 Z" fill="url(#gPetal-${i})" />
          <path d="M80,36 C74,22 64,30 60,52" stroke="rgba(255,255,255,0.6)" stroke-width="1.2" fill="none" />
          <!-- Center Petal -->
          <path d="M55,76 C42,76 38,50 45,35 C49,24 61,24 65,35 C72,50 68,76 55,76 Z" fill="${pal.centerHighlight}" opacity="0.95" />
          <ellipse cx="55" cy="46" rx="2.5" ry="10" fill="#ffffff" opacity="0.6" />
        </g>
      </svg>
    `;

    // Interactive Proximity Lean
    tulipItem.addEventListener("pointermove", e => {
      const rect = tulipItem.getBoundingClientRect();
      const deltaX = e.clientX - (rect.left + rect.width / 2);
      const angle = Math.max(-14, Math.min(14, deltaX * 0.4));
      tulipItem.style.transform = `rotate(${angle}deg) scale(1.08)`;
    });

    tulipItem.addEventListener("pointerleave", () => {
      tulipItem.style.transform = "";
    });

    // Bloom on Click or Tap
    tulipItem.addEventListener("click", () => {
      if (!tulipItem.classList.contains("bloomed")) {
        tulipItem.classList.add("bloomed");
        bloomedGardenCount++;
        if (counterText) {
          counterText.textContent = `${bloomedGardenCount} flower${bloomedGardenCount === 1 ? "" : "s"} bloomed! 🌸`;
        }
      }
      bloomTulip(tulipItem);
    });

    gardenBed.appendChild(tulipItem);
  }

  // Smooth scroll links
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const proposalSection = document.getElementById("proposal");
      if (proposalSection) proposalSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (letterNextBtn) {
    letterNextBtn.addEventListener("click", () => {
      const gardenSection = document.getElementById("garden");
      if (gardenSection) gardenSection.scrollIntoView({ behavior: "smooth" });
    });
  }
}

// ==============================================================================
// 😭 9. THE PROPOSAL & THE RUNAWAY "NO" BUTTON
// ==============================================================================
let noEscapeAttempts = 0;
let yesButtonScale = 1.0;

function initProposalInteraction() {
  const proposalCard = document.getElementById("proposal-card");
  const arena = document.getElementById("proposal-action-arena");
  const noBtn = document.getElementById("no-btn");
  const yesBtn = document.getElementById("yes-btn");
  const chatter = document.getElementById("runaway-chatter");
  const btnYesText = document.getElementById("btn-yes-text");
  const btnNoText = document.getElementById("btn-no-text");

  if (!noBtn || !yesBtn || !arena) return;

  let isMoving = false;

  function attemptEscape() {
    if (isMoving) return;
    isMoving = true;

    noEscapeAttempts++;

    // 1. Move the NO button playfully within safe bounds
    dodgeNoButton();

    // 2. Change NO button text playfully
    const textIndex = noEscapeAttempts % CONFIG.noButtonTexts.length;
    if (btnNoText) {
      btnNoText.textContent = CONFIG.noButtonTexts[textIndex];
    }

    // 3. Show playful chatter message
    if (chatter) {
      const msgIndex = (noEscapeAttempts - 1) % CONFIG.chatterMessages.length;
      chatter.textContent = CONFIG.chatterMessages[msgIndex];
      chatter.classList.add("active");
    }

    // 4. GROW THE YES BUTTON PROGRESSIVELY
    growYesButton();

    setTimeout(() => {
      isMoving = false;
    }, 200);
  }

  // Desktop Hover / Pointer proximity
  noBtn.addEventListener("mouseenter", attemptEscape);

  arena.addEventListener("mousemove", e => {
    const noRect = noBtn.getBoundingClientRect();
    const noCenterX = noRect.left + noRect.width / 2;
    const noCenterY = noRect.top + noRect.height / 2;

    const distance = Math.hypot(e.clientX - noCenterX, e.clientY - noCenterY);

    if (distance < 75) {
      attemptEscape();
    }
  });

  // Mobile Touch Support: when tapped, dodge instantly and prevent click!
  noBtn.addEventListener("touchstart", e => {
    e.preventDefault();
    attemptEscape();
  }, { passive: false });

  noBtn.addEventListener("click", e => {
    e.preventDefault();
    attemptEscape();
  });

  function dodgeNoButton() {
    noBtn.classList.add("is-evading");

    const arenaRect = arena.getBoundingClientRect();
    const yesRect = yesBtn.getBoundingClientRect();
    const btnWidth = noBtn.offsetWidth || 110;
    const btnHeight = noBtn.offsetHeight || 44;

    const padding = 15;
    const minX = padding;
    const maxX = Math.max(minX, arenaRect.width - btnWidth - padding);
    const minY = padding;
    const maxY = Math.max(minY, arenaRect.height - btnHeight - padding);

    let targetX = minX;
    let targetY = minY;
    let isColliding = true;
    let attempts = 0;

    while (isColliding && attempts < 25) {
      targetX = Math.random() * (maxX - minX) + minX;
      targetY = Math.random() * (maxY - minY) + minY;

      const proposedAbsoluteX = arenaRect.left + targetX;
      const proposedAbsoluteY = arenaRect.top + targetY;

      const buffer = 18;
      isColliding = (
        proposedAbsoluteX < yesRect.right + buffer &&
        proposedAbsoluteX + btnWidth > yesRect.left - buffer &&
        proposedAbsoluteY < yesRect.bottom + buffer &&
        proposedAbsoluteY + btnHeight > yesRect.top - buffer
      );

      attempts++;
    }

    noBtn.style.left = `${Math.round(targetX)}px`;
    noBtn.style.top = `${Math.round(targetY)}px`;
  }

  function growYesButton() {
    yesButtonScale = Math.min(2.0, yesButtonScale + 0.12);

    yesBtn.style.setProperty("--current-scale", yesButtonScale);
    yesBtn.style.transform = `scale(${yesButtonScale})`;

    yesBtn.classList.remove("just-grown");
    void yesBtn.offsetWidth;
    yesBtn.classList.add("just-grown");

    if (noEscapeAttempts >= 4 && btnYesText) {
      const encouragements = [
        "YES PLEASE! 💗",
        "YES FOREVER! 💍",
        "CLICK ME! 🥰",
        "YES YES YES! 💖"
      ];
      btnYesText.textContent = encouragements[(noEscapeAttempts - 4) % encouragements.length];
    }
  }

  // ============================================================================
  // 💕 10. WHEN SHE CLICKS YES (CELEBRATION!)
  // ============================================================================
  yesBtn.addEventListener("click", () => {
    triggerGrandCelebration();
  });
}

function triggerGrandCelebration() {
  const overlay = document.getElementById("celebration-overlay");
  if (!overlay) return;

  // Make sure romantic music is playing
  if (!isAudioPlaying) {
    const musicBtn = document.getElementById("music-btn");
    if (musicBtn) musicBtn.click();
  }

  playBloomChime();

  overlay.classList.add("active");

  launchCelebrationConfetti();
  generateFinaleGarden();
}

function launchCelebrationConfetti() {
  if (typeof confetti !== "function") return;

  const duration = 6 * 1000;
  const animationEnd = Date.now() + duration;

  const colors = ["#f472b6", "#fbcfe8", "#fce7f3", "#ec4899", "#ffffff", "#fcd34d"];

  confetti({
    particleCount: 100,
    spread: 100,
    origin: { y: 0.6 },
    colors: colors,
    shapes: ["circle"]
  });

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 40 * (timeLeft / duration);

    confetti({
      particleCount: Math.floor(particleCount),
      angle: 60,
      spread: 65,
      origin: { x: 0, y: 0.75 },
      colors: colors
    });

    confetti({
      particleCount: Math.floor(particleCount),
      angle: 120,
      spread: 65,
      origin: { x: 1, y: 0.75 },
      colors: colors
    });
  }, 250);
}

function generateFinaleGarden() {
  const container = document.getElementById("finale-garden-field");
  if (!container || container.children.length > 0) return;

  const count = window.innerWidth < 600 ? 10 : 20;

  for (let i = 0; i < count; i++) {
    const tulip = document.createElement("div");
    tulip.className = "finale-tulip";
    const height = Math.floor(Math.random() * 40) + 95;
    tulip.style.height = `${height}px`;
    tulip.style.animationDelay = `${(i * 0.12).toFixed(2)}s`;

    tulip.innerHTML = `
      <svg viewBox="0 0 100 160" style="width: 55px; height: 100%; overflow: visible;">
        <path d="M50,55 Q48,110 50,158" stroke="#5fa66d" stroke-width="4.5" stroke-linecap="round" fill="none" />
        <path d="M50,110 Q${i % 2 === 0 ? "20,90 28,60" : "80,90 72,60"} Q50,90 50,105 Z" fill="#88c999" />
        <g>
          <path d="M50,25 C38,25 34,48 42,66 C48,70 52,70 58,66 C66,48 62,25 50,25 Z" fill="#ec4899" />
          <path d="M50,66 C36,66 25,48 30,32 C35,18 45,26 50,46 Z" fill="#fbcfe8" />
          <path d="M50,66 C64,66 75,48 70,32 C65,18 55,26 50,46 Z" fill="#fbcfe8" />
          <path d="M50,68 C42,68 38,44 44,30 C48,20 52,20 56,30 C62,44 58,68 50,68 Z" fill="#ffffff" />
        </g>
      </svg>
    `;

    container.appendChild(tulip);
  }
}

// ==============================================================================
// 🔄 11. FINALE BUTTONS (Replay & Photo Memory)
// ==============================================================================
function initCelebrationButtons() {
  const replayBtn = document.getElementById("replay-btn");
  const screenshotBtn = document.getElementById("screenshot-btn");
  const overlay = document.getElementById("celebration-overlay");
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");
  const btnYesText = document.getElementById("btn-yes-text");
  const btnNoText = document.getElementById("btn-no-text");

  if (replayBtn && overlay) {
    replayBtn.addEventListener("click", () => {
      overlay.classList.remove("active");

      noEscapeAttempts = 0;
      yesButtonScale = 1.0;
      if (yesBtn) {
        yesBtn.style.transform = "scale(1)";
        if (btnYesText) btnYesText.textContent = CONFIG.yesButtonBaseText;
      }
      if (noBtn) {
        noBtn.classList.remove("is-evading");
        noBtn.style.left = "";
        noBtn.style.top = "";
        if (btnNoText) btnNoText.textContent = CONFIG.noButtonTexts[0];
      }

      const finaleGarden = document.getElementById("finale-garden-field");
      if (finaleGarden) finaleGarden.innerHTML = "";
      const chatter = document.getElementById("runaway-chatter");
      if (chatter) {
        chatter.textContent = "";
        chatter.classList.remove("active");
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (screenshotBtn) {
    screenshotBtn.addEventListener("click", () => {
      launchCelebrationConfetti();
      screenshotBtn.querySelector("span").textContent = "Screenshot me! 📸💖";
      setTimeout(() => {
        screenshotBtn.querySelector("span").textContent = "Our Little Memory 📸";
      }, 3500);
    });
  }
}

// ==============================================================================
// 📜 12. SCROLL REVEAL ANIMATIONS (Intersection Observer)
// ==============================================================================
function initScrollAnimations() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px"
  });

  revealElements.forEach(el => observer.observe(el));
}
