(function () {
  if (window.__portfolioMediaPeekLoaded) return;
  window.__portfolioMediaPeekLoaded = true;

  const STYLE_ID = 'portfolio-peek-style';
  const VIEWER_ID = 'portfolio-peek-viewer';

  const css = `
    #${VIEWER_ID} {
      position: fixed;
      inset: 0;
      z-index: 999999;
      display: none;
      pointer-events: none;
      color: #fff;
      font-family: inherit;
    }
    #${VIEWER_ID}.is-open {
      display: block;
      pointer-events: auto;
    }
    .portfolio-peek-backdrop {
      position: absolute;
      inset: 0;
      background:
        radial-gradient(circle at 70% 45%, rgba(255,255,255,.10), transparent 28%),
        radial-gradient(circle at 14% 72%, rgba(255,255,255,.08), transparent 24%),
        rgba(5,5,5,.86);
      backdrop-filter: blur(20px) saturate(.9);
      -webkit-backdrop-filter: blur(20px) saturate(.9);
    }
    .portfolio-peek-stage {
      position: absolute;
      inset: 0;
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(180px, 24vw);
      align-items: center;
      gap: clamp(18px, 2.4vw, 44px);
      padding: 7vh 7vw 7vh 8vw;
      box-sizing: border-box;
    }
    .portfolio-peek-current,
    .portfolio-peek-next-preview {
      min-width: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .portfolio-peek-mediaWrap {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .portfolio-peek-current img,
    .portfolio-peek-current video {
      max-width: 78vw;
      max-height: 82vh;
      width: auto;
      height: auto;
      object-fit: contain;
      border-radius: clamp(18px, 2vw, 30px);
      background: #080808;
      box-shadow: 0 40px 120px rgba(0,0,0,.62), 0 0 0 1px rgba(255,255,255,.14);
    }
    .portfolio-peek-next-preview {
      opacity: .26;
      filter: saturate(.82) brightness(.72);
      transform: translateX(1.2vw) scale(.92);
      pointer-events: none;
      overflow: hidden;
    }
    .portfolio-peek-next-preview img,
    .portfolio-peek-next-preview video {
      width: 100%;
      height: 62vh;
      object-fit: cover;
      border-radius: clamp(18px, 1.8vw, 28px);
      background: #080808;
      box-shadow: 0 28px 90px rgba(0,0,0,.55), 0 0 0 1px rgba(255,255,255,.12);
    }
    .portfolio-peek-nav,
    .portfolio-peek-close {
      position: absolute;
      border: 1px solid rgba(255,255,255,.22);
      background: rgba(22,22,22,.52);
      color: #fff;
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      box-shadow: 0 20px 60px rgba(0,0,0,.38);
      cursor: pointer;
      transition: transform .22s ease, background .22s ease, border-color .22s ease, opacity .22s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: inherit;
      user-select: none;
    }
    .portfolio-peek-nav:hover,
    .portfolio-peek-close:hover {
      background: rgba(255,255,255,.14);
      border-color: rgba(255,255,255,.40);
      transform: scale(1.06);
    }
    .portfolio-peek-nav {
      top: 50%;
      width: clamp(54px, 5vw, 78px);
      height: clamp(54px, 5vw, 78px);
      border-radius: 999px;
      font-size: clamp(34px, 4vw, 56px);
      line-height: 1;
      translate: 0 -50%;
    }
    .portfolio-peek-prev { left: clamp(18px, 3.2vw, 56px); }
    .portfolio-peek-next { right: clamp(18px, 3.2vw, 56px); }
    .portfolio-peek-close {
      top: clamp(16px, 3vh, 38px);
      right: clamp(18px, 3.2vw, 56px);
      width: clamp(48px, 4.4vw, 68px);
      height: clamp(48px, 4.4vw, 68px);
      border-radius: 999px;
      font-size: clamp(26px, 3vw, 40px);
      line-height: 1;
    }
    .portfolio-peek-count {
      position: absolute;
      left: clamp(22px, 3.2vw, 58px);
      bottom: clamp(20px, 3.2vh, 44px);
      color: rgba(255,255,255,.72);
      letter-spacing: .18em;
      font-size: clamp(12px, 1.2vw, 15px);
      font-weight: 700;
      background: rgba(16,16,16,.36);
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 999px;
      padding: 10px 14px;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    body.portfolio-peek-ready img,
    body.portfolio-peek-ready video {
      -webkit-tap-highlight-color: transparent;
    }
    @media (max-width: 900px) {
      .portfolio-peek-stage {
        grid-template-columns: 1fr;
        padding: 8vh 5vw 8vh;
      }
      .portfolio-peek-next-preview { display: none; }
      .portfolio-peek-current img,
      .portfolio-peek-current video {
        max-width: 90vw;
        max-height: 76vh;
      }
      .portfolio-peek-prev { left: 14px; }
      .portfolio-peek-next { right: 14px; }
      .portfolio-peek-count { left: 16px; }
    }
  `;

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = css;
    document.head.appendChild(style);
    document.body.classList.add('portfolio-peek-ready');
  }

  const skipTerms = [
    'logo', 'brand-logo', 'project-logo', 'cover-logo', 'logo-card', 'brandmark',
    'skill', 'skills', 'tool', 'tools', 'software', 'nav', 'breadcrumb', 'filter',
    'tab', 'button', 'category-card', 'home-card', 'collection-card', 'brand-card',
    'project-card', 'case-card', 'menu', 'header', 'footer'
  ];

  function mediaSrc(el) {
    if (!el) return '';
    if (el.tagName === 'VIDEO') {
      const source = el.querySelector('source');
      return el.currentSrc || el.src || (source && source.src) || el.poster || '';
    }
    return el.currentSrc || el.src || '';
  }

  function nodeText(el) {
    if (!el) return '';
    return [
      el.className || '',
      el.id || '',
      el.getAttribute('alt') || '',
      el.getAttribute('aria-label') || '',
      el.getAttribute('src') || '',
      el.getAttribute('poster') || ''
    ].join(' ').toLowerCase();
  }

  function isInsideSkippedUi(el) {
    for (let node = el; node && node !== document.body; node = node.parentElement) {
      const text = nodeText(node);
      if (skipTerms.some(term => text.includes(term))) return true;
      if (node.matches && node.matches('header, nav, footer, button, [role="button"], .logo, .skills, .tools')) return true;
    }
    return false;
  }

  function visibleEnough(el) {
    const rect = el.getBoundingClientRect();
    const style = window.getComputedStyle(el);
    return rect.width >= 180 && rect.height >= 120 && style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity || 1) > 0;
  }

  function isEligibleMedia(el) {
    if (!el || !['IMG', 'VIDEO'].includes(el.tagName)) return false;
    if (el.closest(`#${VIEWER_ID}`)) return false;
    if (isInsideSkippedUi(el)) return false;
    if (!visibleEnough(el)) return false;
    const src = mediaSrc(el);
    if (!src || src.startsWith('data:')) return false;
    const rect = el.getBoundingClientRect();
    if (el.tagName === 'IMG') {
      const naturalW = el.naturalWidth || rect.width;
      const naturalH = el.naturalHeight || rect.height;
      if (naturalW < 320 || naturalH < 180) return false;
    }
    return true;
  }

  function itemFrom(el) {
    return {
      type: el.tagName === 'VIDEO' ? 'video' : 'image',
      src: mediaSrc(el),
      poster: el.poster || '',
      alt: el.getAttribute('alt') || ''
    };
  }

  function closestGalleryScope(el) {
    return el.closest('[data-gallery], [data-project], .project-gallery, .media-grid, .gallery-grid, .case-gallery, .actual-photos, .renderings, .project-detail, .case-detail, .portfolio-case, article, section') || document.querySelector('main') || document.body;
  }

  function collectItems(clicked) {
    const scope = closestGalleryScope(clicked);
    let media = Array.from(scope.querySelectorAll('img, video')).filter(isEligibleMedia);
    if (media.length < 2) {
      media = Array.from((document.querySelector('main') || document.body).querySelectorAll('img, video')).filter(isEligibleMedia);
    }
    const seen = new Set();
    return media.map(itemFrom).filter(item => {
      if (!item.src || seen.has(item.src)) return false;
      seen.add(item.src);
      return true;
    });
  }

  function makeMedia(item, preview) {
    const wrap = document.createElement('div');
    wrap.className = 'portfolio-peek-mediaWrap';
    let media;
    if (item.type === 'video') {
      media = document.createElement('video');
      media.src = item.src;
      if (item.poster) media.poster = item.poster;
      media.playsInline = true;
      media.loop = true;
      media.muted = true;
      media.autoplay = true;
      if (!preview) media.controls = true;
      media.addEventListener('loadedmetadata', () => {
        if (media.paused) media.play().catch(() => {});
      }, { once: true });
    } else {
      media = document.createElement('img');
      media.src = item.src;
      media.alt = item.alt || '';
    }
    media.draggable = false;
    wrap.appendChild(media);
    return wrap;
  }

  const state = { items: [], index: 0 };

  function ensureViewer() {
    let viewer = document.getElementById(VIEWER_ID);
    if (viewer) return viewer;
    viewer = document.createElement('div');
    viewer.id = VIEWER_ID;
    viewer.setAttribute('aria-hidden', 'true');
    viewer.innerHTML = `
      <div class="portfolio-peek-backdrop" data-close="true"></div>
      <div class="portfolio-peek-stage">
        <div class="portfolio-peek-current"></div>
        <div class="portfolio-peek-next-preview" aria-hidden="true"></div>
      </div>
      <button class="portfolio-peek-nav portfolio-peek-prev" type="button" aria-label="Previous image">‹</button>
      <button class="portfolio-peek-nav portfolio-peek-next" type="button" aria-label="Next image">›</button>
      <button class="portfolio-peek-close" type="button" aria-label="Close viewer">×</button>
      <div class="portfolio-peek-count">01 / 01</div>
    `;
    document.body.appendChild(viewer);
    viewer.querySelector('.portfolio-peek-prev').addEventListener('click', () => step(-1));
    viewer.querySelector('.portfolio-peek-next').addEventListener('click', () => step(1));
    viewer.querySelector('.portfolio-peek-close').addEventListener('click', closeViewer);
    viewer.querySelector('.portfolio-peek-backdrop').addEventListener('click', closeViewer);
    return viewer;
  }

  function render() {
    const viewer = ensureViewer();
    const current = viewer.querySelector('.portfolio-peek-current');
    const next = viewer.querySelector('.portfolio-peek-next-preview');
    current.innerHTML = '';
    next.innerHTML = '';
    if (!state.items.length) return;
    current.appendChild(makeMedia(state.items[state.index], false));
    if (state.items.length > 1) {
      next.appendChild(makeMedia(state.items[(state.index + 1) % state.items.length], true));
    }
    viewer.querySelector('.portfolio-peek-count').textContent = `${String(state.index + 1).padStart(2, '0')} / ${String(state.items.length).padStart(2, '0')}`;
  }

  function openViewer(items, index) {
    state.items = items;
    state.index = Math.max(0, index || 0);
    const viewer = ensureViewer();
    viewer.classList.add('is-open');
    viewer.setAttribute('aria-hidden', 'false');
    render();
  }

  function closeViewer() {
    const viewer = ensureViewer();
    viewer.classList.remove('is-open');
    viewer.setAttribute('aria-hidden', 'true');
    viewer.querySelectorAll('video').forEach(video => video.pause());
  }

  function step(direction) {
    if (!state.items.length) return;
    state.index = (state.index + direction + state.items.length) % state.items.length;
    render();
  }

  injectStyle();

  document.addEventListener('click', function (event) {
    const target = event.target && event.target.closest ? event.target.closest('img, video') : null;
    if (!target || !isEligibleMedia(target)) return;
    const items = collectItems(target);
    if (!items.length) return;
    const src = mediaSrc(target);
    const index = Math.max(0, items.findIndex(item => item.src === src));
    event.preventDefault();
    event.stopPropagation();
    openViewer(items, index);
  }, true);

  document.addEventListener('keydown', function (event) {
    const viewer = document.getElementById(VIEWER_ID);
    if (!viewer || !viewer.classList.contains('is-open')) return;
    if (event.key === 'Escape') closeViewer();
    if (event.key === 'ArrowRight') step(1);
    if (event.key === 'ArrowLeft') step(-1);
  });
})();
