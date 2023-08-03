const form = document.querySelector(".login-form");
form.addEventListener("submit", handlerForm);

function handlerForm(evt) {
  evt.preventDefault();
  const elements = evt.target.elements;
  const formObj = {};

  let inputCorrect = true;

  const formElem = Array.from(elements);

  formElem.forEach((element) => {
    if (element.nodeName === "INPUT") {
      if (element.value === "") {
        inputCorrect = false;
        alert("Усі поля повинні бути заповнені!");
        return;
      }
      formObj[element.name] = element.value;
    }
  });

  if (inputCorrect) {
    console.log(formObj);
    evt.target.reset();
  }
}
