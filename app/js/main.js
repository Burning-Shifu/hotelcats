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
  spaceBetween: 30,
  pagination: {
    el: '.reviews__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.reviews__arrow-next',
    prevEl: '.reviews__arrow-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },

    1200: {
      slidesPerView: 2,
    },
  }
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


// кнопка сортировки

const sorting = document.querySelector('.catalog__sorting');
const selected = document.querySelector('.catalog__selected');
const options = document.querySelectorAll('.catalog__sorting-item');

selected.addEventListener('click', () => {
  sorting.classList.toggle('active');
});

options.forEach( i => {
  i.addEventListener('click', () => {
    selected.innerHTML = i.querySelector('.catalog__sorting-label').innerHTML;
    sorting.classList.remove('active');
  });
});

// end кнопка сортировки


// Отправка формы при нажатии кнопки в модальном окне

document.getElementById("book-submit").onclick = function() {
  document.getElementById("book-form").submit();
};

// end

