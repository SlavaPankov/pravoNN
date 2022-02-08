import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const template = document.querySelector('.footer__link');

tippy('.social__icon-tel', {
  content: template.innerHTML,
  allowHTML: true,
  interactive: true,
});

tippy('.burger-nav__tel', {
  content: template.innerHTML,
  allowHTML: true,
  interactive: true,
});
