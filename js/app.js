/* ==========================================
   EVERBLOOM
   app.js
========================================== */

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const loader = document.getElementById("loader");
const petals = document.getElementById("petals");

/* ==========================
        LOADER
========================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1200);

});

/* ==========================
    NO BUTTON
========================== */

let firstMove = false;

function moveNoButton() {

    if (!firstMove) {

        noBtn.style.position = "fixed";
        firstMove = true;

    }

    const padding = 30;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

}

noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("click", (e) => {

    e.preventDefault();

    moveNoButton();

});

noBtn.addEventListener("touchstart", (e) => {

    e.preventDefault();

    moveNoButton();

});

/* ==========================
      YES BUTTON
========================== */

yesBtn.addEventListener("click", () => {

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href = "bouquet.html";

    }, 500);

});

/* ==========================
      PETALS
========================== */

function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.fontSize = (14 + Math.random() * 10) + "px";

    petal.style.opacity = 0.3 + Math.random() * 0.5;

    petal.style.animationDuration =
        (8 + Math.random() * 6) + "s";

    petals.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 14000);

}

setInterval(createPetal, 700);
/* ==========================
      HANDLE BACK BUTTON
========================== */

window.addEventListener("pageshow", function (event) {

    if (event.persisted) {

        window.location.reload();

    }

});
