// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output. 
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
inputName .addEventListener("input", placeholder);
function placeholder() {
outputName.textContent = inputName.value;
if (inputName.value === "") {
outputName.textContent = inputName.value === "" ?
"Anonymous" : inputName.value
}
   
};