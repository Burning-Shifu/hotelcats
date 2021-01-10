'use strict';

// меню

let menuButton = document.querySelector('.header__menu-btn');
let menu = document.querySelector('.header__block');

menuButton.onclick = function () {
  menu.classList.toggle('open');
  menuButton.classList.toggle('open');
};

// end меню

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
  slidesPerView: 3,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      direction: 'horizontal',
      spaceBetween: 20,
    },

    900: {
      direction: 'vertical',
      spaceBetween: 30,
    },
  }
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
  "locale": "ru",
  disableMobile: "true"
});

flatpickr("#book-check-out", {
  minDate: "today",
  dateFormat: "d-m-y",
  defaultDate: "today",
  "locale": "ru",
  disableMobile: "true"
});


// кнопка сортировки

// const sorting = document.querySelector('.catalog__sorting');
// const selected = document.querySelector('.catalog__selected');
// const options = document.querySelectorAll('.catalog__sorting-item');

// selected.addEventListener('click', () => {
//   sorting.classList.toggle('active');
// });

// options.forEach( i => {
//   i.addEventListener('click', () => {
//     selected.innerHTML = i.querySelector('.catalog__sorting-label').innerHTML;
//     sorting.classList.remove('active');
//   });
// });

// end кнопка сортировки


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


// Отправка формы при нажатии кнопки в модальном окне

document.getElementById("book-submit").onclick = function() {
  document.getElementById("book-form").submit();
};

// end

