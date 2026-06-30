(() => {
  if (window.__portfolioMediaPeekV2Loaded) return;
  window.__portfolioMediaPeekV2Loaded = true;

  const VIEWER_ID = 'portfolio-peek-v2';
  const STYLE_ID = 'portfolio-peek-v2-style';

  const skipSelector = [
    'a',
    'button',
    'nav',
    'header',
    'footer',
    '[data-no-peek]',
    '.logo-card',
    '.brand-logo-card',
    '.brand-logo',
    '.brand-index',
    '.brand-tile',
    '.category-card',
    '.category-tile',
    '.skill',
    '.skill-panel',
    '.tool',
    `#${VIEWER_ID}`,
  ].join(',');

  let viewer;
  let mainStage;
  let nextStage;
  let counter;
  let items = [];
  let index = 0;

  const mediaSelector = 'img, video';

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      #${VIEWER_ID} {
        position: fixed;
        inset: 0;
        z-index: 999999;
        display: none;
        color: #f6f6f3;
        background:
          radial-gradient(circle at 76% 46%, rgba(255, 255, 255, .11), transparent 32%),
          radial-gradient(circle at 20% 15%, rgba(255, 255, 255, .08), transparent 34%),
          rgba(8, 8, 8, .88);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
      }

      #${VIEWER_ID}.is-open {
        display: block;
      }

      #${VIEWER_ID} .peek-v2-shell {
        position: absolute;
        inset: 0;
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(220px, 24vw);
        gap: clamp(16px, 3vw, 52px);
        align-items: center;
        padding: clamp(24px, 5vw, 72px);
        overflow: hidden;
      }

      #${VIEWER_ID} .peek-v2-main,
      #${VIEWER_ID} .peek-v2-next {
        position: relative;
        min-width: 0;
      }

      #${VIEWER_ID} .peek-v2-main img,
      #${VIEWER_ID} .peek-v2-main video {
        display: block;
        width: 100%;
        max-height: 82vh;
        object-fit: contain;
        border-radius: clamp(18px, 2vw, 32px);
        box-shadow: 0 32px 90px rgba(0,0,0,.55);
        background: #050505;
      }

      #${VIEWER_ID} .peek-v2-next {
        height: min(58vh, 620px);
        opacity: .28;
        transform: translateX(-4%);
        filter: saturate(.78) contrast(.9);
        pointer-events: none;
      }

      #${VIEWER_ID} .peek-v2-next::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, rgba(8,8,8,0), rgba(8,8,8,.82));
      }

      #${VIEWER_ID} .peek-v2-next img,
      #${VIEWER_ID} .peek-v2-next video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: clamp(18px, 2vw, 32px);
        box-shadow: 0 24px 70px rgba(0,0,0,.5);
        background: #050505;
      }

      #${VIEWER_ID} .peek-v2-btn {
        position: absolute;
        z-index: 3;
        width: clamp(54px, 5vw, 78px);
        height: clamp(54px, 5vw, 78px);
        border: 1px solid rgba(255,255,255,.2);
        border-radius: 999px;
        color: #fff;
        background: rgba(255,255,255,.09);
        box-shadow: 0 18px 42px rgba(0,0,0,.35);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        cursor: pointer;
        font-size: clamp(28px, 3vw, 42px);
        line-height: 1;
        transition: transform .2s ease, background .2s ease, border-color .2s ease;
      }

      #${VIEWER_ID} .peek-v2-btn:hover {
        transform: scale(1.06);
        background: rgba(255,255,255,.16);
        border-color: rgba(255,255,255,.34);
      }

      #${VIEWER_ID} .peek-v2-prev {
        left: clamp(18px, 3vw, 44px);
        top: 50%;
        translate: 0 -50%;
      }

      #${VIEWER_ID} .peek-v2-next-btn {
        right: clamp(18px, 3vw, 44px);
        top: 50%;
        translate: 0 -50%;
      }

      #${VIEWER_ID} .peek-v2-close {
        right: clamp(18px, 3vw, 44px);
        top: clamp(18px, 3vw, 44px);
        font-size: clamp(28px, 3vw, 38px);
      }

      #${VIEWER_ID} .peek-v2-counter {
        position: absolute;
        left: clamp(24px, 5vw, 72px);
        bottom: clamp(20px, 4vw, 46px);
        z-index: 4;
        padding: 10px 16px;
        border: 1px solid rgba(255,255,255,.14);
        border-radius: 999px;
        color: rgba(255,255,255,.76);
        background: rgba(0,0,0,.28);
        letter-spacing: .18em;
        font: 700 12px/1.1 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }

      @media (max-width: 900px) {
        #${VIEWER_ID} .peek-v2-shell {
          grid-template-columns: 1fr;
          padding: 74px 18px 74px;
        }

        #${VIEWER_ID} .peek-v2-next {
          display: none;
        }

        #${VIEWER_ID} .peek-v2-prev {
          left: 18px;
        }

        #${VIEWER_ID} .peek-v2-next-btn {
          right: 18px;
        }

        #${VIEWER_ID} .peek-v2-counter {
          left: 18px;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function sourceOf(el) {
    if (!el) return '';
    return el.currentSrc || el.getAttribute('src') || el.getAttribute('poster') || '';
  }

  function isMedia(el) {
    return el && (el.tagName === 'IMG' || el.tagName === 'VIDEO');
  }

  function looksLikeLogo(el) {
    const source = sourceOf(el).toLowerCase();
    const label = `${el.className || ''} ${el.alt || ''} ${el.getAttribute('aria-label') || ''}`.toLowerCase();
    return label.includes('logo') || source.includes('/logo') || source.includes('logo-') || source.includes('_logo');
  }

  function visibleEnough(el) {
    const source = sourceOf(el);
    if (!source || source.startsWith('data:')) return false;

    const rect = el.getBoundingClientRect();
    if (rect.width < 96 || rect.height < 72) return false;

    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) return false;

    return true;
  }

  function eligible(el) {
    if (!isMedia(el)) return false;
    if (el.closest(skipSelector)) return false;
    if (looksLikeLogo(el)) return false;
    return visibleEnough(el);
  }

  function collect(clicked) {
    const scope = clicked.closest('.project-detail,.case-detail,.gallery,.project-page,.detail-page,.media-section,article,section,main') || document.body;
    let list = Array.from(scope.querySelectorAll(mediaSelector)).filter(eligible);

    if (!list.includes(clicked)) {
      list = Array.from(document.querySelectorAll(mediaSelector)).filter(eligible);
    }

    const seen = new Set();
    return list.filter((el) => {
      const key = sourceOf(el);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function makeMedia(el, isPreview = false) {
    const source = sourceOf(el);
    let clone;

    if (el.tagName === 'VIDEO') {
      clone = document.createElement('video');
      clone.src = source;
      clone.poster = el.getAttribute('poster') || '';
      clone.controls = !isPreview;
      clone.autoplay = !isPreview;
      clone.muted = true;
      clone.loop = true;
      clone.playsInline = true;
    } else {
      clone = document.createElement('img');
      clone.src = source;
      clone.alt = el.alt || '';
      clone.loading = 'eager';
      clone.decoding = 'async';
    }

    return clone;
  }

  function ensureViewer() {
    if (viewer) return;

    injectStyle();

    viewer = document.createElement('div');
    viewer.id = VIEWER_ID;
    viewer.setAttribute('aria-hidden', 'true');
    viewer.innerHTML = `
      <div class="peek-v2-shell" data-peek-close>
        <div class="peek-v2-main"></div>
        <div class="peek-v2-next" aria-hidden="true"></div>
      </div>
      <button class="peek-v2-btn peek-v2-prev" type="button" aria-label="Previous image">‹</button>
      <button class="peek-v2-btn peek-v2-next-btn" type="button" aria-label="Next image">›</button>
      <button class="peek-v2-btn peek-v2-close" type="button" aria-label="Close viewer">×</button>
      <div class="peek-v2-counter"></div>
    `;

    document.body.appendChild(viewer);
    mainStage = viewer.querySelector('.peek-v2-main');
    nextStage = viewer.querySelector('.peek-v2-next');
    counter = viewer.querySelector('.peek-v2-counter');

    viewer.querySelector('.peek-v2-prev').addEventListener('click', (event) => {
      event.stopPropagation();
      move(-1);
    });

    viewer.querySelector('.peek-v2-next-btn').addEventListener('click', (event) => {
      event.stopPropagation();
      move(1);
    });

    viewer.querySelector('.peek-v2-close').addEventListener('click', close);

    viewer.addEventListener('click', (event) => {
      if (event.target && event.target.hasAttribute('data-peek-close')) close();
    });
  }

  function render() {
    if (!items.length || !mainStage || !nextStage) return;

    const current = items[index];
    const nextItem = items[(index + 1) % items.length];

    mainStage.replaceChildren(makeMedia(current));
    nextStage.replaceChildren(items.length > 1 ? makeMedia(nextItem, true) : document.createTextNode(''));
    counter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`;
  }

  function open(clicked) {
    ensureViewer();
    items = collect(clicked);
    index = Math.max(0, items.indexOf(clicked));
    render();
    viewer.classList.add('is-open');
    viewer.setAttribute('aria-hidden', 'false');
  }

  function close() {
    if (!viewer) return;
    viewer.classList.remove('is-open');
    viewer.setAttribute('aria-hidden', 'true');
    if (mainStage) mainStage.replaceChildren();
    if (nextStage) nextStage.replaceChildren();
  }

  function move(direction) {
    if (!items.length) return;
    index = (index + direction + items.length) % items.length;
    render();
  }

  document.addEventListener(
    'click',
    (event) => {
      if (!(event.target instanceof Element)) return;
      const media = event.target.closest(mediaSelector);
      if (!media || media.closest(`#${VIEWER_ID}`) || !eligible(media)) return;

      event.preventDefault();
      event.stopPropagation();
      open(media);
    },
    true
  );

  document.addEventListener('keydown', (event) => {
    if (!viewer || !viewer.classList.contains('is-open')) return;
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowRight') move(1);
    if (event.key === 'ArrowLeft') move(-1);
  });
})();
