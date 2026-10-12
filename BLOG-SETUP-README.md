# GCTL Blog — Installation & Editing

This add-on creates an English, CLS-inspired GCTL blog listing and article detail pages. It uses the existing GCTL navbar, footer, logo, and project images; no new stock images or backend service are required.

## Open the pages

- Blog listing: `http://localhost:5173/blog.html`
- Example detail: `http://localhost:5173/blog-details.html?slug=ai-cameras-and-smarter-video-surveillance`
- Desktop navbar `Blog` (formerly broken `Resources` link) and footer `Blog & Insights` both lead to the listing.

## Use the patch ZIP

Extract the patch into your **GCTL project root**, preserving folder structure and replacing only matching existing files. Start your project normally using `npm install` (if dependencies are missing), then `npm run dev`.

The **full project ZIP** is an alternative; do not apply both packages.

## Editing the blog

`src/data/blog-posts.js` contains all 12 English editorial starter articles and images. Each article has `slug`, `title`, `excerpt`, `category`, `date`, `image`, `imageAlt`, `readTime`, `lead`, `sections` and `takeaway` fields. Add another item to the `BLOG_POSTS` array to create an article. The grid, categories, related articles and detail pages update automatically.

**Important:** The posts, publication dates and `GCTL Editorial Team` byline are **illustrative starter content** created for this website demo, not verified previously published GCTL content. Review and approve them (and dates) before a public launch. Video Guides are text-based walkthroughs; no actual video files or video IDs were supplied.

- Blog listing UI and filters: `public/components/blog.html`, `src/blog-page.js`
- Detail article template: `public/components/blog-details.html`, `src/blog-details-page.js`
- Blog-only styles: `src/blog.css`
- Page entry points: `blog.html` and `blog-details.html`
- Existing shared site files changed: `src/main.js`, `src/navbar.js`, `src/data/nav-links.js`, `public/components/navbar.html`, `public/components/footer.html`

The social buttons use the project's existing `public/social-icons.svg` icons; they share the current article through the browser and do not require social API credentials. No newsletter submission backend was added, and the existing footer remains unchanged except for the Blog link.

## Validation

JavaScript syntax was checked using Node, blog images were checked against files, and listing/details behavior was tested in a headless browser with local fixtures. A complete Vite production build could not be performed in the testing environment because the original ZIP does not contain `node_modules` and the dependency install was not available offline. On your computer run `npm install` followed by `npm run build` before deployment.
