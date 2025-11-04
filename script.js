/* ✅ script.js */
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


/* ⭐ MOBILE EXCLUSIVE OPTIMIZATION */
@media (max-width: 480px) {
.app-header h1 {
font-size: 1.4rem;
letter-spacing: 0.5px;
}


.bottom-nav button {
font-size: 1.6rem;
}


.section {
padding: 18px;
}


.about-img {
width: 85% !important;
}


#music-toggle {
bottom: 15px;
right: 15px;
transform: scale(0.85);
}
}