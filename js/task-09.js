function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChange = document.querySelector(`.change-color`);
// console.log(btnChange);
const colorSpan = document.querySelector(`.color`);
// console.log(colorSpan);
btnChange.addEventListener(`click`, handlerColor);
function handlerColor(evt) {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}
