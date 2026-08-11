/* Silas Vale — Author site interactions */
(function () {
  "use strict";

  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  /* ---------- Nav: background on scroll ---------- */
  function onScroll() {
    if (window.scrollY > 40) {
      nav.classList.add("nav--scrolled");
    } else {
      nav.classList.remove("nav--scrolled");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  navToggle.addEventListener("click", function () {
    var open = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- Series cards: jump to matching book series ---------- */
  document.querySelectorAll("[data-scroll-target]").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var id = link.getAttribute("data-scroll-target");
      var target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.hash = "books";
      }
    });
  });

  /* ---------- Reveal on scroll ---------- */
  var revealTargets = [
    ".about__grid",
    ".series-card",
    ".bookseries",
    ".connect__intro",
    ".connect__links",
    ".connect__mail"
  ];

  var revealEls = [];
  revealTargets.forEach(function (selector) {
    document.querySelectorAll(selector).forEach(function (el) {
      if (!el.classList.contains("reveal")) {
        el.classList.add("reveal");
        revealEls.push(el);
      }
    });
  });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
