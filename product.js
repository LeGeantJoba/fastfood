// ===== Product detail page =====
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const item = MENU.find(m => m.id === productId);

const productGrid = document.getElementById("productGrid");
const recommendedGrid = document.getElementById("recommendedGrid");

if (!item) {
  productGrid.innerHTML = `
    <div class="product-notfound">
      <h2>Had l item ma l9inah ch 😕</h2>
      <p>Wa9ila l link kher, jerreb rjou3 l menu w khtar item mn jdid.</p>
      <a href="index.html#menu" class="btn btn-primary">Rjou3 l Menu 🍟</a>
    </div>
  `;
} else {
  document.title = `${item.name} — BOUKKA 🔥`;

  productGrid.innerHTML = `
    <div class="item-photo product-photo">
      ${item.badge ? `<span class="item-badge">${item.badge}</span>` : ""}
      <img src="${item.img}" alt="${item.name}" loading="lazy">
      ${item.img2 ? `
      <img class="img-hover" src="${item.img2}" alt="${item.name} m7loul" loading="lazy"
           onerror="this.style.display='none'">
      ` : ""}
    </div>
    <div class="product-info">
      <p class="eyebrow">${categoryLabel(item.cat)}</p>
      <h1>${item.name}</h1>
      <p class="product-desc">${item.desc}</p>
      <p class="product-price">${item.price}</p>
      <div class="qty-stepper">
        <button type="button" id="qtyMinus" aria-label="na9es">−</button>
        <span id="qtyValue">1</span>
        <button type="button" id="qtyPlus" aria-label="zid">+</button>
      </div>
      <button class="btn btn-primary btn-full" id="orderProductBtn">Commande b WhatsApp 💬</button>
    </div>
  `;

  let qty = 1;
  const qtyValue = document.getElementById("qtyValue");
  document.getElementById("qtyMinus").addEventListener("click", () => {
    qty = Math.max(1, qty - 1);
    qtyValue.textContent = qty;
  });
  document.getElementById("qtyPlus").addEventListener("click", () => {
    qty = Math.min(20, qty + 1);
    qtyValue.textContent = qty;
  });

  document.getElementById("orderProductBtn").addEventListener("click", () => {
    const message = `Salam BOUKKA! 👋
Bghit ndir commande:
🍔 ${qty}x ${item.name} (${item.price})`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });

  renderRecommended(item);
}

function categoryLabel(cat){
  const labels = { burgers: "🍔 Burger", tacos: "🌮 Tacos", pizza: "🍕 Pizza", pasta: "🍝 Pasta" };
  return labels[cat] || cat;
}

function renderRecommended(currentItem){
  const others = MENU.filter(m => m.id !== currentItem.id);
  recommendedGrid.innerHTML = "";
  others.forEach(m => {
    const card = document.createElement("div");
    card.className = "item-card";
    card.innerHTML = `
      <div class="item-photo">
        ${m.badge ? `<span class="item-badge">${m.badge}</span>` : ""}
        <img src="${m.img}" alt="${m.name}" loading="lazy">
        ${m.img2 ? `
        <img class="img-hover" src="${m.img2}" alt="${m.name} m7loul" loading="lazy"
             onerror="this.style.display='none'">
        ` : ""}
      </div>
      <div class="item-body">
        <h4>${m.name}</h4>
        <p>${m.desc}</p>
        <div class="item-foot">
          <span class="price">${m.price}</span>
        </div>
      </div>
    `;
    card.addEventListener("click", () => {
      window.location.href = `product.html?id=${m.id}`;
    });
    recommendedGrid.appendChild(card);
  });
}

// ===== Mobile nav toggle =====
const burgerBtn = document.getElementById("burgerBtn");
const navLinks = document.getElementById("navLinks");
burgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ===== Nav b shadow mli tscrolli =====
const navEl = document.getElementById("nav");
window.addEventListener("scroll", () => {
  navEl.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

// ===== Scroll reveal =====
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
