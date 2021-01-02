// bg hero

const hero = document.querySelector('.hero');
const windowWidth = document.documentElement.clientWidth;

function changeHeroBg() { 
  if (windowWidth > 900) {
    hero.style.backgroundImage = 'url(img/hero/hero.jpg)';
  } else if (windowWidth > 320) {
    hero.style.backgroundImage = 'url(img/hero/hero-tablet.jpg)';
  } 
  // else {
  //   hero.style.backgroundImage = 'url(img/hero/hero-mobile.jpg)';
  // }
}

changeHeroBg();

// end bg hero