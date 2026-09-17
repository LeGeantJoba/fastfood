// ===== Page principale =====

initNav();

/* ---------- Hero: tsawer kaydouzo wa7da wra wa7da ---------- */
// Ghi les plats li 3ndhom tswira 7a9i9iya kaybanou f hero.
const HERO_IDS = ["boukka-classic", "tacos-poulet", "pizza-boukka", "pasta-bolognaise"];
const heroItems = HERO_IDS.map(id => MENU.find(m => m.id === id)).filter(Boolean);

const heroBg = document.getElementById("heroBg");
const heroRail = document.getElementById("heroRail");

heroBg.innerHTML = heroItems.map((item, i) => `
  <div class="hero-slide${i === 0 ? " active" : ""}">
    <img src="${item.img}" alt="${escape(item.name)}" ${i === 0 ? "" : 'loading="lazy"'}>
  </div>
`).join("");

heroRail.innerHTML = heroItems.map((item, i) => `
  <button class="rail-item${i === 0 ? " active" : ""}" type="button" data-slide="${i}">
    <span>0${i + 1}</span>
    <strong>${escape(item.name)}</strong>
  </button>
`).join("");

const heroSlides = heroBg.querySelectorAll(".hero-slide");
const railItems = heroRail.querySelectorAll(".rail-item");
let heroIndex = 0;
let heroTimer;

function goToSlide(i) {
  heroIndex = i;
  heroSlides.forEach((s, si) => s.classList.toggle("active", si === i));
  railItems.forEach((r, ri) => r.classList.toggle("active", ri === i));
}

function startHero() {
  heroTimer = setInterval(() => goToSlide((heroIndex + 1) % heroSlides.length), 5000);
}

railItems.forEach(item => {
  item.addEventListener("click", () => {
    clearInterval(heroTimer);
    goToSlide(Number(item.dataset.slide));
    startHero();
  });
});

startHero();

// Parallax khafifa fou9 tsawer dyal hero
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  if (y < window.innerHeight) heroBg.style.transform = `translateY(${y * 0.22}px)`;
}, { passive: true });

/* ---------- Bande mtaharrka (marquee) ---------- */
const marqueeItems = OFFERS.map(o => o.title).concat("Livraison 15 min", "Tazej kol sba7");
const marqueeGroup = `
  <div class="marquee-group" aria-hidden="false">
    ${marqueeItems.map(t => `<span>${escape(t)}</span><i></i>`).join("")}
  </div>
`;
// Kanduplikiw l groupe bach l boucle tbane sans coupure
document.getElementById("marqueeTrack").innerHTML = marqueeGroup + marqueeGroup.replace('aria-hidden="false"', 'aria-hidden="true"');

/* ---------- Compteurs dyal les stats ---------- */
const statsEl = document.getElementById("stats");
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll("strong[data-count]").forEach(el => {
      const end = parseFloat(el.dataset.count);
      const decimals = Number(el.dataset.decimals || 0);
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      const t0 = performance.now();

      (function tick(now) {
        const p = Math.min((now - t0) / 1400, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = `${prefix}${(end * eased).toFixed(decimals)}${suffix}`;
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
    statsObserver.unobserve(entry.target);
  });
}, { threshold: 0.35 });
statsObserver.observe(statsEl);

/* ---------- Menu + filtres ---------- */
const menuGrid = document.getElementById("menuGrid");
const filtersEl = document.getElementById("filters");
const itemsField = document.getElementById("items");

// Mli client yclicki 3la "+", kanzidou l plat f l formulaire dyal commande
function addToOrder(item, btn) {
  const current = itemsField.value.trim();
  itemsField.value = current ? `${current}, ${item.name}` : item.name;
  btn.textContent = "✓";
  btn.style.color = "var(--ember)";
  setTimeout(() => {
    btn.textContent = "+";
    btn.style.color = "";
  }, 900);
}

function showCategory(cat) {
  const items = cat === "all" ? MENU : MENU.filter(m => m.cat === cat);
  mountCards(menuGrid, items, { onAdd: addToOrder });
}

filtersEl.innerHTML = CATEGORIES.map((c, i) => `
  <button class="filter${i === 0 ? " active" : ""}" type="button" data-cat="${c.id}">${escape(c.label)}</button>
`).join("");

filtersEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  filtersEl.querySelectorAll(".filter").forEach(f => f.classList.toggle("active", f === btn));
  showCategory(btn.dataset.cat);
});

showCategory("all");

/* ---------- Offres ---------- */
document.getElementById("offersGrid").innerHTML = OFFERS.map((o, i) => `
  <div class="offer reveal">
    <i>0${i + 1}</i>
    <b>${escape(o.title)}</b>
    <p>${escape(o.detail)}</p>
  </div>
`).join("");

/* ---------- Formulaire dyal commande ---------- */
document.getElementById("orderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const val = (id) => document.getElementById(id).value.trim();

  openWhatsApp([
    "Salam Boukka!",
    "Bghit ndir commande:",
    "",
    `Smiya   : ${val("name")}`,
    `Tel     : ${val("phone")}`,
    `Commande: ${val("items")}`,
    `Adresse : ${val("address")}`
  ]);
});

/* ---------- Reveal (khass ykoun mn ba3d ma tzad les offres) ---------- */
initReveal();
