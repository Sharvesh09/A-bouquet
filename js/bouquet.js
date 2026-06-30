/* ===================================
   EVERBLOOM
=================================== */

const letterBtn = document.getElementById("letterBtn");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close");
const bouquet = document.getElementById("bouquet");
const petalContainer = document.getElementById("petals");

/* ===========================
      LETTER
=========================== */

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

/* ===========================
      PARALLAX
=========================== */

document.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5) * 15;

    const y = (e.clientY / window.innerHeight - 0.5) * 15;

    bouquet.style.transform =
        `translate(${x}px, ${y}px)`;

});

/* ===========================
      PETALS
=========================== */

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.fontSize =
        12 + Math.random() * 12 + "px";

    petal.style.animationDuration =
        8 + Math.random() * 8 + "s";

    petal.style.opacity =
        0.2 + Math.random() * 0.8;

    petal.style.position = "fixed";

    petal.style.top = "-30px";

    petal.style.pointerEvents = "none";

    petal.style.zIndex = "5";

    petal.style.animation = "fall linear forwards";

    petalContainer.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 16000);

}

setInterval(createPetal, 800);

/* ===========================
      FALL KEYFRAMES
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
