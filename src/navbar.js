import { NAV_LINKS } from "./data/nav-links.js";

const desktopMedia = window.matchMedia("(min-width: 1024px)");

function isDesktop() {
  return desktopMedia.matches;
}

function normalizePath(path) {
  if (!path) return "/index.html";

  const cleanPath = path.split("?")[0].split("#")[0];

  if (cleanPath === "/" || cleanPath === "") {
    return "/index.html";
  }

  return cleanPath;
}

function getProductsNavItem() {
  return NAV_LINKS.find(function (item) {
    return item.isProducts;
  });
}

function getProductLinks() {
  const productsItem = getProductsNavItem();

  return productsItem?.children || [];
}

function isProductsRoute(currentPath) {
  // Service details page
  if (document.querySelector("[data-service-page]")) {
    return false;
  }

  // Industry details page
  if (document.querySelector("[data-industry-page]")) {
    return false;
  }

  const normalNavPaths = NAV_LINKS.filter(function (item) {
    return !item.isProducts;
  }).map(function (item) {
    return normalizePath(item.href);
  });

  const productPaths = getProductLinks().map(function (item) {
    return normalizePath(item.href);
  });

  if (productPaths.includes(currentPath)) {
    return true;
  }

  /*
   * Product subcategory / product details page.
   *
   * Existing project architecture অনুযায়ী
   * normal nav pages বাদে .html route-কে
   * Products tree হিসেবে ধরছি।
   */
  if (currentPath.endsWith(".html") && !normalNavPaths.includes(currentPath)) {
    return true;
  }

  return false;
}

function isActiveNavItem(item, currentPath) {
  if (item.isProducts) {
    return isProductsRoute(currentPath);
  }

  return normalizePath(item.href) === currentPath;
}

function getMainNavDirectLinks(mainNav) {
  return Array.from(mainNav.querySelectorAll(":scope > li > a"));
}

function findMainNavLink(mainNav, href) {
  return getMainNavDirectLinks(mainNav).find(function (link) {
    return normalizePath(link.getAttribute("href")) === normalizePath(href);
  });
}

/* =========================================================
   ACTIVE NAV
========================================================= */

function initNavbarActiveState() {
  const mainNav = document.getElementById("mainNav");

  if (!mainNav) return;

  const currentPath = normalizePath(window.location.pathname);

  NAV_LINKS.forEach(function (item) {
    const link = findMainNavLink(mainNav, item.href);

    if (!link) return;

    const navItem = link.closest("li");

    if (!navItem) return;

    const isActive = isActiveNavItem(item, currentPath);

    // Desktop underline
    navItem.classList.add("lg:border-b-[3px]");

    navItem.classList.toggle("lg:border-[#005cb9]", isActive);

    navItem.classList.toggle("lg:border-transparent", !isActive);

    // Text
    link.classList.toggle("text-[#005cb9]", isActive);

    link.classList.toggle("text-[#071425]", !isActive);

    // Mobile active background
    link.classList.toggle("max-lg:bg-[#eef7ff]", isActive);

    link.classList.toggle("max-lg:text-[#0068c9]", isActive);

    if (!isActive) {
      link.classList.add("hover:text-[#0068c9]");
    }
  });
}

/* =========================================================
   ONE NAV / MOBILE HAMBURGER
========================================================= */

function initNavbarMenu() {
  const mainNav = document.getElementById("mainNav");

  const mobileMenuButton = document.getElementById("mobileMenuButton");

  const searchBox = document.getElementById("navbarSearchBox");

  const productsToggle = mainNav?.querySelector("[data-products-toggle]");

  const productsPanel = mainNav?.querySelector("[data-products-panel]");

  const productsIcon = mainNav?.querySelector("[data-products-icon]");

  if (!mainNav || !mobileMenuButton) {
    return;
  }

  if (mobileMenuButton.dataset.navMenuReady === "true") {
    return;
  }

  mobileMenuButton.dataset.navMenuReady = "true";

  function setHamburgerState(isOpen) {
    mobileMenuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  function closeProductsPanel() {
    if (isDesktop()) return;

    productsPanel?.classList.add("hidden");

    productsToggle?.setAttribute("aria-expanded", "false");

    productsIcon?.classList.remove("rotate-180");
  }

  function openProductsPanel() {
    if (isDesktop()) return;

    productsPanel?.classList.remove("hidden");

    productsToggle?.setAttribute("aria-expanded", "true");

    productsIcon?.classList.add("rotate-180");
  }

  function toggleProductsPanel() {
    if (!productsPanel || isDesktop()) {
      return;
    }

    const isClosed = productsPanel.classList.contains("hidden");

    if (isClosed) {
      openProductsPanel();
    } else {
      closeProductsPanel();
    }
  }

  function openMenu() {
    if (isDesktop()) return;

    searchBox?.classList.add("hidden");

    mainNav.classList.remove("hidden");

    setHamburgerState(true);

    document.documentElement.style.overflow = "hidden";

    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    if (!isDesktop()) {
      mainNav.classList.add("hidden");
    }

    setHamburgerState(false);

    closeProductsPanel();

    document.documentElement.style.overflow = "";

    document.body.style.overflow = "";
  }

  function toggleMenu() {
    if (isDesktop()) return;

    if (mainNav.classList.contains("hidden")) {
      openMenu();
    } else {
      closeMenu();
    }
  }

  mobileMenuButton.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    toggleMenu();
  });

  /*
   * Products desktop:
   * hover = existing mega menu.
   *
   * Products mobile:
   * click = same mega menu accordion.
   */
  productsToggle?.addEventListener("click", function (event) {
    if (isDesktop()) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    toggleProductsPanel();
  });

  mainNav.addEventListener("click", function (event) {
    if (isDesktop()) return;

    const link = event.target.closest("a");

    if (!link) return;

    // Products top toggle navigation করবে না
    if (link === productsToggle) {
      return;
    }

    /*
     * Actual page link click করলে
     * main navigation close হবে।
     */
    closeMenu();
  });

  document.addEventListener("click", function (event) {
    if (isDesktop()) return;

    if (
      !mainNav.classList.contains("hidden") &&
      !mainNav.contains(event.target) &&
      !mobileMenuButton.contains(event.target)
    ) {
      closeMenu();
    }
  });

  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  /*
   * IMPORTANT:
   * Tailwind lg breakpoint = 1024px.
   *
   * Old code-এ 1280 ছিল।
   * সেটা ভুল breakpoint ছিল।
   */
  desktopMedia.addEventListener("change", function (event) {
    if (event.matches) {
      mainNav.classList.remove("hidden");

      setHamburgerState(false);

      productsToggle?.setAttribute("aria-expanded", "false");

      productsIcon?.classList.remove("rotate-180");

      document.documentElement.style.overflow = "";

      document.body.style.overflow = "";

      return;
    }

    mainNav.classList.add("hidden");

    productsPanel?.classList.add("hidden");

    setHamburgerState(false);
  });
}

/* =========================================================
   ONE SEARCH
========================================================= */

function initNavbarSearch() {
  const searchButton = document.getElementById("navbarSearchButton");

  const searchBox = document.getElementById("navbarSearchBox");

  const searchClose = document.getElementById("navbarSearchClose");

  const mainNav = document.getElementById("mainNav");

  const mobileMenuButton = document.getElementById("mobileMenuButton");

  const productsPanel = mainNav?.querySelector("[data-products-panel]");

  const productsToggle = mainNav?.querySelector("[data-products-toggle]");

  const productsIcon = mainNav?.querySelector("[data-products-icon]");

  if (!searchButton || !searchBox || !searchClose) {
    return;
  }

  function closeMobileNavigation() {
    if (isDesktop()) return;

    mainNav?.classList.add("hidden");

    productsPanel?.classList.add("hidden");

    productsToggle?.setAttribute("aria-expanded", "false");

    productsIcon?.classList.remove("rotate-180");

    mobileMenuButton?.setAttribute("aria-expanded", "false");

    document.documentElement.style.overflow = "";

    document.body.style.overflow = "";
  }

  function openSearch() {
    searchBox.classList.remove("hidden");

    searchButton.setAttribute("aria-expanded", "true");

    closeMobileNavigation();

    const input = searchBox.querySelector("input");

    setTimeout(function () {
      input?.focus();
    }, 50);
  }

  function closeSearch() {
    searchBox.classList.add("hidden");

    searchButton.setAttribute("aria-expanded", "false");
  }

  function toggleSearch() {
    if (searchBox.classList.contains("hidden")) {
      openSearch();
    } else {
      closeSearch();
    }
  }

  searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    toggleSearch();
  });

  searchClose.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    closeSearch();
  });

  searchBox.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  document.addEventListener("click", function (event) {
    if (
      !searchBox.classList.contains("hidden") &&
      !searchBox.contains(event.target) &&
      !searchButton.contains(event.target)
    ) {
      closeSearch();
    }
  });

  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeSearch();
    }
  });
}

/* =========================================================
   HEADER
========================================================= */

function initNavbarScroll() {
  const header = document.getElementById("siteHeader");

  if (!header) return;

  header.classList.remove("bg-transparent", "border-white/20");

  header.classList.add(
    "bg-white",
    "border-gray-100",
    "shadow-[0_8px_30px_rgba(15,23,42,0.06)]",
  );
}

/* =========================================================
   MEGA MENU SCROLLBARS
========================================================= */

function initProductMegaScrollbars() {
  const scrollAreas = document.querySelectorAll("[data-product-scrollbar]");

  if (!scrollAreas.length) return;

  const scrollbarClasses = [
    "[scrollbar-width:thin]",
    "[scrollbar-color:transparent_transparent]",

    "[&::-webkit-scrollbar]:h-[10px]",
    "[&::-webkit-scrollbar]:w-[10px]",

    "[&::-webkit-scrollbar-track]:bg-transparent",
    "[&::-webkit-scrollbar-corner]:bg-transparent",

    "[&::-webkit-scrollbar-button]:hidden",
    "[&::-webkit-scrollbar-button]:h-0",
    "[&::-webkit-scrollbar-button]:w-0",

    "[&::-webkit-scrollbar-thumb]:min-h-[44px]",
    "[&::-webkit-scrollbar-thumb]:rounded-full",
    "[&::-webkit-scrollbar-thumb]:border-[3px]",
    "[&::-webkit-scrollbar-thumb]:border-solid",
    "[&::-webkit-scrollbar-thumb]:border-transparent",
    "[&::-webkit-scrollbar-thumb]:bg-transparent",
    "[&::-webkit-scrollbar-thumb]:bg-clip-padding",

    "data-[scrollbar-visible=true]:[scrollbar-color:rgba(71,85,105,0.52)_transparent]",

    "data-[scrollbar-visible=true]:[&::-webkit-scrollbar-thumb]:bg-[rgba(71,85,105,0.52)]",

    "[&::-webkit-scrollbar-thumb:hover]:border-[2px]",

    "[&::-webkit-scrollbar-thumb:hover]:bg-[rgba(51,65,85,0.72)]",

    "[&::-webkit-scrollbar-thumb:active]:border-[1px]",

    "[&::-webkit-scrollbar-thumb:active]:bg-[rgba(30,41,59,0.85)]",
  ];

  scrollAreas.forEach(function (scrollArea) {
    if (scrollArea.dataset.scrollbarReady === "true") {
      return;
    }

    scrollArea.dataset.scrollbarReady = "true";

    scrollArea.dataset.scrollbarVisible = "false";

    scrollArea.classList.add(...scrollbarClasses);

    let hideTimer = null;
    let pointerNearScrollbar = false;

    function showScrollbar() {
      window.clearTimeout(hideTimer);

      scrollArea.dataset.scrollbarVisible = "true";
    }

    function hideScrollbar(delay = 900) {
      window.clearTimeout(hideTimer);

      hideTimer = window.setTimeout(function () {
        if (pointerNearScrollbar) {
          return;
        }

        scrollArea.dataset.scrollbarVisible = "false";
      }, delay);
    }

    function handleScrollActivity() {
      showScrollbar();
      hideScrollbar();
    }

    scrollArea.addEventListener("wheel", handleScrollActivity, {
      passive: true,
    });

    scrollArea.addEventListener("scroll", handleScrollActivity, {
      passive: true,
    });

    scrollArea.addEventListener("touchmove", handleScrollActivity, {
      passive: true,
    });

    scrollArea.addEventListener("pointermove", function (event) {
      const rect = scrollArea.getBoundingClientRect();

      const distanceFromRight = rect.right - event.clientX;

      pointerNearScrollbar = distanceFromRight >= 0 && distanceFromRight <= 18;

      if (pointerNearScrollbar) {
        showScrollbar();
      } else {
        hideScrollbar(300);
      }
    });

    scrollArea.addEventListener("pointerleave", function () {
      pointerNearScrollbar = false;

      hideScrollbar(250);
    });

    scrollArea.addEventListener("pointerdown", function () {
      showScrollbar();
    });
  });
}

/* =========================================================
   INIT
========================================================= */

export function initNavbar() {
  initNavbarActiveState();

  initProductMegaScrollbars();

  initNavbarMenu();

  initNavbarSearch();

  initNavbarScroll();
}
