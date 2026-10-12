import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { readdirSync } from "fs";

/**
 * Automatically collect all .html files
 * from the project root for Vite MPA build.
 */
function getRootHtmlInputs() {
  const root = process.cwd();
  const inputs = {};
  for (const file of readdirSync(root).filter((file) => file.endsWith(".html"))) {
    inputs[file.replace(/\.html$/, "")] = resolve(root, file);
  }
  // Include physical blog routes in the production bundle, not just Vite dev.
  // This makes /blog/article-slug/ open directly on static hosting.
  inputs["blog-index"] = resolve(root, "blog/index.html");
  for (const dir of readdirSync(resolve(root, "blog"), { withFileTypes: true })) {
    if (dir.isDirectory()) {
      inputs[`blog-${dir.name}`] = resolve(root, "blog", dir.name, "index.html");
    }
  }
  return inputs;
}

/**
 * Rewrite dynamic detail URLs during:
 *
 * npm run dev
 * npm run preview
 *
 * Example:
 * /product-details/abc-product
 * -> /product-details.html
 *
 * /project-details/sample-project
 * -> /project-details.html
 */
function detailsRewrite() {
  function rewrite(req, res, next) {
    if (!req.url) {
      return next();
    }

    const [pathname, queryString] = req.url.split("?");

    if (pathname.startsWith("/product-details/")) {
      req.url = queryString
        ? `/product-details.html?${queryString}`
        : "/product-details.html";

      return next();
    }

    if (pathname.startsWith("/project-details/")) {
      req.url = queryString
        ? `/project-details.html?${queryString}`
        : "/project-details.html";

      return next();
    }

    next();
  }

  return {
    name: "details-rewrite",
    enforce: "pre",

    configureServer(server) {
      server.middlewares.use(rewrite);
    },

    configurePreviewServer(server) {
      server.middlewares.use(rewrite);
    },
  };
}

export default defineConfig({
  // Website is deployed from domain root
  base: "/",

  // Multi-page application
  appType: "mpa",

  plugins: [
    tailwindcss(),
    detailsRewrite(),
  ],

  build: {
    outDir: "dist",
    emptyOutDir: true,

    rollupOptions: {
      input: getRootHtmlInputs(),
    },
  },
});