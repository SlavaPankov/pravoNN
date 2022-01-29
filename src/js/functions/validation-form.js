import Inputmask from "inputmask";
import JustValidate from "just-validate";

let selector = document.querySelector('input[type="tel"]');
let im = new Inputmask('+7 (999)-999-99-99');

im.mask(selector);

const form  = document.querySelector('.form-main');

const validation = new JustValidate(form);

validation
  .addField('.input-name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите имя!'
    }
  ])
  .addField('.input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Телефон обязателен',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });
// new window.JustValidate('.form-main', {
//   rules: {
//     tel: {
//       required: true,
//       function: () => {
//         const phone = selector.inputmask.unmaskedvalue();
//         return Number(phone) && phone.length === 10
//       }
//     },
//     checkbox: {
//       required: true
//     }
//   },
//   colorWrong: '#ff3434',
//   messages: {
//     name: {
//       required: 'Введите имя',
//       minLength: 'Слишком короткое имя',
//       maxLength: 'Слишком длинное имя',
//     },
//     tel: {
//       required: 'Введите телефон',
//       function: 'Некорректный ввод',
//     },
//     checkbox: {
//       required: ' '
//     }
//   },
//   submitHandler: function(thisForm) {
//     let formData = new FormData(thisForm);
//     console.log(formData);

//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           console.log('Отправлено');
//         }
//       }
//     }

//     xhr.open('POST', 'mail.php', true);
//     xhr.send(formData);

//     thisForm.reset();
//   }
// });

