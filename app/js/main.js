'use strict';

document.addEventListener('DOMContentLoaded', () => {

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
  
  // const selected = document.querySelector('.catalog__selected');
  // const wrapper = document.querySelector('.catalog__sorting-wrapper');
  // const options = document.querySelectorAll('.catalog__sorting-item');
  
  // selected.addEventListener('click', () => {
  //   wrapper.classList.toggle('active');
  // });
  
  // options.forEach( i => {
  //   i.addEventListener('click', () => {
  //     selected.innerHTML = i.querySelector('.catalog__sorting-label').innerHTML;
  //     wrapper.classList.remove('active');
  //   });
  // });
  
  // end кнопка сортировки
  
  // Отправка формы при нажатии кнопки в модальном окне
  
  // document.getElementById("book-submit").onclick = function() {
  //   document.getElementById("book-form").submit();
  // };
  
  // end
  
  // таймер
  
  // const endDate = '2021-03-24';
  
  // function getTimeRemaining() {
  //   const t = Date.parse(endDate) - Date.now(),
  //         days = Math.floor(t / (1000 * 60 * 60 * 24)),
  //         hours = Math.floor((t / (1000 * 60 * 60) % 24)),
  //         mins = Math.floor((t / 1000 / 60) % 60),
  //         secs = Math.floor((t / 1000) % 60);
          
  //   return {
  //     'total': t,
  //     'days': days,
  //     'hours': hours,
  //     'mins': mins,
  //     'secs': secs
  //   }
  // }

  // function getZero(num) {
  //   if (num >= 0 && num < 10) {
  //     return `0${num}`;
  //   } else {
  //     return num;
  //   }
  // }
  
  // function setTimeRemaining() {
  //   const days = document.querySelector('#days'),
  //         hours = document.querySelector('#hours'),
  //         mins = document.querySelector('#minutes'),
  //         secs = document.querySelector('#seconds'),
  //         timeInterval = setInterval(updTimer, 1000);

  //   updTimer();

  //   function updTimer() {
  //     const t = getTimeRemaining();

  //     days.textContent = getZero(t.days);
  //     hours.textContent = getZero(t.hours);
  //     mins.textContent = getZero(t.mins);
  //     secs.textContent = getZero(t.secs);

  //     if (t.total <= 0) {
  //       clearInterval(timeInterval);
  //     }
  //   }
  // }
  // setTimeRemaining(); 

  // end таймер

  // модальные окна
  const btnModal = document.querySelectorAll('[data-modal]'),
        btnClose = document.querySelectorAll('[data-close]'),
        modals = document.querySelectorAll('.modal'),
        modalBook = document.querySelector('#bookModal'),
        modalThx = document.querySelector('#thxModal'),
        body = document.querySelector('body'),
        scrollWidth = window.innerWidth - document.documentElement.clientWidth;

  function openModal(modal) {
    modal.classList.remove('hide');
    modal.classList.add('show');
    body.style.overflow = 'hidden';
    body.style.paddingRight = scrollWidth + 'px';
  }

  btnModal.forEach(item => {
    item.addEventListener('click', () => openModal(modalBook));
  });

  function closeModal(modal) {
    modal.classList.remove('show');
    modal.classList.add('hide');
    body.style.overflow = 'auto';
    body.style.paddingRight = 0 + 'px';
  }

  modals.forEach(item => {
    btnClose.forEach(btn => {
      btn.addEventListener('click', () => closeModal(item));
    });
    // btnClose.addEventListener('click', () => closeModal(item));
  });

  modals.forEach(item => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && item.classList.contains('show')) {
        closeModal(item);
      }
    });
  });

  modals.forEach(item => {
    document.addEventListener('click', (e) => {
      if (e.target && e.target.classList.contains('modal__inner')) { 
        closeModal(item);
      }
    });
  });

  // submit

  const form = document.querySelector('.book-modal__form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    closeModal(modalBook);
    openModal(modalThx);
  });
  



});
