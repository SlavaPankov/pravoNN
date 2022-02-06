import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

Swiper.use([Navigation, Pagination]);

const slider = new Swiper('.services-slider', {
  direction: 'horizontal',
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,

  navigation: {
    nextEl: '.slider-navigation__arrow-fw',
    prevEl: '.slider-navigation__arrow-bw',
  },

  breakpoints: {
    576: {
      slidesPerGroup: 2,
      slidesPerView: 1,
      spaceBetween: 30,
    },

    768: {
      slidesPerGroup: 1,
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1440: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 30,
    }

  }
})
