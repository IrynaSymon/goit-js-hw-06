// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsFood = document.querySelector("#ingredients");
const ingredientsItem = ingredients.map((ingredient) => {
const elementItem = document.createElement("li");
elementItem.textContent = ingredient;
elementItem.classList.add("item");
return elementItem;
});
ingredientsFood.append(...ingredientsItem);


