import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const articleSwiper = new Swiper('#articleSwiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  slidesPerGroup: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  spaceBetween: 48,
  pagination: {
    el: '.pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
});

const hotThemeSwiper = new Swiper('#hotThemeSwiper', {
  spaceBetween: 24,
});

const lifeThemeSwiper = new Swiper('#lifeThemeSwiper', {
  modules: [Navigation],
  slidesPerView: 1,
  slidesPerGroup: 1,
  allowTouchMove: false,
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      allowTouchMove: true,
    },
  },
  spaceBetween: 24,
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
});

const extendReadSwiper = new Swiper('#extendReadSwiper', {
  slidesPerView: 1,
  allowTouchMove: true,
  breakpoints: {
    768: {
      allowTouchMove: false,
    },
  },
  spaceBetween: 24,
});

const navbarContent = document.querySelector('.navbar-content');
window.addEventListener('scroll', () => {
  if (window.scrollY > 99) {
    navbarContent.classList.add('py-lg-4');
    navbarContent.classList.remove('py-lg-9');
    return;
  }
  navbarContent.classList.add('py-lg-9');
  navbarContent.classList.remove('py-lg-4');
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();
