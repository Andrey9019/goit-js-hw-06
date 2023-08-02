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
function handlerClickDown() {
  counterValue -= 1;
  updateCounterValue();
}
handlerClickUp();
handlerClickDown();
function updateCounterValue() {
  valueEl.textContent = counterValue;
}
