var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("btn");


body.style.background =
  "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

function whatColors() {
  return (css.textContent = body.style.background + ";");
}

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function randomBgGradient() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var a = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var c = Math.floor(Math.random() * 256);

  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  var bgColor2 = "rgb(" + a + "," + b + "," + c + ")";
  console.log("first", bgColor);
  console.log("second" ,bgColor2);
  color1.value = bgColor;
  color2.value = bgColor2;
  document.body.style.background =
    "linear-gradient(to right, " + bgColor + ", " + bgColor2 + ")";

    whatColors();
}

whatColors();
randomBgGradient()


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", randomBgGradient);
