import Inputmask from "inputmask";
import JustValidate from "just-validate";

function createFromTemplate(template) {
  const element = document.createElement('template');
  element.innerHTML = template.trim();
  return element.content.firstChild;
}

function renderModal(contanier) {
  const template = `
    <div class="modal">
      <svg class="modal__cross">
        <use xlink:href="img/sprite.svg#cross"></use>
      </svg>
      <h2 class="modal__heading heading-reset">
        Оставьте заявку
      </h2>
      <div class="modal__descr">
        Мы свяжемся с Вами в течение нескольких минут
      </div>
      <form action="#" class="modal__form form modal-form" method="POST">
        <label class="modal-form__label form__label">
          <input class="modal-form__input modal-form__input-name input-reset input input-name" type="text" data-validate-field="name" name="Имя" placeholder="Введите имя">
        </label>
        <label class="form__label modal-form__label">
          <input class="modal-form__input modal-form__input-tel input-reset input input-tel" type="tel" data-validate-field="tel" name="Телефон" placeholder="Введите телефон">
        </label>
        <div class="modal__agreement">
          Нажимая на кнопку "Отправить", вы соглашаетесь на обработку <a href="#" class="modal__link">персональных данных</a>
        </div>
        <button class="button btn-reset modal-form__btn">Отправить</button>
      </form>
    </div>
  `;

  const modal = createFromTemplate(template);
  const cross = modal.querySelector('.modal__cross');

  let selector = modal.querySelector('input[type="tel"]');
  let im = new Inputmask('+7 (999)-999-99-99');

  im.mask(selector);

  cross.addEventListener('click', () => {
    modal.remove();
    contanier.classList.remove('modal-open');
  });

  contanier.addEventListener('click', (e) => {
    if (e.target.className === 'modal-bg modal-open') {
      modal.remove();
      contanier.classList.remove('modal-open');
    }
  });
  contanier.addEventListener('touchend', (e) => {
    if (e.target.className === 'modal-bg modal-open') {
      modal.remove();
      contanier.classList.remove('modal-open');
    }
  });

  return modal;
}

const modalBtn = document.querySelectorAll('.modal-btn');
const siteContainer = document.querySelector('.modal-bg');

modalBtn.forEach(item => {
  item.addEventListener('click', () => {
    const modal = renderModal(siteContainer);
    modal.style.top = pageYOffset + 150 + 'px';


    siteContainer.append(modal);
    siteContainer.classList.add('modal-open');

    const formBtn = document?.querySelector('.modal-form__btn');
    const form = document?.querySelector('.modal__form');
    const validation = new JustValidate(form);
    validation
      .addField('.modal-form__input-name', [
        {
          rule: 'minLength',
          value: 3,
          errorMessage: 'Слишком короткое имя'
        },
        {
          rule: 'maxLength',
          value: 30,
          errorMessage: 'Слишком длинное имя'
        },
        {
          rule: 'required',
          value: true,
          errorMessage: 'Введите имя'
        }
      ])
      .addField('.modal-form__input-tel', [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Введите телефон',
        },
        {
          rule: 'function',
          validator: function() {
            const phone = document.querySelector('.modal-form__input-tel').inputmask.unmaskedvalue();
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
        formBtn.textContent = 'Отправлено';
        formBtn.setAttribute('disabled', 'disabled');
      }).onFail(() => {
        document.querySelectorAll('.just-validate-error-label').forEach(item => {
          console.log(item);
          item.classList.add('is-invalid');
        });
      });
  });
});
