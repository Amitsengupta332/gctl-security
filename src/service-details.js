import { SERVICE_DETAILS } from "./data/service-details-data.js";

const ICONS = [
  `<path d="M12 21s7-4 7-11a7 7 0 1 0-14 0c0 7 7 11 7 11z"></path><circle cx="12" cy="10" r="2"></circle>`,
  `<path d="M12 3 3 7v5c0 5 3.8 8.4 9 9 5.2-.6 9-4 9-9V7l-9-4z"></path><path d="m9.5 12 1.6 1.6 3.6-4"></path>`,
  `<rect x="4" y="4" width="16" height="16" rx="3"></rect><path d="M8 8h8M8 12h5M8 16h8"></path>`,
  `<path d="M4 20h16M5 16l4-4 3 3 6-7"></path><circle cx="18" cy="8" r="2"></circle>`,
  `<path d="M6 3h12v18H6z"></path><path d="M9 7h6M9 11h6M9 15h4"></path>`,
  `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3-3a6 6 0 0 1-7.8 7.8l-6 6a2 2 0 0 1-2.8-2.8l6-6a6 6 0 0 1 7.8-7.8l-3.2 2.8z"></path>`,
  `<path d="M4 7h16M4 17h16"></path><circle cx="8" cy="7" r="2"></circle><circle cx="16" cy="17" r="2"></circle>`,
  `<path d="M3 21h18"></path><path d="M5 21V9h14v12"></path><path d="M9 9V4h6v5"></path>`,
];

const icon = (index = 0, className = "h-6 w-6") => `
  <svg
    class="${className}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true">
    ${ICONS[index % ICONS.length]}
  </svg>
`;

const arrowIcon = (className = "h-4 w-4") => `
  <svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
    <path d="M5 12h14"></path>
    <path d="m13 6 6 6-6 6"></path>
  </svg>
`;

const phoneIcon = (className = "h-4 w-4") => `
  <svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"></path>
  </svg>
`;

function renderBreadcrumb(service) {
  return `
    <section class="border-b border-[#e5edf8] bg-white pt-[86px] sm:pt-[94px]">
      <div class="mx-auto flex max-w-[1660px] items-center gap-2 px-4 py-4 text-[12px] text-[#60708b] sm:px-6 lg:px-8 xl:px-10">
        <a href="/" class="transition hover:opacity-70" style="color:var(--service-primary)" aria-label="Home">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <path d="m3 11 9-8 9 8"></path>
            <path d="M5 10v10h14V10"></path>
          </svg>
        </a>
        <svg class="h-3.5 w-3.5 text-[#9ba9bd]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
        <a href="/services.html" class="transition hover:opacity-70" style="color:var(--service-primary)">Services</a>
        <svg class="h-3.5 w-3.5 text-[#9ba9bd]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
        <span class="font-medium text-[#17335d]">${service.breadcrumb}</span>
      </div>
    </section>
  `;
}

function renderHero(service) {
  const hero = service.hero;

  return `
    <section
      class="relative isolate overflow-hidden"
      style="background:radial-gradient(circle at 18% 18%,color-mix(in srgb,var(--service-primary) 14%,transparent),transparent 30%),linear-gradient(90deg,#fbfdff 0%,var(--service-hero) 50%,var(--service-hero-end) 100%)">
      <div class="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[58%] lg:block">
        <img src="${hero.image}" alt="${hero.imageAlt}" class="h-full w-full object-cover object-center opacity-95" />
        <div class="absolute inset-0 bg-gradient-to-r from-white/95 via-white/25 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-white/45 via-transparent to-white/10"></div>
      </div>

      <div class="mx-auto grid min-h-[540px] max-w-[1660px] items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.94fr_1.06fr] lg:px-8 lg:py-20 xl:px-10">
        <div class="relative z-10 max-w-[700px]">
          <span class="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em]" style="color:var(--service-primary)">
            <span class="h-2 w-2 rounded-full" style="background:var(--service-primary)"></span>
            ${hero.eyebrow}
          </span>

          <h1 class="mt-4 text-[38px] font-semibold leading-[0.98] tracking-[-0.035em] text-[#071b4d] sm:text-[48px] lg:text-[58px]">
            ${hero.title}
            <span class="block" style="color:var(--service-primary)">${hero.accentTitle}</span>
          </h1>

          <p class="mt-6 max-w-[630px] text-[15px] leading-[1.75] text-[#334d71] sm:text-[16px]">
            ${hero.description}
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <a
              href="${hero.primaryAction.href}"
              class="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] px-6 text-[13px] font-semibold text-white shadow-[0_12px_28px_var(--service-shadow)] transition hover:-translate-y-0.5 hover:opacity-90"
              style="background:var(--service-primary)">
              ${hero.primaryAction.label}
              ${arrowIcon()}
            </a>

            <a
              href="${hero.secondaryAction.href}"
              class="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border bg-white/90 px-6 text-[13px] font-semibold transition hover:text-white"
              style="border-color:var(--service-primary);color:var(--service-primary)"
              onmouseenter="this.style.background='var(--service-primary)';this.style.color='#fff'"
              onmouseleave="this.style.background='rgba(255,255,255,.9)';this.style.color='var(--service-primary)'">
              ${phoneIcon()}
              ${hero.secondaryAction.label}
            </a>
          </div>

          <div class="mt-8 flex flex-wrap gap-2.5">
            ${hero.badges
              .map(
                (badge) => `
                  <span class="inline-flex items-center gap-2 rounded-full border bg-white/85 px-3.5 py-2 text-[11px] font-medium text-[#294b76]" style="border-color:var(--service-border)">
                    <span class="grid h-5 w-5 place-items-center rounded-full" style="background:var(--service-soft);color:var(--service-primary)">✓</span>
                    ${badge}
                  </span>
                `,
              )
              .join("")}
          </div>
        </div>

        <div class="relative min-h-[370px] lg:min-h-[440px]">
          <div class="absolute inset-0 overflow-hidden rounded-[24px] lg:hidden">
            <img src="${hero.image}" alt="${hero.imageAlt}" class="h-full w-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#071b4d]/40 via-transparent to-white/10"></div>
          </div>

          <aside class="absolute bottom-5 right-3 w-[275px] rounded-[14px] border border-white/90 bg-white/95 p-5 shadow-[0_24px_50px_rgba(7,27,77,0.18)] backdrop-blur sm:right-6 lg:bottom-auto lg:right-0 lg:top-1/2 lg:-translate-y-1/2 xl:right-5">
            <h2 class="text-[14px] font-semibold text-[#071b4d]">${hero.sideTitle}</h2>
            <ul class="mt-4 space-y-3.5 text-[12px] text-[#405173]">
              ${hero.sideItems
                .map(
                  (item, index) => `
                    <li class="flex items-center gap-3">
                      <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full" style="background:var(--service-soft);color:var(--service-primary)">
                        ${icon(index, "h-4 w-4")}
                      </span>
                      ${item}
                    </li>
                  `,
                )
                .join("")}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  `;
}

function renderQuickFacts(service) {
  return `
    <section class="relative z-10 bg-white pb-6">
      <div class="mx-auto max-w-[1660px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div class="grid overflow-hidden rounded-[14px] border border-[#e0eaf6] bg-white shadow-[0_16px_45px_rgba(15,23,42,0.08)] sm:grid-cols-2 lg:grid-cols-4">
          ${service.quickFacts
            .map(
              (fact, index) => `
                <div class="flex items-center gap-4 border-b border-[#e5edf6] px-6 py-5 sm:border-r lg:border-b-0 ${index === 3 ? "sm:border-r-0" : ""}">
                  <span class="grid h-11 w-11 shrink-0 place-items-center rounded-full" style="background:var(--service-soft);color:var(--service-primary)">
                    ${icon(index, "h-5 w-5")}
                  </span>
                  <div>
                    <span class="block text-[10px] uppercase tracking-[0.1em] text-[#71809a]">${fact.label}</span>
                    <strong class="mt-1 block text-[12px] font-semibold text-[#17335d]">${fact.value}</strong>
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

function renderAbout(service) {
  const about = service.about;

  return `
    <section class="bg-white py-14 sm:py-16 lg:py-20">
      <div class="mx-auto grid max-w-[1660px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8 xl:px-10">
        <div class="relative overflow-hidden rounded-[18px] border bg-[#edf5fd] shadow-[0_18px_45px_rgba(15,23,42,0.10)]" style="border-color:var(--service-border);background:var(--service-soft-alt)">
          <img src="${about.image}" alt="${about.imageAlt}" class="aspect-[4/3] h-full w-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#071b4d]/20 via-transparent to-transparent"></div>
        </div>

        <div>
          <span class="text-[11px] font-semibold uppercase tracking-[0.13em]" style="color:var(--service-primary)">${about.eyebrow}</span>
          <h2 class="mt-3 max-w-[760px] text-[30px] font-semibold leading-[1.08] tracking-[-0.025em] text-[#071b4d] sm:text-[38px]">${about.title}</h2>

          ${about.paragraphs
            .map(
              (paragraph, index) => `
                <p class="${index === 0 ? "mt-5" : "mt-4"} text-[14px] leading-[1.8] text-[#4b607e] sm:text-[15px]">${paragraph}</p>
              `,
            )
            .join("")}

          <div class="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            ${about.features
              .map(
                (feature) => `
                  <div class="flex items-center gap-2.5 text-[13px] text-[#294b76]">
                    <span class="grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10px] text-white" style="background:var(--service-primary)">✓</span>
                    ${feature}
                  </div>
                `,
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderIncluded(service) {
  const included = service.included;

  return `
    <section class="border-y py-14 sm:py-16 lg:py-20" style="border-color:var(--service-border);background:var(--service-section)">
      <div class="mx-auto max-w-[1660px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div class="text-center">
          <span class="text-[11px] font-semibold uppercase tracking-[0.13em]" style="color:var(--service-primary)">${included.eyebrow}</span>
          <h2 class="mt-2 text-[28px] font-semibold tracking-[-0.02em] text-[#071b4d] sm:text-[34px]">${included.title}</h2>
        </div>

        <div class="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          ${included.items
            .map(
              (item, index) => `
                <article class="group flex min-h-[145px] gap-5 rounded-[14px] border bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_38px_var(--service-shadow)]" style="border-color:var(--service-border)">
                  <span class="grid h-14 w-14 shrink-0 place-items-center rounded-[14px]" style="background:var(--service-soft);color:var(--service-primary)">
                    ${icon(index, "h-7 w-7")}
                  </span>
                  <div>
                    <span class="text-[11px] font-semibold" style="color:var(--service-primary)">${String(index + 1).padStart(2, "0")}</span>
                    <h3 class="mt-1 text-[15px] font-semibold text-[#071b4d]">${item.title}</h3>
                    <p class="mt-2 text-[12px] leading-[1.65] text-[#60708b]">${item.description}</p>
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

function renderProcess(service) {
  const process = service.process;
  const columnClass = process.steps.length === 6 ? "lg:grid-cols-6" : "lg:grid-cols-7";

  return `
    <section class="bg-white py-14 sm:py-16 lg:py-20">
      <div class="mx-auto max-w-[1660px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div class="text-center">
          <span class="text-[11px] font-semibold uppercase tracking-[0.13em]" style="color:var(--service-primary)">${process.eyebrow}</span>
          <h2 class="mt-2 text-[28px] font-semibold tracking-[-0.02em] text-[#071b4d] sm:text-[34px]">${process.title}</h2>
        </div>

        <div class="relative mt-12">
          <div class="absolute left-[7%] right-[7%] top-7 hidden border-t-2 border-dotted lg:block" style="border-color:var(--service-border)"></div>
          <div class="relative grid gap-6 sm:grid-cols-2 ${columnClass} lg:gap-3">
            ${process.steps
              .map(
                (step, index) => `
                  <div class="text-center">
                    <span class="mx-auto grid h-14 w-14 place-items-center rounded-full border bg-white shadow-[0_8px_20px_var(--service-shadow)]" style="border-color:var(--service-border);color:var(--service-primary)">
                      ${icon(index, "h-6 w-6")}
                    </span>
                    <span class="mt-4 block text-[10px] font-semibold" style="color:var(--service-primary)">${String(index + 1).padStart(2, "0")}</span>
                    <h3 class="mt-1 text-[12px] font-semibold text-[#071b4d]">${step.title}</h3>
                    <p class="mt-2 text-[10px] leading-[1.55] text-[#6b7d97]">${step.description}</p>
                  </div>
                `,
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderDeliverables(section) {
  return `
    <section class="bg-white pb-14 sm:pb-16 lg:pb-20">
      <div class="mx-auto max-w-[1660px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div class="relative overflow-hidden rounded-[18px] bg-[#082650] px-6 py-9 text-white shadow-[0_22px_48px_rgba(7,27,77,0.22)] sm:px-10 lg:px-12 lg:py-11">
          <div class="pointer-events-none absolute inset-0" style="background:radial-gradient(circle at 80% 20%,color-mix(in srgb,var(--service-primary) 42%,transparent),transparent 34%),linear-gradient(120deg,#0a2d5c,#071d40)"></div>
          ${section.image ? `<img src="${section.image}" alt="${section.imageAlt}" class="absolute inset-y-0 right-0 hidden h-full w-[42%] object-cover opacity-25 lg:block" />` : ""}
          <div class="absolute inset-y-0 right-[32%] hidden w-36 bg-gradient-to-r from-[#082650] to-transparent lg:block"></div>
          <div class="relative z-10 max-w-[900px]">
            <span class="text-[11px] font-semibold uppercase tracking-[0.13em] text-white/70">${section.eyebrow}</span>
            <h2 class="mt-2 text-[28px] font-semibold tracking-[-0.02em] sm:text-[34px]">${section.title}</h2>
            <div class="mt-7 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              ${section.items
                .map(
                  (item) => `
                    <span class="flex items-center gap-2.5 text-[13px] text-white/85">
                      <b style="color:var(--service-primary)">✓</b>
                      ${item}
                    </span>
                  `,
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderIconGrid(section, index) {
  const background = index % 2 === 0 ? "var(--service-section)" : "#fff";

  return `
    <section class="border-y py-14 sm:py-16 lg:py-20" style="border-color:var(--service-border);background:${background}">
      <div class="mx-auto max-w-[1660px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div class="text-center">
          <span class="text-[11px] font-semibold uppercase tracking-[0.13em]" style="color:var(--service-primary)">${section.eyebrow}</span>
          <h2 class="mt-2 text-[28px] font-semibold tracking-[-0.02em] text-[#071b4d] sm:text-[34px]">${section.title}</h2>
        </div>
        <div class="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-8">
          ${section.items
            .map((item, itemIndex) => {
              const content = `
                ${icon(itemIndex, "mx-auto h-8 w-8")}
                <span class="mt-3 block text-[11px] font-semibold leading-tight text-[#17335d]">${item.title}</span>
              `;

              return item.href
                ? `<a href="${item.href}" class="group rounded-[12px] border bg-white px-3 py-5 text-center shadow-[0_10px_24px_rgba(15,23,42,0.055)] transition hover:-translate-y-1" style="border-color:var(--service-border);color:var(--service-primary)">${content}</a>`
                : `<div class="rounded-[12px] border bg-white px-3 py-5 text-center shadow-[0_10px_24px_rgba(15,23,42,0.055)]" style="border-color:var(--service-border);color:var(--service-primary)">${content}</div>`;
            })
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderImageGrid(section) {
  return `
    <section class="bg-white py-14 sm:py-16 lg:py-20">
      <div class="mx-auto max-w-[1660px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div class="text-center">
          <span class="text-[11px] font-semibold uppercase tracking-[0.13em]" style="color:var(--service-primary)">${section.eyebrow}</span>
          <h2 class="mt-2 text-[28px] font-semibold tracking-[-0.02em] text-[#071b4d] sm:text-[34px]">${section.title}</h2>
        </div>
        <div class="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-8">
          ${section.items
            .map(
              (item) => `
                <a href="${item.href || "#"}" class="group relative overflow-hidden rounded-[12px]">
                  <img src="${item.image}" alt="${item.imageAlt}" class="aspect-[1.3/1] h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span class="absolute inset-0 bg-gradient-to-t from-[#061b3f]/85 via-[#061b3f]/25 to-transparent"></span>
                  <span class="absolute inset-x-2 bottom-3 text-center text-[11px] font-semibold text-white">${item.title}</span>
                </a>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderWhyChoose(section) {
  return `
    <section class="border-y py-14 sm:py-16 lg:py-20" style="border-color:var(--service-border);background:var(--service-section)">
      <div class="mx-auto grid max-w-[1660px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 xl:px-10">
        <div>
          <span class="text-[11px] font-semibold uppercase tracking-[0.13em]" style="color:var(--service-primary)">${section.eyebrow}</span>
          <h2 class="mt-3 text-[30px] font-semibold leading-[1.08] tracking-[-0.025em] text-[#071b4d] sm:text-[38px]">${section.title}</h2>
          <p class="mt-5 max-w-[720px] text-[14px] leading-[1.8] text-[#4b607e] sm:text-[15px]">${section.description}</p>
          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            ${section.items
              .map(
                (item) => `
                  <div class="rounded-[12px] border bg-white p-5" style="border-color:var(--service-border)">
                    <strong class="text-[14px] font-semibold text-[#071b4d]">${item.title}</strong>
                    <p class="mt-2 text-[12px] leading-[1.65] text-[#60708b]">${item.description}</p>
                  </div>
                `,
              )
              .join("")}
          </div>
        </div>

        ${section.side ? `
          <div class="relative overflow-hidden rounded-[18px] p-7 text-white shadow-[0_20px_45px_var(--service-shadow)] sm:p-9" style="background:var(--service-primary)">
            <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.24),transparent_28%)]"></div>
            <div class="relative z-10">
              <span class="text-[11px] font-semibold uppercase tracking-[0.13em] text-white/75">${section.side.eyebrow}</span>
              <h3 class="mt-3 text-[25px] font-semibold">${section.side.title}</h3>
              <div class="mt-6 space-y-3 text-[13px] text-white/90">
                ${section.side.items
                  .map(
                    (item) => `
                      <p class="flex gap-3">
                        <b>${item.number}</b>
                        <span>${item.text}</span>
                      </p>
                    `,
                  )
                  .join("")}
              </div>
            </div>
          </div>
        ` : ""}
      </div>
    </section>
  `;
}

function renderMiddleSections(service) {
  return service.middleSections
    .map((section, index) => {
      if (section.type === "deliverables") return renderDeliverables(section);
      if (section.type === "iconGrid") return renderIconGrid(section, index);
      if (section.type === "imageGrid") return renderImageGrid(section);
      if (section.type === "whyChoose") return renderWhyChoose(section);
      return "";
    })
    .join("");
}

function renderProject(project) {
  if (!project) return "";

  return `
    <section class="pb-14 sm:pb-16 lg:pb-20">
      <div class="mx-auto max-w-[1660px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div class="grid overflow-hidden rounded-[18px] border bg-white shadow-[0_18px_42px_rgba(15,23,42,0.08)] lg:grid-cols-[0.9fr_1.1fr]" style="border-color:var(--service-border)">
          <div class="relative min-h-[340px]">
            <img src="${project.image}" alt="${project.imageAlt}" class="absolute inset-0 h-full w-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#071b4d]/25 to-transparent"></div>
          </div>
          <div class="grid gap-9 p-7 sm:p-10 xl:grid-cols-[1fr_0.68fr] xl:p-12">
            <div>
              <span class="text-[11px] font-semibold uppercase tracking-[0.13em]" style="color:var(--service-primary)">${project.label}</span>
              <h2 class="mt-3 text-[28px] font-semibold leading-[1.1] tracking-[-0.025em] text-[#071b4d] sm:text-[34px]">${project.title}</h2>
              <div class="mt-6 space-y-4 text-[12px] leading-[1.65] text-[#5e6f89]">
                ${project.info
                  .map(
                    (item) => `
                      <p>
                        <strong class="block text-[#17335d]">${item.label}</strong>
                        ${item.value}
                      </p>
                    `,
                  )
                  .join("")}
              </div>
            </div>
            <div>
              <h3 class="text-[13px] font-semibold text-[#071b4d]">${project.scopeTitle}</h3>
              <ul class="mt-4 space-y-2.5 text-[12px] text-[#4f6381]">
                ${project.scope
                  .map(
                    (item) => `
                      <li class="flex gap-2">
                        <span style="color:var(--service-primary)">●</span>
                        ${item}
                      </li>
                    `,
                  )
                  .join("")}
              </ul>
              ${project.action ? `
                <a href="${project.action.href}" class="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-[7px] border px-4 text-[11px] font-semibold transition hover:opacity-75" style="border-color:var(--service-primary);color:var(--service-primary)">
                  ${project.action.label}
                  ${arrowIcon()}
                </a>
              ` : ""}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFaq(service) {
  const faq = service.faq;

  return `
    <section class="bg-white py-14 sm:py-16 lg:py-20">
      <div class="mx-auto max-w-[1660px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div class="text-center">
          <span class="text-[11px] font-semibold uppercase tracking-[0.13em]" style="color:var(--service-primary)">${faq.eyebrow}</span>
          <h2 class="mt-2 text-[28px] font-semibold tracking-[-0.02em] text-[#071b4d] sm:text-[34px]">${faq.title}</h2>
        </div>
        <div class="mt-9 grid gap-3 lg:grid-cols-2">
          ${faq.items
            .map(
              (item) => `
                <details class="group rounded-[10px] border bg-white px-5 shadow-[0_8px_22px_rgba(15,23,42,0.045)]" style="border-color:var(--service-border)">
                  <summary class="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[12px] font-medium text-[#17335d]">
                    ${item.question}
                    <span class="text-xl font-light transition group-open:rotate-45" style="color:var(--service-primary)">+</span>
                  </summary>
                  <p class="border-t border-[#edf2f8] pb-4 pt-3 text-[12px] leading-[1.7] text-[#60708b]">${item.answer}</p>
                </details>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCta(service) {
  const cta = service.cta;

  return `
    <section id="${cta.id}" class="relative overflow-hidden" style="background:var(--service-primary)">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_15%,rgba(255,255,255,0.18),transparent_28%)]"></div>
      <div class="mx-auto flex max-w-[1660px] flex-col items-start justify-between gap-7 px-4 py-10 sm:px-6 md:flex-row md:items-center lg:px-8 xl:px-10">
        <div class="relative z-10">
          <h2 class="text-[24px] font-semibold tracking-[-0.02em] text-white sm:text-[30px]">${cta.title}</h2>
          <p class="mt-2 max-w-[700px] text-[13px] leading-[1.65] text-white/80">${cta.description}</p>
        </div>
        <div class="relative z-10 flex flex-wrap gap-3">
          ${cta.primaryAction ? `
            <a href="${cta.primaryAction.href}" class="inline-flex h-11 items-center justify-center gap-2 rounded-[7px] bg-white px-5 text-[12px] font-semibold transition hover:-translate-y-0.5" style="color:var(--service-primary)">
              ${cta.primaryAction.label}
              ${arrowIcon()}
            </a>
          ` : ""}
          ${cta.secondaryAction ? `
            <a href="${cta.secondaryAction.href}" class="inline-flex h-11 items-center justify-center gap-2 rounded-[7px] border border-white/75 px-5 text-[12px] font-semibold text-white transition hover:bg-white" onmouseenter="this.style.color='var(--service-primary)'" onmouseleave="this.style.color='#fff'">
              ${phoneIcon()}
              ${cta.secondaryAction.label}
            </a>
          ` : ""}
        </div>
      </div>
    </section>
  `;
}

function renderServicePage(service) {
  return `
    ${renderBreadcrumb(service)}
    ${renderHero(service)}
    ${renderQuickFacts(service)}
    ${renderAbout(service)}
    ${renderIncluded(service)}
    ${renderProcess(service)}
    ${renderMiddleSections(service)}
    ${renderProject(service.project)}
    ${renderFaq(service)}
    ${renderCta(service)}
  `;
}

export function initServiceDetailsPage() {
  const pages = document.querySelectorAll("[data-service-page]");

  if (!pages.length) return;

  pages.forEach((page) => {
    if (page.dataset.serviceReady === "true") return;

    const slug = page.dataset.servicePage;
    const service = SERVICE_DETAILS[slug];

    if (!service) {
      console.error(`Service details data not found: ${slug}`);
      page.innerHTML = `
        <section class="px-5 py-32 text-center">
          <h1 class="text-3xl font-semibold text-[#071b4d]">Service not found</h1>
        </section>
      `;
      return;
    }

    page.dataset.serviceReady = "true";
    page.style.setProperty("--service-primary", service.theme.primary);
    page.style.setProperty("--service-primary-dark", service.theme.primaryDark);
    page.style.setProperty("--service-soft", service.theme.soft);
    page.style.setProperty("--service-soft-alt", service.theme.softAlt);
    page.style.setProperty("--service-border", service.theme.border);
    page.style.setProperty("--service-hover-border", service.theme.hoverBorder);
    page.style.setProperty("--service-section", service.theme.section);
    page.style.setProperty("--service-hero", service.theme.hero);
    page.style.setProperty("--service-hero-end", service.theme.heroEnd);
    page.style.setProperty("--service-shadow", service.theme.shadow);

    page.innerHTML = renderServicePage(service);
  });
}
