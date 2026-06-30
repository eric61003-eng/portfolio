(() => {
  if (window.__portfolioMediaPeekFinalLoaded) return;
  window.__portfolioMediaPeekFinalLoaded = true;

  const style = document.createElement("style");
  style.textContent = `
    #portfolio-media-viewer {
      position: fixed;
      inset: 0;
      z-index: 99999;
      display: none;
      align-items: center;
      justify-content: center;
      background:
        radial-gradient(circle at 72% 50%, rgba(255,255,255,.08), transparent 34%),
        rgba(4,4,4,.9);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
    }
    #portfolio-media-viewer.pmv-open { display: flex; }
    #portfolio-media-viewer .pmv-stage {
      position: relative;
      width: min(86vw, 1480px);
      height: min(84vh, 920px);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #portfolio-media-viewer .pmv-main {
      position: relative;
      z-index: 2;
      width: min(76vw, 1280px);
      height: min(78vh, 820px);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #portfolio-media-viewer .pmv-main img,
    #portfolio-media-viewer .pmv-main video {
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      object-fit: contain;
      border-radius: 28px;
      box-shadow: 0 36px 110px rgba(0,0,0,.62);
      background: #0b0b0b;
    }
    #portfolio-media-viewer .pmv-next-peek {
      position: absolute;
      z-index: 1;
      right: -2vw;
      top: 50%;
      width: min(34vw, 560px);
      height: min(58vh, 640px);
      transform: translateY(-50%) translateX(22%);
      opacity: .24;
      filter: blur(.2px) saturate(.86);
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #portfolio-media-viewer .pmv-next-peek img,
    #portfolio-media-viewer .pmv-next-peek video {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      border-radius: 24px;
      box-shadow: 0 24px 80px rgba(0,0,0,.46);
    }
    #portfolio-media-viewer .pmv-arrow,
    #portfolio-media-viewer .pmv-close {
      position: absolute;
      z-index: 5;
      width: 64px;
      height: 64px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,.22);
      background: rgba(24,24,24,.72);
      color: #fff;
      display: grid;
      place-items: center;
      font-size: 34px;
      line-height: 1;
      cursor: pointer;
      box-shadow: 0 18px 42px rgba(0,0,0,.38);
      transition: transform .2s ease, background .2s ease, opacity .2s ease;
    }
    #portfolio-media-viewer .pmv-arrow:hover,
    #portfolio-media-viewer .pmv-close:hover {
      transform: scale(1.06);
      background: rgba(255,255,255,.14);
    }
    #portfolio-media-viewer .pmv-prev { left: 28px; top: 50%; transform: translateY(-50%); }
    #portfolio-media-viewer .pmv-prev:hover { transform: translateY(-50%) scale(1.06); }
    #portfolio-media-viewer .pmv-next { right: 28px; top: 50%; transform: translateY(-50%); }
    #portfolio-media-viewer .pmv-next:hover { transform: translateY(-50%) scale(1.06); }
    #portfolio-media-viewer .pmv-close { top: 28px; right: 28px; font-size: 36px; }
    #portfolio-media-viewer .pmv-count {
      position: absolute;
      left: 50%;
      bottom: 26px;
      z-index: 5;
      transform: translateX(-50%);
      padding: 10px 16px;
      border-radius: 999px;
      color: rgba(255,255,255,.76);
      background: rgba(255,255,255,.08);
      border: 1px solid rgba(255,255,255,.12);
      font: 700 13px/1.1 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      letter-spacing: .18em;
    }
    #portfolio-media-viewer.pmv-single .pmv-arrow,
    #portfolio-media-viewer.pmv-single .pmv-next-peek,
    #portfolio-media-viewer.pmv-single .pmv-count { display: none; }
    @media (max-width: 760px) {
      #portfolio-media-viewer .pmv-main { width: 86vw; height: 72vh; }
      #portfolio-media-viewer .pmv-next-peek { display: none; }
      #portfolio-media-viewer .pmv-arrow,
      #portfolio-media-viewer .pmv-close { width: 52px; height: 52px; font-size: 28px; }
    }
  `;
  document.head.appendChild(style);

  const overlay = document.createElement("div");
  overlay.id = "portfolio-media-viewer";
  overlay.innerHTML = `
    <button class="pmv-close" type="button" aria-label="Close">×</button>
    <button class="pmv-arrow pmv-prev" type="button" aria-label="Previous">‹</button>
    <div class="pmv-stage">
      <div class="pmv-main"></div>
      <div class="pmv-next-peek" aria-hidden="true"></div>
    </div>
    <button class="pmv-arrow pmv-next" type="button" aria-label="Next">›</button>
    <div class="pmv-count"></div>
  `;
  document.body.appendChild(overlay);

  const main = overlay.querySelector(".pmv-main");
  const nextPeek = overlay.querySelector(".pmv-next-peek");
  const count = overlay.querySelector(".pmv-count");
  const mediaSelector = "img, video";
  const skipSelector = [
    "a",
    "button",
    "nav",
    "header",
    "footer",
    ".logo-card",
    ".logo-mark",
    ".brand-logo",
    ".brand-hero",
    ".skill-card",
    ".category-card",
    ".type-card",
    ".filter-bar",
    ".tabs",
    ".tab"
  ].join(",");
  const scopeSelector = [
    ".project-detail",
    ".case-detail",
    ".project-page",
    ".detail-page",
    ".gallery",
    ".media-section",
    ".case-gallery",
    ".project-gallery",
    "article",
    "section",
    "main"
  ].join(",");

  let mediaList = [];
  let currentIndex = 0;

  function mediaSrc(el) {
    return el.currentSrc || el.getAttribute("src") || el.src || el.poster || "";
  }

  function isUsableMedia(el) {
    if (!el || el.closest(skipSelector)) return false;
    if (!mediaSrc(el)) return false;
    const rect = el.getBoundingClientRect();
    return rect.width > 80 && rect.height > 60;
  }

  function cloneMedia(el, mutedPreview = false) {
    const tag = el.tagName.toLowerCase();
    if (tag === "video") {
      const video = el.cloneNode(true);
      video.controls = !mutedPreview;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.autoplay = true;
      video.removeAttribute("width");
      video.removeAttribute("height");
      setTimeout(() => video.play?.().catch(() => {}), 40);
      return video;
    }
    const img = new Image();
    img.src = mediaSrc(el);
    img.alt = el.alt || "";
    return img;
  }

  function collectFromSameProject(el) {
    const scope = el.closest(scopeSelector) || document.body;
    const candidates = [...scope.querySelectorAll(mediaSelector)].filter(isUsableMedia);
    return candidates.length ? candidates : [el];
  }

  function render() {
    const total = mediaList.length;
    overlay.classList.toggle("pmv-single", total <= 1);
    main.replaceChildren(cloneMedia(mediaList[currentIndex]));
    nextPeek.replaceChildren();
    if (total > 1) {
      const nextIndex = (currentIndex + 1) % total;
      nextPeek.appendChild(cloneMedia(mediaList[nextIndex], true));
      count.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
    }
  }

  function openViewer(el) {
    mediaList = collectFromSameProject(el);
    currentIndex = Math.max(0, mediaList.indexOf(el));
    overlay.classList.add("pmv-open");
    render();
  }

  function closeViewer() {
    overlay.classList.remove("pmv-open");
    main.replaceChildren();
    nextPeek.replaceChildren();
  }

  function move(step) {
    if (mediaList.length <= 1) return;
    currentIndex = (currentIndex + step + mediaList.length) % mediaList.length;
    render();
  }

  document.addEventListener("click", (event) => {
    const media = event.target.closest?.(mediaSelector);
    if (!media || !isUsableMedia(media)) return;
    event.preventDefault();
    event.stopPropagation();
    openViewer(media);
  }, true);

  overlay.querySelector(".pmv-close").addEventListener("click", closeViewer);
  overlay.querySelector(".pmv-next").addEventListener("click", () => move(1));
  overlay.querySelector(".pmv-prev").addEventListener("click", () => move(-1));
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeViewer();
  });
  document.addEventListener("keydown", (event) => {
    if (!overlay.classList.contains("pmv-open")) return;
    if (event.key === "Escape") closeViewer();
    if (event.key === "ArrowRight") move(1);
    if (event.key === "ArrowLeft") move(-1);
  });
})();
