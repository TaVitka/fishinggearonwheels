import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
document.addEventListener('DOMContentLoaded', function() {

  let options = {
    spaceBetween: 24,
    speed: 700,
    autoplay: {
      delay: 4000,
    },
    modules: [Navigation, Scrollbar, Pagination, Autoplay],
    draggable: true,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      769: {
        slidesPerView: 'auto',
        centeredSlides: true,
        initialSlide: 1,
      },
      768: {
        slidesPerView: 1,
        centeredSlides: false,
      }
    }
  }

  const swiperSpecials = new Swiper('.slider__posts', options);
});