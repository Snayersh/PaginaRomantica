/* =========================================================
   PÁGINA ROMÁNTICA - PARA ERICKA ❤️
   Lógica Interactiva, Contador en Vivo, Partículas y Audio
   ========================================================= */

// Fecha en que empezaron a hablar: 29 de Agosto de 2026
const START_DATE = new Date("2026-08-29T00:00:00");

// Frases románticas para las burbujas flotantes
const romanticMessages = [
    "Te amo muchooo ❤️🥰",
    "Eres la mejor, Ericka 💖👑",
    "Mi niña hermosa 💕👧",
    "Juntos por siempre 💑🔗",
    "Tú y yo, para siempre 💘💍",
    "Tú iluminas mi camino 🌟💫",
    "Mi persona favorita en el mundo 💖",
    "Cada momento contigo es mágico ✨❤️",
    "Te amo con todo mi corazón 💖🥺",
    "Gracias por existir en mi vida 🙏💓",
    "Eres mi mundo entero 🌍❤️",
    "Contigo todo es más bonito 🌈💖",
    "No dejo de pensar en ti 💭💘",
    "Eres mi sol en días nublados ☀️☁️",
    "Contigo hasta el fin del mundo 🚀🌌",
    "Eres mi paz en medio del caos 🕊️",
    "Siempre serás mi niña consentida 👩‍❤️‍👨💗",
    "Te quiero hasta el infinito y más allá 🚀💫",
    "Eres la melodía más bella de mi vida 🎵❤️",
    "Tu sonrisa ilumina cada día 😊💞",
    "Agradecido por cada segundo contigo ⏳💝",
    "Contigo todo tiene sentido 🧩💘",
    "Amarte es lo más lindo ✨🔐",
    "Desde aquel 29 de agosto todo cambió 💖"
];

// 30 Razones por las que te amo
const reasonsList = [
    "Por tu sonrisa hermosa que alegra cualquier día sin importar qué pase.",
    "Por la paz tan profunda y bonita que me da hablar contigo.",
    "Por tu manera tan dulce, tierna y única de ser.",
    "Por cómo logras hacerme reír y sonreír como nadie más.",
    "Por la emoción tan linda que siento cada vez que veo una notificación tuya.",
    "Por tu voz, que podría escuchar horas enteras sin cansarme.",
    "Por tu paciencia, tu ternura y el gran corazón que tienes.",
    "Por cada plática que hemos compartido desde aquel 29 de agosto.",
    "Por ser mi pensamiento favorito antes de dormir y al despertar.",
    "Por la luz y el brillo tan especial que tienen tus ojos.",
    "Porque contigo el tiempo pasa volando y siempre quiero más momentos a tu lado.",
    "Por tu carisma y la forma tan linda y pura con la que ves la vida.",
    "Por hacerme sentir la persona más afortunada y especial del mundo.",
    "Por ser mi refugio seguro y la personita a quien siempre quiero acudir.",
    "Porque cada día me das nuevas razones para admirarte y quererte más.",
    "Por tus ocurrencias y detalles que siempre me sacan una carcajada.",
    "Por el toque mágico y el calor que trajiste a mi vida.",
    "Por tus abrazos sinceros que, incluso a la distancia, me llenan el alma.",
    "Porque a tu lado los problemas se hacen pequeños y todo parece más sencillo.",
    "Por hacerme ilusionar y soñar despierto con un futuro juntos.",
    "Por ser tú misma: auténtica, transparente y hermosa por dentro y por fuera.",
    "Por tu risa contagiosa que se convierte en mi sonido favorito.",
    "Por escucharme, comprenderme y apoyarme en cada momento.",
    "Por enseñarme lo hermoso que es coincidir con la persona correcta.",
    "Porque cada segundo que pasa agradezco haberte conocido.",
    "Por la complicidad tan bonita y única que existe entre los dos.",
    "Por ser la melodía más dulce en medio de mis días.",
    "Por tu infinita dulzura y la forma en que cuidas de mí.",
    "Porque eres mi niña consentida, hoy, mañana y siempre.",
    "¡Simplemente porque eres tú, Ericka, y te amo con toda mi alma! ❤️"
];

let currentReasonIndex = 0;

/* =========================================================
   1. CONTADOR DE TIEMPO EN VIVO
   ========================================================= */
function updateCounter() {
    const now = new Date();
    const diff = now - START_DATE;

    if (diff < 0) {
        // En caso de que la fecha sea futura, mostrar 0
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";
        return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minEl = document.getElementById("minutes");
    const secEl = document.getElementById("seconds");

    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minEl) minEl.textContent = String(minutes).padStart(2, '0');
    if (secEl) secEl.textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCounter, 1000);
updateCounter();

/* =========================================================
   2. REPRODUCTOR DE MÚSICA INTERACTIVO
   ========================================================= */
const bgAudio = document.getElementById("bg-music");
const musicPlayer = document.getElementById("music-player");
const playerBtn = document.getElementById("player-btn");
let isAudioPlaying = false;

function toggleMusic() {
    if (!bgAudio) return;

    if (isAudioPlaying) {
        bgAudio.pause();
        isAudioPlaying = false;
        if (musicPlayer) musicPlayer.classList.remove("playing");
        if (playerBtn) playerBtn.textContent = "▶";
    } else {
        bgAudio.play().then(() => {
            isAudioPlaying = true;
            if (musicPlayer) musicPlayer.classList.add("playing");
            if (playerBtn) playerBtn.textContent = "❚❚";
        }).catch(err => {
            console.log("Auto-play prevenido por el navegador:", err);
            alert("Toca la pantalla o presiona el reproductor para habilitar el audio 🎵");
        });
    }
}

// Intentar reproducir suavemente al primer clic en cualquier lugar si el audio aún no inició
document.addEventListener("click", function startAudioOnFirstClick() {
    if (!isAudioPlaying && bgAudio) {
        bgAudio.play().then(() => {
            isAudioPlaying = true;
            if (musicPlayer) musicPlayer.classList.add("playing");
            if (playerBtn) playerBtn.textContent = "❚❚";
        }).catch(() => {});
    }
}, { once: true });

/* =========================================================
   3. BURBUJAS FLOTANTES DE TEXTO INTERACTIVAS
   ========================================================= */
function createTextBubble() {
    const container = document.getElementById("bubbles-text");
    if (!container) return;

    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerHTML = romanticMessages[Math.floor(Math.random() * romanticMessages.length)];

    const maxX = Math.max(20, window.innerWidth - 220);
    const maxY = Math.max(60, window.innerHeight - 120);

    const left = Math.floor(Math.random() * maxX);
    const top = Math.floor(Math.random() * maxY);

    bubble.style.left = `${left}px`;
    bubble.style.top = `${top}px`;

    // Hacer que la burbuja explote en corazoncitos al tocarla/hacerle clic
    bubble.addEventListener("click", (e) => {
        e.stopPropagation();
        burstHearts(e.clientX || (left + 50), e.clientY || (top + 20), 8);
        bubble.remove();
    });

    container.appendChild(bubble);

    setTimeout(() => {
        if (bubble.parentNode) {
            bubble.remove();
        }
    }, 9000);
}

// Generar una burbuja de amor cada 2 segundos
setInterval(createTextBubble, 2000);
setTimeout(createTextBubble, 600);

/* =========================================================
   4. ESTELA MÁGICA CON EL CURSOR Y TOUCH
   ========================================================= */
const sparkleIcons = ['❤️', '💖', '✨', '💕', '🌸', '💘'];
let lastSparkleTime = 0;

function spawnSparkle(x, y) {
    const now = Date.now();
    if (now - lastSparkleTime < 40) return; // Limitar frecuencia para fluidez perfecta
    lastSparkleTime = now;

    const sparkle = document.createElement("div");
    sparkle.className = "cursor-sparkle";
    sparkle.textContent = sparkleIcons[Math.floor(Math.random() * sparkleIcons.length)];
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 800);
}

window.addEventListener("pointermove", (e) => {
    spawnSparkle(e.clientX, e.clientY);
});

window.addEventListener("touchmove", (e) => {
    if (e.touches && e.touches[0]) {
        spawnSparkle(e.touches[0].clientX, e.touches[0].clientY);
    }
}, { passive: true });

/* =========================================================
   5. EXPLOSIÓN DE CORAZONES (BURST / CONFETTI)
   ========================================================= */
function burstHearts(originX, originY, count = 12) {
    const symbols = ['❤️', '💖', '💕', '✨', '🌸', '💗'];
    for (let i = 0; i < count; i++) {
        const heart = document.createElement("div");
        heart.className = "burst-heart";
        heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        heart.style.left = `${originX}px`;
        heart.style.top = `${originY}px`;

        const angle = Math.random() * Math.PI * 2;
        const distance = 40 + Math.random() * 80;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        const rot = (Math.random() - 0.5) * 120;

        heart.style.setProperty('--tx', `${tx}px`);
        heart.style.setProperty('--ty', `${ty}px`);
        heart.style.setProperty('--rot', `${rot}deg`);

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1200);
    }
}

/* =========================================================
   6. MODAL DE CARTA DE AMOR
   ========================================================= */
function openLetterModal() {
    const modal = document.getElementById("letter-modal");
    if (modal) {
        modal.classList.add("active");
        burstHearts(window.innerWidth / 2, window.innerHeight / 2, 16);
    }
}

function closeLetterModal() {
    const modal = document.getElementById("letter-modal");
    if (modal) modal.classList.remove("active");
}

/* =========================================================
   7. MODAL DE RAZONES POR LAS QUE TE AMO
   ========================================================= */
function openReasonsModal() {
    const modal = document.getElementById("reasons-modal");
    if (modal) {
        modal.classList.add("active");
        showReason(currentReasonIndex);
        burstHearts(window.innerWidth / 2, window.innerHeight / 2, 14);
    }
}

function closeReasonsModal() {
    const modal = document.getElementById("reasons-modal");
    if (modal) modal.classList.remove("active");
}

function showReason(index) {
    const quoteEl = document.getElementById("reason-text");
    const badgeEl = document.getElementById("reason-badge");
    if (!quoteEl || !badgeEl) return;

    quoteEl.style.opacity = '0';
    quoteEl.style.transform = 'translateY(10px)';

    setTimeout(() => {
        quoteEl.textContent = `"${reasonsList[index]}"`;
        badgeEl.textContent = `Razón #${index + 1} de ${reasonsList.length}`;
        quoteEl.style.opacity = '1';
        quoteEl.style.transform = 'translateY(0)';
    }, 150);
}

function nextReason() {
    currentReasonIndex = (currentReasonIndex + 1) % reasonsList.length;
    showReason(currentReasonIndex);
    burstHearts(window.innerWidth / 2, window.innerHeight / 2, 8);
}

function closeOnBackdrop(event, modalId) {
    if (event.target.id === modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.remove("active");
    }
}

/* =========================================================
   8. LLUVIA DE AMOR (SHOWER DE PÉTALOS Y CORAZONES)
   ========================================================= */
function triggerLoveShower() {
    const icons = ['🌸', '❤️', '💖', '🌹', '✨', '💕', '🌷'];
    const totalDrops = 35;

    for (let i = 0; i < totalDrops; i++) {
        setTimeout(() => {
            const drop = document.createElement("div");
            drop.textContent = icons[Math.floor(Math.random() * icons.length)];
            drop.style.position = "fixed";
            drop.style.top = "-40px";
            drop.style.left = `${Math.random() * 100}vw`;
            drop.style.fontSize = `${16 + Math.random() * 24}px`;
            drop.style.pointerEvents = "none";
            drop.style.zIndex = "9999";
            drop.style.opacity = "0.9";
            drop.style.transition = `transform ${3 + Math.random() * 2.5}s ease-in, opacity 3.5s ease-out`;

            document.body.appendChild(drop);

            requestAnimationFrame(() => {
                const targetY = window.innerHeight + 60;
                const targetX = (Math.random() - 0.5) * 150;
                const rot = (Math.random() - 0.5) * 360;
                drop.style.transform = `translate(${targetX}px, ${targetY}px) rotate(${rot}deg)`;
                drop.style.opacity = "0.2";
            });

            setTimeout(() => drop.remove(), 6000);
        }, i * 70);
    }
}

/* =========================================================
   9. CANVAS DE PÉTALOS SUAVES CAYENDO DE FONDO
   ========================================================= */
(function initPetalsCanvas() {
    const canvas = document.getElementById("petals-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const petalCount = 28;
    const petals = [];

    for (let i = 0; i < petalCount; i++) {
        petals.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: 8 + Math.random() * 10,
            speedY: 0.6 + Math.random() * 1.2,
            speedX: (Math.random() - 0.5) * 0.8,
            angle: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 0.02,
            oscAmplitude: 15 + Math.random() * 25,
            oscSpeed: 0.01 + Math.random() * 0.02,
            oscOffset: Math.random() * Math.PI * 2,
            color: Math.random() > 0.4 ? "rgba(255, 105, 180, " : "rgba(255, 64, 129, ",
            alpha: 0.25 + Math.random() * 0.35
        });
    }

    let frame = 0;
    function animate() {
        ctx.clearRect(0, 0, width, height);
        frame++;

        for (let i = 0; i < petalCount; i++) {
            const p = petals[i];
            p.y += p.speedY;
            p.x += Math.sin(frame * p.oscSpeed + p.oscOffset) * 0.5 + p.speedX;
            p.angle += p.rotSpeed;

            if (p.y > height + 20) {
                p.y = -20;
                p.x = Math.random() * width;
            }
            if (p.x < -20) p.x = width + 20;
            if (p.x > width + 20) p.x = -20;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle);
            ctx.beginPath();
            // Dibujar forma de pétalo orgánico
            ctx.ellipse(0, 0, p.size * 0.6, p.size, Math.PI / 4, 0, Math.PI * 2);
            ctx.fillStyle = `${p.color}${p.alpha})`;
            ctx.fill();
            ctx.restore();
        }

        requestAnimationFrame(animate);
    }

    animate();
})();