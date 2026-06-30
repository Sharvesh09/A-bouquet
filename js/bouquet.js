/* ===================================
   EVERBLOOM - Bouquet Page
=================================== */

// Floating petals
const petalContainer = document.getElementById("petals");

function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration = (8 + Math.random() * 6) + "s";

    petal.style.opacity = 0.3 + Math.random() * 0.7;

    petal.style.fontSize = (14 + Math.random() * 12) + "px";

    petalContainer.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 14000);

}

// Create a new petal every 700ms
setInterval(createPetal, 700);


// Bouquet breathing animation
const bouquet = document.querySelector(".bouquet-placeholder");

let scale = 1;
let direction = 1;

function breathe() {

    scale += direction * 0.0005;

    if (scale > 1.02) direction = -1;

    if (scale < 0.98) direction = 1;

    bouquet.style.transform = `scale(${scale})`;

    requestAnimationFrame(breathe);

}

breathe();


// Customize button
const button = document.getElementById("customizeBtn");

button.addEventListener("click", () => {

    button.innerHTML = "Coming Soon 🌸";

    button.disabled = true;

    setTimeout(() => {

        button.innerHTML = "Customize Bouquet";

        button.disabled = false;

    }, 2000);

});


// Mouse Parallax
document.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5) * 10;

    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    bouquet.style.translate = `${x}px ${y}px`;

});
