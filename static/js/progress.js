// Reading progress sticker on post pages. Fills the bar as you scroll and
// estimates minutes left from the post's reading time.
(function () {
  var bar = document.querySelector('.reading-progress .bar > div');
  var text = document.querySelector('.reading-progress .text');
  if (!bar) return;
  var minutes = text ? parseInt(text.getAttribute('data-minutes'), 10) || 1 : 1;

  function update() {
    var doc = document.documentElement;
    var scrolled = doc.scrollTop || document.body.scrollTop;
    var total = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
    var pct = total > 0 ? Math.min(100, Math.max(0, (scrolled / total) * 100)) : 0;
    bar.style.width = pct.toFixed(0) + '%';
    if (text) {
      var left = Math.max(0, Math.ceil(((100 - pct) / 100) * minutes));
      text.textContent = 'read ' + pct.toFixed(0) + '% · ~' + left + ' min left';
    }
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
