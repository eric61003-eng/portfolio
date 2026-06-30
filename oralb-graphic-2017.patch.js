(() => {
  const sectionId = "oralb-graphic-2017-section";
  const styleId = `${sectionId}-style`;
  const assets = [
    {
      src: "assets/oral-b/2017-dental-expo/graphic/oralb-2017-test-drive-counter-a.jpg",
      layout: "wide",
      alt: "Oral-B Test Drive counter visual A",
    },
    {
      src: "assets/oral-b/2017-dental-expo/graphic/oralb-2017-test-drive-counter-b.jpg",
      layout: "wide",
      alt: "Oral-B Test Drive counter visual B",
    },
    {
      src: "assets/oral-b/2017-dental-expo/graphic/oralb-2017-bluetooth-app.jpg",
      layout: "square",
      alt: "Oral-B Bluetooth app visual",
    },
    {
      src: "assets/oral-b/2017-dental-expo/graphic/oralb-2017-test-drive-column.jpg",
      layout: "tall",
      alt: "Oral-B Test Drive column visual",
    },
    {
      src: "assets/oral-b/2017-dental-expo/graphic/oralb-2017-disney-timer.jpg",
      layout: "tall",
      alt: "Oral-B Disney timer visual",
    },
  ];

  function pageText() {
    return (document.body?.innerText || "").toLowerCase();
  }

  function pageHref() {
    return decodeURIComponent(location.href).toLowerCase();
  }

  function isOralBContext() {
    const haystack = `${pageText()} ${pageHref()}`;
    return haystack.includes("oral-b") || haystack.includes("oralb");
  }

  function isGraphicContext() {
    const haystack = `${pageText()} ${pageHref()}`;
    return (
      haystack.includes("平面") ||
      haystack.includes("graphic") ||
      haystack.includes("key visual") ||
      haystack.includes("campaign") ||
      haystack.includes("visual")
    );
  }

  function ensureStyles() {
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .ob2017-section {
        max-width: 1680px;
        margin: clamp(56px, 7vw, 110px) auto 0;
        padding: 0 clamp(20px, 4vw, 72px);
        color: #f5f5f2;
      }

      .ob2017-kicker {
        margin: 0 0 14px;
        font-size: 13px;
        letter-spacing: .28em;
        text-transform: uppercase;
        color: rgba(245, 245, 242, .55);
      }

      .ob2017-title {
        margin: 0 0 28px;
        font-size: clamp(44px, 7vw, 108px);
        line-height: .9;
        font-weight: 800;
        letter-spacing: -.055em;
      }

      .ob2017-title span {
        display: block;
        margin-top: 18px;
        font-size: clamp(22px, 2.8vw, 42px);
        line-height: 1;
        letter-spacing: .22em;
        color: rgba(245, 245, 242, .72);
      }

      .ob2017-rule {
        height: 1px;
        margin: 0 0 30px;
        background: linear-gradient(90deg, rgba(255,255,255,.36), rgba(255,255,255,.05));
      }

      .ob2017-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 24px;
      }

      .ob2017-card {
        min-height: 320px;
        margin: 0;
        padding: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border: 1px solid rgba(255,255,255,.18);
        border-radius: 26px;
        background: linear-gradient(145deg, rgba(255,255,255,.06), rgba(255,255,255,.015));
        box-shadow: 0 22px 70px rgba(0,0,0,.38);
      }

      .ob2017-card.is-wide {
        grid-column: span 2;
        min-height: 260px;
      }

      .ob2017-card.is-tall {
        min-height: 720px;
      }

      .ob2017-card img {
        width: 100%;
        height: 100%;
        max-height: 820px;
        object-fit: contain;
        display: block;
        border-radius: 18px;
        background: #050505;
      }

      .ob2017-card.is-wide img {
        max-height: 360px;
      }

      @media (max-width: 900px) {
        .ob2017-grid {
          grid-template-columns: 1fr;
        }

        .ob2017-card.is-wide {
          grid-column: auto;
        }

        .ob2017-card,
        .ob2017-card.is-tall {
          min-height: auto;
        }

        .ob2017-card img {
          max-height: none;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function createSection() {
    const node = document.createElement("section");
    node.id = sectionId;
    node.className = "ob2017-section";
    node.innerHTML = `
      <p class="ob2017-kicker">Graphic Design / Oral-B</p>
      <h2 class="ob2017-title">Oral-B Test Drive Graphics <span>2017</span></h2>
      <div class="ob2017-rule"></div>
      <div class="ob2017-grid">
        ${assets
          .map(
            (asset) => `
              <figure class="ob2017-card is-${asset.layout}">
                <img src="${asset.src}" alt="${asset.alt}" loading="lazy" decoding="async">
              </figure>
            `,
          )
          .join("")}
      </div>
    `;
    return node;
  }

  function findMount() {
    const main =
      document.querySelector("main") ||
      document.querySelector(".page") ||
      document.querySelector("#app") ||
      document.body;
    const headings = Array.from(document.querySelectorAll("h1,h2,h3,.section-title,.case-title"));
    const graphicHeading = headings.find((el) =>
      /平面|key visual|campaign|graphic/i.test(el.textContent || ""),
    );

    return graphicHeading?.parentElement || main;
  }

  function mount() {
    const existing = document.getElementById(sectionId);

    if (!isOralBContext() || !isGraphicContext()) {
      existing?.remove();
      return;
    }

    ensureStyles();
    if (existing) return;
    findMount().appendChild(createSection());
  }

  let timer = null;
  function scheduleMount() {
    clearTimeout(timer);
    timer = setTimeout(mount, 160);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }

  window.addEventListener("hashchange", scheduleMount);
  window.addEventListener("popstate", scheduleMount);
  new MutationObserver(scheduleMount).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
  setInterval(mount, 1500);
})();
