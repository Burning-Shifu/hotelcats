let swiper = new Swiper('.rooms__slider', {
  loop: true,
  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.slider__arrow--next',
    prevEl: '.slider__arrow--prev',
  },
});