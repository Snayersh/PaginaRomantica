const message = [
    "Te amo muchooo ❤️🥰",
    "Eres la mejor 💖👑",
    "Mi niña hermosa 💕👧",
    "Juntos por siempre 💑🔗",
    "Tú y yo, para siempre 💘💍",
    "Tú iluminas mi camino 🌟💫",
    "Mi tomatito hermoso 🍅💞",
    "Cada momento contigo es mágico ✨❤️",
    "Te amo mucho amor 💖🥺",
    "Gracias por todo 🙏💓",
    "Eres mi mundo entero 🌍❤️",
    "Contigo todo es mejor 🌈💖",
    "No dejo de pensar en ti 💭💘",
    "Eres mi sol en días nublados ☀️☁️",
    "Contigo hasta el fin del mundo 🚀🌌",
    "Eres mi paz en medio del caos 🕊️",
    "Siempre serás mi persona favorita 👩‍❤️‍👨💗",
    "Te quiero hasta el infinito y más allá 🚀💫",
    "Eres la canción más bonita de mi vida 🎵❤️",
    "Tu sonrisa ilumina mi día 😊💞",
    "Estoy agradecido por cada segundo contigo ⏳💝",
    "Contigo todo tiene sentido 🧩💘",
    "Amarte es mi destino ✨🔐"
];

const imageBubbles = [
 
]; 

function createTextBubble(){
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
bubble.innerHTML = message[Math.floor(Math.random() * message.length)];
    
   const left = Math.random() * (window.innerWidth - 150);
const top = Math.random() * (window.innerHeight - 100);


    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);

    setTimeout(()=>{
        const rect = bubble.getBoundingClientRect();
          bubble.style.position = "absolute";
    bubble.style.left = `${left}px`;
    bubble.style.top = `${top}px`;

        if(rect.right > window.innerWidth){
            const newLeft = window.innerWidth - rect.width - 10;
            bubble.style.left = `${newLeft}px`;
        }

        if(rect.bottom > window.innerHeight){
            const newTop = window.innerHeight - rect.height - 10;
            bubble.style.top = `${newTop}px`;
        }

        if(rect.left < 0){
            bubble.style.left = "10px";
        }

        if(rect.top < 0){
            bubble.style.top = "10px";
        }
    },10);

    setTimeout(()=>{
        bubble.remove();
        },8000);

        
}
function createImageBubble(){
    if (!imageBubbles || imageBubbles.length === 0) return;
    const bubble = document.createElement("div");
    bubble.className = "image-bubble";

    const img = document.createElement("img");
    img.src = imageBubbles[Math.floor(Math.random() * imageBubbles.length)];
    img.alt = "bubble image";

    bubble.appendChild(img);

    bubble.style.left = Math.random() * (window.innerWidth - 50) + "px";
    bubble.style.top = Math.random() * (window.innerHeight - 50) + "px";

    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);

    setTimeout(() => bubble.remove(), 8000);
}
function playMusic() {
    const audio = document.getElementById("bg-music");
    audio.play().then(() => {
        document.getElementById("playButton").style.display = "none";
    }).catch(err => {
        alert("Tu navegador impidió la reproducción automática. Intenta hacer clic de nuevo.");
        console.log(err);
    });
}


setInterval(createTextBubble,500);
setInterval(createImageBubble,1000)