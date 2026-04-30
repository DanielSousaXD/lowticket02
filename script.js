// Alma de Terapeuta — interactive behavior

(function () {
  'use strict';

  // Reveal-on-scroll
  const revealIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('in');
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach((el) => revealIO.observe(el));

  // FAQ toggle (single-open accordion; first item starts open)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item, i) => {
    const q = item.querySelector('.faq-q');
    if (i === 0) item.classList.add('open');
    if (!q) return;
    q.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      faqItems.forEach((it) => it.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Testimonials carousel
  const track = document.getElementById('testi-track');
  const dotsContainer = document.getElementById('testi-dots');
  const prevBtn = document.querySelector('.testi-arrow-prev');
  const nextBtn = document.querySelector('.testi-arrow-next');

  if (track && dotsContainer && prevBtn && nextBtn) {
    const slides = track.querySelectorAll('.testi-slide');
    const total = slides.length;
    let idx = 0;
    let perView = 3;

    function calcPerView() {
      const w = window.innerWidth;
      if (w < 700) return 1;
      if (w < 1080) return 2;
      return 3;
    }

    function render() {
      const maxIdx = Math.max(0, total - perView);
      if (idx > maxIdx) idx = maxIdx;
      const slideWidth = 100 / perView;
      slides.forEach((s) => {
        s.style.flex = `0 0 ${slideWidth}%`;
      });
      track.style.transform = `translateX(-${idx * slideWidth}%)`;

      dotsContainer.innerHTML = '';
      for (let i = 0; i <= maxIdx; i++) {
        const d = document.createElement('button');
        d.className = 'testi-dot' + (i === idx ? ' active' : '');
        d.setAttribute('aria-label', `Ir para slide ${i + 1}`);
        d.addEventListener('click', () => {
          idx = i;
          render();
        });
        dotsContainer.appendChild(d);
      }
    }

    function gotoNext() {
      const maxIdx = Math.max(0, total - perView);
      idx = idx >= maxIdx ? 0 : idx + 1;
      render();
    }
    function gotoPrev() {
      const maxIdx = Math.max(0, total - perView);
      idx = idx <= 0 ? maxIdx : idx - 1;
      render();
    }

    prevBtn.addEventListener('click', gotoPrev);
    nextBtn.addEventListener('click', gotoNext);

    window.addEventListener('resize', () => {
      perView = calcPerView();
      render();
    });

    perView = calcPerView();
    render();

    setInterval(gotoNext, 6000);
  }
})();
