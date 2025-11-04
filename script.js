const pages = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll(".bottom-nav button");
const comprarBtn = document.getElementById("comprar");
const mensaje = document.getElementById("mensaje");
const categoria = document.getElementById("categoria");
const cantidad = document.getElementById("cantidad");
const music = document.getElementById("music");
const toggleBtn = document.getElementById("music-toggle");

let stock = {
  general: 100,
  vip: 100,
  meet: 100
};

// Navegación tipo app
navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    pages.forEach(p => p.classList.remove("active"));
    document.getElementById(target).classList.add("active");
  });
});

// Comprar tickets
comprarBtn.addEventListener("click", () => {
  const tipo = categoria.value;
  const cant = parseInt(cantidad.value);

  if (stock[tipo] >= cant) {
    stock[tipo] -= cant;
    crearEstrellas();
    mensaje.innerHTML = `✨ Has comprado ${cant} entrada(s) ${tipo.toUpperCase()} ✨<br>Vota por mí 💖`;
    mensaje.style.color = "#fff";
  } else {
    mensaje.textContent = "❌ Sold Out ❌";
    mensaje.style.color = "#ff3860";
  }
});

// Efecto de estrellas
function crearEstrellas() {
  for (let i = 0; i < 25; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    document.body.appendChild(star);

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.width = `${Math.random() * 5 + 2}px`;
    star.style.height = star.style.width;

    setTimeout(() => star.remove(), 1200);
  }
}

// Control de música
toggleBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleBtn.textContent = "🎵";
  } else {
    music.pause();
    toggleBtn.textContent = "🔇";
  }
});

/* ✅ Mejora visual global */
body { animation: fadeInBody 1.2s ease-in-out; }
@keyframes fadeInBody { from { opacity:0; } to { opacity:1; } }


/* ✅ Header animado */
.app-header { animation: slideDown 0.8s ease; }
@keyframes slideDown { from { transform:translateY(-40px);opacity:0;} to {transform:translateY(0);opacity:1;} }

/* ✅ Imagen con efecto */
.about-img { transition: transform 0.4s ease, box-shadow 0.4s ease; }
.about-img:hover { transform: scale(1.05) rotate(-1.5deg); box-shadow:0 12px 30px rgba(0,0,0,0.6); }


/* ✅ Botón de música glam */
#music-toggle {
background: radial-gradient(circle at top left, #ff77ff, #550055);
box-shadow: 0 6px 16px rgba(0,0,0,0.45);
transition: transform 0.3s ease, box-shadow 0.3s ease;
}
#music-toggle:hover { transform: scale(1.15); box-shadow:0 10px 24px rgba(0,0,0,0.6);}


/* ⭐ FLOATING PARTICLES (STARFIELD) */
body::before {
content: "";
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
pointer-events: none;
background-image: radial-gradient(white 1px, transparent 1px);
background-size: 3px 3px;
opacity: 0.25;
animation: starFloat 14s linear infinite;
}


@keyframes starFloat {
from { transform: translateY(0); }
to { transform: translateY(-2000px); }
}


/* ⭐ GLOW DINÁMICO EN BOTONES NAV */
.bottom-nav button {
position: relative;
z-index: 2;
}


.bottom-nav button::after {
content: "";
position: absolute;
inset: -10px;
background: radial-gradient(circle, rgba(255,0,255,0.35), transparent 60%);
filter: blur(12px);
opacity: 0;
transition: opacity .4s ease;
}


.bottom-nav button:hover::after {
opacity: 1;
  }
});
