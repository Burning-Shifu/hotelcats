'use strict';

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

var galleryThumbs = new Swiper('.single__thumbs', {
  spaceBetween: 30,
  slidesPerView: 3,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  direction: 'vertical',
});

var galleryTop = new Swiper('.single__main-slider', {
  thumbs: {
    swiper: galleryThumbs
  }
});

flatpickr("#book-check-in", {
  minDate: "today",
  dateFormat: "d-m-y",
  defaultDate: "today",
  "locale": "ru"
});

flatpickr("#book-check-out", {
  minDate: "today",
  dateFormat: "d-m-y",
  defaultDate: "today",
  "locale": "ru"
});

// Отправка формы при нажатии кнопки в модальном окне

document.getElementById("book-submit").onclick = function() {
  document.getElementById("book-form").submit();
};

// end


const selected = document.querySelector('.catalog__selected');
const wrapper = document.querySelector('.catalog__sorting-wrapper');
const options = document.querySelectorAll('.catalog__sorting-item');

selected.addEventListener('click', () => {
  wrapper.classList.toggle('active');
});

options.forEach( i => {
  i.addEventListener('click', () => {
    selected.innerHTML = i.querySelector('.catalog__sorting-label').innerHTML;
    wrapper.classList.remove('active');
  });
});



// if (document.getElementById('sorting-space').checked) {
//   document.querySelector('.catalog__sorting-text').textContent = "По площади";
// } else if (document.getElementById('sorting-price').checked) {
//   document.querySelector('.catalog__sorting-text').textContent = "По цене";
// }