let counterValue = 0;
const valueEl = document.querySelector(`#value`);

const bdtUp = document.querySelector(`[data-action="increment"]`);
const bdtDown = document.querySelector(`[data-action="decrement"]`);

bdtUp.addEventListener(`click`, handlerClickUp);
bdtDown.addEventListener(`click`, handlerClickDown);

function handlerClickUp() {
  counterValue += 1;
  updateCounterValue();
}
// console.log(counterValue);
function handlerClickDown() {
  counterValue -= 1;
  updateCounterValue();
}
// console.log(handlerClickDown);
handlerClickUp();
handlerClickDown();
function updateCounterValue() {
  valueEl.textContent = counterValue;
}
// console.log(counterValue);
// console.log(valueEl.textContent);
