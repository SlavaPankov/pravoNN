import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const template = document.querySelector('.footer__link');

tippy('.social__icon-tel', {
  content: template.innerHTML,
  allowHTML: true,
  interactive: true,
  placement: 'bottom'
});

tippy('.burger-nav__tel', {
  content: template.innerHTML,
  allowHTML: true,
  interactive: true,
  placement: 'bottom'
});

if (document.querySelector('.agency__map')) {
  const content = document.querySelectorAll('.agency-info');
  const marker = document.querySelectorAll('.agency__icon');


  for (let i = 0; i < marker.length; i++) {
    tippy(marker[i], {
      content: content[i].innerHTML,
      allowHTML: true,
      interactive: true,
      theme: 'custom-white',
      placement: 'bottom-start',
      arrow: false
    })
  }


}
