
/* ================= KONFIGURASI (EDIT DI SINI) ================= */
const CONFIG = {
  wa: "6285705930920",
  toko: "Es Teler Sultan Umil's",
  alamat: "Jl. Laswi, Kota Tasikmalaya, Jawa Barat, Indonesia",
  ongkir: 5000,
  bayar: {
    transfer: "BCA 0000000000 a.n. [isi nama]",
    ewallet: "DANA/OVO/GoPay: 085705930920 a.n. [isi nama]",
    qris: "Kirim bukti pembayaran QRIS setelah penjual mengirim kode QR lewat WhatsApp."
  }
};

/* ================= DATA MENU ================= */
const MENU = [
  {
    id: 1,
    cat: "Es Teler Sultan",
    n: "Es Teler Ori (M)",
    d: "Melon, agar hijau, cincau, leci, sagu mutiara, biji selasih, nata de coco, agar kelapa",
    p: 10000,
    img: "../img/ETO(M).png"
  },

  {
    id: 2,
    cat: "Es Teler Sultan",
    n: "Es Teler Ori (L)",
    d: "Melon, agar hijau, cincau, leci, sagu mutiara, biji selasih, nata de coco, agar kelapa",
    p: 15000,
    img: "../img/ETO(L).png"
  },

  {
    id: 3,
    cat: "Es Teler Sultan",
    n: "Es Teler Nangka (M)",
    d: "Nangka (tanpa alpukat) + topping lengkap",
    p: 13000,
    img: "../img/ETN(M).png"
  },

  {
    id: 4,
    cat: "Es Teler Sultan",
    n: "Es Teler Nangka (L)",
    d: "Melon, nangka (tanpa alpukat) + topping lengkap",
    p: 18000,
    img: "../img/ETN(L).png"
  },

  {
    id: 5,
    cat: "Es Teler Sultan", 
    n: "Es Teler Alpukat (M)", 
    d: "Alpukat (tanpa nangka) + topping lengkap", 
    p: 13000, 
    img: "../img/ETA(M).png"
  },
  
  { 
    id: 6, 
    cat: "Es Teler Sultan", 
    n: "Es Teler Alpukat (L)", 
    d: "Alpukat, melon (tanpa nangka) + topping lengkap", 
    p: 18000, 
    img: "../img/ETA(L).png" 
  
  },
  
  { 
    id: 7, 
    cat: "Es Teler Sultan", 
    n: "Es Teler Nangka + Alpukat (M)", 
    d: "Nangka, alpukat + topping lengkap", 
    p: 15000, 
    img: "../img/ETNA(M).png" 
  
  },
  
  { 
    id: 8, 
    cat: "Es Teler Sultan", 
    n: "Es Teler Nangka + Alpukat (L)", 
    d: "Nangka, alpukat, melon + topping lengkap", 
    p: 20000, 
    img: "../img/ETNA(L).png" 
  
  },
  
  { 
    id: 9, 
    cat: "Es Teler Sultan", 
    n: "Es Alpucok", 
    d: "Dengan full buah alpukat yang d kocok kasar ditambah kuah creamy khas Umils (BISA TAMBAH ANEKA TOPING)", 
    p: 15000, 
    img: "../img/AK.png" 
  
  },

  { 
    id: 10, 
    cat: "Es Teler Sultan", 
    n: "Durian (tanpa biji)", 
    d: "Es teller + durian (tanpa biji) harga terpisah", 
    p: 5000, 
    img: "../img/D1.png" 
  
  },
  
  { 
    id: 20, 
    cat: "Makanan", 
    n: "Pangsit Kuah Chilli Oil", 
    d: "Pangsit ayam dengan kuah yang gurih", 
    p: 12000, 
    img: "../img/food1.png" 
  },

  { 
    id: 21, 
    cat: "Makanan", 
    n: "Pisang Wijen", 
    d: "Pisang dibalut tepung dicampur wijen", 
    p: 10000, 
    img: "../img/food3.png" 
  },

  { 
    id: 22, 
    cat: "Makanan", 
    n: "Cilok Umil's", 
    d: "Cilok tulang khas Umil's", 
    p: 12000, 
    img: "../img/food2.png" 
  
  },
  
  { 
    id: 30, 
    cat: "Topping Es Teler", 
    n: "Topping Keju", 
    d: "Tambahan keju parut", 
    p: 2000, 
    img: "../img/TP1.png" 
  
  },
  
  { 
    id: 31, 
    cat: "Topping Es Teler", 
    n: "Topping Vanilla", 
    d: "Es krim vanilla", 
    p: 2000, 
    img: "../img/TP2.png" 
  
  },
  
  { 
    id: 32, 
    cat: "Topping Es Teler", 
    n: "Topping Coklat", 
    d: "Es krim coklat", 
    p: 2000, 
    img: "../img/TP3.png" 
  
  },
  
  { 
    id: 33, 
    cat: "Topping Es Teler", 
    n: "Topping Strawberry", 
    d: "Es krim strawberry", 
    p: 2000, 
    img: "../img/TP4.png" 
  
  },
  
  { 
    id: 34, 
    cat: "Topping Es Teler", 
    n: "Topping Matcha", 
    d: "Es krim matcha", 
    p: 3000, 
    img: "../img/TP5.png" 
  
  },
  
  { 
    id: 35, 
    cat: "Topping Es Teler", 
    n: "Topping Durian", 
    d: "Es krim durian", 
    p: 3000, 
    img: "../img/TP6.png" 
  
  },
  
  { 
    id: 36, 
    cat: "Topping Es Teler", 
    n: "Topping Mangga", 
    d: "Es krim mangga", 
    p: 3000, 
    img: "../img/TP7.png" 
  
  },
  
  { 
    id: 37, 
    cat: "Topping Es Teler", 
    n: "Topping Taro", 
    d: "Es krim taro", 
    p: 3000, 
    img: "../img/TP8.png" 
  
  },
  
  { 
    id: 38, 
    cat: "Topping Es Teler", 
    n: "Topping 3 in 1", 
    d: "Tiga rasa es krim sekaligus", 
    p: 3000, 
    img: "../img/TP9.png" 
  
  }

];

// ================= LOGIKA =================
const $ = s => document.querySelector(s);
const rp = n => "Rp " + n.toLocaleString("id-ID");

let cart = {}, notes = {}, selectedToppings = {};
let mode = "", pay = "", cat = "Semua", form = {};

try {
  const s = JSON.parse(localStorage.getItem("umils") || "{}");
  cart = s.cart || {};
  notes = s.notes || {};
  selectedToppings = s.selectedToppings || {};
} catch (e) {}

const save = () => {
  try {
    localStorage.setItem("umils", JSON.stringify({
      cart,
      notes,
      selectedToppings
    }));
  } catch (e) {}
};

const cats = ["Semua", ...new Set(MENU.map(m => m.cat))];
const count = () => Object.values(cart).reduce((a, b) => a + b, 0);

// Menu yang boleh diberi topping
const isEsTeler = m =>
  m && m.cat === "Es Teler Sultan" && m.id !== 10;

// Daftar topping
const getToppings = () =>
  MENU.filter(m => m.cat === "Topping Es Teler");

// Hitung subtotal menu dan topping
const sub = () => {
  const hargaMenu = Object.entries(cart).reduce((total, [id, qty]) => {
    const m = MENU.find(x => x.id == id);
    return total + (m ? m.p * qty : 0);
  }, 0);

  const hargaTopping = Object.entries(selectedToppings).reduce(
    (total, [esId, toppingIds]) => {
      const qtyEs = cart[esId] || 0;

      if (!qtyEs) return total;

      const totalTopping = toppingIds.reduce((jumlah, toppingId) => {
        const topping = MENU.find(x => x.id == toppingId);
        return jumlah + (topping ? topping.p * qtyEs : 0);
      }, 0);

      return total + totalTopping;
    },
    0
  );

  return hargaMenu + hargaTopping;
};

$("#chat").href =
  `https://wa.me/${CONFIG.wa}?text=${encodeURIComponent("Halo " + CONFIG.toko + ", saya mau tanya menu.")}`;

function toast(t) {
  const e = $("#toast");
  e.textContent = t;
  e.classList.add("on");
  clearTimeout(toast.t);
  toast.t = setTimeout(() => e.classList.remove("on"), 1600);
}

// ================= TAB KATEGORI =================
function renderTabs() {
  $("#tabs").innerHTML = cats.map(c =>
    `<button class="tab ${c == cat ? "on" : ""}" data-c="${c}">${c}</button>`
  ).join("");
}

$("#tabs").onclick = e => {
  if (e.target.dataset.c) {
    cat = e.target.dataset.c;
    renderTabs();
    renderList();
  }
};

$("#q").oninput = renderList;

// ================= TOMBOL JUMLAH =================
function ctl(id) {
  const q = cart[id] || 0;

  return q
    ? `<div class="qty">
         <button data-a="-" data-i="${id}">−</button>
         <span>${q}</span>
         <button data-a="+" data-i="${id}">+</button>
       </div>`
    : `<button class="add" data-a="+" data-i="${id}">Tambah</button>`;
}

// ================= TAMPILKAN MENU DAN FOTO =================
function renderList() {
  const k = $("#q").value.toLowerCase();

  const items = MENU.filter(m =>
    (cat == "Semua" || m.cat == cat) &&
    (m.n + m.d).toLowerCase().includes(k)
  );

  let h = "";

  cats.slice(1).forEach(c => {
    const g = items.filter(m => m.cat == c);
    if (!g.length) return;

    h += `<h2>${c}</h2><div class="grid">`;

    h += g.map(m => {
      const media = m.img
        ? `<img src="${m.img}" alt="${m.n}"
             style="width:100%;height:100%;object-fit:cover;display:block"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
           <span style="display:none;width:100%;height:100%;align-items:center;justify-content:center;font-size:12px;text-align:center">Foto tidak ditemukan</span>`
        : (m.e || "");

      return `
        <div class="card">
          <div class="ic">${media}</div>
          <div class="inf">
            <b>${m.n}</b>
            <small>${m.d}</small>
            <span class="pr">${rp(m.p)}</span>
          </div>
          <div id="c${m.id}">${ctl(m.id)}</div>
        </div>`;
    }).join("");

    h += `</div>`;
  });

  $("#list").innerHTML = h ||
    '<p style="text-align:center;margin:40px;color:var(--mut)">Menu tidak ditemukan 😢</p>';

  fade();
}

function fade() {
  const o = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("show");
      o.unobserve(e.target);
    }
  }), { threshold: .1 });

  document.querySelectorAll(".card").forEach(c => o.observe(c));
}

// ================= PILIH TOPPING =================
function toggleTopping(esId, toppingId) {
  if (!cart[esId]) return;

  if (!selectedToppings[esId]) {
    selectedToppings[esId] = [];
  }

  const list = selectedToppings[esId];

  if (list.includes(toppingId)) {
    selectedToppings[esId] = list.filter(id => id !== toppingId);
  } else {
    selectedToppings[esId].push(toppingId);
  }

  if (!selectedToppings[esId].length) {
    delete selectedToppings[esId];
  }

  save();
  upd();
  drawer();
}

// ================= UBAH KERANJANG =================
function change(id, d) {
  cart[id] = (cart[id] || 0) + d;

  if (cart[id] <= 0) {
    delete cart[id];
    delete notes[id];
    delete selectedToppings[id];
  } else if (d > 0) {
    toast("Ditambahkan ke keranjang ✅");
  }

  save();
  upd();

  const c = $("#c" + id);
  if (c) c.innerHTML = ctl(id);
}

document.addEventListener("click", e => {
  const b = e.target.closest("[data-a]");

  if (b) {
    change(+b.dataset.i, b.dataset.a == "+" ? 1 : -1);

    if ($("#dr").classList.contains("on")) {
      drawer(true);
    }
  }
});

// ================= UPDATE TOTAL =================
function upd() {
  const n = count(), f = $("#fab");

  f.style.display = n ? "flex" : "none";
  $("#fc").textContent = n;
  $("#ft").textContent = rp(sub());

  f.classList.remove("pop");
  void f.offsetWidth;
  f.classList.add("pop");
}

// ================= BUKA / TUTUP KERANJANG =================
function open_() {
  $("#ov").classList.add("on");
  $("#dr").classList.add("on");
  drawer();
}

function close_() {
  $("#ov").classList.remove("on");
  $("#dr").classList.remove("on");
}

$("#fab").onclick = open_;
$("#ov").onclick = close_;

// ================= ISI KERANJANG =================
function drawer(keep) {
  if (keep) saveForm();

  const ids = Object.keys(cart);

  if (!ids.length) {
    $("#dr").innerHTML = `
      <div class="row">
        <h2>🛒 Keranjang</h2>
        <button class="x" onclick="close_()">Tutup ✕</button>
      </div>
      <p style="text-align:center;padding:30px">Keranjang masih kosong.</p>`;
    return;
  }

  const ong = mode == "Delivery" ? CONFIG.ongkir : 0;

  const items = ids.map(id => {
    const m = MENU.find(x => x.id == id);
    if (!m) return "";

    const selected = selectedToppings[id] || [];

    // Pilihan topping untuk setiap es teler
    const toppingHTML = isEsTeler(m) ? `
      <div class="it" style="margin-top:10px">
        <b>🧀 Pilih Topping</b>
        <small style="display:block;margin:5px 0 8px">
          Topping dihitung per gelas (${cart[id]} gelas).
        </small>

        ${getToppings().map(t => {
          const checked = selected.includes(t.id);

          return `
            <label style="
              display:flex;
              align-items:center;
              gap:8px;
              padding:7px 0;
              cursor:pointer;
            ">
              <input
                type="checkbox"
                ${checked ? "checked" : ""}
                onchange="toggleTopping(${id},${t.id})"
              >
              <span>${t.n}</span>
              <span style="margin-left:auto">${rp(t.p)}</span>
            </label>`;
        }).join("")}
      </div>` : "";

    const rincianTopping = selected
      .map(tid => MENU.find(t => t.id == tid))
      .filter(Boolean)
      .map(t => `
        <div class="row">
          <small>+ ${t.n} × ${cart[id]}</small>
          <small>${rp(t.p * cart[id])}</small>
        </div>`)
      .join("");

    return `
      <div class="it">
        <div class="row">
          <b>${m.n}</b>
          <span class="pr">${rp(m.p * cart[id])}</span>
        </div>

        <div class="row">
          ${ctl(id)}
          <button class="x"
            onclick="change(${id},-${cart[id]});drawer(true)">
            Hapus
          </button>
        </div>

        ${toppingHTML}
        ${rincianTopping}

        <input
          data-note="${id}"
          placeholder="Catatan (mis. less sugar, tanpa biji selasih)"
          value="${(notes[id] || "").replace(/"/g, "&quot;")}"
        >
      </div>`;
  }).join("");

  const mOpt = [
    ["Pick Up", "🛍️ Pick Up"],
    ["Delivery", "🛵 Delivery"],
  ].map(([v, l]) =>
    `<button class="opt ${mode == v ? "on" : ""}" onclick="setMode('${v}')">${l}</button>`
  ).join("");

  const pOpt = [
    ["Tunai/COD", "💵 Tunai/COD"],
    ["Transfer Bank", "🏦 Transfer"],
    ["E-Wallet", "📱 E-Wallet"],
    ["QRIS", "🔳 QRIS"]
  ].map(([v, l]) =>
    `<button class="opt ${pay == v ? "on" : ""}" onclick="setPay('${v}')">${l}</button>`
  ).join("");

  let fm = `<div class="f"><label>Nama *</label><input id="f_nama" value="${form.nama || ""}">`;

  if (mode == "Pick Up") {
    fm += `
      <label>No. HP *</label>
      <input id="f_hp" type="tel" value="${form.hp || ""}">
      <div class="box">📍 Ambil di: ${CONFIG.alamat}</div>
      <label>Jam ambil *</label>
      <input id="f_jam" type="time" value="${form.jam || ""}">`;
  }

  if (mode == "Delivery") {
    fm += `
      <label>No. HP *</label>
      <input id="f_hp" type="tel" value="${form.hp || ""}">
      <label>Alamat lengkap *</label>
      <textarea id="f_alamat" rows="2">${form.alamat || ""}</textarea>
      <label>Patokan *</label>
      <input id="f_patokan" value="${form.patokan || ""}">
      <label>Catatan kurir</label>
      <input id="f_kurir" value="${form.kurir || ""}">
      <div class="box">🛵 Ongkir: ${rp(CONFIG.ongkir)}</div>`;
  }

  // if (mode == "Dine In") {
  //   fm += `
  //     <label>No. Meja / Jumlah orang *</label>
  //     <input id="f_meja" value="${form.meja || ""}"
  //       placeholder="Contoh: Meja 5 / 3 orang">`;
  // }

  fm += `</div>`;

  let pi = "";

  if (pay == "Transfer Bank") {
    pi = `<div class="box">🏦 ${CONFIG.bayar.transfer}
      <button class="cp" onclick="cp('${CONFIG.bayar.transfer}')">Salin</button>
    </div>`;
  }

  if (pay == "E-Wallet") {
    pi = `<div class="box">📱 ${CONFIG.bayar.ewallet}
      <button class="cp" onclick="cp('${CONFIG.bayar.ewallet}')">Salin</button>
    </div>`;
  }

  if (pay == "QRIS") {
    pi = `<div class="box">🔳 ${CONFIG.bayar.qris}</div>`;
  }

  if (pi) {
    pi += `<div class="box">📎 Kirim bukti transfer lewat WhatsApp setelah pesanan dikirim.</div>`;
  }

  $("#dr").innerHTML = `
    <div class="row">
      <h2>🛒 Keranjang</h2>
      <button class="x" onclick="close_()">Tutup ✕</button>
    </div>

    ${items}

    <h2>Metode Pesanan</h2>
    <div class="opts">${mOpt}</div>
    ${mode ? fm : ""}

    <h2>Pembayaran</h2>
    <div class="opts">${pOpt}</div>
    ${pi}

    <div class="it">
      <div class="row">
        <span>Subtotal (menu + topping)</span>
        <b>${rp(sub())}</b>
      </div>

      ${ong ? `
        <div class="row">
          <span>Ongkir</span>
          <b>${rp(ong)}</b>
        </div>` : ""}

      <div class="row" style="font-size:18px">
        <b>TOTAL</b>
        <b class="pr">${rp(sub() + ong)}</b>
      </div>
    </div>

    <div id="err"></div>
    <button class="send" onclick="send()">💬 Pesan via WhatsApp</button>`;
}

// ================= SIMPAN FORM =================
function saveForm() {
  document.querySelectorAll("[data-note]").forEach(i => {
    if (i.value.trim()) notes[i.dataset.note] = i.value.trim();
    else delete notes[i.dataset.note];
  });

  ["nama", "hp", "jam", "alamat", "patokan", "kurir", "meja"].forEach(k => {
    const e = $("#f_" + k);
    if (e) form[k] = e.value.trim();
  });

  save();
}

const setMode = v => {
  saveForm();
  mode = v;
  drawer();
};

const setPay = v => {
  saveForm();
  pay = v;
  drawer();
};

function cp(t) {
  const v = t.replace(/[^0-9]/g, "");

  (navigator.clipboard
    ? navigator.clipboard.writeText(v)
    : Promise.reject()
  )
    .then(() => toast("Nomor disalin 📋"))
    .catch(() => toast("Salin manual: " + t));
}

// ================= KIRIM PESAN WHATSAPP =================
function send() {
  saveForm();

  const er = m => {
    const e = $("#err");
    e.textContent = "⚠️ " + m;
    e.style.display = "block";
    e.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  if (!count()) return er("Keranjang masih kosong.");
  if (!mode) return er("Pilih metode pesanan (Pick Up / Delivery / Dine In).");
  if (!form.nama) return er("Nama wajib diisi.");

  if (mode != "Dine In" && !/^[0-9+\s-]{9,}$/.test(form.hp || "")) {
    return er("Nomor HP wajib diisi dengan benar.");
  }

  if (mode == "Pick Up" && !form.jam) {
    return er("Jam ambil wajib diisi.");
  }

  if (mode == "Delivery" && (!form.alamat || !form.patokan)) {
    return er("Alamat lengkap dan patokan wajib diisi.");
  }

  if (mode == "Dine In" && !form.meja) {
    return er("Nomor meja / jumlah orang wajib diisi.");
  }

  if (!pay) return er("Pilih metode pembayaran.");

  const ong = mode == "Delivery" ? CONFIG.ongkir : 0;
  const d = new Date();
  const kode = "UM" + Math.random().toString(36).slice(2, 7).toUpperCase();

  let t =
    `*PESANAN BARU - ${CONFIG.toko}*\n` +
    `No. Pesanan: #${kode}\n` +
    `Tanggal: ${d.toLocaleString("id-ID")}\n\n` +
    `*Data Pemesan*\nNama: ${form.nama}\n`;

  if (mode != "Dine In") {
    t += `No. HP: ${form.hp}\n`;
  }

  t += `\n*Metode Pesanan:* ${mode}\n`;

  if (mode == "Pick Up") {
    t += `Jam ambil: ${form.jam}\nLokasi: ${CONFIG.alamat}\n`;
  }

  if (mode == "Delivery") {
    t += `Alamat: ${form.alamat}\nPatokan: ${form.patokan}\n`;
    if (form.kurir) t += `Catatan kurir: ${form.kurir}\n`;
  }

  if (mode == "Dine In") {
    t += `Meja/Orang: ${form.meja}\n`;
  }

  t += `\n*Daftar Pesanan*\n`;

  Object.keys(cart).forEach((id, i) => {
    const m = MENU.find(x => x.id == id);
    if (!m) return;

    t += `${i + 1}. ${m.n} x${cart[id]} = ${rp(m.p * cart[id])}\n`;

    // Cantumkan topping yang dipilih untuk produk ini
    const toppingIds = selectedToppings[id] || [];

    toppingIds.forEach(tid => {
      const topping = MENU.find(x => x.id == tid);

      if (topping) {
        t += `   + ${topping.n} x${cart[id]} = ${rp(topping.p * cart[id])}\n`;
      }
    });

    if (notes[id]) {
      t += `   Catatan: ${notes[id]}\n`;
    }
  });

  t +=
    `\nSubtotal: ${rp(sub())}\n` +
    (ong ? `Ongkir: ${rp(ong)}\n` : "") +
    `*TOTAL: ${rp(sub() + ong)}*\n\n` +
    `*Pembayaran:* ${pay}\n` +
    `Mohon konfirmasi pesanan saya. Terima kasih!`;

  window.open(
    `https://wa.me/${CONFIG.wa}?text=${encodeURIComponent(t)}`,
    "_blank"
  );
}

// ================= JALANKAN APLIKASI =================
renderTabs();
renderList();
if (count()) upd();