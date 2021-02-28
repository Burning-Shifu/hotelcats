'use strict';

document.addEventListener('DOMContentLoaded', () => {
  
  // таймер
  
  const endDate = '2021-03-24';
  
  function getTimeRemaining() {
    const t = Date.parse(endDate) - Date.now(),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor((t / (1000 * 60 * 60) % 24)),
          mins = Math.floor((t / 1000 / 60) % 60),
          secs = Math.floor((t / 1000) % 60);
          
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'mins': mins,
      'secs': secs
    }
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  
  function setTimeRemaining() {
    const days = document.querySelector('#days'),
          hours = document.querySelector('#hours'),
          mins = document.querySelector('#minutes'),
          secs = document.querySelector('#seconds'),
          timeInterval = setInterval(updTimer, 1000);

    updTimer();

    function updTimer() {
      const t = getTimeRemaining();

      days.textContent = getZero(t.days);
      hours.textContent = getZero(t.hours);
      mins.textContent = getZero(t.mins);
      secs.textContent = getZero(t.secs);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setTimeRemaining(); 

  // end таймер

});