// swiper
  new Swiper('.new-swiper', {
    spaceBetween: 16,
    slidesPerView: "auto",
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });

// header scroll
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 80) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
};
window.addEventListener('scroll', scrollHeader);

// menu
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}
// scrollup
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    }
    else {
        scrollUp.classList.remove('show-scroll');
    }
};
window.addEventListener('scroll', scrollUp);

// login
const login = document.getElementById('login'),
loginButton = document.getElementById('login-button'),
loginClose = document.getElementById('login-close');

if(loginButton){
  loginButton.addEventListener("click", () => {
    login.classList.add('show-login');
  });
};
if(loginClose){
  loginClose.addEventListener("click", () => {
      login.classList.remove('show-login');
  });
};
// gsap
gsap.from('.logo-intro-animation', {duration: 3.5, opacity: 0, ease: 'power2.in'});
gsap.from('.text-intro-animation', {duration: 1.5, opacity: 0, ease: 'power2.in'});
gsap.from('.social-intro-animation', {duration: 2.5, opacity: 0, ease: 'power2.in'});
gsap.from('.scroll-intro-animation', {duration: 5.5, opacity: 0, ease: 'power2.in'});
gsap.to(".deco-1-animation", {rotation: 360, y: 100, duration: 1});
gsap.from('.deco-1-animation', {x: -100, duration: 1, opacity: 0, ease: 'power1.in'});
gsap.from('.deco-2-animation', {y: -100, duration: 1, opacity: 0, ease: 'power1.in'});

// accordeon
// const accordionItem = document.querySelectorAll(".questions__item");
    
// accordionItem.forEach((item) => {
    
//     const accordionHeader = item.querySelector(".questions__header");
//         accordionHeader.addEventListener("click", () => {
//             const openItem = document.querySelector(".accordion-open");
//             toggleItem(item);

//             if(openItem && openItem !== item) {
//                 toggleItem(openItem);
//             }
//         });
// });

// const toggleItem = (item) => {
// const accordionContent = item.querySelector('.questions__content');

//     if(item.classList.contains('accordion-open')) {
//         accordionContent.removeAttribute('style');
//         item.classList.remove('accordion-open');
//     } else {
//     accordionContent.style.height = accordionContent.scrollHeight + 'px';
//     item.classList.add('accordion-open');
//     }
// }

// popup
document.addEventListener("DOMContentLoaded", function() {
  const popup = document.getElementById('popup');
  if (!sessionStorage.getItem('popupClosed')) {
      popup.innerHTML = `
          <div class="popup">
              <button class="close-btn" id="closeButton">×</button>
              <img src="./images/sales/akcia.jpg" alt="Popup Image">
          </div>
      `;
      popup.style.display = 'flex';
      document.getElementById('closeButton').addEventListener('click', function() {
          popup.style.display = 'none';
          sessionStorage.setItem('popupClosed', 'true');
      });
  }
});
