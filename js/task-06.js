const inputName = document.querySelector("#validation-input");
inputName.addEventListener("blur", inputValid);
const inputLength = Number(inputName.dataset.length);
function inputValid() {
if(inputName.value.length === inputLength){
inputName.classList.add("valid");
inputName.classList.remove("invalid");
} else {
inputName.classList.add("invalid");
inputName.classList.remove("valid");
}
};