// ===== Données dyal site (mcharkin bin index.html w product.html) =====
//
// Kol item 3ndou jouj tsawer:
//   img  -> tswira "msdouda" (l plat kima kayji)
//   img2 -> tswira "m7loula" (mn dakhel / ingrédients) — katbane mli t7ot souris fou9
//
// Bach tbeddel chi tswira placeholder b wa7da 7a9i9iya:
// 7ot l fichier dyalek f "images/" b NEFS l isem (masalan images/frites.jpg) w safi.

const CATEGORIES = [
  { id: "all",      label: "Kolchi" },
  { id: "burgers",  label: "Burgers" },
  { id: "tacos",    label: "Tacos" },
  { id: "burritos", label: "Burritos" },
  { id: "pizza",    label: "Pizza" },
  { id: "pasta",    label: "Pasta" },
  { id: "salades",  label: "Salades" },
  { id: "sides",    label: "Sides" },
  { id: "drinks",   label: "Drinks" }
];

const MENU = [
  {
    id: "boukka-classic",
    cat: "burgers",
    name: "Boukka Classic",
    desc: "Steak haché tazej, cheddar mdewweb, salade, tomate, w sauce secrète dyalna.",
    ingredients: ["Steak haché 150g", "Cheddar", "Salade + tomate", "Sauce Boukka"],
    price: 35,
    img: "images/burger.jpg",
    img2: "images/burger2.jpg",
    badge: "Top vente"
  },
  {
    id: "double-cheese",
    cat: "burgers",
    name: "Double Cheese Bomb",
    desc: "Jouj steaks, jouj tranches jben, basla caramélisée. Ghi lil jou3anin b sse7.",
    ingredients: ["2x Steak haché", "Double cheddar", "Basla caramélisée", "Sauce BBQ"],
    price: 48,
    img: "images/double-cheese.jpg",
    img2: "images/double-cheese2.jpg"
  },
  {
    id: "spicy-chicken",
    cat: "burgers",
    name: "Spicy Chicken",
    desc: "Poulet mqermech, sauce harra, coleslaw bared bach y3adel l7arr.",
    ingredients: ["Poulet pané", "Sauce harra", "Coleslaw", "Pickles"],
    price: 38,
    img: "images/spicy-chicken.jpg",
    img2: "images/spicy-chicken2.jpg",
    badge: "Harr"
  },
  {
    id: "tacos-poulet",
    cat: "tacos",
    name: "Tacos Poulet",
    desc: "Poulet mtebbel, frites dakhel, jben rayeb, sauce fromagère + sauce dyalna.",
    ingredients: ["Poulet mtebbel", "Frites", "Sauce fromagère", "Galette grillée"],
    price: 32,
    img: "images/tacos.jpg",
    img2: "images/tacos2.jpg"
  },
  {
    id: "tacos-viande",
    cat: "tacos",
    name: "Tacos Viande Hachée",
    desc: "Viande hachée m3eddla b l3ebbar, frites, jben, sauce bayda.",
    ingredients: ["Viande hachée", "Frites", "Jben", "Sauce blanche"],
    price: 34,
    img: "images/tacos-viande.jpg",
    img2: "images/tacos-viande2.jpg"
  },
  {
    id: "tacos-mixte",
    cat: "tacos",
    name: "Tacos Mixte",
    desc: "Poulet + merguez f wa7ed. Ila ma 3refti chnou tkhtar, hada howa l jawab.",
    ingredients: ["Poulet", "Merguez", "Frites", "Triple sauce"],
    price: 40,
    img: "images/tacos-mixte.jpg",
    img2: "images/tacos-mixte2.jpg",
    badge: "Chef's pick"
  },
  {
    id: "burrito-poulet",
    cat: "burritos",
    name: "Burrito Poulet",
    desc: "Poulet mtebbel, rouz, l3ades 7amra, jben w guacamole, kolchi mleffef.",
    ingredients: ["Tortilla kbira", "Poulet mtebbel", "Rouz + l3ades", "Guacamole"],
    price: 38,
    img: "images/burrito-poulet.jpg",
    img2: "images/burrito-poulet2.jpg"
  },
  {
    id: "burrito-viande",
    cat: "burritos",
    name: "Burrito Viande",
    desc: "Viande hachée mtiyyba b les épices, rouz, jben cheddar w sauce chipotle.",
    ingredients: ["Tortilla kbira", "Viande hachée", "Cheddar", "Sauce chipotle"],
    price: 42,
    img: "images/burrito-viande.jpg",
    img2: "images/burrito-viande2.jpg",
    badge: "Jdid"
  },
  {
    id: "burrito-veggie",
    cat: "burritos",
    name: "Burrito Veggie",
    desc: "L3ades, rouz, khoudra mchewya, guacamole w sauce bayda. Bla l7em.",
    ingredients: ["Tortilla kbira", "L3ades 7amra", "Khoudra mchewya", "Guacamole"],
    price: 34,
    img: "images/burrito-veggie.jpg",
    img2: "images/burrito-veggie2.jpg"
  },
  {
    id: "pizza-boukka",
    cat: "pizza",
    name: "Pizza Boukka",
    desc: "Sauce tomate mtiyyba b lidd, mozzarella, poulet, poivrons w zaytoun.",
    ingredients: ["Pâte maison", "Mozzarella", "Poulet", "Poivrons + zaytoun"],
    price: 55,
    img: "images/pizza.jpg",
    img2: "images/pizza2.jpg",
    badge: "Top vente"
  },
  {
    id: "pizza-4fromages",
    cat: "pizza",
    name: "Pizza 4 Fromages",
    desc: "Mozzarella, cheddar, gouda w bleu. Lil li kayhebbou jben b sse7.",
    ingredients: ["Mozzarella", "Cheddar", "Gouda", "Bleu"],
    price: 58,
    img: "images/pizza-4fromages.jpg",
    img2: "images/pizza-4fromages2.jpg"
  },
  {
    id: "pasta-bolognaise",
    cat: "pasta",
    name: "Pasta Bolognaise",
    desc: "Viande hachée, sauce tomate mtiyyba b chwiya, parmesan mberched fou9.",
    ingredients: ["Spaghetti", "Viande hachée", "Sauce tomate", "Parmesan"],
    price: 42,
    img: "images/pasta.jpg",
    img2: "images/pasta2.jpg"
  },
  {
    id: "pasta-alfredo",
    cat: "pasta",
    name: "Pasta Alfredo",
    desc: "Sauce crème mkhelta b jben, poulet grillé, w m3adnous tazej.",
    ingredients: ["Tagliatelle", "Sauce crème", "Poulet grillé", "Parmesan"],
    price: 44,
    img: "images/pasta-alfredo.jpg",
    img2: "images/pasta-alfredo2.jpg"
  },
  {
    id: "salade-cesar",
    cat: "salades",
    name: "Salade César",
    desc: "Laitue romaine, poulet grillé, croûtons mqermchin, parmesan w sauce César.",
    ingredients: ["Laitue romaine", "Poulet grillé", "Croûtons", "Parmesan + sauce César"],
    price: 36,
    img: "images/salade-cesar.jpg",
    img2: "images/salade-cesar2.jpg"
  },
  {
    id: "salade-poulet",
    cat: "salades",
    name: "Salade Poulet Grillé",
    desc: "Khoudra tazja, poulet grillé, avocat, tomates cerises w vinaigrette lemoun.",
    ingredients: ["Mélange khoudra", "Poulet grillé", "Avocat", "Vinaigrette lemoun"],
    price: 40,
    img: "images/salade-poulet.jpg",
    img2: "images/salade-poulet2.jpg",
    badge: "Khfifa"
  },
  {
    id: "salade-mediterraneenne",
    cat: "salades",
    name: "Salade Méditerranéenne",
    desc: "Tomate, khyar, zaytoun, feta w zit zaytoun. Bla l7em, w bnina.",
    ingredients: ["Tomate + khyar", "Zaytoun", "Feta", "Zit zaytoun"],
    price: 32,
    img: "images/salade-mediterraneenne.jpg",
    img2: "images/salade-mediterraneenne2.jpg"
  },
  {
    id: "frites-maison",
    cat: "sides",
    name: "Frites Maison",
    desc: "Mqermcha mn berra, tariya mn dakhel. Assaisonnement dyalna.",
    ingredients: ["Btata tazja", "Sel mtebbel", "Sauce dyalek"],
    price: 15,
    img: "images/frites.jpg",
    img2: "images/frites2.jpg"
  },
  {
    id: "onion-rings",
    cat: "sides",
    name: "Onion Rings",
    desc: "7al9at basla mghellfin w mqermchin, m3a sauce BBQ jnabhom.",
    ingredients: ["Basla", "Panure croustillante", "Sauce BBQ"],
    price: 18,
    img: "images/onion-rings.jpg",
    img2: "images/onion-rings2.jpg"
  },
  {
    id: "nuggets",
    cat: "sides",
    name: "Nuggets x6",
    desc: "Poulet 100%, panure mqermcha, w sauce li bghiti.",
    ingredients: ["6x Nuggets", "Poulet 100%", "Sauce au choix"],
    price: 22,
    img: "images/nuggets.jpg",
    img2: "images/nuggets2.jpg"
  },
  {
    id: "milkshake",
    cat: "drinks",
    name: "Milkshake Chocolat",
    desc: "Crémeux, 7lou b l9ad, b chantilly fou9.",
    ingredients: ["Lait entier", "Chocolat", "Glace vanille", "Chantilly"],
    price: 20,
    img: "images/milkshake.jpg",
    img2: "images/milkshake2.jpg",
    badge: "7lou"
  },
  {
    id: "jus-orange",
    cat: "drinks",
    name: "Jus d'Orange",
    desc: "Limoun m3sour f l moment, bla sukkar zayed.",
    ingredients: ["Limoun tazej", "Bla sukkar", "33 cl"],
    price: 14,
    img: "images/jus-orange.jpg",
    img2: "images/jus-orange2.jpg"
  },
  {
    id: "coca",
    cat: "drinks",
    name: "Coca-Cola",
    desc: "Bared bared, 33 cl.",
    ingredients: ["33 cl", "Bared"],
    price: 8,
    img: "images/coca.jpg",
    img2: "images/coca2.jpg"
  },
  {
    id: "limonade",
    cat: "drinks",
    name: "Limonade Na3na3",
    desc: "Lemoun m3sour f l moment, na3na3 tazej w glaçons. Bared w kayfi9.",
    ingredients: ["Lemoun m3sour", "Na3na3 tazej", "Glaçons", "50 cl"],
    price: 16,
    img: "images/limonade.jpg",
    img2: "images/limonade2.jpg"
  },
  {
    id: "the-glace",
    cat: "drinks",
    name: "Thé Glacé Lemoun",
    desc: "Atay bared, lemoun w chwiya d sukkar. 50 cl.",
    ingredients: ["Atay", "Lemoun", "50 cl", "Bared"],
    price: 14,
    img: "images/the-glace.jpg",
    img2: "images/the-glace2.jpg"
  },
  {
    id: "smoothie-mangue",
    cat: "drinks",
    name: "Smoothie Mangue",
    desc: "Mangue, yaourt w chwiya d 3sel. Tkhin w bnin.",
    ingredients: ["Mangue", "Yaourt", "3sel", "Bla sukkar zayed"],
    price: 24,
    img: "images/smoothie-mangue.jpg",
    img2: "images/smoothie-mangue2.jpg",
    badge: "Jdid"
  },
  {
    id: "eau",
    cat: "drinks",
    name: "Eau Minérale",
    desc: "50 cl, barda.",
    ingredients: ["50 cl", "Barda"],
    price: 6,
    img: "images/eau.jpg",
    img2: "images/eau2.jpg"
  }
];

// Les offres li kaydouzo f l bande mtaharrka (marquee) w f section dyal offres
const OFFERS = [
  { title: "Combo Boukka −20%",   detail: "Burger + frites + drink, kol nhar mn 12h l 16h." },
  { title: "Livraison Gratuite",  detail: "Fo9 100 DH d commande, matkhelless walo f livraison." },
  { title: "2 Pizza = 1",         detail: "Kol nhar tlata, khod jouj pizza w khelles ghi wa7da." },
  { title: "Happy Hour −15%",     detail: "Mn 18h l 20h, kol commande −15% automatiquement." }
];

// 👉 Bddel had rakm b rakm dyal WhatsApp dyal l fast food (code pays + rakm, bla +)
const WHATSAPP_NUMBER = "212600000000";

const CURRENCY = "DH";
