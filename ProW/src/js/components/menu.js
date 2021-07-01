import { TimelineMax } from 'gsap';
import isTouchDevice from '../helpers/detectTouch'

const menu = () => {
  const tl = new TimelineMax();
  const { body } = document;
  const hamburger = document.getElementById('hamburger');
  const mainMenu = document.getElementById('main-menu');
  const mainMenuWrapper = document.getElementById('main-menu-wrapper');
  const eventType = isTouchDevice() ? 'touchstart' : 'click';

  const closeMenu = () => {
    hamburger.classList.remove('is-active');
    hamburger.classList.add('is-disabled');
    body.classList.remove('is-overflow-hidden');
    body.removeAttribute("style");

    if(!isTouchDevice()) {
      body.classList.remove('is-desktop');
    }

    tl
      .to(mainMenuWrapper, {x: "-100%", duration: 0.3})
      .to(mainMenu, {opacity: 0, duration: 0.3, onComplete: () => {
          mainMenu.classList.remove('is-opened');
          hamburger.classList.remove('is-disabled');
          mainMenu.removeAttribute("style");
          mainMenuWrapper.removeAttribute("style")
        }});
  };

  const openMenu = () => {
    hamburger.classList.add('is-active');
    hamburger.classList.add('is-disabled');
    body.classList.add('is-overflow-hidden');
    mainMenu.classList.add('is-opened');

    if(!isTouchDevice()) {
      body.classList.add('is-desktop');
    }

    if(window.innerHeight < document.body.clientHeight && !isTouchDevice()) {
      document.body.style.paddingRight = "15px"
    }

    tl
      .to(mainMenu, {visibility: "visible", opacity: 1, duration: 0.3})
      .to(mainMenuWrapper, {x: "0%", opacity: 1, duration: 0.3, onComplete: () => {
          hamburger.classList.remove('is-disabled');
        }})
  };

  hamburger.addEventListener(eventType, () => {
    if(mainMenu.classList.contains('is-opened')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mainMenu.addEventListener(eventType, (e) => {
    if(e.target.classList.contains('is-opened')) closeMenu();
  })
};

export default menu;
