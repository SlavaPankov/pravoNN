import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

Swiper.use([Navigation, Pagination]);

const slider = new Swiper('.services-slider', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 30,

  navigation: {
    nextEl: '.slider-navigation__arrow-fw',
    prevEl: '.slider-navigation__arrow-bw',
  },
})
