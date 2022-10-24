import Swiper, { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';


new Swiper('.services-slider', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,

  navigation: {
    prevEl: '.arrow-wrapper__prev',
    nextEl: '.arrow-wrapper__next'
  },

  breakpoints: {
    576: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 15,
    },

    768: {
      slidesPerGroup: 1,
      slidesPerView: 2,
      spaceBetween: 15,
    },

    1440: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
    }
  }
})
