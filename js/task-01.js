const categoriesAll = document.querySelector("#categories");
const categoriesLength = categoriesAll.children.length;
console.log(`Number of categories: ${categoriesLength}`);
const itemsEl = document.querySelectorAll(".item");
itemsEl.forEach((item) => {
console.log("Category:", item.firstElementChild.textContent);
console.log("Elements:", item.lastElementChild.children.length); })
