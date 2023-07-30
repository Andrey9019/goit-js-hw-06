const validation = document.querySelector(`#validation-input`);
// console.log(validation);
const dataLengthValue = Number(validation.dataset.length);
// console.log(dataLengthValue);
validation.addEventListener(`blur`, validInp);

function validInp() {
  if (validation.value.length === dataLengthValue) {
    validation.classList.add(`valid`);
    validation.classList.remove(`invalid`);
  } else {
    validation.classList.add(`invalid`);
    validation.classList.remove(`valid`);
  }
  console.log(dataLengthValue);
  console.log(validation.value.length);
}
