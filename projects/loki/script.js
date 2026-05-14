// Carousel prev/next buttons + "Why Loki?" modal toggle.

(function () {
  // ---- Carousel buttons (used by Loki's Catalogue) -----------------------
  document.querySelectorAll('.carousel-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const wrap = btn.closest('.carousel-wrap');
      if (!wrap) return;
      const target = wrap.querySelector(btn.dataset.target);
      if (!target) return;
      const card = target.querySelector('.compare-card, .catalog-item');
      const gap  = parseFloat(getComputedStyle(target).columnGap || getComputedStyle(target).gap) || 18;
      const step = card ? card.getBoundingClientRect().width + gap : 380;
      const dir  = btn.classList.contains('next') ? 1 : -1;
      target.scrollBy({ left: dir * step, behavior: 'smooth' });
    });
  });

  // ---- "Why Loki?" modal --------------------------------------------------
  const trigger = document.getElementById('whyLokiBtn');
  const modal   = document.getElementById('lokiModal');
  if (trigger && modal) {
    const open  = () => { modal.hidden = false; document.body.classList.add('modal-open'); };
    const close = () => { modal.hidden = true;  document.body.classList.remove('modal-open'); };

    trigger.addEventListener('click', open);
    // Any element with [data-close] (backdrop, ✕ button) closes the modal.
    modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', close));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !modal.hidden) close();
    });
  }
})();
