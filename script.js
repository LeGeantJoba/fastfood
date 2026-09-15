// MENU w WHATSAPP_NUMBER mjebdin mn menu-data.js (mcharkin m3a product.html)
const menuGrid = document.getElementById("menuGrid");
const tabs = document.querySelectorAll(".tab");

function renderMenu(cat){
  menuGrid.innerHTML = "";
  const items = cat === "all" ? MENU : MENU.filter(item => item.cat === cat);
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "item-card";
    card.dataset.id = item.id;
    card.innerHTML = `
      <div class="item-photo">
        ${item.badge ? `<span class="item-badge">${item.badge}</span>` : ""}
        <img src="${item.img}" alt="${item.name}" loading="lazy">
        ${item.img2 ? `
        <img class="img-hover" src="${item.img2}" alt="${item.name} m7loul" loading="lazy"
             onerror="this.style.display='none'">
        ` : ""}
      </div>
      <div class="item-body">
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
        <div class="item-foot">
          <span class="price">${item.price}</span>
          <button class="add-btn" title="Zid l commande" data-name="${item.name}">+</button>
        </div>
      </div>
    `;
    card.addEventListener("click", (e) => {
      if (e.target.closest(".add-btn")) return;
      window.location.href = `product.html?id=${item.id}`;
    });
    menuGrid.appendChild(card);
  });
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderMenu(tab.dataset.cat);
  });
});

// Add-to-order: kayzid l item mba9i f textarea dyal commande
menuGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-btn");
  if (!btn) return;
  e.stopPropagation();
  const itemsField = document.getElementById("items");
  const name = btn.dataset.name;
  itemsField.value = itemsField.value
    ? itemsField.value.trim() + `, ${name}`
    : name;
  btn.textContent = "✓";
  setTimeout(() => (btn.textContent = "+"), 900);
});

renderMenu("all");

// ===== Banner (tsawer f ra's page kaydouzo automatiquement) =====
function setupCarousel({ trackId, dotsId, slideSelector, interval }){
  const track = document.getElementById(trackId);
  const dotsWrap = document.getElementById(dotsId);
  const items = track.querySelectorAll(slideSelector);
  let current = 0;
  let timer;

  items.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.setAttribute("aria-label", `Slide ${i + 1}`);
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => go(i));
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll("button");

  function go(i){
    current = i;
    items.forEach((s, si) => s.classList.toggle("active", si === i));
    dots.forEach((d, di) => d.classList.toggle("active", di === i));
  }
  function next(){
    go((current + 1) % items.length);
  }
  function start(){ timer = setInterval(next, interval); }
  function stop(){ clearInterval(timer); }

  go(0);
  start();
  track.addEventListener("mouseenter", stop);
  track.addEventListener("mouseleave", start);
}

setupCarousel({
  trackId: "heroBg",
  dotsId: "heroDots",
  slideSelector: ".hero-bg-slide",
  interval: 3200
});

// ===== Offers carousel (auto-slide wa7da wra wa7da) =====
setupCarousel({
  trackId: "offersTrack",
  dotsId: "offersDots",
  slideSelector: ".offer-slide",
  interval: 3800
});

// ===== Mobile nav toggle =====
const burgerBtn = document.getElementById("burgerBtn");
const navLinks = document.getElementById("navLinks");
burgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ===== Order form -> WhatsApp =====
document.getElementById("orderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const items = document.getElementById("items").value.trim();
  const address = document.getElementById("address").value.trim();

  const message = `Salam BOUKKA! 👋
Bghit ndir commande:
👤 Smiya: ${name}
📞 Tel: ${phone}
🍔 Commande: ${items}
📍 Adresse: ${address}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});

// ===== Scroll reveal (fade + slide mli l element ydkhol f viewport) =====
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 0.1}s`;
    revealObserver.observe(el);
  });
}

// ===== Nav b shadow mli tscrolli =====
const navEl = document.getElementById("nav");
window.addEventListener("scroll", () => {
  navEl.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

// ===== Animated stat counters (0 -> 15 min, 0 -> 4.9★, 0 -> +50) =====
const heroStats = document.getElementById("heroStats");
if (heroStats) {
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll("strong[data-count]").forEach(el => {
        const end = parseFloat(el.dataset.count);
        const decimals = parseInt(el.dataset.decimals || "0", 10);
        const prefix = el.dataset.prefix || "";
        const suffix = el.dataset.suffix || "";
        const duration = 1200;
        const startTime = performance.now();
        function tick(now){
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = end * eased;
          el.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
      statObserver.unobserve(entry.target);
    });
  }, { threshold: 0.4 });
  statObserver.observe(heroStats);
}

// ===== Parallax khafifa 3la tsawer dyal hero =====
const heroBgEl = document.getElementById("heroBg");
if (heroBgEl) {
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (y < 800) heroBgEl.style.transform = `translateY(${y * 0.18}px)`;
  }, { passive: true });
}
