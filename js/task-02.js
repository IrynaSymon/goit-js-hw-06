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


