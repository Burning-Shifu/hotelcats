let swiper = new Swiper('.rooms__slider', {
  loop: true,
  pagination: {
    el: '.rooms__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.rooms__arrow-next',
    prevEl: '.rooms__arrow-prev',
  },
});

new Swiper('.reviews__slider', {
  slideClass: 'reviews__slide',
  // freeMode: true,
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: '.reviews__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.reviews__arrow-next',
    prevEl: '.reviews__arrow-prev',
  },
});