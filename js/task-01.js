const categoriesList = document.querySelector(`#categories`);
// console.log(categoriesList);
const items = categoriesList.querySelectorAll(`.item`);
// console.log(items);

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const categoryName = item.querySelector(`h2`).textContent;
  // console.log(categoryName);
  const elemNum = item.querySelectorAll(`li`).length;
  // console.log(elemNum);

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elemNum}`);
});
