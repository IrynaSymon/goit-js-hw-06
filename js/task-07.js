const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
inputEl.addEventListener("input", inputTextValue);
function inputTextValue () {
textEl.style.fontSize = inputEl.value + "px";
};