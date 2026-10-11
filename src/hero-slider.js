import Swiper from "swiper";
import {
  A11y,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export function initHeroSlider() {
  const sliderElement = document.querySelector("[data-hero-slider]");

  if (!sliderElement) return;

  if (sliderElement.dataset.swiperReady === "true") return;

  const prevButton = sliderElement.querySelector("[data-hero-prev]");
  const nextButton = sliderElement.querySelector("[data-hero-next]");
  const paginationElement = sliderElement.querySelector(
    "[data-hero-pagination]",
  );

  const swiper = new Swiper(sliderElement, {
    modules: [
      Navigation,
      Pagination,
      EffectFade,
      A11y,
    ],

    slidesPerView: 1,
    slidesPerGroup: 1,

    speed: 700,

    effect: "fade",

    fadeEffect: {
      crossFade: true,
    },

    rewind: true,

    // Hero area-তে grab/pointer cursor থাকবে না
    grabCursor: false,

    watchOverflow: true,

    observer: true,
    observeParents: true,

    navigation: {
      prevEl: prevButton,
      nextEl: nextButton,
    },

    pagination: {
      el: paginationElement,
      clickable: true,

      bulletClass: "hero-slider-dot",
      bulletActiveClass: "hero-slider-dot-active",

      renderBullet: function (index, className) {
        return `
          <button
            type="button"
            class="${className} cursor-pointer"
            aria-label="Go to slide ${index + 1}"
          ></button>
        `;
      },
    },

    a11y: {
      enabled: true,

      prevSlideMessage: "Previous hero slide",
      nextSlideMessage: "Next hero slide",
      paginationBulletMessage: "Go to hero slide {{index}}",
    },
  });

  sliderElement.dataset.swiperReady = "true";
  sliderElement.swiperInstance = swiper;
}