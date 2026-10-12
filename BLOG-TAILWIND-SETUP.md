# GCTL Blog — CLS layout (Tailwind only)

## Installation (if the previous blog patch is already installed)

1. Extract `GCTL-CLS-Blog-Tailwind-Only-Patch.zip` at your GCTL project root, preserving folder structure.
2. Replace files when asked.
3. **Delete the old `src/blog.css` file.** The updated `src/main.js` has no import for it, so it will not be used either way.
4. Refresh `/blog.html` and `/blog-details.html?slug=ip-vs-hdcvi-cameras`.

## Design rules

- CSS framework: existing Vite + Tailwind CSS v4 only. **No blog-specific CSS file and no `<style>` elements.**
- Same GCTL navbar and footer: unchanged.
- **No blog hero/banner.** Breadcrumb -> small heading -> category pills -> 4-column desktop blog grid -> pagination.
- Blog details has a compact heading, metadata, left article, right Table of Contents and Latest Articles, author/share, and related cards.
- Video posts appear in the same grid and under the `Video Guides` filter.
- **Zero photos/image files provided by the patch.** Empty image areas preserve the exact layout until you provide images.

## Where to put YOUR downloaded images

- Location: `public/images/blog/cls-reference/`
- Filenames: see `BLOG-IMAGE-FILENAMES.md`.
- Images are referenced from `src/data/blog-posts.js`, `image` field. Default extension is `.avif`. If your source files are `.jpg` or `.png`, change the matching `image` value to that extension.
- Images will appear in listing, details, latest posts and related cards once available.
- For video posts, set a valid 11-character `youtubeId` in the same record to enable the embedded player in details. Without it, the image area stays empty except for the Play icon.
- Use only images you are allowed to publish.

## Testing

- `npm run dev` then visit `http://localhost:5173/blog.html`.
- `npm run build` to verify production output.
- Test categories, Video Guides, pagination, articles, latest and related links, and desktop/mobile layouts.
