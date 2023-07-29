const elements = {
  clickMe: document.querySelector(`.js-btn`),
  box: document.querySelector(`.js-box`),
};

elements.clickMe.addEventListener(`click`, handlerClick);
let step = 0;
function handlerClick() {
  step += 50;
  elements.box.style.marginTop = `${step}px`;
  elements.box.style.marginLeft = `${step}px`;
}
