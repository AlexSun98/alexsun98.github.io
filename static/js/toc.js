// Table of contents auto-tracking on post pages. Marks the heading you are
// reading, lights the branch that leads to it, and keeps that entry inside
// the sidebar's own scroll box.
(function () {
  var nav = document.getElementById('toc');
  if (!nav) return;

  var links = nav.querySelectorAll('a[href^="#"]');
  if (!links.length) return;

  // Pair each link with its heading. Links whose target is missing are
  // dropped rather than tracked, so a stale anchor cannot break the rest.
  var items = [];
  for (var i = 0; i < links.length; i++) {
    var id = decodeURIComponent(links[i].getAttribute('href').slice(1));
    var target = id ? document.getElementById(id) : null;
    if (target) items.push({ link: links[i], target: target });
  }
  if (!items.length) return;

  var box = document.querySelector('.toc');
  var current = null;

  // A heading counts as reached once it has scrolled above this line, which
  // is roughly where the eye sits rather than at the very top of the screen.
  var LINE = 100;

  function clear() {
    var marked = nav.querySelectorAll('.active, .has-active');
    for (var i = 0; i < marked.length; i++) {
      marked[i].classList.remove('active');
      marked[i].classList.remove('has-active');
    }
  }

  function mark(item) {
    item.link.classList.add('active');
    var node = item.link.parentNode ? item.link.parentNode.parentNode : null;
    while (node && node !== nav) {
      if (node.tagName === 'LI') node.classList.add('has-active');
      node = node.parentNode;
    }
    keepInView(item.link);
  }

  function keepInView(link) {
    if (!box || box.scrollHeight <= box.clientHeight + 1) return;
    var b = box.getBoundingClientRect();
    var l = link.getBoundingClientRect();
    if (l.top < b.top + 8) box.scrollTop -= b.top + 8 - l.top;
    else if (l.bottom > b.bottom - 8) box.scrollTop += l.bottom - (b.bottom - 8);
  }

  function update() {
    var found = items[0];
    for (var i = 0; i < items.length; i++) {
      if (items[i].target.getBoundingClientRect().top > LINE) break;
      found = items[i];
    }
    // At the foot of the page the last heading wins even if it never crossed
    // the line, so a short final section is not left unmarked.
    var doc = document.documentElement;
    if (window.innerHeight + window.pageYOffset >= doc.scrollHeight - 4) {
      found = items[items.length - 1];
    }
    if (found === current) return;
    current = found;
    clear();
    mark(found);
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
