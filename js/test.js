const elements = {
  clickMe: document.querySelector(`.js-btn`),
  box: document.querySelector(`.js-box`),
  quary: document.querySelector(`.js-quary`),
};

elements.clickMe.addEventListener(`click`, handlerClick);
elements.box.addEventListener(`click`, handlerClick);
let step = 0;
function handlerClick() {
  step += 50;
  elements.box.style.marginTop = `${step}px`;
  elements.box.style.marginLeft = `${step}px`;
}

function handlerClick(evt) {
  step += 50;
  evt.currentTarget.style.marginTop = `${step}px`;
  evt.currentTarget.style.marginLeft = `${step}px`;
}

elements.quary.addEventListener(`input`, handlerSearch);
elements.quary.addEventListener(`change`, handlerSearch);
elements.quary.addEventListener(`focus`, handlerSearch);
elements.quary.addEventListener(`blur`, handlerSearch);

function handlerSearch(evt) {
  console.dir(evt.currentTarget.value);
}
