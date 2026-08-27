/* =========================================================
   Aekant Villa — Site Interactions
   ========================================================= */

document.addEventListener('DOMContentLoaded', async () => {
  await renderFullGallery();
  initYear();
  initStickyNav();
  initMobileMenu();
  initSmoothAnchorScroll();
  initScrollAnimations();
  initGalleryLightbox();
  initQuotes();
  initScrollTopButton();
});

/* ---------- Full Gallery Page (probes images/gallery/1.jpg, 2.jpg, ... via js/manifest.js config) ---------- */
function checkImageExists(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

async function renderFullGallery() {
  const grid = document.getElementById('fullGalleryGrid');
  if (!grid || typeof GALLERY_CONFIG === 'undefined') return;

  const { folder, extension, start } = GALLERY_CONFIG;
  const maxCheck = 500; // safety cap in case of an unbroken numbering mistake
  const batchSize = 10; // probe a batch at a time instead of one round trip per photo
  const numbers = [];

  for (let base = start; base - start < maxCheck; base += batchSize) {
    const batch = Array.from({ length: batchSize }, (_, n) => base + n);
    const found = await Promise.all(
      batch.map((n) => checkImageExists(`${folder}/${n}.${extension}`))
    );
    const gap = found.indexOf(false);
    numbers.push(...(gap === -1 ? batch : batch.slice(0, gap)));
    if (gap !== -1) break;
  }

  // The first row is above the fold, so let it load eagerly for a faster LCP.
  const eagerCount = 3;

  grid.innerHTML = numbers.map((n, idx) => {
    const src = `${folder}/${n}.${extension}`;
    const alt = (typeof GALLERY_ALT !== 'undefined' && GALLERY_ALT[n])
      || `Aekant Villa, private pool villa near Trimbakeshwar, Nashik — photo ${idx + 1}`;
    const loading = idx < eagerCount ? 'eager' : 'lazy';
    return `
    <button class="gallery__item fade-in-up" data-full="${src}">
      <img src="${src}" alt="${alt}" loading="${loading}" decoding="async" width="500" height="500" />
    </button>
  `;
  }).join('');
}

/* ---------- Footer Year ---------- */
function initYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ---------- Sticky Nav (changes style on scroll) ---------- */
function initStickyNav() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const toggleScrolled = () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 40);
  };

  toggleScrolled();
  window.addEventListener('scroll', debounce(toggleScrolled, 10), { passive: true });
}

/* ---------- Mobile Hamburger Menu ---------- */
function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  if (!toggle || !menu) return;

  const closeMenu = () => {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

/* ---------- Smooth Scroll for Anchor Links ---------- */
function initSmoothAnchorScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.length <= 1) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ---------- Fade-in on Scroll (IntersectionObserver) ---------- */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in, .fade-in-up');
  if (!elements.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ---------- Gallery Lightbox ---------- */
function initGalleryLightbox() {
  const galleryItems = Array.from(document.querySelectorAll('.gallery__item'));
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  if (!galleryItems.length || !lightbox || !lightboxImage) return;

  let currentIndex = 0;

  const openLightbox = (index) => {
    currentIndex = index;
    updateLightboxImage();
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };

  const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  };

  const updateLightboxImage = () => {
    const item = galleryItems[currentIndex];
    const fullSrc = item.dataset.full;
    const altText = item.querySelector('img')?.alt || '';
    lightboxImage.src = fullSrc;
    lightboxImage.alt = altText;
  };

  const showPrev = () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateLightboxImage();
  };

  const showNext = () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateLightboxImage();
  };

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });
}

/* ---------- Guest Quotes (one pull-quote at a time) ---------- */
function initQuotes() {
  const root = document.getElementById('quotes');
  if (!root) return;

  const quotes = Array.from(root.querySelectorAll('.quote'));
  const indexEl = document.getElementById('quoteIndex');
  const totalEl = document.getElementById('quoteTotal');
  if (!quotes.length) return;

  const pad = (n) => String(n).padStart(2, '0');
  let current = 0;

  const show = (next) => {
    current = (next + quotes.length) % quotes.length;
    quotes.forEach((q, i) => q.classList.toggle('is-active', i === current));
    if (indexEl) indexEl.textContent = pad(current + 1);
  };

  root.querySelectorAll('.quotes__btn').forEach((btn) => {
    btn.addEventListener('click', () => show(current + Number(btn.dataset.dir)));
  });

  // Arrow keys work once focus is anywhere inside the quote block.
  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); show(current - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); show(current + 1); }
  });

  if (totalEl) totalEl.textContent = pad(quotes.length);
  show(0);
}

/* ---------- Scroll to Top Button ---------- */
function initScrollTopButton() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  const toggleVisibility = () => {
    const shouldShow = window.scrollY > 480;
    btn.hidden = !shouldShow;
    btn.classList.toggle('is-visible', shouldShow);
  };

  toggleVisibility();
  window.addEventListener('scroll', debounce(toggleVisibility, 10), { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- Utility: Debounce ---------- */
function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
