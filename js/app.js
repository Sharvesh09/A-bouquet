const noBtn=document.getElementById("no");

let moves=0;

function moveButton(){

const width=window.innerWidth-300;

const height=window.innerHeight-120;

const x=Math.random()*width;

const y=Math.random()*height;

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";

moves++;

if(moves===5){

noBtn.innerHTML="Are you sure? 🤍";

}

if(moves===10){

noBtn.innerHTML="Give it a chance 🌸";

}

}

noBtn.addEventListener("mouseover",moveButton);

document.getElementById("yes").onclick=()=>{

window.location.href="bouquet.html";

}
