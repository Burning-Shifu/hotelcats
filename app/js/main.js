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

// let sortingText = document.querySelector('.catalog__sorting-text');

// function sorting () {
//             const rbs = document.querySelectorAll('input[name="sorting"]');

//             for (const rb of rbs) {
//                 if (rb.checked) {
//                   sortingText.innerHTML = rb.value;
//                     break;
//                 }
//             }
            
//         }

// if (document.getElementById('sorting-space').checked) {
//   document.querySelector('.catalog__sorting-text').textContent = "По площади";
// } else if (document.getElementById('sorting-price').checked) {
//   document.querySelector('.catalog__sorting-text').textContent = "По цене";
// }