# ⚡ FLASH Detailing and Polish - Landing Page

> **Website promosi modern, elegan, dan berkonversi tinggi untuk usaha cuci motor & detailing profesional dengan keunggulan layanan antar-jemput (*pick-up & delivery*).**

![FLASH Detailing Preview](/images/hero-motor.jpg)

---

## 🌟 Fitur Utama

- 🛵 **Layanan Antar-Jemput (Highlight):** Visual alur 4 langkah kerja (*Chat WA -> Motor Dijemput -> Dicuci & Dipoles -> Diantar Kembali*) lengkap dengan info radius (0–5 km) dan ketentuan gratis jemput-antar.
- 🎛️ **Toggle Kategori Motor Interaktif:** Pengunjung dapat memilih kategori motor (`Motor Kecil <125cc`, `Motor Sedang 125–160cc`, `Motor Besar 155–250cc+`) dengan indikator *sliding pill* animasi halus yang secara dinamis memperbarui nominal harga di semua kartu paket.
- 🪞 **Interactive Before/After Split Slider:** Fitur interaktif di mana pengunjung dapat menggeser garis pemisah untuk membandingkan secara langsung bodi motor kusam penuh baret halus (*before*) dengan hasil cat kilap cermin (*mirror wet-look*) setelah pengerjaan *Proper Detailing*.
- 💬 **Dynamic WhatsApp CTA Links (F1 & F2):** Setiap tombol aksi mengarah ke WhatsApp resmi dengan template pesan otomatis yang sudah ter-encode sesuai konteks (paket pilihan, kategori CC motor, atau alamat penjemputan).
- 🏷️ **Psikologi Hirarki Harga:** Paket **Premium Wash** memiliki lencana *"Paling Diminati"*, sedangkan paket **Proper Detailing** ditampilkan dengan kartu gelap eksklusif (*dark card*) untuk menonjolkan nilai prestisiusnya.
- 📱 **Mobile-First & Ultra Cepat:** Dibangun dengan Vanilla CSS Tokens tanpa dependensi framework berat, memastikan skor Google Lighthouse **95–100** dan waktu muat instan di smartphone.
- 🔍 **SEO Lokal & Schema Markup:** Dilengkapi meta tag Open Graph (tampilan share WhatsApp yang rapi) serta Schema.org `AutoWash` / `LocalBusiness` JSON-LD agar mudah diindeks oleh Google Search dan Google Maps.

---

## 🛠️ Tech Stack

- **Bundler & Dev Server:** [Vite](https://vitejs.dev/) (Vanilla template)
- **Struktur & Konten:** Semantic HTML5
- **Styling:** Vanilla CSS (Custom Design System Tokens berdasarkan [design.md](./design.md))
- **Logika & Interaktivitas:** Modern Vanilla JavaScript (ES6+ Modules)
- **Ikonografi:** [Lucide Icons](https://lucide.dev/)
- **Penyimpanan Data:** `src/data/layanan.json` (Terpisah & mudah dikelola)
- **Rekomendasi Hosting:** [Vercel](https://vercel.com/) (Dukungan native untuk Vite)

---

## 📁 Struktur Direktori

```text
flash-wash/
├── public/
│   ├── flash-logo.svg            # Logo vektor resmi FLASH
│   └── images/
│       ├── hero-motor.jpg        # Foto hero studio motor kinclong
│       ├── tank-before.jpg       # Foto sebelum detailing (kusam & baret)
│       ├── tank-after.jpg        # Foto sesudah detailing (mirror gloss)
│       ├── engine-detailing.jpg  # Dokumentasi cuci rangka & sela mesin
│       └── wheel-beading.jpg     # Foto efek hidrofobik daun talas velg
├── src/
│   ├── data/
│   │   └── layanan.json          # Katalog harga, paket, FAQ & info kontak
│   ├── style.css                 # Design system tokens, komponen, & responsive styles
│   └── main.js                   # Interaksi tabs, slider before/after, accordion, WA link
├── index.html                    # Halaman landing page utama & schema SEO
├── package.json                  # Konfigurasi scripts & dependencies
├── prd.md                        # Product Requirements Document
├── design.md                     # Design System & UI Specifications
└── README.md                     # Dokumentasi project
```

---

## 🚀 Panduan Memulai Secara Lokal

### Prasyarat
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) (versi 18 ke atas disarankan).

### 1. Kloning atau Buka Direktori Project
```bash
git clone <url-repository-anda>
cd flash-wash
```

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Jalankan Development Server
```bash
npm run dev
```
Buka browser dan akses **`http://localhost:5173/`**. Server mendukung *Hot Module Replacement* (HMR), sehingga perubahan pada kode atau data langsung tampak secara instan.

### 4. Build untuk Produksi
```bash
npm run build
```
Output statis yang telah teroptimasi dan ter-minifikasi akan dihasilkan pada folder `dist/`.

Untuk melihat preview hasil build produksi:
```bash
npm run preview
```

---

## ☁️ Panduan Deploy ke Vercel

Project ini dirancang 100% kompatibel dan terdeteksi secara otomatis oleh **Vercel**:

1. Unggah (*push*) repositori ini ke akun **GitHub** / **GitLab** Anda.
2. Masuk ke dashboard [vercel.com](https://vercel.com/) dan klik **"Add New Project"**.
3. Pilih repositori `flash-wash`.
4. Vercel akan secara otomatis mendeteksi:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Klik **"Deploy"**.
6. Dalam 15–30 detik, website Anda akan aktif secara langsung dengan domain gratis (contoh: `flash-wash.vercel.app`) dan sertifikat SSL (HTTPS) aktif.
7. Anda dapat menghubungkan domain sendiri (seperti `flashmotowash.com` atau `flashdetailing.id`) melalui menu **Settings > Domains** di Vercel.

---

## ✏️ Cara Mengubah Harga & Layanan

Seluruh data konten bersifat dinamis dan terpisah dari kode tampilan. Jika Anda ingin:
- Mengubah nominal harga
- Menambah atau mengubah poin fasilitas paket
- Mengubah nomor kontak WhatsApp atau jam buka
- Memperbarui daftar FAQ

Cukup buka dan edit file **`src/data/layanan.json`**. Angka pada kartu paket, tabel per kategori CC, dan pesan otomatis WhatsApp akan langsung menyesuaikan secara otomatis!

---

## 📞 Informasi Kontak Bisnis

- **Nama Usaha:** FLASH MotoWash (FLASH Detailing and Polish)
- **Alamat Workshop:** Jl. Tidore No. 364, Seringgu Jaya, Kec. Merauke, Kabupaten Merauke, Papua Selatan
- **Google Maps:** [Buka Petunjuk Arah Google Maps](https://maps.app.goo.gl/ARLxk8uLc1y2cy6f6)
- **WhatsApp:** [+62 812-4858-8808](https://wa.me/6281248588808)
- **Instagram:** [@flashmotowash](https://instagram.com/flashmotowash)
- **TikTok:** [@flashmotowash](https://tiktok.com/@flashmotowash)
- **Jam Operasional:** Senin – Minggu, 08.00 – 18.00 WIT (Layanan Jemput: 08.30 – 17.00 WIT)

---

&copy; 2026 FLASH Detailing and Polish. All rights reserved.
