function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const container = document.querySelector("body");
const colorButton = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
colorButton.addEventListener("click", chagleColor);
function chagleColor () {
const color = getRandomHexColor();
container.style.backgroundColor = color;
textColor.textContent = color;
}
