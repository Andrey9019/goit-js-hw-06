const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const liItems = ingredients.map((elem) => {
  const liItem = document.createElement("li");
  liItem.textContent = elem;
  liItem.classList.add("item");
  return liItem;
});

list.append(...liItems);
