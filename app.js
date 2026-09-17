// ===== Fonctions mcharkin bin index.html w product.html =====

const money = (n) => `${n}<small>${CURRENCY}</small>`;

const escape = (str) => String(str).replace(/[&<>"]/g, c => (
  { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]
));

/* ---------- Cartes dyal menu ---------- */

// Kol carte fiha jouj tsawer: l ola "msdouda", w l tania "m7loula"
// li katbane mli t7ot souris fou9 (opacity crossfade).
function cardHTML(item, { withAdd = false } = {}) {
  return `
    <article class="card" data-id="${item.id}">
      <div class="media">
        ${item.badge ? `<span class="badge">${escape(item.badge)}</span>` : ""}
        <img src="${item.img}" alt="${escape(item.name)}" loading="lazy">
        <img class="media-alt" src="${item.img2}" alt="${escape(item.name)} — mn dakhel" loading="lazy">
        <span class="media-tag">Mn dakhel</span>
      </div>
      <div class="card-body">
        <h3>${escape(item.name)}</h3>
        <p>${escape(item.desc)}</p>
        <div class="card-foot">
          <span class="price">${money(item.price)}</span>
          ${withAdd ? `<button class="add-btn" type="button" data-add="${item.id}" title="Zid l commande" aria-label="Zid ${escape(item.name)} l commande">+</button>` : ""}
        </div>
      </div>
    </article>
  `;
}

// Kat3ammer chi container b les cartes. Click 3la carte -> page dyal produit.
// onAdd (optionnel) = fonction li katkhdem mli client yclicki 3la "+".
function mountCards(container, items, { onAdd } = {}) {
  if (!items.length) {
    container.innerHTML = `<p class="empty-note">Ma kayn 7tta 7aja f had l catégorie daba.</p>`;
    return;
  }

  container.innerHTML = items
    .map((item, i) => cardHTML(item, { withAdd: Boolean(onAdd) })
      .replace("<article ", `<article style="animation-delay:${Math.min(i, 8) * 55}ms" `))
    .join("");

  container.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", (e) => {
      const addBtn = e.target.closest("[data-add]");
      if (addBtn) {
        onAdd?.(MENU.find(m => m.id === addBtn.dataset.add), addBtn);
        return;
      }
      window.location.href = `product.html?id=${card.dataset.id}`;
    });
  });
}

/* ---------- Nav ---------- */

function initNav() {
  const nav = document.getElementById("nav");
  const burger = document.getElementById("burgerBtn");
  const links = document.getElementById("navLinks");

  const sync = () => nav.classList.toggle("scrolled", window.scrollY > 24);
  sync();
  window.addEventListener("scroll", sync, { passive: true });

  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
  });

  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      burger.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- Reveal mli tscrolli ---------- */

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in");
      io.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px" });

  els.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 110}ms`;
    io.observe(el);
  });
}

/* ---------- WhatsApp ---------- */

function openWhatsApp(lines) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(url, "_blank", "noopener");
}
