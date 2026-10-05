# DESIGN: Website FLASH Detailing and Polish

## 1. Referensi & Arah Visual

- **Referensi Tata Letak:** Inspirasi dari [ssych.com/preview/simple-landing](https://ssych.com/preview/simple-landing?bare=1).
- **Elemen yang Diadopsi:**
  - Struktur Hero yang minimalis dengan headline berbobot dan foto motor kontras tinggi (*wet-look*).
  - Tipografi modern berjenjang tegas (skala H1 hingga label kecil dengan kontras yang kuat).
  - Pola kartu konten lapang dengan border tipis elegan (`--line`) dan bayangan lembut tanpa garis kasar.
  - Jarak vertikal antar-section yang lega (64px di mobile, 112px di desktop) untuk memberikan ruang bernapas visual (*breathing room*).
- **Prinsip Utama:** **Simpel, lapang, dan fokus pada satu aksi utama (chat WhatsApp)**.
- **Kesan Brand:** Premium dan bersih secara visual, komunikatif dan akrab secara bahasa.
- **Konteks Otomotif:** Menampilkan hasil nyata pengerjaan (kilau cat, pantulan cahaya, detail sela mesin dan rangka), bukan ilustrasi vektor generik.

---

## 2. Design Tokens

### Warna

| Token | Nilai | Penerapan & Peruntukan |
| :--- | :--- | :--- |
| `--bg` | `#FFFFFF` | Latar utama (halaman & kartu standar) |
| `--bg-soft` | `#F6F7F9` | Latar section selang-seling (ritme visual) |
| `--ink` | `#0E1116` | Teks utama, latar section Keunggulan & kartu eksklusif Proper Detailing |
| `--ink-soft` | `#5B6472` | Teks sekunder, deskripsi, & estimasi waktu |
| `--accent` | `#FFC400` | Kuning Flash aksen utama (tombol CTA, highlight, border aktif) |
| `--accent-ink`| `#0E1116` | Warna teks di atas latar aksen kuning (kontras tinggi) |
| `--line` | `#E6E8EC` | Garis pemisah, border kartu, & divider |
| `--wa` | `#25D366` | Ikon resmi WhatsApp & tombol floating |

```css
:root {
  --bg: #FFFFFF;
  --bg-soft: #F6F7F9;
  --ink: #0E1116;
  --ink-soft: #5B6472;
  --accent: #FFC400;
  --accent-ink: #0E1116;
  --line: #E6E8EC;
  --wa: #25D366;
}
```

> **Aturan Warna:** Aksen kuning dipakai secara hemat dan terukur (fokus pada tombol aksi utama dan 1–2 highlight penting per layar). Rasio kontras teks selalu dijaga minimal 4.5:1 untuk keterbacaan optimal.

### Tipografi

- **Heading:** **Plus Jakarta Sans** (Weight 600–800), tracking sedikit rapat (`letter-spacing: -0.02em`).
- **Body:** **Inter** (Weight 400–500), line-height lega (`1.6`).
- **Fallback:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.

| Level | Mobile (Viewport < 640px) | Desktop (Viewport >= 1024px) |
| :--- | :--- | :--- |
| **H1 (Hero)** | 36px / line-height 1.1 | 60px / line-height 1.05 |
| **H2 (Section Title)** | 28px / line-height 1.2 | 40px / line-height 1.15 |
| **H3 (Card Title)** | 20px / line-height 1.3 | 24px / line-height 1.25 |
| **Body Text** | 16px / line-height 1.6 | 18px / line-height 1.6 |
| **Label / Badge** | 13px, Semi-bold, Uppercase, Tracking lebar (`+0.05em`) | Sama |

### Spasi, Radius, & Bayangan

- **Skala Spasi (Grid 4px):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 112px.
- **Padding Vertikal Section:** 64px (Mobile), 112px (Desktop).
- **Lebar Konten Maksimum:** `1120px` (Container), `640px` (Text block / Reading width).
- **Radius Sudut:**
  - Kartu paket & komponen: `20px`
  - Tombol aksi: `999px` (Bentuk pil / Pill shape)
  - Gambar & bingkai galeri: `24px`
  - Lencana (Badge): `999px`
- **Bayangan Halus (Elevation):**
  - Kartu normal: `0 4px 20px rgba(14, 17, 22, 0.05)`
  - Hover / Floating: `0 12px 36px rgba(14, 17, 22, 0.10)`
  - Menghindari bayangan hitam tebal (*no harsh drop shadows*).

---

## 3. Komponen Spesifik

### 3.1 Tombol (Button System)
- **Tombol Utama (Primary):**
  - Latar `--accent` (`#FFC400`), teks `--accent-ink` (`#0E1116`), tinggi 52px, radius pil (999px), ikon WhatsApp.
  - Hover state: naik 2px (`transform: translateY(-2px)`) + bayangan lembut membesar.
  - Active state: kembali ke posisi semula.
- **Tombol Sekunder (Secondary / Outline):**
  - Latar transparan, border 1.5px solid `--ink`, teks `--ink`, tinggi 52px.
  - Hover state: latar `--ink-soft` tipis (5% opacity).
- **Aksesibilitas Sentuhan:** Tinggi minimal area klik selalu `>= 44px` dengan fokus ring 3px `--accent`.

### 3.2 Kartu Paket (Pricing Cards)
- Struktur: Latar putih, border 1px `--line`, radius 20px, padding 28px.
- Konten: Nama paket, lencana (bila ada), harga dinamis sesuai kategori motor yang dipilih, estimasi waktu pengerjaan, daftar fasilitas (ikon centang hijau/kuning), dan tombol WhatsApp langsung.
- **Diferensiasi Khusus:**
  - **Premium Wash:** Diberi border 2px `--accent` dan lencana emas *"Paling Diminati"*.
  - **Proper Detailing:** Menggunakan kartu berlatar gelap (`--ink`), teks putih, dan tombol beraksen kuning agar terasa eksklusif dan prestigius di antara kartu lainnya.

### 3.3 Toggle Kategori Motor (Interactive Tab System)
- **Indikator Geser Halus (Sliding Pill Animation):**
  - Toggle 3 pilihan: `Kecil (< 125cc)` | `Sedang (125 - 160cc)` | `Besar (155 - 250cc)`.
  - Menggunakan indikator latar belakang meluncur (*sliding pill indicator*) dengan CSS transition: `transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)`.
- **Transisi Angka Harga:**
  - Saat tab diklik, angka nominal harga di semua kartu paket berganti dengan animasi *smooth crossfade & micro-scale* (durasi 200ms) memberikan respon visual yang memuaskan (*tactile feedback*).
- **Keterangan CC:** Keterangan batas CC dan contoh motor (misal: Beat vs NMAX vs XMAX) ditampilkan tepat di bawah toggle untuk memandu pelanggan.

### 3.4 Fitur Utama: Interactive Before/After Split Slider
- **Komponen Split Slider Interaktif:**
  - Komponen visual interaktif di mana pengunjung dapat menggeser garis vertikal pemisah (*drag slider*) secara horizontal ke kiri dan ke kanan (sentuhan jari di smartphone atau kursor mouse di desktop).
  - Menampilkan transformasi langsung dari bodi motor kusam/baret halus (*before*) menjadi kilap kaca *wet-look* (*after*) setelah pengerjaan Proper Detailing & Graphene Coating.
  - Dilengkapi handle bundar di tengah dengan ikon panah ganda `◂ ▸`, serta label teks semi-transparan *"Sebelum"* dan *"Sesudah"* yang adaptif.
- **Galeri Grid Pendukung:**
  - Grid 2 kolom (mobile) / 3 kolom (desktop) rasio 4:5 sudut membulat 20px untuk menampilkan pengerjaan detail lainnya (sela-sela mesin, velg, swingarm, dan lampu).

### 3.5 Langkah Antar-Jemput (4 Steps Workflow)
- Ditampilkan secara vertikal di smartphone (dengan garis alur vertikal penghubung) dan horizontal di desktop.
- 4 Langkah:
  1. **Chat via WhatsApp** (Kirim lokasi dan pilih paket)
  2. **Motor Dijemput** (Tim datang ke lokasi Anda)
  3. **Pengerjaan Profesional** (Dicuci teliti & diproteksi)
  4. **Motor Diantar Kembali** (Kinclong maksimal siap pakai)

### 3.6 FAQ (Akordeon Interaktif)
- Akordeon sederhana dan bersih dengan ikon chevron yang berputar halus 180° saat terbuka.
- Satu pertanyaan terbuka dalam satu waktu agar tampilan tetap ringkas dan tidak memakan ruang layar HP.

### 3.7 Tombol WhatsApp Melayang (Floating CTA)
- Posisi: Pojok kanan bawah, tombol bulat diameter 56px, latar `--wa` (`#25D366`), bayangan lembut.
- Jarak: 20px dari tepi layar dengan memperhatikan `env(safe-area-inset-bottom)` pada iPhone.
- Mengirim pesan awal otomatis (*pre-filled message*) sesuai konteks.

---

## 4. Tata Letak Per Section (Final & Terstruktur)

| # | Section | Latar Belakang | Tata Letak & Karakteristik |
| :--- | :--- | :--- | :--- |
| **1** | **Navbar** | Putih, Sticky, Backdrop Blur | Logo di kiri, menu navigasi anchor di tengah, tombol WA cepat di kanan. Menu hamburger modern di mobile. |
| **2** | **Hero** | `--bg` (Putih) | Headline memikat, subteks, 2 tombol CTA (Cuci di Tempat & Antar-Jemput), foto motor kinclong resolusi tinggi. Layout 2 kolom (desktop), foto di bawah teks (mobile). |
| **3** | **Antar-Jemput** | `--bg-soft` (`#F6F7F9`) | Headline benefit, visual alur 4 langkah, info cakupan radius (0–5 km) & ketentuan biaya hemat. |
| **4** | **Paket & Harga** | `--bg` (Putih) | Toggle interaktif kategori CC motor + 3 kartu paket utama (Reguler, Premium, Detailing) + 1 blok pengerjaan Cuci Rangka. |
| **5** | **Keunggulan** | `--ink` (Deep Charcoal) | Section kontras gelap eksklusif. 4 pilar keunggulan (pH Balance murni, proteksi coating, detail sela mesin, chemical grade internasional) dengan teks putih & ikon aksen kuning. |
| **6** | **Galeri Portofolio** | `--bg` (Putih) | **Interactive Before/After Slider** sebagai highlight utama + grid foto hasil pengerjaan kinclong. |
| **7** | **Testimoni** | `--bg-soft` (`#F6F7F9`) | 3–4 kartu ulasan pelanggan nyata beserta rating bintang 5 dan foto motor pelanggan. |
| **8** | **FAQ** | `--bg` (Putih) | Akordeon tanya jawab ringkas seputar antar-jemput, keamanan, durasi, dan metode pembayaran. |
| **9** | **Lokasi & Jam Buka**| `--bg-soft` (`#F6F7F9`) | Informasi jam operasional, alamat lengkap workshop, serta tombol interaktif yang membuka Google Maps secara langsung. |
| **10**| **CTA Penutup & Footer**| `--ink` (Deep Charcoal) | Ajakan penutup bertema *"Motor Kinclong Tanpa Repot"*, tombol WhatsApp besar, tautan medsos Instagram & TikTok, dan copyright. |

> **Ritme Visual:** Urutan 10 section di atas sudah final dan dirancang dengan pergantian latar belakang selang-seling (Putih -> Abu Lembut -> Gelap -> Putih) untuk menjaga fokus mata pengunjung agar tidak lelah saat menggulir layar.

---

## 5. Gaya Foto, Aset, & Ikon

- **Karakter Foto:**
  - Menampilkan pencahayaan alami/studio yang menonjolkan pantulan kilap cat (*glossy reflex*), efek daun talas tetesan air (*hydrophobic beading*), dan kebersihan sudut mesin.
  - Menghindari foto buram, gelap, atau pencahayaan berlebih yang merusak detail.
- **Format Gambar:** WebP terkompresi dengan lebar maksimal 1600px dan atribut `loading="lazy"` (kecuali foto hero utama yang di-preload).
- **Ikonografi:** Satu set ikon garis modern (Lucide Icons) dengan ketebalan garis konsisten (stroke 1.75px).

---

## 6. Motion & Micro-Interactions

- **Scroll Reveal:** Animasi muncul halus saat section digulir ke viewport (`opacity: 0 -> 1` dan `translateY(16px -> 0)` durasi 350ms ease-out).
- **Card Hover:** Kartu terangkat halus setinggi 4px pada mode desktop.
- **Accessibility:** Mendukung penuh query media `@media (prefers-reduced-motion: reduce)` yang mematikan transisi untuk kenyamanan pengguna sensitif gerak.

---

## 7. Standar Responsif & Aksesibilitas

- **Titik Breakpoint:**
  - Mobile: `360px – 639px` (Titik fokus utama desain).
  - Tablet: `640px – 1023px`.
  - Desktop: `1024px+` (Lebar container maksimal 1120px).
- **Ukuran Sentuh Jempol:** Seluruh tombol dan kontrol navigasi memiliki target sentuh minimal 44 x 44px.
- **Keterbacaan:** Semua teks di atas warna aksen kuning (`--accent`) menggunakan teks hitam gelap (`#0E1116`) untuk menjamin kepatuhan WCAG AA.
- **Screen Reader:** Alt text deskriptif pada gambar portofolio dan label ARIA pada kontrol interaktif (toggle dan akordeon).

---

## 8. Tone of Voice & Copywriting

- Menggunakan gaya bahasa yang hangat, percaya diri, dan solutif.
- Contoh Headline & Sapaan:
  - Hero: *"Bikin Motormu Kinclong Maksimal, Kamu Tinggal Santai di Rumah."*
  - CTA Antar-Jemput: *"Males keluar dan antre? Tim kami siap jemput motormu sekarang."*
  - Detailing: *"Restorasi kilap cat hingga sela mesin terdalam dengan proteksi Graphene Coating."*
- Istilah teknis selalu disertai penjelasan ringkas (misalnya: *Nano Ceramic Spray = Lapisan pelindung cat anti-kusam & anti-air*).
