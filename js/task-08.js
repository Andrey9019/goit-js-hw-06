const form = document.querySelector(`.login-form`);
form.addEventListener(`submit`, handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();

  const formObj = {};
  const formElem = [...form.elements];

  formElem.forEach((elem) => {
    if (elem.type !== `submit`) {
      formObj[elem.name] = elem.value;
    }
  });

  console.log(formObj);
  //   console.log(email.value);
  //   console.log(password.value);
  form.reset();
}
