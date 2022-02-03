const burgerBtn = document?.querySelector('.burger');
const burgerMenu = document?.querySelector('.burger-nav');
const burgerCross = document?.querySelector('.burger-nav__cross');
const consultationBtn = document?.querySelector('.burger-nav__btn');
const burgerLink = document?.querySelectorAll('.burger-nav__link');

burgerBtn?.addEventListener('click', () => {
  burgerMenu.classList.add('is-open');
});

burgerCross?.addEventListener('click', () => {
  burgerMenu.classList.remove('is-open');
});

consultationBtn?.addEventListener('click', () => {
  burgerMenu.classList.remove('is-open');
});

burgerLink?.forEach(item => {
  item.addEventListener('click', () => {
    burgerMenu.classList.remove('is-open');
  });
})

