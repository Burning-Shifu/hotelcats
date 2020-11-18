let swiper = new Swiper('.rooms__slider', {
  // loop: true,
  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.slider__arrow--next',
    prevEl: '.slider__arrow--prev',
  },
});

new Swiper('.reviews__slider', {
  slideClass: 'reviews__slide',
  freeMode: true,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.slider__arrow--next',
    prevEl: '.slider__arrow--prev',
  },
});