var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var a,b;
var body=document.querySelector("body");
color1.addEventListener("input",change);
color2.addEventListener("input",change);
function change(){
body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
css.textContent=body.style.background+";";
}