// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// 

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