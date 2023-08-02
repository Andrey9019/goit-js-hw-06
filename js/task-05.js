const nameInp = document.querySelector(`#name-input`);

const nameOutput = document.querySelector(`#name-output`);

nameInp.addEventListener(`input`, handlerName);

function handlerName(evt) {
  nameOutput.textContent = nameInp.value || `Anonymous`;
}
