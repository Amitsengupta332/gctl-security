import { CATEGORY_PAGE_PRODUCTS } from "../product-data.js";

const CATEGORY_CONFIG = {
  cctvSecuritySystem: {
    title: "CCTV Security System",
    link: "/cctv-surveillance.html",
    color: "#1268df",
    banner: "/images/products/banners/cctv-security-system-banner.avif",
    description:
      "Discover a wide range of CCTV surveillance cameras, recorders and accessories for complete security and monitoring of your home, office and industrial spaces.",
    icon: `
      <svg class="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M4 8h12l4 4v4H4V8z"></path>
        <path d="M8 16v3"></path>
        <path d="M16 16v3"></path>
        <path d="M8 12h.01"></path>
      </svg>
    `,
    features: [
      "High-definition<br>Clarity",
      "24/7<br>Surveillance",
      "Remote<br>Monitoring",
      "Smart<br>Analytics",
      "Reliable<br>Performance",
    ],
  },

  accessControlSystem: {
    title: "Access Control System",
    link: "/access-control-time-attendance.html",
    color: "#ff6a00",
    banner: "/images/products/banners/access_control_system.avif",
    description:
      "The safety and security of your working employees and your work within industries are our actions. We understand your needs and provide the best access control solutions.",
    icon: `
      <svg class="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <rect x="7" y="3" width="10" height="18" rx="2"></rect>
        <path d="M12 8v6"></path>
        <path d="m9 11 3 3 3-3"></path>
      </svg>
    `,
    features: [
      "Secure<br>Access",
      "Real-Time<br>Monitoring",
      "Multiple<br>Verification",
      "Data<br>Protection",
      "Easy<br>Integration",
    ],
  },

  fireSafetySystem: {
    title: "Fire Safety System",
    link: "/fire-alarm-system.html",
    color: "#ef1f1f",
    banner: "/images/products/banners/fire_safety_system.avif",
    description:
      "GCTL is a leading importer and supplier of addressable and conventional fire safety products that save lives and protect your property.",
    icon: `
      <svg class="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 2.5s.8 4.2-2.2 6.8C8.8 11.4 7 13.2 7 16a5 5 0 0 0 10 0c0-2.3-1.2-4.1-3.5-6.2.1 1.5-.5 2.8-1.8 3.9-.9.8-1.4 1.5-1.4 2.5a1.8 1.8 0 0 0 3.6 0c0-.8-.3-1.4-.8-2 2.7 1.3 4.4 3.2 4.4 5.5A7.5 7.5 0 0 1 2.5 16c0-4.8 3.5-7.1 6.2-9.5 2-1.8 2.5-4 2.5-4s1.4.7 2.3 0z"></path>
      </svg>
    `,
    features: [
      "Early<br>Detection",
      "Instant<br>Alert",
      "Certified<br>Products",
      "Easy<br>Maintenance",
      "Building<br>Protection",
    ],
  },

  metalDetectorSystem: {
    title: "Metal Detector System",
    link: "/entrance-security-solutions.html",
    color: "#068a5b",
    banner: "/images/products/banners/metal_detector_system.avif",
    description:
      "GCTL is one of the best and leading supplier for a range of metal detectors, walk through metal detectors, handheld metal detector and many more.",
    icon: `
      <svg class="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M7 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16"></path>
        <path d="M9 21h6"></path>
        <path d="M10 7h4"></path>
      </svg>
    `,
    features: [
      "High<br>Detection",
      "Quick<br>Installation",
      "Durable<br>Build",
      "Multi-Zone<br>Technology",
      "Alarm<br>Indication",
    ],
  },

  queueManagement: {
    title: "Queue Management",
    link: "/queue-management-system.html",
    color: "#8c45d9",
    banner: "/images/products/banners/queue_management.avif",
    description:
      "GCTL is leading importer and supplier of queue management system for various industries and public services.",
    icon: `
      <svg class="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M7 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
        <path d="M17 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
        <path d="M12 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
        <path d="M7 14v4"></path>
        <path d="M17 14v4"></path>
      </svg>
    `,
    features: [
      "Efficient<br>Management",
      "Better Customer<br>Experience",
      "Real-Time<br>Display",
      "Easy<br>Operation",
      "Customizable<br>Solutions",
    ],
  },
};

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderFeatureItems(features = [], color = "#0057b8") {
  return features
    .map(
      (feature) => `
        <div class="flex items-center gap-2">
          <span
            class="w-9 h-9 rounded-full border bg-white flex items-center justify-center"
            style="border-color:${color}40;color:${color};">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M9 12l2 2 4-4"></path>
              <circle cx="12" cy="12" r="8"></circle>
            </svg>
          </span>
         <span class="text-[11px] leading-tight font-medium text-[#071b4d]">${feature}</span>
        </div>
      `,
    )
    .join("");
}

function renderProductCard(product, color = "#0057b8") {
  const slug = product.slug;
  const name = escapeHtml(product.name);
  const img = escapeHtml(product.img);
  const artNo = escapeHtml(product.artNo || "Call for Price");

  return `
    <div class="swiper-slide h-auto">
      <div
        class="group flex h-[445px] flex-col overflow-hidden rounded-[10px] border border-[#e3ecf7] bg-white shadow-[0_10px_28px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1"
      >
        <a
          href="/product-details/${encodeURIComponent(slug)}"
          class="flex h-[245px] shrink-0 items-center justify-center bg-white p-5"
        >
          <img
            src="${img}"
            alt="${name}"
            class="max-h-full max-w-full object-contain"
          />
        </a>

        <div class="flex flex-1 flex-col justify-end px-3 pb-4 sm:px-4">
          <a href="/product-details/${encodeURIComponent(slug)}">
            <h3
              class="min-h-[42px] text-[11px] font-medium leading-[1.35] text-[#0057b8] hover:underline sm:text-[12px]"
            >
              ${name}
            </h3>
          </a>

          <div
            class="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
          >
            <p class="text-[11px] font-bold text-[#c2410c] sm:text-[12px]">
              Art.Nr.:
              <span class="font-medium text-[#111827]">
                ${artNo}
              </span>
            </p>

            <div
              class="text-[15px] leading-none tracking-[-1px] text-[#ff4b00] sm:text-[17px]"
            >
              ★★★★★
            </div>
          </div>

          <a
            href="/product-details/${encodeURIComponent(slug)}"
            class="mt-3 inline-flex items-center justify-center rounded-full border border-[#dfeaf7] bg-[#f8fbff] px-4 py-2 text-[11px] font-medium transition"
            style="color:${color};"
            onmouseover="this.style.backgroundColor='${color}';this.style.color='white';"
            onmouseout="this.style.backgroundColor='#f8fbff';this.style.color='${color}';"
          >
            View Details
          </a>

          <div class="mt-3 flex items-center justify-between">
            <a
              href="tel:+8801847213869"
              class="flex items-center gap-2 text-[12px] font-medium text-[#111827] sm:text-[13px]"
            >
              <span
                class="flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] bg-black text-white"
              >
                <svg
                  class="h-3 w-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.4 22 2 13.6 2 3.4 2 2.7 2.5 2.2 3.2 2.2h3.5c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.7.6 4 .1.4 0 .9-.3 1.2l-1.6 2.2z"
                  ></path>
                </svg>
              </span>

              <span
                data-call-rotate
                data-phone="+8801847213869"
              >
                Call for Price
              </span>
            </a>

            <a
              href="https://wa.me/8801847213869?text=${encodeURIComponent(
                `I am interested in ${product.name}`,
              )}"
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
              class="flex h-5 w-5 items-center justify-center rounded-full bg-[#05c755] text-white"
            >
              <svg
                class="h-3 w-3"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.26-1.38a9.88 9.88 0 0 0 4.78 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.76 14.16c-.24.68-1.4 1.3-1.95 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3s.75-2.13 1.02-2.42c.27-.29.59-.36.78-.36h.56c.18.01.42-.07.65.5.24.58.82 2.01.89 2.16.07.15.12.33.02.52-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.03 1.12 1 2.07 1.31 2.36 1.46.29.15.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.39-.24.65-.15.27.1 1.71.81 2 .96.29.15.48.22.55.34.07.12.07.7-.17 1.38Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderCategorySection(container, sectionKey) {
  const section = CATEGORY_PAGE_PRODUCTS?.[sectionKey];
  const config = CATEGORY_CONFIG[sectionKey] || {};

  if (!section) {
    container.innerHTML = `
      <section class="bg-white py-10">
        <div class="mx-auto max-w-[1200px] px-4">
          <div
            class="rounded-xl border border-red-100 bg-red-50 p-6 font-bold text-red-600"
          >
            Category data not found: ${escapeHtml(sectionKey)}
          </div>
        </div>
      </section>
    `;

    return;
  }

  const title = config.title || section.title;
  const color = config.color || "#0057b8";
  const banner = config.banner || "";
  const description = config.description || "";
  const products = section.products || [];

  const categoryLink = config.link || "/all-categories.html";

  container.innerHTML = `
    <section class="bg-white py-8 lg:py-10">
      <div
        class="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8"
      >
        <!-- Category Banner -->
        <div
          class="relative mb-5 min-h-[190px] overflow-hidden rounded-[10px] border border-[#dfeaf7] bg-white sm:min-h-[210px]"
        >
          ${
            banner
              ? `
                <img
                  src="${banner}"
                  alt="${escapeHtml(title)}"
                  class="absolute inset-0 h-full w-full object-cover object-center"
                />
              `
              : ""
          }

          <div
            class="absolute inset-0 bg-gradient-to-r from-white/95 via-white/72 to-white/10"
          ></div>

          <div
            class="relative z-10 flex min-h-[190px] h-full items-center px-4 sm:min-h-[210px] sm:px-6 lg:px-8"
          >
            <div class="max-w-[760px]">
              <div class="min-w-0">
              <a href="${categoryLink}">
                <h2
                  class="text-[19px] font-medium uppercase leading-tight tracking-[0.02em] hover:underline sm:whitespace-nowrap sm:text-[24px] lg:text-[28px] xl:text-[30px]"
                  style="color:${color};"
                >
                  ${escapeHtml(title)}
                </h2>
              </a>

                <p
                  class="mt-3 max-w-[600px] text-[14px] font-medium leading-[1.7] text-[#22385f] sm:text-[15px]"
                >
                  ${escapeHtml(description)}
                </p>
              </div>

              <div
                class="mt-8 grid max-w-[650px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
              >
                ${renderFeatureItems(config.features || [], color)}
              </div>
            </div>
          </div>
        </div>

        <!-- Product Slider Section -->
        <div
          class="relative"
          data-product-slider-section
        >
          <!-- Desktop Previous Button -->
          <button
            type="button"
            data-product-prev
            class="absolute left-1 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#dfeaf7] bg-white shadow-[0_8px_22px_rgba(15,23,42,0.14)] transition-colors lg:flex"
            style="color:${color};"
            aria-label="Previous products"
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
            >
              <path d="M15 18l-6-6 6-6"></path>
            </svg>
          </button>

          <!-- Desktop Next Button -->
          <button
            type="button"
            data-product-next
            class="absolute right-1 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#dfeaf7] bg-white shadow-[0_8px_22px_rgba(15,23,42,0.14)] transition-colors lg:flex"
            style="color:${color};"
            aria-label="Next products"
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
            >
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </button>

          <!-- Swiper -->
          <div
            class="swiper"
            data-product-slider
          >
            <div
              class="swiper-wrapper pb-4"
              data-product-track
            >
              ${products
                .map(function (product) {
                  return renderProductCard(product, color);
                })
                .join("")}
            </div>
          </div>

          <!-- Mobile Slider Buttons -->
          <div
            class="mt-3 flex items-center justify-center gap-3 lg:hidden"
          >
            <button
              type="button"
              data-product-prev
              class="flex h-11 w-11 items-center justify-center rounded-full border border-[#dfeaf7] bg-white shadow-[0_8px_22px_rgba(15,23,42,0.08)]"
              style="color:${color};"
              aria-label="Previous products"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
              >
                <path d="M15 18l-6-6 6-6"></path>
              </svg>
            </button>

            <button
              type="button"
              data-product-next
              class="flex h-11 w-11 items-center justify-center rounded-full border border-[#dfeaf7] bg-white shadow-[0_8px_22px_rgba(15,23,42,0.08)]"
              style="color:${color};"
              aria-label="Next products"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
              >
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}
// export function renderCategoryProductSections() {
//   document.querySelectorAll("[data-category-products]").forEach((container) => {
//     if (container.dataset.rendered === "true") return;

//     const sectionKey = container.dataset.categoryProducts;
//     container.dataset.rendered = "true";

//     renderCategorySection(container, sectionKey);
//   });
// }

 

export function renderCategoryProductSections() {
  document.querySelectorAll("[data-category-products]").forEach((container) => {
    if (container.dataset.rendered === "true") return;

    const sectionKey = container.dataset.categoryProducts;

    container.dataset.rendered = "true";

    renderCategorySection(container, sectionKey);
  });
}

// document.addEventListener("DOMContentLoaded", renderCategoryProductSections);

// const observer = new MutationObserver(() => {
//   renderCategoryProductSections();
// });

// observer.observe(document.documentElement, {
//   childList: true,
//   subtree: true,
// });
