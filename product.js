// ===== Page dyal produit =====

initNav();

const productGrid = document.getElementById("productGrid");
const item = MENU.find(m => m.id === new URLSearchParams(location.search).get("id"));

if (!item) {
  productGrid.innerHTML = `
    <div class="notfound">
      <h1>Had l plat ma l9inahch</h1>
      <p>Wa9ila l lien khser, wla had l plat tnḥa mn l menu.</p>
      <a href="index.html#menu" class="btn btn-gold">Rjou3 l menu</a>
    </div>
  `;
} else {
  document.title = `${item.name} — Boukka`;

  productGrid.innerHTML = `
    <div class="media product-media">
      ${item.badge ? `<span class="badge">${escape(item.badge)}</span>` : ""}
      <img src="${item.img}" alt="${escape(item.name)}">
      <img class="media-alt" src="${item.img2}" alt="${escape(item.name)} — mn dakhel">
      <span class="media-tag">Mn dakhel</span>
    </div>

    <div class="product-info">
      <p class="kicker">${escape(CATEGORIES.find(c => c.id === item.cat)?.label || item.cat)}</p>
      <h1>${escape(item.name)}</h1>
      <p class="product-desc">${escape(item.desc)}</p>
      <p class="product-price">${money(item.price)}</p>

      <ul class="ingredients">
        ${item.ingredients.map(ing => `<li>${escape(ing)}</li>`).join("")}
      </ul>

      <div class="buy-row">
        <div class="qty">
          <button type="button" id="minus" aria-label="Na9es">−</button>
          <span id="qty">1</span>
          <button type="button" id="plus" aria-label="Zid">+</button>
        </div>
        <button class="btn btn-gold" type="button" id="orderBtn">Commande b WhatsApp</button>
      </div>

      <p class="product-total">Total : <b id="total">${item.price} ${CURRENCY}</b></p>
    </div>
  `;

  let qty = 1;
  const qtyEl = document.getElementById("qty");
  const totalEl = document.getElementById("total");

  function setQty(next) {
    qty = Math.min(20, Math.max(1, next));
    qtyEl.textContent = qty;
    totalEl.textContent = `${qty * item.price} ${CURRENCY}`;
  }

  document.getElementById("minus").addEventListener("click", () => setQty(qty - 1));
  document.getElementById("plus").addEventListener("click", () => setQty(qty + 1));

  document.getElementById("orderBtn").addEventListener("click", () => {
    openWhatsApp([
      "Salam Boukka!",
      "Bghit ndir commande:",
      "",
      `${qty}x ${item.name}`,
      `Total: ${qty * item.price} ${CURRENCY}`
    ]);
  });

  // Recommandé: l plats l akhrin, kanbdaw b li f nefs l catégorie
  const others = MENU.filter(m => m.id !== item.id);
  const recommended = [
    ...others.filter(m => m.cat === item.cat),
    ...others.filter(m => m.cat !== item.cat)
  ].slice(0, 4);

  document.getElementById("recommended").hidden = false;
  mountCards(document.getElementById("recommendedGrid"), recommended);
}

initReveal();
