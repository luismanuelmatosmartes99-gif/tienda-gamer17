// =============================================
//   NEXUSGEAR - TIENDA GAMER
//   java.js
// =============================================

// ----- BASE DE DATOS DE PRODUCTOS -----
const PRODUCTS = [
  {
    id: 1,
    name: 'DeathAdder V3 HyperSpeed',
    brand: 'Razer',
    cat: 'Periféricos',
    img: 'IMG/deathAdder.webp',
    price: 69.99,
    oldPrice: 89.99,
    rating: 5,
    reviews: 1200,
    badge: 'hot',
    specs: { Sensor: 'Focus Pro 30K', DPI: '100-30,000', Peso: '63g', Conexión: 'Wireless 2.4GHz' },
    reviews_list: [{ user: 'ProGamer99', stars: 5, text: 'La mejor inversión gaming que hice. Precisión increíble.' }]
  },
  {
    id: 2,
    name: 'Apex Pro TKL Wireless 2024',
    brand: 'SteelSeries',
    cat: 'Periféricos',
    img: 'IMG/ApexProTKL.webp',
    price: 189.99,
    oldPrice: null,
    rating: 4,
    reviews: 847,
    badge: 'new',
    specs: { Switches: 'OmniPoint 2.0', Backlight: 'RGB', Layout: 'TKL', Conexión: 'Wireless' },
    reviews_list: [{ user: 'KeyboardKing', stars: 4, text: 'Excelente teclado, los switches ajustables son únicos.' }]
  },
  {
    id: 3,
    name: 'Cloud Alpha Wireless Pro',
    brand: 'HyperX',
    cat: 'Audio',
    img: 'IMG/hyperXX.webp',
    price: 99.99,
    oldPrice: 149.99,
    rating: 5,
    reviews: 2100,
    badge: 'sale',
    specs: { Drivers: '53mm', Frecuencia: '15Hz-21kHz', Batería: '300h', Micrófono: 'Desmontable' },
    reviews_list: [{ user: 'SoundMaster', stars: 5, text: '300 horas de batería son reales. Sonido espectacular.' }]
  },
  {
    id: 4,
    name: 'Swift 360Hz G-Sync',
    brand: 'ASUS ROG',
    cat: 'Monitores',
    img: 'IMG/Swift360Hz.webp',
    price: 549.99,
    oldPrice: null,
    rating: 5,
    reviews: 560,
    badge: null,
    specs: { Panel: 'IPS 360Hz', Tamaño: '24.5"', Resolución: '1080p', Tiempo_resp: '0.5ms' },
    reviews_list: [{ user: 'FPSPro', stars: 5, text: '360Hz marca la diferencia en FPS competitivo.' }]
  },
  {
    id: 5,
    name: 'DualSense Edge Controller',
    brand: 'PlayStation',
    cat: 'Consolas',
    img: 'IMG/mando.webp',
    price: 199.99,
    oldPrice: null,
    rating: 4,
    reviews: 3400,
    badge: 'hot',
    specs: { Conectividad: 'BT 5.1 / USB-C', Batería: '12h', Perfil: 'Personalizable', Compatible: 'PS5 / PC' },
    reviews_list: [{ user: 'ConsoleKing', stars: 4, text: 'El mejor control de PlayStation hasta la fecha.' }]
  },
  {
    id: 6,
    name: 'Titan Evo 2025 Edition',
    brand: 'SecretLab',
    cat: 'Sillas',
    img: 'IMG/chair.webp',
    price: 379.99,
    oldPrice: 449.99,
    rating: 5,
    reviews: 918,
    badge: 'sale',
    specs: { Material: 'SoftWeave', Recline: '165°', Soporte: 'Lumbar magnético', Peso_max: '180kg' },
    reviews_list: [{ user: 'LongSession', stars: 5, text: 'Llevo 8 horas sentado y sin dolores. Increíble.' }]
  },
  {
    id: 7,
    name: 'BlackWidow V4 Pro',
    brand: 'Razer',
    cat: 'Periféricos',
    img: 'IMG/v4pro.webp',
    price: 229.99,
    oldPrice: 249.99,
    rating: 4,
    reviews: 632,
    badge: 'new',
    specs: { Switches: 'Razer Green', Rueda: 'Multi-función', Layout: 'Full', Conexión: 'Wireless Triple' },
    reviews_list: []
  },
  {
    id: 8,
    name: 'Odyssey G7 32" QHD',
    brand: 'Samsung',
    cat: 'Monitores',
    img: 'IMG/OdysseyQHD.webp',
    price: 449.99,
    oldPrice: 549.99,
    rating: 4,
    reviews: 1089,
    badge: 'sale',
    specs: { Panel: 'VA 240Hz', Tamaño: '32"', Resolución: '2560x1440', Curvatura: '1000R' },
    reviews_list: []
  },
  {
    id: 9,
    name: 'Kraken V3 HyperSense',
    brand: 'Razer',
    cat: 'Audio',
    img: 'IMG/KrakenV3.webp',
    price: 129.99,
    oldPrice: null,
    rating: 4,
    reviews: 445,
    badge: null,
    specs: { Drivers: '50mm', Frecuencia: '12Hz-28kHz', USB: 'USB-A', Vibración: 'HyperSense' },
    reviews_list: []
  },
  {
    id: 10,
    name: 'H9 Elite Gaming Case',
    brand: 'NZXT',
    cat: 'Cases',
    img: 'IMG/case.webp',
    price: 169.99,
    oldPrice: 199.99,
    rating: 5,
    reviews: 780,
    badge: 'hot',
    specs: { Factor: 'Mid-Tower ATX', Paneles: 'Vidrio templado dual', Ventiladores: '4x 120mm RGB', USB: 'USB-C 3.2 frontal' },
    reviews_list: [{ user: 'BuildMaster', stars: 5, text: 'El mejor case para mostrar tu build. Flujo de aire increíble y se ve espectacular.' }]
  },
  {
    id: 11,
    name: 'PC Gamer Ryzen 7 5700X RTX 5060',
    brand: 'YAWYORE',
    cat: 'PCs',
    img: 'IMG/YAWYORE.webp',
    price: 1299.99,
    oldPrice: 1499.99,
    rating: 5,
    reviews: 27,
    badge: 'hot',
    specs: { CPU: 'AMD Ryzen 7 5700X', GPU: 'GeForce RTX 5060', RAM: '32GB DDR4', Almacenamiento: '1TB SSD NVMe M.2', Refrigeración: 'Líquida 240mm ARGB', Conectividad: 'WiFi + Bluetooth' },
    reviews_list: [{ user: 'GamerRD', stars: 5, text: 'Increíble rendimiento en juegos AAA a 1440p. El enfriamiento líquido mantiene todo fresco.' }]
  }
];

// ----- ESTADO GLOBAL -----
let cart = [];
let compareList = [];
let currentModal = null;
let selectedStars = 0;
let countdownSecs = 47 * 3600 + 23 * 60 + 59;

// =============================================
//   NAVEGACIÓN
// =============================================
function goPage(p) {
  document.querySelectorAll('.page').forEach(x => x.classList.remove('active'));
  document.querySelectorAll('nav ul a').forEach(x => x.classList.remove('active'));

  document.getElementById('page-' + p).classList.add('active');

  const navLink = document.getElementById('nav-' + p);
  if (navLink) navLink.classList.add('active');

  if (p === 'cart') renderCart();
  if (p === 'products') renderProducts();
  if (p === 'compare') renderCompare();
  if (p === 'checkout') renderCheckout();

  window.scrollTo(0, 0);
}

// =============================================
//   TOAST (NOTIFICACIONES)
// =============================================
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// =============================================
//   FILTROS Y CATEGORÍAS
// =============================================
function filterCat(cat) {
  document.getElementById('fcat').value = cat;
  goPage('products');
}

// =============================================
//   RENDERIZADO DE PRODUCTOS
// =============================================
function renderProducts() {
  renderGrid('products-grid', PRODUCTS, false);
}

function renderGrid(id, prods, limit) {
  const search = (document.getElementById('search') || { value: '' }).value.toLowerCase();
  const cat = (document.getElementById('fcat') || { value: '' }).value;
  const sort = (document.getElementById('fsort') || { value: '' }).value;
  const onSale = document.getElementById('fonSale') && document.getElementById('fonSale').checked;

  let list = prods.filter(p => {
    if (cat && p.cat !== cat) return false;
    if (onSale && !p.oldPrice) return false;
    if (search && !p.name.toLowerCase().includes(search)
      && !p.brand.toLowerCase().includes(search)) return false;
    return true;
  });

  if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
  if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);

  if (limit) list = list.slice(0, 6);

  const grid = document.getElementById(id);
  if (!grid) return;
  grid.innerHTML = list.map(p => cardHTML(p)).join('');
}

// HTML de una tarjeta de producto
function cardHTML(p) {
  const badge = p.badge
    ? `<span class="pbadge ${p.badge}">${p.badge === 'hot' ? '🔥 HOT' : p.badge === 'new' ? 'NEW' : 'SALE'}</span>`
    : '';

  const cmpOn = compareList.find(x => x.id === p.id) ? 'on' : '';
  const cmpSelected = compareList.find(x => x.id === p.id) ? 'compare-selected' : '';
  const stars = '★'.repeat(p.rating) + '☆'.repeat(5 - p.rating);
  const old = p.oldPrice ? `<span class="pold">$${p.oldPrice.toFixed(2)}</span>` : '';

  const imgHTML = p.img
    ? `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:contain;">`
    : '📦';

  return `
    <div class="pcard ${cmpSelected}" onclick="openModal(${p.id})">
      ${badge}
      <button class="pcmp-btn ${cmpOn}" onclick="toggleCompare(event, ${p.id})">⊞ CMP</button>
      <div class="pimg">${imgHTML}</div>
      <div class="pinfo">
        <div class="pbrand">${p.brand}</div>
        <div class="pname">${p.name}</div>
        <div class="pstars">${stars} <span>(${p.reviews.toLocaleString()})</span></div>
        <div class="pfooter">
          <div>${old}<span class="price">$${p.price.toFixed(2)}</span></div>
          <button class="btn-add" onclick="addCart(event, ${p.id})">+ ADD</button>
        </div>
      </div>
    </div>`;
}

// =============================================
//   CARRITO
// =============================================
function addCart(e, id) {
  e.stopPropagation();
  const p = PRODUCTS.find(x => x.id === id);
  const existing = cart.find(x => x.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...p, qty: 1 });
  }

  updateCartCount();
  showToast(`✓ ${p.name} agregado`);

  const btn = e.target;
  btn.textContent = '✓ ADDED';
  btn.classList.add('added');
  setTimeout(() => {
    btn.textContent = '+ ADD';
    btn.classList.remove('added');
  }, 1500);
}

function updateCartCount() {
  const total = cart.reduce((sum, x) => sum + x.qty, 0);
  document.getElementById('cart-count').textContent = total;
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(x => x.id !== id);
  updateCartCount();
  renderCart();
}

function removeItem(id) {
  cart = cart.filter(x => x.id !== id);
  updateCartCount();
  renderCart();
}

function applyCoupon() {
  const code = document.getElementById('coupon').value.trim().toUpperCase();
  if (code === 'NEXUS10') showToast('✓ Cupón NEXUS10: 10% OFF aplicado');
  else if (code === 'GAMER20') showToast('✓ Cupón GAMER20: 20% OFF aplicado');
  else showToast('⚠ Cupón no válido');
}

function renderCart() {
  const el = document.getElementById('cart-content');

  if (cart.length === 0) {
    el.innerHTML = `
      <div class="empty-cart">
        <div class="eico">🛒</div>
        <h3>Tu carrito está vacío</h3>
        <p>Explora nuestro catálogo y agrega productos</p>
        <br>
        <button class="btn-primary" onclick="goPage('products')">IR AL CATÁLOGO</button>
      </div>`;
    return;
  }

  const subtotal = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const shipping = subtotal > 200 ? 0 : 14.99;
  const total = subtotal + shipping;
  const freeMsg = shipping > 0
    ? `<div style="font-size:11px;color:var(--td);margin-top:-4px;padding-bottom:8px">Gratis en pedidos +$200</div>`
    : '';

  el.innerHTML = `
    <section class="section">
      <p class="sec-label">// TIENDA</p>
      <h2 class="sec-title">Mi <span>Carrito</span></h2>
    </section>
    <div class="cart-wrap">
      <div class="cart-items">
        ${cart.map(item => `
          <div class="cart-item">
            <div class="ci-img">${item.img
      ? `<img src="${item.img}" alt="${item.name}" style="width:100%;height:100%;object-fit:contain;">`
      : '📦'}
            </div>
            <div class="ci-info">
              <div class="ci-brand">${item.brand}</div>
              <div class="ci-name">${item.name}</div>
              <div class="ci-controls">
                <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
                <span class="qty-val">${item.qty}</span>
                <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                <button class="ci-remove" onclick="removeItem(${item.id})">QUITAR</button>
              </div>
            </div>
            <div class="ci-price">$${(item.price * item.qty).toFixed(2)}</div>
          </div>
        `).join('')}
      </div>
      <div>
        <div class="cart-summary">
          <div class="cs-title">RESUMEN</div>
          <div class="cs-row"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
          <div class="cs-row">
            <span>Envío</span>
            <span style="color:${shipping === 0 ? '#00e676' : 'inherit'}">${shipping === 0 ? 'GRATIS' : '$' + shipping.toFixed(2)}</span>
          </div>
          ${freeMsg}
          <div class="coupon-row">
            <input class="coupon-input" id="coupon" placeholder="Código de descuento">
            <button class="btn-coupon" onclick="applyCoupon()">APLICAR</button>
          </div>
          <div class="cs-row total"><span>TOTAL</span><span class="cv">$${total.toFixed(2)}</span></div>
          <button class="btn-checkout" onclick="goPage('checkout')">IR AL PAGO →</button>
        </div>
      </div>
    </div>`;
}

// =============================================
//   COMPARADOR
// =============================================
function toggleCompare(e, id) {
  e.stopPropagation();
  const p = PRODUCTS.find(x => x.id === id);
  const idx = compareList.findIndex(x => x.id === id);

  if (idx >= 0) {
    compareList.splice(idx, 1);
  } else {
    if (compareList.length >= 3) {
      showToast('⚠ Máximo 3 productos para comparar');
      return;
    }
    compareList.push(p);
  }

  renderProducts();

  const bar = document.getElementById('compare-bar');
  bar.classList.toggle('show', compareList.length > 0);
  document.getElementById('cmp-info').textContent =
    `${compareList.length} producto(s) seleccionado(s) para comparar`;
}

function renderCompare() {
  const el = document.getElementById('compare-content');

  if (compareList.length < 2) {
    el.innerHTML = `
      <div style="text-align:center;padding:60px;color:var(--td)">
        <div style="font-size:60px;margin-bottom:16px">⊞</div>
        <div style="font-family:Orbitron,monospace;font-size:16px;color:var(--tm);margin-bottom:8px">Sin productos seleccionados</div>
        <p>Ve al catálogo y presiona el botón ⊞ CMP en los productos que quieras comparar</p>
        <br>
        <button class="btn-primary" onclick="goPage('products')">IR AL CATÁLOGO</button>
      </div>`;
    return;
  }

  const allKeys = [...new Set(compareList.flatMap(p => Object.keys(p.specs)))];

  el.innerHTML = `
    <div class="comp-grid" style="grid-template-columns: repeat(${compareList.length}, 1fr)">
      ${compareList.map(p => `
        <div class="comp-col">
          <div class="comp-img-row">${p.img
      ? `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:contain;">`
      : '📦'}
          </div>
          <div class="comp-row">
            <div class="comp-row-label">Producto</div>
            <div class="comp-row-val" style="font-family:Orbitron,monospace;font-size:11px">${p.name}</div>
          </div>
          <div class="comp-row">
            <div class="comp-row-label">Marca</div>
            <div class="comp-row-val" style="color:var(--np)">${p.brand}</div>
          </div>
          <div class="comp-row">
            <div class="comp-row-label">Precio</div>
            <div class="comp-row-val best">$${p.price.toFixed(2)}</div>
          </div>
          <div class="comp-row">
            <div class="comp-row-label">Rating</div>
            <div class="comp-row-val">${'★'.repeat(p.rating)}</div>
          </div>
          <div class="comp-row">
            <div class="comp-row-label">Categoría</div>
            <div class="comp-row-val">${p.cat}</div>
          </div>
          ${allKeys.map(k => `
            <div class="comp-row">
              <div class="comp-row-label">${k.replace('_', ' ')}</div>
              <div class="comp-row-val">${p.specs[k] || '—'}</div>
            </div>
          `).join('')}
          <div class="comp-row">
            <button class="btn-primary" onclick="addCart(event, ${p.id})" style="width:100%;margin-top:4px">+ ADD</button>
          </div>
        </div>
      `).join('')}
    </div>`;
}

// =============================================
//   MODAL DE PRODUCTO
// =============================================
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  currentModal = p;

  document.getElementById('m-img').innerHTML = p.img
    ? `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:contain;">`
    : '📦';

  document.getElementById('m-brand').textContent = p.brand;
  document.getElementById('m-name').textContent = p.name;
  document.getElementById('m-price').textContent = '$' + p.price.toFixed(2);
  document.getElementById('m-old').textContent = p.oldPrice ? '$' + p.oldPrice.toFixed(2) : '';
  document.getElementById('m-stars').textContent =
    '★'.repeat(p.rating) + '☆'.repeat(5 - p.rating) + ` (${p.reviews.toLocaleString()} reseñas)`;

  document.getElementById('m-specs').innerHTML = Object.entries(p.specs)
    .map(([k, v]) => `
      <div class="spec-row">
        <span class="sk">${k.replace('_', ' ')}</span>
        <span class="sv">${v}</span>
      </div>`)
    .join('');

  renderModalReviews(p);

  selectedStars = 0;
  updateStarUI();
  document.getElementById('rev-input').value = '';

  document.getElementById('modal-overlay').classList.add('open');
}

function renderModalReviews(p) {
  const el = document.getElementById('m-reviews');
  if (!p.reviews_list || p.reviews_list.length === 0) {
    el.innerHTML = '<div style="color:var(--td);font-size:13px;margin-bottom:12px">Aún no hay reseñas. ¡Sé el primero!</div>';
    return;
  }
  el.innerHTML = p.reviews_list.map(r => `
    <div class="rev-item">
      <div class="rev-header">
        <span class="rev-user">${r.user}</span>
        <span class="rev-stars">${'★'.repeat(r.stars)}</span>
      </div>
      <div class="rev-text">${r.text}</div>
    </div>`).join('');
}

function closeModal(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModalDirect();
}

function closeModalDirect() {
  document.getElementById('modal-overlay').classList.remove('open');
}

function addFromModal() {
  if (!currentModal) return;
  const existing = cart.find(x => x.id === currentModal.id);
  if (existing) existing.qty++;
  else cart.push({ ...currentModal, qty: 1 });
  updateCartCount();
  showToast(`✓ ${currentModal.name} agregado`);
  closeModalDirect();
}

// =============================================
//   RESEÑAS
// =============================================
function setStars(n) {
  selectedStars = n;
  updateStarUI();
}

function updateStarUI() {
  document.querySelectorAll('#star-sel span').forEach((s, i) => {
    s.classList.toggle('lit', i < selectedStars);
  });
}

function submitReview() {
  const text = document.getElementById('rev-input').value.trim();
  if (!text || !selectedStars) {
    showToast('⚠ Selecciona estrellas y escribe tu reseña');
    return;
  }
  currentModal.reviews_list.unshift({ user: 'Tú', stars: selectedStars, text });
  currentModal.reviews++;
  renderModalReviews(currentModal);
  document.getElementById('rev-input').value = '';
  selectedStars = 0;
  updateStarUI();
  showToast('✓ Reseña publicada');
}

// =============================================
//   CHECKOUT
// =============================================
function renderCheckout() {
  const itemsEl = document.getElementById('checkout-items');
  const totalEl = document.getElementById('checkout-total');
  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);

  if (itemsEl) {
    itemsEl.innerHTML = cart.map(x => `
      <div class="cs-row">
        <span style="font-size:12px">${x.name} ×${x.qty}</span>
        <span>$${(x.price * x.qty).toFixed(2)}</span>
      </div>`).join('');
  }

  if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
}

function selectPM(method, btn) {
  document.querySelectorAll('[id^="pm-"]').forEach(b => b.style.background = '');
  btn.style.background = 'rgba(0,245,255,.15)';

  const fields = document.getElementById('pm-fields');
  if (method === 'card') {
    fields.innerHTML = `
      <div class="form-grid">
        <div class="field full"><label>Número de tarjeta</label><input type="text" placeholder="1234 5678 9012 3456"></div>
        <div class="field"><label>Vence</label><input type="text" placeholder="MM/AA"></div>
        <div class="field"><label>CVV</label><input type="text" placeholder="123"></div>
      </div>`;
  } else if (method === 'paypal') {
    fields.innerHTML = `<div class="field"><label>Email PayPal</label><input type="email" placeholder="tu@paypal.com"></div>`;
  } else {
    fields.innerHTML = `<div class="field"><label>Wallet Address</label><input type="text" placeholder="0x..."></div>`;
  }
}

function doCheckout() {
  cart = [];
  updateCartCount();
  showToast('🎉 ¡Pedido confirmado! Gracias por tu compra');
  setTimeout(() => goPage('home'), 1200);
}

// =============================================
//   AUTH
// =============================================
function switchTab(tab, btn) {
  document.querySelectorAll('.auth-tab button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('form-login').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('form-register').style.display = tab === 'register' ? 'block' : 'none';
}

function doLogin() {
  const email = document.querySelector('#form-login input[type="email"]').value.trim();
  const pass = document.querySelector('#form-login input[type="password"]').value.trim();

  if (!email || !pass) {
    showToast('⚠ Completa todos los campos');
    return;
  }

  showToast('✓ Sesión iniciada. ¡Bienvenido!');
  goPage('home');
}

function doRegister() {
  const user = document.querySelector('#form-register input[type="text"]').value.trim();
  const email = document.querySelector('#form-register input[type="email"]').value.trim();
  const pass = document.querySelectorAll('#form-register input[type="password"]')[0].value.trim();
  const pass2 = document.querySelectorAll('#form-register input[type="password"]')[1].value.trim();

  if (!user || !email || !pass || !pass2) {
    showToast('⚠ Completa todos los campos');
    return;
  }

  if (!email.includes('@')) {
    showToast('⚠ El email no es válido');
    return;
  }

  if (pass.length < 6) {
    showToast('⚠ La contraseña debe tener mínimo 6 caracteres');
    return;
  }

  if (pass !== pass2) {
    showToast('⚠ Las contraseñas no coinciden');
    return;
  }

  showToast('✓ Cuenta creada. ¡Bienvenido a NexusGear!');
  goPage('home');
}

// =============================================
//   CUENTA REGRESIVA (FLASH SALE)
// =============================================
setInterval(() => {
  if (countdownSecs <= 0) return;
  countdownSecs--;

  const h = Math.floor(countdownSecs / 3600);
  const m = Math.floor((countdownSecs % 3600) / 60);
  const s = countdownSecs % 60;

  const ch = document.getElementById('ch');
  const cm = document.getElementById('cm');
  const cs = document.getElementById('cs');

  if (ch) ch.textContent = String(h).padStart(2, '0');
  if (cm) cm.textContent = String(m).padStart(2, '0');
  if (cs) cs.textContent = String(s).padStart(2, '0');
}, 1000);

// =============================================
//   INICIALIZACIÓN
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  renderGrid('home-grid', PRODUCTS, true);
});