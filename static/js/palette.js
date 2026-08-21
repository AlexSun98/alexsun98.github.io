// Command palette. Ctrl/Cmd + K opens it. Type to filter, arrows to move,
// Enter to open, Esc to close. Data comes from /index.json (built by Hugo).
(function () {
  var palette = document.getElementById('palette');
  var input = document.getElementById('palette-input');
  var results = document.getElementById('palette-results');
  var openBtn = document.getElementById('palette-open');
  if (!palette || !input || !results) return;

  var items = [];
  var filtered = [];
  var active = 0;
  var loaded = false;

  // Resolve /index.json relative to the site root the page was served from.
  var base = document.querySelector('link[href$="index.json"]');
  var indexUrl = base ? base.getAttribute('href') : 'index.json';

  function load() {
    if (loaded) return Promise.resolve();
    return fetch(indexUrl)
      .then(function (r) { return r.json(); })
      .then(function (data) { items = data || []; loaded = true; })
      .catch(function () { items = []; loaded = true; });
  }

  function render() {
    results.innerHTML = '';
    filtered.forEach(function (it, i) {
      var li = document.createElement('li');
      if (i === active) li.className = 'active';
      var title = document.createElement('span');
      title.textContent = it.title;
      var kind = document.createElement('span');
      kind.className = 'kind';
      kind.textContent = it.kind;
      li.appendChild(title);
      li.appendChild(kind);
      li.addEventListener('click', function () { go(it); });
      results.appendChild(li);
    });
  }

  function filter() {
    var q = input.value.trim().toLowerCase();
    filtered = q
      ? items.filter(function (it) { return it.title.toLowerCase().indexOf(q) !== -1; })
      : items.slice();
    active = 0;
    render();
  }

  function go(it) { if (it) window.location.href = it.url; }

  function open() {
    load().then(function () {
      palette.hidden = false;
      input.value = '';
      filter();
      input.focus();
    });
  }

  function close() { palette.hidden = true; }

  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      palette.hidden ? open() : close();
      return;
    }
    if (palette.hidden) return;
    if (e.key === 'Escape') { close(); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); active = Math.min(active + 1, filtered.length - 1); render(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); active = Math.max(active - 1, 0); render(); }
    else if (e.key === 'Enter') { e.preventDefault(); go(filtered[active]); }
  });

  input.addEventListener('input', filter);
  if (openBtn) openBtn.addEventListener('click', open);
  palette.querySelectorAll('[data-palette-close]').forEach(function (el) {
    el.addEventListener('click', close);
  });
})();
