import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

Swiper.use([Navigation, Pagination]);

const slider = new Swiper('.reviews-swiper', {
  direction: 'horizontal',
  slidesPerView: 1,

  navigation: {
    nextEl: '.reviews-swiper__arrow-fw',
    prevEl: '.reviews-swiper__arrow-bw',
  },
})
