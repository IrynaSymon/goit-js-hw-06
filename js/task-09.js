// Напиши скрипт, який змінює кольори фону елемента
//   < body > через інлайн - стиль по кліку на button.change - color 
// і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

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
