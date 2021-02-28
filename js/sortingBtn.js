'use strict';

document.addEventListener('DOMContentLoaded', () => {
  
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
  
});