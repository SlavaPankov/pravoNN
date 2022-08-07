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

if (document.querySelector('.agency__map')) {
  const moscowTemplate = document.querySelector('.moscow-info');
  const chelabinskTemplate = document.querySelector('.chelabinsk-info');
  const rostovTemplate = document.querySelector('.rostov-info');
  const cheboksaryTemplate = document.querySelector('.cheboksary-info');
  const chitaTemplate = document.querySelector('.chita-info');

  tippy('.moscow', {
    content: moscowTemplate.innerHTML,
    allowHTML: true,
    interactive: true,
    theme: 'custom-white',
    placement: 'bottom-start',
    arrow: false
  });

  tippy('.chelabinsk', {
    content: chelabinskTemplate.innerHTML,
    allowHTML: true,
    interactive: true,
    theme: 'custom-white',
    placement: 'bottom-start',
    arrow: false
  });

  tippy('.cheboksary', {
    content: cheboksaryTemplate.innerHTML,
    allowHTML: true,
    interactive: true,
    theme: 'custom-white',
    placement: 'bottom-start',
    arrow: false
  });

  tippy('.chita', {
    content: chitaTemplate.innerHTML,
    allowHTML: true,
    interactive: true,
    theme: 'custom-white',
    placement: 'bottom-start',
    arrow: false
  });

  tippy('.rostov', {
    content: rostovTemplate.innerHTML,
    allowHTML: true,
    interactive: true,
    theme: 'custom-white',
    placement: 'bottom-start',
    arrow: false
  });

}
