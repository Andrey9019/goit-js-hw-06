const nameInp = document.querySelector(`#name-input`);
// console.log(nameInp);

const nameOutput = document.querySelector(`#name-output`);
// console.log(nameOutput);

nameInp.addEventListener(`input`, handlerName);

function handlerName(evt) {
  nameOutput.textContent = nameInp.value || `Anonymous`;
  //   console.dir(evt.currentTarget.value);
}
