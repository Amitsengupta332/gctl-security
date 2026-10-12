import Swiper from "swiper";
import {
  A11y,
  Autoplay,
  EffectFade,
  Keyboard,
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

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  // Keep the existing seven banners, links, colors and layout as they are.
  const swiper = new Swiper(sliderElement, {
    modules: [
      Navigation,
      Pagination,
      Autoplay,
      EffectFade,
      Keyboard,
      A11y,
    ],

    slidesPerView: 1,
    slidesPerGroup: 1,

    // CLS-style auto-rotation without changing any GCTL slide design/colors.
    // Honor the visitor's reduced-motion preference.
    speed: reducedMotion ? 0 : 700,

    autoplay: reducedMotion
      ? false
      : {
          delay: 5500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          waitForTransition: true,
        },

    effect: "fade",

    fadeEffect: {
      crossFade: true,
    },

    rewind: true,

    // Touch-swipe on phones, no drag cursor on desktop.
    allowTouchMove: true,
    grabCursor: false,

    // Arrow keys work when the carousel is in view (Swiper's Keyboard module).
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

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

  // Keep real button pagination accessible, including after arrow/swipe/autoplay.
  const updateDotState = () => {
    const dots = paginationElement?.querySelectorAll(".hero-slider-dot") || [];
    dots.forEach((dot, index) => {
      if (index === swiper.realIndex) {
        dot.setAttribute("aria-current", "true");
      } else {
        dot.removeAttribute("aria-current");
      }
    });
  };
  swiper.on("slideChange", updateDotState);
  updateDotState();

  sliderElement.dataset.swiperReady = "true";
  sliderElement.swiperInstance = swiper;
}