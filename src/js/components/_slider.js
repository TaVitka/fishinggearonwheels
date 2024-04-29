import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
document.addEventListener('DOMContentLoaded', function() {

  let options = {
    slidesPerView: 'auto',
    spaceBetween: 24,
    centeredSlides: true,
    speed: 700,
    initialSlide: 1,
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
  }

  const swiperSpecials = new Swiper('.slider__posts', options);
});