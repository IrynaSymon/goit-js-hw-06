let counterValue = 0;
const valueEv = document.getElementById("value");
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');

const clickDecrement = event => {
counterValue -= 1;
valueEv.textContent = counterValue;
};
buttonDecrement.addEventListener("click", clickDecrement);

const clickIncrement = event => {
counterValue += 1;
valueEv.textContent = counterValue;
};

buttonIncrement.addEventListener("click", clickIncrement);