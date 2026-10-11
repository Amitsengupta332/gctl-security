import Swiper from "swiper";
import { A11y } from "swiper/modules";

import "swiper/css";

export function initProductSlider() {
  const sliderElements = document.querySelectorAll(
    "[data-product-slider]",
  );

  if (!sliderElements.length) {
    initRotatingPriceTexts();
    return;
  }

  sliderElements.forEach(function (sliderElement) {
    if (sliderElement.dataset.swiperReady === "true") return;

    const section =
      sliderElement.closest("[data-product-slider-section]") ||
      sliderElement.closest("section") ||
      sliderElement.parentElement;

    if (!section) return;

    const prevButtons = section.querySelectorAll(
      "[data-product-prev]",
    );

    const nextButtons = section.querySelectorAll(
      "[data-product-next]",
    );

    /*
    =========================================
    ONLY SLIDER BUTTONS = POINTER
    =========================================
    */
    prevButtons.forEach(function (button) {
      button.classList.add("cursor-pointer");
    });

    nextButtons.forEach(function (button) {
      button.classList.add("cursor-pointer");
    });

    const swiper = new Swiper(sliderElement, {
      modules: [A11y],

      // MOBILE = 1
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 6,

      speed: 650,

      // পুরো slider-এ grab cursor থাকবে না
      grabCursor: false,

      rewind: true,
      watchOverflow: true,

      observer: true,
      observeParents: true,

      a11y: {
        enabled: true,
      },

      breakpoints: {
        // TABLET = 3
        768: {
          slidesPerView: 3,
          spaceBetween: 8,
        },

        // DESKTOP = 5
        1024: {
          slidesPerView: 5,
          spaceBetween: 8,
        },
      },
    });

    prevButtons.forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.preventDefault();

        swiper.slidePrev();
      });
    });

    nextButtons.forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.preventDefault();

        swiper.slideNext();
      });
    });

    sliderElement.dataset.swiperReady = "true";
    sliderElement.swiperInstance = swiper;
  });

  initRotatingPriceTexts();
}

function initRotatingPriceTexts() {
  const rotatingTexts = document.querySelectorAll(
    "[data-call-rotate]",
  );

  rotatingTexts.forEach(function (item) {
    if (item.dataset.rotateReady === "true") return;

    const phone = item.getAttribute("data-phone");

    if (!phone) return;

    item.dataset.rotateReady = "true";

    let showPhone = false;

    setInterval(function () {
      showPhone = !showPhone;

      item.textContent = showPhone
        ? phone
        : "Call for Price";
    }, 2200);
  });
}