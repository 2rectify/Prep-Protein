// ================================================================
// PREP AND PROTEIN ... SHARED COMPONENTS
// ================================================================
//
// PURPOSE:
// Injects nav and footer into every page via #site-nav and #site-footer divs.
// Edit nav or footer here and every page updates automatically.
//
// EVERY HTML PAGE DEPENDS ON THIS FILE.
// If shared.js breaks, ALL pages lose their nav and footer.
//
// WHEN TO EDIT THIS FILE:
// ... Adding or removing a nav link (update BOTH desktop nav-links AND mobile menu)
// ... Changing footer content or links
// ... Changing the site name or logo text
//
// WHEN YOU EDIT THIS FILE, ALSO CHECK:
// ... Every HTML page (they all load this file ... hard refresh to test)
// ... Mobile menu (must mirror desktop nav links)
// ... style.css (if adding new nav elements that need styling)
//
// RULES:
// ... Nav links: update in TWO places (desktop .nav-links AND .mobile-menu)
// ... Footer links: update in ONE place (footer .footer-links)
// ... Do NOT put page-specific JS in this file
// ... Copyright year is hardcoded ... update annually
//
// REFERENCED BY: index.html, recipes.html, guides.html, shop.html,
//   beef-rendang.html, massaman-curry.html, and all future recipe pages.
// ================================================================

(function () {

  // ── NAV ──────────────────────────────────────────────────────
  const nav = `
  <nav>
    <a href="index.html" class="nav-logo">Prep &amp; <span>Protein</span></a>
    <div class="nav-dropdown">
      <button class="nav-dropdown-btn" onclick="toggleDropdown()">Explore &#9662;</button>
      <div class="nav-dropdown-menu" id="navDropdown">
        <a href="recipes.html">Recipes</a>
        <a href="guides.html">Meal Prep</a>
        <a href="what-to-eat-to-lose-weight.html">Nutrition</a>
        <a href="shop.html">Shop</a>
      </div>
    </div>
    <button class="hamburger" onclick="toggleMenu()" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <div class="mobile-menu" id="mobileMenu">
    <a href="recipes.html">Recipes</a>
    <a href="guides.html">Meal Prep</a>
    <a href="what-to-eat-to-lose-weight.html">Nutrition</a>
    <a href="shop.html" class="mob-cta">Shop</a>
  </div>`;

  // ── FOOTER ───────────────────────────────────────────────────
  const footer = `
  <footer>
    <div class="footer-logo">Prep &amp; <span>Protein</span></div>
    <p class="footer-tagline">High protein meal prep for real people.</p>
    <div class="footer-links">
      <a href="index.html">Home</a>
      <a href="recipes.html">Recipes</a>
      <a href="guides.html">Meal Prep</a>
      <a href="what-to-eat-to-lose-weight.html">Nutrition</a>
      <a href="shop.html">Shop</a>
    </div>
    <p class="footer-copy">&#169; 2026 Prep &amp; Protein. All rights reserved.</p>
  </footer>`;

  // ── INJECT ───────────────────────────────────────────────────
  document.getElementById('site-nav').innerHTML = nav;
  document.getElementById('site-footer').innerHTML = footer;

  // ── HAMBURGER FUNCTIONS ──────────────────────────────────────
  window.toggleMenu = function () {
    document.getElementById('mobileMenu').classList.toggle('open');
  };
  window.closeMenu = function () {
    document.getElementById('mobileMenu').classList.remove('open');
  };

  // ── DROPDOWN FUNCTIONS ─────────────────────────────────────
  window.toggleDropdown = function () {
    document.getElementById('navDropdown').classList.toggle('open');
  };

  // Close dropdown when clicking anywhere else on the page
  document.addEventListener('click', function (e) {
    var dropdown = document.querySelector('.nav-dropdown');
    if (dropdown && !dropdown.contains(e.target)) {
      document.getElementById('navDropdown').classList.remove('open');
    }
  });

})();
