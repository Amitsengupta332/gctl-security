# GCTL Blog update — Clean URLs and image preparation

## Clean URLs (no `?slug=`)

- Blog listing: `http://localhost:5173/blog/`
- Article: `http://localhost:5173/blog/ai-cameras-modern-surveillance/`
- All 24 articles have real `blog/<slug>/index.html` files and are Vite MPA build inputs.
- Older `blog-details.html?slug=...` links automatically replace their URL with the new clean path.
- No new custom CSS. All existing Tailwind-based layout and functionality is preserved.

## CLS photographs

The original photographs have **not been bundled**. This execution environment cannot download CLS image binary files. We have provided an optional helper script for your connected Windows computer:

`node scripts/download-cls-blog-images.mjs`

It attempts to read the 24 CLS blog cards and their article pages, find real photographs and convert downloads into `.avif` filenames already referenced by `src/data/blog-posts.js`. It reports missing images rather than inventing them. It requires existing project dependencies installed (`npm install` first if necessary). 

Images go into: `public/images/blog/cls-reference/`.

**Note:** CLS photographs may be copyrighted. Obtain permission from the rights holder before republishing their images on your own business website. This automation is for assets you're authorized to use.

## Test

1. Run `npm run build`; check that `dist/blog/ai-cameras-modern-surveillance/index.html` exists.
2. Run `npm run dev` or `npm run preview` and open an article path; refresh the page directly.
3. Check the Network tab; blog images are blank until valid image files exist.
