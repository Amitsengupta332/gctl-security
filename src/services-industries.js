import Swiper from "swiper";
import { A11y, Navigation } from "swiper/modules";

import "swiper/css";

export function initServicesIndustriesSliders() {
  const sliders = document.querySelectorAll(
    "[data-services-industries-slider]",
  );

  if (!sliders.length) return;

  sliders.forEach(function (sliderElement) {
    if (sliderElement.dataset.swiperReady === "true") return;

    const section = sliderElement.closest("[data-slider-section]");

    if (!section) return;

    const prevButton = section.querySelector("[data-slider-prev]");
    const nextButton = section.querySelector("[data-slider-next]");
    const paginationWrapper = section.querySelector("[data-slider-pagination]");

    function renderPagination(swiper) {
      if (!paginationWrapper) return;

      paginationWrapper.innerHTML = "";

      const totalDots = Math.max(1, swiper.snapGrid.length);

      for (let index = 0; index < totalDots; index += 1) {
        const dot = document.createElement("button");

        dot.type = "button";
        dot.setAttribute("aria-label", `Go to slide group ${index + 1}`);
        dot.setAttribute("data-slider-dot", String(index));

        dot.className =
          index === swiper.snapIndex
            ? "h-2.5 w-2.5 rounded-full bg-[#1268df] transition-all duration-300"
            : "h-2.5 w-2.5 rounded-full bg-[#d8e0ec] transition-all duration-300 hover:bg-[#9eb9dc]";

        dot.addEventListener("click", function () {
          swiper.slideTo(index);
        });

        paginationWrapper.appendChild(dot);
      }
    }

    function updatePagination(swiper) {
      if (!paginationWrapper) return;

      const dots = paginationWrapper.querySelectorAll("[data-slider-dot]");

      dots.forEach(function (dot, index) {
        const isActive = index === swiper.snapIndex;

        dot.className = isActive
          ? "h-2.5 w-2.5 rounded-full bg-[#1268df] transition-all duration-300"
          : "h-2.5 w-2.5 rounded-full bg-[#d8e0ec] transition-all duration-300 hover:bg-[#9eb9dc]";
      });
    }

    const swiper = new Swiper(sliderElement, {
      modules: [Navigation, A11y],

      slidesPerView: 1.08,
      slidesPerGroup: 1,
      spaceBetween: 12,
      speed: 650,

      grabCursor: true,
      rewind: true,
      watchOverflow: true,

      observer: true,
      observeParents: true,

      navigation: {
        prevEl: prevButton,
        nextEl: nextButton,
      },

      a11y: {
        enabled: true,
      },

      breakpoints: {
        560: {
          slidesPerView: 2,
          spaceBetween: 12,
        },

        900: {
          slidesPerView: 3,
          spaceBetween: 12,
        },

        1200: {
          slidesPerView: 4,
          spaceBetween: 12,
        },
      },

      on: {
        init: function (currentSwiper) {
          renderPagination(currentSwiper);
        },

        slideChange: function (currentSwiper) {
          updatePagination(currentSwiper);
        },

        resize: function (currentSwiper) {
          renderPagination(currentSwiper);
        },

        breakpoint: function (currentSwiper) {
          requestAnimationFrame(function () {
            renderPagination(currentSwiper);
          });
        },
      },
    });
    sliderElement.dataset.swiperReady = "true";

    renderPagination(swiper);
  });
}
