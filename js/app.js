/* ===========================================
   EVERBLOOM - LANDING PAGE
=========================================== */

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const loader = document.getElementById("loader");
const petals = document.getElementById("petals");

let moveCount = 0;

/* ===========================
        LOADER
=========================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1500);

});

/* ===========================
      ESCAPING NO BUTTON
=========================== */

function moveNoButton() {

    if (noBtn.style.position !== "absolute") {

        const rect = noBtn.getBoundingClientRect();

        noBtn.style.position = "absolute";
        noBtn.style.left = rect.left + "px";
        noBtn.style.top = rect.top + "px";

    }

    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    moveCount++;

    if (moveCount === 5) {

        noBtn.innerHTML = "Are you sure? 🤍";

    }

    if (moveCount === 10) {

        noBtn.innerHTML = "Please? 🌸";

    }

}

noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("touchstart", (e) => {

    e.preventDefault();

    moveNoButton();

});

/* ===========================
      OPEN BOUQUET
=========================== */

yesBtn.addEventListener("click", () => {

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href = "bouquet.html";

    }, 500);

});

/* ===========================
      FLOATING PETALS
=========================== */

function createPetal() {

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position = "absolute";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.top = "-40px";

    petal.style.fontSize = (14 + Math.random() * 12) + "px";

    petal.style.opacity = 0.3 + Math.random() * 0.6;

    petal.style.pointerEvents = "none";

    petal.style.animation =
        `fall ${8 + Math.random() * 5}s linear forwards`;

    petals.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 13000);

}

setInterval(createPetal, 800);

/* ===========================
      PETAL ANIMATION
=========================== */

const style = document.createElement("style");

style.innerHTML = `
@keyframes fall{

0%{

transform:
translateY(-50px)
rotate(0deg);

}

100%{

transform:
translateY(110vh)
rotate(360deg);

}

}
`;

document.head.appendChild(style);
