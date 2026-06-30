/* ==========================================
   EVERBLOOM
   bouquet.js
========================================== */

const letterBtn = document.getElementById("letterBtn");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close");
const petals = document.getElementById("petals");

/* ==========================
      LETTER POPUP
========================== */

letterBtn.addEventListener("click", () => {

    overlay.classList.add("show");

});

closeBtn.addEventListener("click", () => {

    overlay.classList.remove("show");

});

overlay.addEventListener("click", (e) => {

    if (e.target === overlay) {

        overlay.classList.remove("show");

    }

});

/* ==========================
      ESC KEY CLOSE
========================== */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        overlay.classList.remove("show");

    }

});

/* ==========================
      FLOATING PETALS
========================== */

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.fontSize =
        (14 + Math.random() * 12) + "px";

    petal.style.opacity =
        0.25 + Math.random() * 0.6;

    petal.style.animation =
        `fall ${8 + Math.random() * 5}s linear forwards`;

    petals.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 13000);

}

setInterval(createPetal, 700);

/* ==========================
      PARALLAX EFFECT
========================== */

const bouquet = document.getElementById("bouquet");

document.addEventListener("mousemove", (e) => {

    const x =
        (e.clientX / window.innerWidth - 0.5) * 12;

    const y =
        (e.clientY / window.innerHeight - 0.5) * 12;

    bouquet.style.transform =
        `translate(${x}px, ${y}px)`;

});

/* ==========================
      MOBILE TOUCH
========================== */

document.addEventListener("touchmove", () => {

    bouquet.style.transform = "translate(0px,0px)";

});

/* ==========================
      PREVENT IMAGE DRAG
========================== */

bouquet.addEventListener("dragstart", (e) => {

    e.preventDefault();

});
