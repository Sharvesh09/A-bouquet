const letterBtn = document.getElementById("letterBtn");

const overlay = document.getElementById("letterOverlay");

const closeBtn = document.getElementById("closeLetter");

letterBtn.onclick = () => {

    overlay.classList.add("show");

}

closeBtn.onclick = () => {

    overlay.classList.remove("show");

}

overlay.onclick = (e)=>{

    if(e.target===overlay){

        overlay.classList.remove("show");

    }

}
