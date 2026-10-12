import { BLOG_POSTS, BLOG_CATEGORIES, blogUrl } from './data/blog-posts.js';

export const esc = (text) => String(text ?? '').replace(/[&<>"']/g, (ch) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[ch]));

export const icon = (name, size = 16) => {
  const paths = {
    arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    folder: '<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10H3z"/>',
    list: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    share: '<path d="M12 16V3m-4 4 4-4 4 4M5 13v7h14v-7"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5zM4 18.5A2.5 2.5 0 0 1 6.5 16H20"/>',
    chevron: '<path d="m9 18 6-6-6-6"/>'
  };
  return `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.arrow}</svg>`;
};

export const dateFormat = (date, short = false) => new Intl.DateTimeFormat('en-US', { day: 'numeric', month: short ? 'short' : 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T12:00:00Z`));

export const shareLinks = (post) => {
  const url = encodeURIComponent(`${location.origin}${blogUrl(post)}`);
  const title = encodeURIComponent(post.title);
  return [
    ['Facebook', 'facebook', `https://www.facebook.com/sharer/sharer.php?u=${url}`],
    ['X', 'x', `https://twitter.com/intent/tweet?url=${url}&text=${title}`],
    ['LinkedIn', 'linkedin', `https://www.linkedin.com/sharing/share-offsite/?url=${url}`],
    ['WhatsApp', 'whatsapp', `https://api.whatsapp.com/send?text=${title}%20${url}`],
    ['Telegram', 'telegram', `https://t.me/share/url?url=${url}&text=${title}`],
    ['Pinterest', 'pinterest', `https://pinterest.com/pin/create/button/?url=${url}&description=${title}`],
    ['Email', 'email', `mailto:?subject=${title}&body=${url}`]
  ];
};

// The shared GCTL icon sprite is used; no external icon library or CSS file is added.
export const socialButtons = (post) => `<div class="flex flex-wrap items-center gap-[5px]" aria-label="Share this article">${shareLinks(post).map(([name, id, href]) => `<a class="inline-flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-full border border-[#dbe5f2] bg-white text-[#0864c9] shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-colors hover:border-[#0864c9] hover:bg-[#f0f7ff]" href="${href}" ${name === 'Email' ? '' : 'target="_blank" rel="noopener noreferrer"'} aria-label="Share on ${name}" title="${name}"><svg class="h-[13px] w-[13px]" aria-hidden="true"><use href="/social-icons.svg#${id}"></use></svg></a>`).join('')}</div>`;

// Intentionally EMPTY image area. Never fetch/generate a stock fallback.
// A real image loads here only if the user later supplies the matching filename.
export const media = (post) => `<span class="absolute inset-0 block overflow-hidden bg-[#f5f7fa]" data-blog-image-slot data-blog-image-src="${esc(post.image || '')}" data-blog-image-alt="${esc(post.imageAlt || post.title)}"></span>`;

export const videoBadge = () => `<span class="pointer-events-none absolute left-1/2 top-1/2 inline-flex h-[36px] w-[52px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[10px] bg-[#ff0000] text-white" aria-hidden="true"><svg width="22" height="21" viewBox="0 0 24 24" fill="currentColor"><path d="m8 5 11 7-11 7z"/></svg></span>`;

export function blogCard(post) {
  const link = blogUrl(post);
  return `<article class="flex min-w-0 flex-col overflow-hidden rounded-[14px] border border-[#e0e8f2] bg-white shadow-[0_5px_16px_rgba(20,48,81,0.06)]">
    <a class="relative block aspect-[1.57] w-full shrink-0 overflow-hidden" href="${link}" aria-label="${post.isVideo ? 'Open video guide' : 'Read article'}: ${esc(post.title)}">${media(post)}${post.isVideo ? videoBadge() : ''}</a>
    <div class="flex min-h-[192px] flex-1 flex-col px-[16px] pb-3 pt-4 sm:min-h-[208px] lg:min-h-[215px]">
      <div class="mb-3 flex items-start justify-between gap-2 text-[10px] text-[#6581a3]">
        <span class="flex min-w-0 items-start gap-[5px] leading-[1.5]">${icon('calendar', 13)}<span>${dateFormat(post.date)}</span></span>
        <span class="max-w-[120px] shrink-0 rounded-full bg-[#0a2138] px-[8px] py-[3px] text-center text-[9px] font-extrabold leading-[1.2] text-white">${esc(post.category)}</span>
      </div>
      <h2 class="mb-2 line-clamp-2 text-[14px] font-extrabold leading-[1.42] tracking-[-0.01em] text-[#071a34] sm:text-[15px]"><a class="hover:text-[#0868d9]" href="${link}">${esc(post.title)}</a></h2>
      <p class="line-clamp-3 text-[12px] leading-[1.85] text-[#607c9e]">${esc(post.excerpt)}</p>
    </div>
    <div class="flex min-h-[64px] flex-wrap items-start justify-between gap-x-2 gap-y-[7px] border-t border-[#e7edf5] px-[14px] py-[13px]">
      <a class="inline-flex shrink-0 items-center gap-1 text-[11px] font-extrabold text-[#0067d6] hover:underline" href="${link}">${post.isVideo ? 'Watch Video' : 'Read More'} ${icon('arrow', 13)}</a>
      ${socialButtons(post)}
    </div>
  </article>`;
}

export function setupBlogImages(root) {
  root.querySelectorAll('[data-blog-image-slot]').forEach((slot) => {
    const file = slot.dataset.blogImageSrc;
    if (!file) return;
    const img = new Image();
    img.alt = slot.dataset.blogImageAlt;
    img.className = 'block h-full w-full object-cover';
    img.decoding = 'async';
    // Off-DOM images must load eagerly; lazy loading waits for DOM insertion.
    img.loading = 'eager';
    img.onload = () => { if (slot.isConnected && img.naturalWidth) slot.replaceChildren(img); };
    img.onerror = () => {}; // Stay empty. Never swap in a different image.
    img.src = file;
  });
}

export function initBlogPage() {
  const root = document.querySelector('[data-blog-page]');
  if (!root) return;
  const filters = root.querySelector('#blogFilters');
  const grid = root.querySelector('#blogGrid');
  const pagination = root.querySelector('#blogPagination');
  const empty = root.querySelector('#blogEmpty');
  const PAGE_SIZE = 12;
  const matchesCategory = (post, name) => name === 'All Posts' || (name === 'Video Guides' ? post.isVideo : post.category === name);
  // Filters and pagination are client-side; the visible URL stays clean.
  let category = 'All Posts';
  let page = 1;
  if (location.search) history.replaceState(history.state, '', '/blog/');
  const render = () => {
    const posts = BLOG_POSTS.filter((post) => matchesCategory(post, category));
    const pageCount = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
    page = Math.min(page, pageCount);
    filters.innerHTML = BLOG_CATEGORIES.map((label) => `<button type="button" class="inline-flex min-h-[30px] items-center justify-center gap-2 rounded-full px-[14px] py-[7px] text-[11px] font-bold transition-colors sm:text-[12px] ${category === label ? 'bg-[#0862db] text-white shadow-[0_2px_6px_rgba(0,98,219,0.14)]' : 'bg-[#f1f5f9] text-[#0964ca] hover:bg-[#e6f1ff]'}" data-category="${esc(label)}" aria-pressed="${category === label}">${label === 'Video Guides' ? `<span class="text-[10px]" aria-hidden="true">▶</span>` : ''}${esc(label)}</button>`).join('');
    grid.innerHTML = posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map(blogCard).join('');
    setupBlogImages(grid);
    empty.hidden = posts.length > 0;
    pagination.innerHTML = `<span class="text-[11px] font-medium text-[#7892af]">Showing page ${page} of ${pageCount} (${posts.length} posts total)</span>${pageCount > 1 ? `<div class="flex items-center gap-[7px]">${pageNav('prev', '‹', page === 1)}${Array.from({ length: pageCount }, (_, i) => pageNav(String(i + 1), String(i + 1), false, i + 1 === page)).join('')}${pageNav('next', '›', page === pageCount)}</div>` : ''}`;
  };
  const pageNav = (value, text, disabled, active = false) => `<button type="button" data-page="${value}" ${disabled ? 'disabled' : ''} ${active ? 'aria-current="page"' : ''} aria-label="${value === 'prev' ? 'Previous page' : value === 'next' ? 'Next page' : `Page ${value}`}" class="inline-flex h-[32px] min-w-[32px] items-center justify-center rounded-[8px] border px-2 text-[12px] font-bold ${active ? 'border-[#0862db] bg-[#0862db] text-white shadow-[0_2px_5px_rgba(6,89,206,0.25)]' : 'border-[#e2eaf4] bg-white text-[#46668b] hover:border-[#bcd0e9]'} disabled:cursor-not-allowed disabled:opacity-40">${text}</button>`;
  filters.addEventListener('click', (event) => {
    const btn = event.target.closest('button[data-category]');
    if (!btn) return;
    category = btn.dataset.category;
    page = 1;
    render();
  });
  pagination.addEventListener('click', (event) => {
    const btn = event.target.closest('button[data-page]');
    if (!btn || btn.disabled) return;
    page = btn.dataset.page === 'prev' ? page - 1 : btn.dataset.page === 'next' ? page + 1 : Number(btn.dataset.page);
    render();
    root.querySelector('#blogToolbar').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  render();
}
