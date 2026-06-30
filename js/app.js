const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

let moves = 0;

// Keep the No button next to Yes initially
function resetNoButton() {

    noBtn.style.position = "relative";
    noBtn.style.left = "0px";
    noBtn.style.top = "0px";

}

resetNoButton();

function moveButton() {

    // Switch to absolute only after first interaction
    if (noBtn.style.position !== "absolute") {

        const rect = noBtn.getBoundingClientRect();

        noBtn.style.position = "absolute";
        noBtn.style.left = rect.left + "px";
        noBtn.style.top = rect.top + "px";

    }

    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    moves++;

    if (moves === 5) {

        noBtn.textContent = "Are you sure? 🤍";

    }

    if (moves === 10) {

        noBtn.textContent = "Give it a chance 🌸";

    }

}

// Desktop
noBtn.addEventListener("mouseenter", moveButton);

// Mobile
noBtn.addEventListener("touchstart", (e) => {

    e.preventDefault();

    moveButton();

});

// Smooth transition to bouquet
yesBtn.addEventListener("click", () => {

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href = "bouquet.html";

    }, 500);

});
