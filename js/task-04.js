// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

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