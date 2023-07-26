const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector(`#ingredients`);
// console.log(list);
function createIngredients(arr) {
  const markup = arr
    .map((item) => `<li><p class=item>${item}</p></li>`)
    .join("");

  list.insertAdjacentHTML("beforeend", markup);
  console.log(markup);
}

createIngredients(ingredients);
