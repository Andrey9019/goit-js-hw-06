const control = document.querySelector(`#font-size-control`);
const text = document.querySelector(`#text`);

control.addEventListener(`input`, handler);

function handler(evt) {
  const value = evt.currentTarget.value;
  text.style.fontSize = `${value}px`;
}
