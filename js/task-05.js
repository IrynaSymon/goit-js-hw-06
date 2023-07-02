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