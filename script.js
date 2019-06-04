const body = document.querySelector("#gradient");
const css = document.querySelector("h3");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
const button = document.querySelector("button");


function setGradient (){
    body.style.background  = `linear-gradient(to bottom, ${color1.value}, ${color2.value})`;
    css.textContent = body.style.background +";";
}

setGradient();

function getRandColor() { 
    let hex = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    return hex;
}
function setColors(){
    color1.value = getRandColor();
    color2.value = getRandColor();
    setGradient();
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setColors);