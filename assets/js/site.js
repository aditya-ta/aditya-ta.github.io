/* Aditya Thagarthi Arun — personal site
   Two behaviours only: the sticky header's hairline once the page has moved,
   and the current-section state in the nav. The page's one entrance
   animation is pure CSS, so everything here is enhancement — with
   JavaScript disabled the site is complete and readable. */

(function () {
  'use strict';

  var topbar = document.querySelector('.topbar');
  if (topbar) {
    var setStuck = function () {
      topbar.classList.toggle('is-stuck', window.scrollY > 8);
    };
    setStuck();
    window.addEventListener('scroll', setStuck, { passive: true });
  }

  /* Current-section state. On a page this tall the reader should always know
     where they are. */
  var links = Array.prototype.slice.call(document.querySelectorAll('.topbar__nav a'));
  if (!links.length || !('IntersectionObserver' in window)) return;

  var sections = links
    .map(function (a) {
      var el = document.querySelector(a.getAttribute('href'));
      return el ? { link: a, el: el } : null;
    })
    .filter(Boolean);

  if (!sections.length) return;

  var visible = [];

  var mark = function () {
    var current = null;
    for (var i = 0; i < sections.length; i++) {
      if (visible.indexOf(sections[i].el) !== -1) { current = sections[i]; break; }
    }
    sections.forEach(function (s) {
      s.link.classList.toggle('is-current', current !== null && s === current);
      if (current !== null && s === current) {
        s.link.setAttribute('aria-current', 'true');
      } else {
        s.link.removeAttribute('aria-current');
      }
    });
  };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var at = visible.indexOf(entry.target);
      if (entry.isIntersecting && at === -1) visible.push(entry.target);
      else if (!entry.isIntersecting && at !== -1) visible.splice(at, 1);
    });
    mark();
  }, { rootMargin: '-60px 0px -55% 0px' });

  sections.forEach(function (s) { observer.observe(s.el); });
})();
