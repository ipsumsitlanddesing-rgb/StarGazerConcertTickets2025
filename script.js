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
