// const elements = {
//   clickMe: document.querySelector(`.js-btn`),
//   box: document.querySelector(`.js-box`),
//   quary: document.querySelector(`.js-quary`),
//   form: document.querySelector(`.js-form`),
// };

// elements.clickMe.addEventListener(`click`, handlerClick);
// elements.box.addEventListener(`click`, handlerClick);
// let step = 0;
// function handlerClick() {
//   step += 50;
//   elements.box.style.marginTop = `${step}px`;
//   elements.box.style.marginLeft = `${step}px`;
// }

// function handlerClick(evt) {
//   step += 50;
//   evt.currentTarget.style.marginTop = `${step}px`;
//   evt.currentTarget.style.marginLeft = `${step}px`;
// }

// elements.quary.addEventListener(`input`, handlerSearch);
// elements.quary.addEventListener(`change`, handlerSearch);
// elements.quary.addEventListener(`focus`, handlerSearch);
// elements.quary.addEventListener(`blur`, handlerSearch);

// function handlerSearch(evt) {
//   console.dir(evt.currentTarget.value);
// }

// elements.form.addEventListener(`submit`, handlerSubmit);

// function handlerSubmit(evt) {
//   evt.preventDefault();
//   console.dir(evt.currentTarget);
//   const { comment, email, password } = evt.currentTarget.elements;
//   console.log(email.value);
//   console.log(password.value);
//   console.log(comment.value);
// }

// document.addEventListener(`keydown`, handlerKey);

// function handlerKey(evt) {
//   switch (evt.code) {
//     case `Escape`:
//       console.log(`Escape`);
//       break;
//     case `KeyQ`:
//       console.log(`KeyQ`);
//       break;
//   }
// }

// function handlerKey(evt) {
//   if (evt.ctrlKey && evt.code === `evt.KeyC`) {
//     evt.preventDefault();
//   }
// }

// const cars = [
//   {
//     id: 1,
//     car: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     id: 2,
//     car: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     id: 33,
//     car: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     id: 3,
//     car: "Honda",
//     type: "Accord",
//     price: 20000,
//     number: "+380000000000",
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     id: 4,
//     car: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];

// const elements = {
//   form: document.querySelector(`.js-form`),
//   container: document.querySelector(`.js-list`),
// };

// function createmarkup(arr) {
//   return arr
//     .map(
//       ({ id, car, type, price, img }) =>
//         `<li data-id="${id}">
//             <img src="${img}" alt="${type}" width="300"/>
//             <h2>${car}</h2>
//             <h3>${type}</h3>
//             <span>${price}</span>
//         </li>`
//     )
//     .join(``);
// }
// elements.container.insertAdjacentHTML(`beforeend`, createmarkup(cars));
// elements.form.addEventListener(`submit`, handlerSearch);

// function handlerSearch(evt) {
//   evt.preventDefault();

//   const { options, quary } = evt.currentTarget.elements;

//   const result = cars.filter((item) =>
//     item[options.value].toLowerCase().includes(quary.value.toLowerCase())
//   );

//   elements.container.innerHTML = createmarkup(result);
// }
