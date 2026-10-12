import { BLOG_POSTS, getBlogPost, blogUrl } from './data/blog-posts.js';
import { blogCard, dateFormat, socialButtons, icon, media, setupBlogImages, videoBadge, esc } from './blog-page.js';

const container = 'mx-auto w-full max-w-[1360px] px-4 sm:px-7 lg:px-8';
const sidePanel = 'rounded-[15px] border border-[#dce6f2] bg-white p-[20px] shadow-[0_5px_18px_rgba(20,48,81,0.045)] sm:p-[23px]';

export function initBlogDetailsPage() {
  const root = document.querySelector('#blogArticleRoot');
  if (!root) return;
  // Canonical URL: /blog/article-slug/ (no query string).
  const match = location.pathname.match(/^\/blog\/([a-z0-9-]+)\/?$/i);
  const slug = match ? match[1] : new URLSearchParams(location.search).get('slug');
  const post = getBlogPost(slug);
  // Preserve bookmarks from older versions without retaining ?slug= in address bar.
  if (post && !match) history.replaceState(history.state, '', blogUrl(post));
  if (!post) {
    document.title = 'Article Not Found | GCTL Security';
    root.innerHTML = `<div class="${container} py-24 text-center"><h1 class="mb-4 text-[27px] font-extrabold">Article not found</h1><p class="mb-4 text-slate-500">This post is no longer available.</p><a class="font-bold text-[#0068dd]" href="/blog/">← Back to Blog</a></div>`;
    return;
  }
  document.title = `${post.title} | GCTL Security & Automation`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', post.excerpt);

  const others = BLOG_POSTS.filter(item => item.slug !== post.slug);
  const latest = others.slice(0, 4);
  const related = others.slice(0, 3);
  const headings = post.sections || [];
  const sections = headings.map((section, i) => `<section class="mb-7 scroll-mt-32" id="article-section-${i + 1}"><h2 class="mb-3 text-[19px] font-extrabold leading-snug text-[#0b213e] sm:text-[21px]">${esc(section.heading)}</h2>${(section.paragraphs || []).map(p => `<p class="mb-4 text-[13px] leading-[1.95] text-[#506d92] sm:text-[14px]">${esc(p)}</p>`).join('')}${section.bullets?.length ? `<ul class="list-disc space-y-2 pl-6 text-[13px] leading-[1.8] text-[#506d92]">${section.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul>` : ''}</section>`).join('');
  const videoIsReady = post.isVideo && /^[a-zA-Z0-9_-]{11}$/.test(post.youtubeId || '');
  const mediaCover = videoIsReady
    ? `<div class="mb-6 aspect-video w-full overflow-hidden rounded-[15px] bg-[#101720]"><iframe class="h-full w-full border-0" src="https://www.youtube-nocookie.com/embed/${post.youtubeId}" title="${esc(post.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`
    : `<figure class="relative mb-7 aspect-[870/475] w-full overflow-hidden rounded-[15px]">${media(post)}${post.isVideo ? videoBadge() : ''}</figure>`;

  root.innerHTML = `
    <div class="border-b border-[#e3eaf3]"><div class="${container}"><nav class="flex min-h-[50px] flex-wrap items-center gap-2 py-3 text-[12px]" aria-label="Breadcrumb"><a class="text-[#506f94] hover:text-[#0064da]" href="/">GCTL Security</a><span class="text-[#9eb2c9]">›</span><a class="text-[#506f94] hover:text-[#0064da]" href="/blog/">Blog</a><span class="text-[#9eb2c9]">›</span><a class="text-[#506f94] hover:text-[#0064da]" href="/blog/">${esc(post.category)}</a><span class="text-[#9eb2c9]">›</span><span class="line-clamp-1 font-bold text-[#0d2541]" aria-current="page">${esc(post.title)}</span></nav></div></div>
    <div class="${container}">
      <header class="pb-7 pt-7 sm:pt-8">
        <a href="/blog/" class="inline-flex rounded-[6px] bg-[#075fda] px-[12px] py-[5px] text-[11px] font-extrabold leading-[1.3] text-white">${esc(post.category)}</a>
        <h1 class="mt-4 text-[23px] font-extrabold leading-[1.3] tracking-tight text-[#061b36] sm:text-[27px]">${esc(post.title)}</h1>
        <span class="mt-2 block h-[3px] w-[46px] rounded-full bg-[#0388fa]"></span>
        <p class="mt-3 max-w-[930px] text-[13px] leading-[1.9] text-[#587799] sm:text-[14px]">${esc(post.excerpt)}</p>
        <div class="mt-5 flex flex-wrap items-center gap-x-7 gap-y-4 border-y border-[#e5ebf4] py-4">
          <div class="flex min-w-[125px] items-center gap-[10px]"><span class="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border border-[#d6e7fb] bg-[#edf6ff] text-[12px] font-extrabold text-[#0567d6]">GC</span><span><strong class="block text-[12px] font-extrabold text-[#0a2340]">GCTL Security</strong><small class="block text-[11px] text-[#7994b2]">Security Experts</small></span></div>
          <div class="flex items-center gap-3 text-[#829bbb]">${icon('calendar', 17)}<span><strong class="block text-[12px] font-extrabold text-[#102744]">${dateFormat(post.date, true)}</strong><small class="block text-[11px] text-[#849cbb]">Published</small></span></div>
          <div class="flex items-center gap-3 text-[#829bbb]">${icon('clock', 17)}<span><strong class="block text-[12px] font-extrabold text-[#102744]">${Number(post.readTime) || 1} min read</strong><small class="block text-[11px] text-[#849cbb]">Reading time</small></span></div>
          <div class="flex items-center gap-3 text-[#829bbb]">${icon('folder', 17)}<span><strong class="block text-[12px] font-extrabold text-[#102744]">${esc(post.category)}</strong><small class="block text-[11px] text-[#849cbb]">Category</small></span></div>
        </div>
      </header>
      <div class="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_330px] lg:gap-9">
        <article class="min-w-0">
          ${mediaCover}
          ${sections}
          <div class="mt-6 flex flex-wrap items-center gap-3 rounded-[13px] border border-[#e3eaf4] bg-[#f7f9fc] p-[15px]"><span class="flex h-[49px] w-[49px] shrink-0 items-center justify-center rounded-full border border-[#d8e7fc] bg-[#eef6ff] text-[12px] font-extrabold text-[#0064da]">GC</span><div class="min-w-[140px] flex-1"><span class="block text-[10px] font-extrabold uppercase tracking-wider text-[#0672e7]">About the Author</span><strong class="block text-[13px] font-extrabold text-[#0b213d]">GCTL Security</strong><p class="text-[11px] leading-[1.5] text-[#6a83a0]">Professional guidance on security systems and technology.</p></div><a class="rounded-[6px] bg-[#0563d8] px-[15px] py-[10px] text-[11px] font-extrabold text-white hover:bg-[#004da9]" href="/blog/">View All Posts</a></div>
          <div class="mt-6 flex flex-wrap items-center gap-3 rounded-[13px] border border-[#e3eaf4] bg-[#f7f9fc] p-[15px]"><span class="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[7px] border border-[#e0e9f5] bg-white text-[#0767d7]">${icon('share', 17)}</span><div class="min-w-[150px] flex-1"><strong class="block text-[12px] font-extrabold text-[#0b213d]">Share this article</strong><p class="text-[11px] text-[#738eab]">Share this guide with colleagues and friends.</p></div>${socialButtons(post)}</div>
        </article>
        <aside class="grid gap-5" aria-label="Blog article sidebar">
          <section class="${sidePanel}"><h2 class="mb-4 flex items-center gap-2 border-b border-[#e7edf5] pb-3 text-[13px] font-extrabold text-[#09213e]"><span class="text-[#006de6]">${icon('list', 16)}</span>Table of Contents</h2><nav class="space-y-3" aria-label="On this page">${headings.map((s,i) => `<a class="flex items-start gap-3 text-[12px] leading-[1.65] text-[#496482] hover:text-[#006bdb]" href="#article-section-${i + 1}"><span class="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#0767d9]"></span>${esc(s.heading)}</a>`).join('')}</nav></section>
          <section class="${sidePanel}"><h2 class="mb-3 flex items-center gap-2 border-b border-[#e7edf5] pb-3 text-[13px] font-extrabold text-[#09213e]"><span class="text-[#006de6]">${icon('book', 16)}</span>Latest Articles</h2><div class="space-y-3">${latest.map(p => `<a href="${blogUrl(p)}" class="flex items-center gap-3"><span class="relative block h-[52px] w-[58px] shrink-0 overflow-hidden rounded-[6px]">${media(p)}</span><span class="min-w-0"><strong class="line-clamp-2 text-[11px] font-extrabold leading-[1.45] text-[#0c203a] hover:text-[#0066d9]">${esc(p.title)}</strong><small class="mt-1 block text-[10px] text-[#7892ae]">${dateFormat(p.date, true)}</small></span></a>`).join('')}</div><a class="mt-4 block border-t border-[#ebeff6] pt-3 text-[11px] font-extrabold text-[#0766d7] hover:underline" href="/blog/">View All Articles →</a></section>
        </aside>
      </div>
      <section class="mt-16 border-t border-[#e6ecf4] pt-8" aria-label="Related blog posts"><div class="mb-6 flex flex-wrap items-center justify-between gap-3"><h2 class="text-[18px] font-extrabold text-[#0b2342]">You Might Also Like</h2><a class="text-[11px] font-extrabold text-[#0664d7] hover:underline" href="/blog/">View All Blogs →</a></div><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">${related.map(blogCard).join('')}</div></section>
    </div>`;
  setupBlogImages(root);
}
