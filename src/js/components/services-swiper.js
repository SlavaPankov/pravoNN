import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination]);

const slider = new Swiper('.services-slider', {
  direction: 'horizontal',
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  pagination: {
    type: 'bullets',
    el: '.services-slider__pagination',
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
