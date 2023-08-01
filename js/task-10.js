function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector(`input`);
// console.log(input);
const btnCreate = document.querySelector(`[data-create]`);
const btnDestroy = document.querySelector(`[data-destroy]`);
const consrol = document.querySelector(`#controls`);
const box = document.querySelector(`#boxes`);

btnCreate.addEventListener(`click`, handlerCreate);

function handlerCreate() {
  const number = Number(input.value);
  addBox(number);
}
function addBox(number) {
  let size = 30;
  let documentBox = "";

  for (let i = 0; i < number; i += 1) {
    const color = getRandomHexColor();
    documentBox += `<div style="width: ${size}px;
      height: ${size}px;
      background-color: ${color};"></div>`;
    size += 10;
  }

  box.innerHTML = documentBox;
}
btnDestroy.addEventListener(`click`, handlerDestroy);

function handlerDestroy() {
  box.innerHTML = "";
}
