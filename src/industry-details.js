import { INDUSTRY_DETAILS } from "./data/industry-details-data.js";

const ICONS = {
  home: `<path d="m3 11 9-8 9 8"></path><path d="M5 10v10h14V10"></path>`,
  chevron: `<path d="m9 18 6-6-6-6"></path>`,
  arrow: `<path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path>`,
  phone: `<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"></path>`,
  camera: `<path d="M4 7h11v10H4z"></path><path d="m15 10 5-3v10l-5-3"></path><circle cx="9.5" cy="12" r="2.5"></circle>`,
  access: `<rect x="4" y="3" width="16" height="18" rx="2"></rect><path d="M8 8h8M8 12h5"></path><circle cx="16" cy="16" r="1"></circle>`,
  fire: `<path d="M12 22c4 0 7-2.7 7-6.5 0-3-1.8-5.4-5.3-8.8.1 2.4-1.2 3.8-2.5 4.7.2-3.1-1.4-5.5-3.2-7.4.2 3.8-3 6.1-3 10.8C5 19 8 22 12 22z"></path>`,
  bell: `<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path><path d="M10 21h4"></path>`,
  parking: `<rect x="4" y="3" width="16" height="18" rx="2"></rect><path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>`,
  monitor: `<rect x="3" y="4" width="18" height="13" rx="2"></rect><path d="M8 21h8M12 17v4"></path>`,
  building: `<path d="M3 21h18"></path><path d="M5 21V5h9v16M14 9h5v12"></path><path d="M8 9h2M8 13h2M8 17h2M16 13h1M16 17h1"></path>`,
  layers: `<path d="m12 2 9 5-9 5-9-5 9-5z"></path><path d="m3 12 9 5 9-5"></path><path d="m3 17 9 5 9-5"></path>`,
  support: `<path d="M4 14a8 8 0 0 1 16 0"></path><path d="M4 14v3a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 2zM20 14v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2z"></path><path d="M17 19h-3"></path>`,
  heart: `<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z"></path><path d="M9 12h6M12 9v6"></path>`,
  shield: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path>`,
  database: `<ellipse cx="12" cy="5" rx="8" ry="3"></ellipse><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"></path><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"></path>`,
  clipboard: `<path d="M9 5h6"></path><path d="M9 3h6v4H9z"></path><path d="M7 5H5v16h14V5h-2"></path><path d="m8 13 2 2 5-5"></path>`,
  users: `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>`,
  eye: `<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path><circle cx="12" cy="12" r="3"></circle>`,
  check: `<path d="m5 12 4 4L19 6"></path>`,
};

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function svg(name, className = "h-5 w-5", strokeWidth = "1.8") {
  return `
    <svg
      class="${className}"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="${strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      ${ICONS[name] || ICONS.check}
    </svg>
  `;
}

function renderThemeStyles() {
  return `
    <style>
      [data-industry-page] .industry-primary-button:hover {
        background: var(--industry-primary-hover) !important;
      }

      [data-industry-page] .industry-outline-button:hover {
        background: var(--industry-primary) !important;
        color: #ffffff !important;
      }

      [data-industry-page] .industry-card:hover {
        border-color: var(--industry-border-hover) !important;
        box-shadow: 0 20px 42px var(--industry-shadow) !important;
      }

      [data-industry-page] .industry-faq summary::-webkit-details-marker {
        display: none;
      }
    </style>
  `;
}

function renderBreadcrumb(industry) {
  return `
    <section class="border-b border-[#e5edf8] bg-white pt-[86px] sm:pt-[94px]">
      <div class="mx-auto flex max-w-[1660px] items-center gap-2 px-4 py-4 text-[12px] text-[#60708b] sm:px-6 lg:px-8 xl:px-10">
        <a href="/" class="transition hover:opacity-70" style="color:var(--industry-primary)" aria-label="Home">
          ${svg("home", "h-4 w-4")}
        </a>

        ${svg("chevron", "h-3.5 w-3.5 text-[#9ba9bd]", "2")}

        <a href="/industries.html" class="transition hover:opacity-70" style="color:var(--industry-primary)">
          Industries
        </a>

        ${svg("chevron", "h-3.5 w-3.5 text-[#9ba9bd]", "2")}

        <span class="font-medium text-[#17335d]">${escapeHtml(industry.breadcrumb)}</span>
      </div>
    </section>
  `;
}

function renderHero(industry) {
  const hero = industry.hero;

  const solutionItems = hero.solutionCardItems
    .map(
      (item) => `
        <li class="flex items-center gap-3">
          <span class="grid h-8 w-8 shrink-0 place-items-center rounded-[9px]" style="background:var(--industry-soft);color:var(--industry-primary)">
            ${svg(item.icon, "h-4 w-4")}
          </span>
          <span>${escapeHtml(item.title)}</span>
        </li>
      `,
    )
    .join("");

  const badges = hero.badges
    .map(
      (badge) => `
        <span class="inline-flex items-center gap-2 rounded-full border bg-white/90 px-3.5 py-2 text-[11px] font-medium text-[#294b76]" style="border-color:var(--industry-border)">
          <span class="grid h-5 w-5 place-items-center rounded-full text-[10px]" style="background:var(--industry-soft);color:var(--industry-primary)">✓</span>
          ${escapeHtml(badge)}
        </span>
      `,
    )
    .join("");

  return `
    <section class="relative isolate overflow-hidden" style="background:var(--industry-hero-middle)">
      <div
        class="pointer-events-none absolute inset-0 -z-20"
        style="background:radial-gradient(circle at 18% 18%,var(--industry-hero-glow),transparent 30%),linear-gradient(90deg,var(--industry-hero-start) 0%,var(--industry-hero-middle) 48%,var(--industry-hero-end) 100%)"
      ></div>

      <div class="mx-auto grid min-h-[590px] max-w-[1660px] items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.94fr_1.06fr] lg:px-8 lg:py-20 xl:px-10">
        <div class="relative z-10 max-w-[700px]">
          <span class="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em]" style="color:var(--industry-primary)">
            <span class="h-2 w-2 rounded-full" style="background:var(--industry-primary)"></span>
            ${escapeHtml(hero.eyebrow)}
          </span>

          <h1 class="mt-4 text-[38px] font-semibold leading-[0.98] tracking-[-0.035em] text-[#071b4d] sm:text-[49px] lg:text-[60px]">
            ${escapeHtml(hero.title)}
            <span class="block" style="color:var(--industry-primary)">${escapeHtml(hero.highlightedTitle)}</span>
          </h1>

          <p class="mt-6 max-w-[640px] text-[15px] leading-[1.8] text-[#334d71] sm:text-[16px]">
            ${escapeHtml(hero.description)}
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <a
              href="${escapeHtml(hero.primaryButton.href)}"
              class="industry-primary-button inline-flex h-12 items-center justify-center gap-2 rounded-[8px] px-6 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(18,104,223,0.22)] transition hover:-translate-y-0.5"
              style="background:var(--industry-primary)"
            >
              ${escapeHtml(hero.primaryButton.label)}
              ${svg("arrow", "h-4 w-4", "2.2")}
            </a>

            <a
              href="${escapeHtml(hero.secondaryButton.href)}"
              class="industry-outline-button inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border bg-white/90 px-6 text-[13px] font-semibold transition"
              style="border-color:var(--industry-primary);color:var(--industry-primary)"
            >
              ${svg("phone", "h-4 w-4")}
              ${escapeHtml(hero.secondaryButton.label)}
            </a>
          </div>

          <div class="mt-8 flex flex-wrap gap-2.5">${badges}</div>
        </div>

        <div class="relative min-h-[420px] lg:min-h-[470px]">
          <div class="absolute inset-0 overflow-hidden rounded-[26px] border border-white/70 bg-white shadow-[0_28px_65px_rgba(7,27,77,0.16)]">
            <img src="${escapeHtml(hero.image)}" alt="${escapeHtml(hero.imageAlt)}" class="h-full w-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#071b4d]/25 via-transparent to-white/10"></div>
          </div>

          <aside class="absolute bottom-5 right-3 w-[270px] rounded-[15px] border border-white/90 bg-white/95 p-5 shadow-[0_24px_50px_rgba(7,27,77,0.20)] backdrop-blur sm:right-6 lg:-right-2 lg:bottom-8 xl:right-5">
            <h2 class="text-[14px] font-semibold text-[#071b4d]">${escapeHtml(hero.solutionCardTitle)}</h2>
            <ul class="mt-4 space-y-3 text-[12px] text-[#405173]">${solutionItems}</ul>
          </aside>
        </div>
      </div>
    </section>
  `;
}

function renderFacts(industry) {
  return `
    <section class="relative z-10 -mt-1 bg-white pb-7">
      <div class="mx-auto max-w-[1660px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div class="grid overflow-hidden rounded-[14px] border border-[#e0eaf6] bg-white shadow-[0_16px_45px_rgba(15,23,42,0.08)] sm:grid-cols-2 lg:grid-cols-4">
          ${industry.facts
            .map(
              (fact, index) => `
                <div class="flex items-center gap-4 px-6 py-5 ${index < 3 ? "border-b border-[#e5edf6] lg:border-b-0 lg:border-r" : ""}">
                  <span class="grid h-11 w-11 shrink-0 place-items-center rounded-full" style="background:var(--industry-soft);color:var(--industry-primary)">
                    ${svg(fact.icon, "h-5 w-5")}
                  </span>
                  <div>
                    <span class="block text-[10px] uppercase tracking-[0.1em] text-[#71809a]">${escapeHtml(fact.label)}</span>
                    <strong class="mt-1 block text-[12px] font-semibold text-[#17335d]">${escapeHtml(fact.value)}</strong>
                  </div>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderChallenges(industry) {
  const section = industry.challenges;

  return `
    <section class="bg-white py-14 sm:py-16 lg:py-20">
      <div class="mx-auto max-w-[1660px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div class="mx-auto max-w-[850px] text-center">
          <span class="text-[11px] font-semibold uppercase tracking-[0.13em]" style="color:var(--industry-primary)">${escapeHtml(section.eyebrow)}</span>
          <h2 class="mt-2 text-[29px] font-semibold tracking-[-0.025em] text-[#071b4d] sm:text-[36px]">${escapeHtml(section.title)}</h2>
          <p class="mx-auto mt-4 max-w-[760px] text-[14px] leading-7 text-[#60708b]">${escapeHtml(section.description)}</p>
        </div>

        <div class="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          ${section.items
            .map(
              (item) => `
                <article class="industry-card group flex min-h-[160px] gap-5 rounded-[14px] border bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition hover:-translate-y-1" style="border-color:var(--industry-border)">
                  <span class="grid h-14 w-14 shrink-0 place-items-center rounded-[14px] transition group-hover:scale-105" style="background:var(--industry-soft);color:var(--industry-primary)">
                    ${svg(item.icon, "h-7 w-7")}
                  </span>
                  <div>
                    <h3 class="text-[16px] font-semibold text-[#071b4d]">${escapeHtml(item.title)}</h3>
                    <p class="mt-2 text-[13px] leading-[1.7] text-[#60708b]">${escapeHtml(item.description)}</p>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderSystems(industry) {
  const section = industry.systems;

  return `
    <section class="border-y border-[#e5edf6] py-14 sm:py-16 lg:py-20" style="background:var(--industry-soft-2)">
      <div class="mx-auto max-w-[1660px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div class="mx-auto max-w-[850px] text-center">
          <span class="text-[11px] font-semibold uppercase tracking-[0.13em]" style="color:var(--industry-primary)">${escapeHtml(section.eyebrow)}</span>
          <h2 class="mt-2 text-[29px] font-semibold tracking-[-0.025em] text-[#071b4d] sm:text-[36px]">${escapeHtml(section.title)}</h2>
          <p class="mx-auto mt-4 max-w-[760px] text-[14px] leading-7 text-[#60708b]">${escapeHtml(section.description)}</p>
        </div>

        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          ${section.items
            .map(
              (item) => `
                <article class="industry-card group flex min-h-[250px] flex-col rounded-[14px] border bg-white p-5 text-center shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition hover:-translate-y-1" style="border-color:var(--industry-border)">
                  <span class="mx-auto grid h-20 w-20 place-items-center rounded-full border-[6px] border-white shadow-[0_12px_28px_rgba(18,104,223,0.16)]" style="background:var(--industry-soft);color:var(--industry-primary)">
                    ${svg(item.icon, "h-9 w-9")}
                  </span>
                  <h3 class="mt-5 text-[15px] font-semibold leading-snug text-[#071b4d]">${escapeHtml(item.title)}</h3>
                  <p class="mt-3 text-[12px] leading-[1.7] text-[#60708b]">${escapeHtml(item.description)}</p>
                  <span class="mx-auto mt-auto grid h-9 w-9 place-items-center rounded-full pt-4" style="color:var(--industry-primary)">
                    ${svg("arrow", "h-4 w-4", "2.2")}
                  </span>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCoverage(industry) {
  const section = industry.coverage;

  return `
    <section class="bg-white py-14 sm:py-16 lg:py-20">
      <div class="mx-auto grid max-w-[1660px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.96fr_1.04fr] lg:gap-16 lg:px-8 xl:px-10">
        <div class="relative">
          <div class="overflow-hidden rounded-[22px] border border-[#dfe9f5] bg-[#edf5fd] shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
            <img src="${escapeHtml(section.image)}" alt="${escapeHtml(section.imageAlt)}" class="aspect-[4/3] h-full w-full object-cover" />
            <div class="absolute inset-0 rounded-[22px] bg-gradient-to-t from-[#071b4d]/22 via-transparent to-transparent"></div>
          </div>

          <div class="absolute -bottom-5 left-5 right-5 grid grid-cols-3 gap-2 rounded-[14px] border border-white/90 bg-white/95 p-3 shadow-[0_18px_40px_rgba(7,27,77,0.16)] backdrop-blur">
            <div class="text-center"><strong class="block text-[18px] text-[#071b4d]">24/7</strong><span class="text-[10px] text-[#71809a]">Monitoring</span></div>
            <div class="border-x border-[#e4ebf4] text-center"><strong class="block text-[18px] text-[#071b4d]">8+</strong><span class="text-[10px] text-[#71809a]">Critical Areas</span></div>
            <div class="text-center"><strong class="block text-[18px] text-[#071b4d]">1</strong><span class="text-[10px] text-[#71809a]">Unified View</span></div>
          </div>
        </div>

        <div class="pt-5 lg:pt-0">
          <span class="text-[11px] font-semibold uppercase tracking-[0.13em]" style="color:var(--industry-primary)">${escapeHtml(section.eyebrow)}</span>
          <h2 class="mt-3 text-[31px] font-semibold leading-[1.08] tracking-[-0.025em] text-[#071b4d] sm:text-[39px]">${escapeHtml(section.title)}</h2>
          <p class="mt-5 text-[14px] leading-[1.8] text-[#4b607e] sm:text-[15px]">${escapeHtml(section.description)}</p>

          <div class="mt-7 grid gap-x-7 gap-y-3 sm:grid-cols-2">
            ${section.areas
              .map(
                (area) => `
                  <div class="flex items-start gap-2.5 text-[13px] leading-6 text-[#294b76]">
                    <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10px] text-white" style="background:var(--industry-primary)">✓</span>
                    ${escapeHtml(area)}
                  </div>
                `,
              )
              .join("")}
          </div>

          <a href="${escapeHtml(section.button.href)}" class="industry-primary-button mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-[8px] px-6 text-[13px] font-semibold text-white transition hover:-translate-y-0.5" style="background:var(--industry-primary)">
            ${escapeHtml(section.button.label)}
            ${svg("arrow", "h-4 w-4", "2.2")}
          </a>
        </div>
      </div>
    </section>
  `;
}

function renderBenefits(industry) {
  const section = industry.benefits;

  return `
    <section class="bg-[#073477] py-11 text-white sm:py-13">
      <div class="mx-auto max-w-[1660px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <h2 class="text-center text-[24px] font-semibold sm:text-[30px]">${escapeHtml(section.title)}</h2>

        <div class="mt-8 grid grid-cols-2 gap-y-7 sm:grid-cols-3 lg:grid-cols-6">
          ${section.items
            .map(
              (item, index) => `
                <div class="flex flex-col items-center px-3 text-center ${index ? "lg:border-l lg:border-white/15" : ""}">
                  <span class="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-[#8fc0ff]">${svg(item.icon, "h-6 w-6")}</span>
                  <span class="mt-3 text-[12px] font-semibold leading-snug text-white">${escapeHtml(item.title)}</span>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCaseStudy(industry) {
  const section = industry.caseStudy;

  return `
    <section class="bg-white py-14 sm:py-16 lg:py-20">
      <div class="mx-auto max-w-[1660px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div class="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <span class="text-[11px] font-semibold uppercase tracking-[0.13em]" style="color:var(--industry-primary)">${escapeHtml(section.eyebrow)}</span>
            <h2 class="mt-3 text-[31px] font-semibold leading-[1.08] tracking-[-0.025em] text-[#071b4d] sm:text-[39px]">${escapeHtml(section.title)}</h2>
            <p class="mt-5 text-[14px] leading-[1.8] text-[#4b607e] sm:text-[15px]">${escapeHtml(section.description)}</p>

            <div class="mt-7 grid gap-3 sm:grid-cols-2">
              ${section.highlights
                .map(
                  (item) => `
                    <div class="flex items-start gap-2.5 text-[13px] leading-6 text-[#294b76]">
                      <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10px] text-white" style="background:var(--industry-primary)">✓</span>
                      ${escapeHtml(item)}
                    </div>
                  `,
                )
                .join("")}
            </div>
          </div>

          <div class="relative overflow-hidden rounded-[22px] border border-[#dfe9f5] bg-[#edf5fd] shadow-[0_20px_50px_rgba(15,23,42,0.11)]">
            <img src="${escapeHtml(section.image)}" alt="${escapeHtml(section.imageAlt)}" class="aspect-[16/10] h-full w-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#061b3f]/55 via-[#061b3f]/5 to-transparent"></div>
            <div class="absolute inset-x-5 bottom-5 rounded-[14px] border border-white/20 bg-[#061b3f]/82 p-4 text-white backdrop-blur">
              <h3 class="text-[13px] font-semibold">${escapeHtml(section.outcomesTitle)}</h3>
              <div class="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                ${section.outcomes
                  .map(
                    (item) => `
                      <div>
                        <span class="block text-[9px] uppercase tracking-[0.08em] text-white/55">${escapeHtml(item.label)}</span>
                        <strong class="mt-1 block text-[11px] font-medium text-white">${escapeHtml(item.value)}</strong>
                      </div>
                    `,
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderRelatedIndustries(industry) {
  const section = industry.relatedIndustries;

  return `
    <section class="border-y border-[#e5edf6] py-14 sm:py-16 lg:py-20" style="background:var(--industry-soft-2)">
      <div class="mx-auto max-w-[1660px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div class="text-center">
          <span class="text-[11px] font-semibold uppercase tracking-[0.13em]" style="color:var(--industry-primary)">${escapeHtml(section.eyebrow)}</span>
          <h2 class="mt-2 text-[29px] font-semibold tracking-[-0.025em] text-[#071b4d] sm:text-[36px]">${escapeHtml(section.title)}</h2>
        </div>

        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          ${section.items
            .map(
              (item) => `
                <a href="${escapeHtml(item.href)}" class="group relative min-h-[190px] overflow-hidden rounded-[14px] border ${item.active ? "ring-2 ring-[#1268df]/25" : ""}" style="border-color:var(--industry-border)">
                  <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span class="absolute inset-0 bg-gradient-to-t from-[#061b3f]/90 via-[#061b3f]/18 to-transparent"></span>
                  <span class="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 text-[13px] font-semibold text-white">
                    ${escapeHtml(item.title)}
                    <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur">${svg("arrow", "h-4 w-4", "2.2")}</span>
                  </span>
                </a>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderFaq(industry) {
  const section = industry.faq;

  return `
    <section class="bg-white py-14 sm:py-16 lg:py-20">
      <div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <span class="text-[11px] font-semibold uppercase tracking-[0.13em]" style="color:var(--industry-primary)">${escapeHtml(section.eyebrow)}</span>
          <h2 class="mt-2 text-[29px] font-semibold tracking-[-0.025em] text-[#071b4d] sm:text-[36px]">${escapeHtml(section.title)}</h2>
        </div>

        <div class="mt-9 grid gap-3 lg:grid-cols-2">
          ${section.items
            .map(
              (item) => `
                <details class="industry-faq group rounded-[12px] border border-[#dfe9f5] bg-white px-5 shadow-[0_8px_22px_rgba(15,23,42,0.045)]">
                  <summary class="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[13px] font-semibold text-[#17335d]">
                    ${escapeHtml(item.question)}
                    <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full transition group-open:rotate-45" style="background:var(--industry-soft);color:var(--industry-primary)">+</span>
                  </summary>
                  <p class="border-t border-[#edf1f6] pb-5 pt-4 text-[12px] leading-6 text-[#60708b]">${escapeHtml(item.answer)}</p>
                </details>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCta(industry) {
  const cta = industry.cta;

  return `
    <section id="${escapeHtml(cta.id)}" class="relative overflow-hidden bg-[#073477] py-10 text-white sm:py-12">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(80,157,255,0.32),transparent_28%)]"></div>
      <div class="relative mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-6 px-5 text-center sm:px-8 lg:flex-row lg:px-10 lg:text-left">
        <div>
          <h2 class="text-[28px] font-semibold tracking-[-0.02em] sm:text-[34px]">${escapeHtml(cta.title)}</h2>
          <p class="mt-2 max-w-[720px] text-[14px] leading-6 text-blue-100/85">${escapeHtml(cta.description)}</p>
        </div>

        <div class="flex shrink-0 flex-wrap justify-center gap-3">
          <a href="${escapeHtml(cta.primaryButton.href)}" class="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-white px-6 text-[13px] font-semibold text-[#073477] transition hover:-translate-y-0.5">
            ${escapeHtml(cta.primaryButton.label)}
            ${svg("arrow", "h-4 w-4", "2.2")}
          </a>

          <a href="${escapeHtml(cta.secondaryButton.href)}" class="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-white/60 px-6 text-[13px] font-semibold text-white transition hover:bg-white hover:text-[#073477]">
            ${svg("phone", "h-4 w-4")}
            ${escapeHtml(cta.secondaryButton.label)}
          </a>
        </div>
      </div>
    </section>
  `;
}

function renderIndustryPage(industry) {
  return `
    ${renderThemeStyles()}
    ${renderBreadcrumb(industry)}
    ${renderHero(industry)}
    ${renderFacts(industry)}
    ${renderChallenges(industry)}
    ${renderSystems(industry)}
    ${renderCoverage(industry)}
    ${renderBenefits(industry)}
    ${renderCaseStudy(industry)}
    ${renderRelatedIndustries(industry)}
    ${renderFaq(industry)}
    ${renderCta(industry)}
  `;
}

export function initIndustryDetailsPage() {
  const containers = document.querySelectorAll("[data-industry-page]");

  if (!containers.length) return;

  containers.forEach(function (container) {
    if (container.dataset.industryPageReady === "true") return;

    const slug = container.dataset.industryPage;
    const industry = INDUSTRY_DETAILS[slug];

    if (!industry) {
      console.error(`Industry details not found for: ${slug}`);
      return;
    }

    const theme = industry.theme;

    container.style.setProperty("--industry-primary", theme.primary);
    container.style.setProperty("--industry-primary-hover", theme.primaryHover);
    container.style.setProperty("--industry-soft", theme.primarySoft);
    container.style.setProperty("--industry-soft-2", theme.primarySoft2);
    container.style.setProperty("--industry-border", theme.border);
    container.style.setProperty("--industry-border-hover", theme.borderHover);
    container.style.setProperty("--industry-shadow", theme.shadow);
    container.style.setProperty("--industry-hero-start", theme.heroStart);
    container.style.setProperty("--industry-hero-middle", theme.heroMiddle);
    container.style.setProperty("--industry-hero-end", theme.heroEnd);
    container.style.setProperty("--industry-hero-glow", theme.heroGlow);

    container.innerHTML = renderIndustryPage(industry);
    container.dataset.industryPageReady = "true";
  });
}
