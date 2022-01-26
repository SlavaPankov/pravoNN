import Inputmask from "inputmask";

let selector = document.querySelector('input[type="tel"]');
let im = new Inputmask('+7 (999)-999-99-99');

im.mask(selector);

new window.JustValidate('.form-main', {
  rules: {
    tel: {
      required: true,
      function: () => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10
      }
    },
    checkbox: {
      required: true
    }
  },
  colorWrong: '#ff3434',
  messages: {
    name: {
      required: 'Введите имя',
      minLength: 'Слишком короткое имя',
      maxLength: 'Слишком длинное имя',
    },
    tel: {
      required: 'Введите телефон',
      function: 'Некорректный ввод',
    },
    checkbox: {
      required: ' '
    }
  },
  submitHandler: function(thisForm) {
  }
});

