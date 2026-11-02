(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- header ---------- */
  var header = document.getElementById("header");
  function onScroll() {
    header.classList.toggle("scrolled", (window.scrollY || document.documentElement.scrollTop) > 10);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- drawer ---------- */
  var burger = document.getElementById("burger");
  var drawer = document.getElementById("drawer");
  var overlay = document.getElementById("overlay");
  var drawerClose = document.getElementById("drawerClose");
  function closeDrawer() {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("locked");
  }
  function toggleDrawer() {
    var open = !drawer.classList.contains("open");
    drawer.classList.toggle("open", open);
    overlay.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("locked", open);
  }
  burger.addEventListener("click", toggleDrawer);
  drawerClose.addEventListener("click", closeDrawer);
  overlay.addEventListener("click", closeDrawer);
  drawer.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeDrawer); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeDrawer(); });

  /* ---------- reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* Rede de segurança: se o observer não disparar, revela o que está na tela. */
  var sweepPending = false;
  function sweepReveal() {
    sweepPending = false;
    var vh = window.innerHeight || document.documentElement.clientHeight;
    for (var i = 0; i < revealEls.length; i++) {
      var el = revealEls[i];
      if (el.classList.contains("in")) continue;
      var r = el.getBoundingClientRect();
      if (r.top < vh * 0.96 && r.bottom > 0) el.classList.add("in");
    }
  }
  function queueSweep() {
    if (sweepPending) return;
    sweepPending = true;
    if ("requestAnimationFrame" in window) requestAnimationFrame(sweepReveal);
    else setTimeout(sweepReveal, 60);
  }
  window.addEventListener("scroll", queueSweep, { passive: true });
  window.addEventListener("resize", queueSweep, { passive: true });
  window.addEventListener("load", sweepReveal);
  queueSweep();

  /* ---------- contadores ---------- */
  function runCounter(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    if (reduce) { el.textContent = target + suffix; return; }
    var start = null;
    function frame(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / 1300, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window) {
    var ioC = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { runCounter(e.target); ioC.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { ioC.observe(el); });
  } else {
    counters.forEach(runCounter);
  }

  /* ---------- filtros ---------- */
  var buttons = document.querySelectorAll(".filters button");
  var cards = document.querySelectorAll("#gridCursos .curso");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
      btn.setAttribute("aria-pressed", "true");
      var f = btn.getAttribute("data-filter");
      cards.forEach(function (card) {
        var show = f === "all" || card.getAttribute("data-cat") === f;
        card.classList.toggle("is-hidden", !show);
      });
    });
  });

  /* ---------- âncoras com offset ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var offset = header.offsetHeight + 12;
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: reduce ? "auto" : "smooth" });
      history.replaceState(null, "", id);
    });
  });

  /* ---------- fallback de imagem ---------- */
  document.querySelectorAll("img").forEach(function (img) {
    img.addEventListener("error", function () {
      img.style.visibility = "hidden";
      if (img.parentElement) img.parentElement.style.background = "linear-gradient(135deg,#e8dfc4,#e3d49f)";
    });
  });
})();
