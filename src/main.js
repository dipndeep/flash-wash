import './style.css';
import layananData from './data/layanan.json';
import { createIcons, icons } from 'lucide';

// Initialize Lucide Icons
function initIcons() {
  createIcons({ icons });
}

// Current active motorcycle category
let currentCategory = 'kecil'; // 'kecil' | 'sedang' | 'besar'

// Format Indonesian Rupiah
function formatRupiah(number) {
  if (typeof number === 'string') return number;
  return 'Rp' + number.toLocaleString('id-ID');
}

// Build WhatsApp URL with pre-filled encoded text
function getWhatsAppUrl(context, packageName = '', categoryId = '') {
  const phone = layananData.business.phone;
  let text = '';

  const catObj = layananData.categories.find(c => c.id === (categoryId || currentCategory));
  const catLabel = catObj ? `${catObj.label} (${catObj.cc})` : '';

  if (context === 'antar-jemput') {
    text = `Halo FLASH Detailing, saya mau pesan layanan ANTAR-JEMPUT motor.\n\nKategori motor: ${catLabel || '[Nama Motor]'}\nPaket: ${packageName || 'Pilihan Paket'}\nLokasi jemput: [Kirim Alamat / Shareloc]`;
  } else if (context === 'cuci-di-tempat') {
    text = `Halo FLASH Detailing, saya ingin tanya/booking cuci motor di tempat untuk motor: [Sebutkan Motor]. Kapan waktu yang tersedia hari ini?`;
  } else if (context === 'paket') {
    text = `Halo FLASH Detailing, saya tertarik memesan paket *${packageName}* untuk *${catLabel}*.\n\nMohon info ketersediaan slot pengerjaannya ya.`;
  } else if (context === 'cuci-rangka') {
    text = `Halo FLASH Detailing, saya mau konsultasi & booking paket *Cuci Rangka & Kolong* untuk motor *${catLabel}*. Kapan bisa diantar/dijemput?`;
  } else {
    text = `Halo FLASH Detailing, saya ingin konsultasi perawatan motor saya.`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

// Update Pricing Cards when Category Toggles
function updatePrices(categoryId) {
  currentCategory = categoryId;

  // Update Category Buttons
  const buttons = document.querySelectorAll('.category-tab-btn');
  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === categoryId);
  });

  // Move Sliding Pill
  const activeBtn = document.querySelector(`.category-tab-btn[data-category="${categoryId}"]`);
  const slidingPill = document.getElementById('tabSlidingPill');
  if (activeBtn && slidingPill) {
    slidingPill.style.width = `${activeBtn.offsetWidth}px`;
    slidingPill.style.transform = `translateX(${activeBtn.offsetLeft - 6}px)`;
  }

  // Update Category Note
  const catData = layananData.categories.find(c => c.id === categoryId);
  const noteEl = document.getElementById('categoryNote');
  if (noteEl && catData) {
    noteEl.innerHTML = `Kapasitas <strong>${catData.cc}</strong> &mdash; Contoh: <em>${catData.examples}</em>`;
  }

  // Update Package Cards Prices
  layananData.packages.forEach(pkg => {
    const priceEl = document.getElementById(`price-${pkg.id}`);
    if (priceEl) {
      priceEl.classList.add('changing');
      setTimeout(() => {
        const rawPrice = pkg.prices[categoryId];
        priceEl.textContent = formatRupiah(rawPrice);
        priceEl.classList.remove('changing');
      }, 150);
    }

    // Update Card CTA link
    const ctaBtn = document.getElementById(`cta-${pkg.id}`);
    if (ctaBtn) {
      ctaBtn.href = getWhatsAppUrl('paket', pkg.name, categoryId);
    }
  });

  // Update Cuci Rangka Link
  const cuciRangkaCta = document.getElementById('cta-cuci-rangka');
  if (cuciRangkaCta) {
    cuciRangkaCta.href = getWhatsAppUrl('cuci-rangka', 'Cuci Rangka & Kolong', categoryId);
  }
}

// Setup Category Tabs
function setupCategoryTabs() {
  const buttons = document.querySelectorAll('.category-tab-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category;
      if (cat !== currentCategory) {
        updatePrices(cat);
      }
    });
  });

  // Initial pill positioning: call immediately and on resize/load
  updatePrices(currentCategory);
  window.addEventListener('load', () => {
    updatePrices(currentCategory);
  });
  window.addEventListener('resize', () => {
    updatePrices(currentCategory);
  });
}

// Setup Interactive Before/After Split Slider
function setupSplitSlider() {
  const container = document.getElementById('beforeAfterSlider');
  const beforeImg = document.getElementById('sliderBeforeImg');
  const handleLine = document.getElementById('sliderHandleLine');

  if (!container || !beforeImg || !handleLine) return;

  let isDragging = false;

  function updateSliderPosition(clientX) {
    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;

    // Clamp between 2% and 98%
    percentage = Math.max(2, Math.min(percentage, 98));

    container.style.setProperty('--split-pos', `${percentage}%`);
  }

  // Mouse events
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSliderPosition(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch events for mobile
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    updateSliderPosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });
}

// Setup Accordion (One Open at a Time)
function setupAccordion() {
  const items = document.querySelectorAll('.accordion-item');

  items.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    const body = item.querySelector('.accordion-body');

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      items.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherBody = otherItem.querySelector('.accordion-body');
        if (otherBody) otherBody.style.maxHeight = null;
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // Open the first item by default
  if (items.length > 0) {
    items[0].classList.add('active');
    const firstBody = items[0].querySelector('.accordion-body');
    if (firstBody) firstBody.style.maxHeight = firstBody.scrollHeight + 'px';
  }
}

// Setup Mobile Navigation Drawer
function setupMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !drawer) return;

  menuBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
    const isOpen = drawer.classList.contains('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
  });

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// Setup Dynamic CTA Links
function setupStaticCtaLinks() {
  const btnHeroPickup = document.getElementById('btnHeroPickup');
  if (btnHeroPickup) {
    btnHeroPickup.href = getWhatsAppUrl('antar-jemput');
  }

  const btnHeroWash = document.getElementById('btnHeroWash');
  if (btnHeroWash) {
    btnHeroWash.href = getWhatsAppUrl('cuci-di-tempat');
  }

  const btnPickupSection = document.getElementById('btnPickupSection');
  if (btnPickupSection) {
    btnPickupSection.href = getWhatsAppUrl('antar-jemput');
  }

  const btnClosingWa = document.getElementById('btnClosingWa');
  if (btnClosingWa) {
    btnClosingWa.href = getWhatsAppUrl('antar-jemput');
  }

  const btnFloatingWa = document.getElementById('btnFloatingWa');
  if (btnFloatingWa) {
    btnFloatingWa.href = getWhatsAppUrl('antar-jemput');
  }

  const btnNavWa = document.getElementById('btnNavWa');
  if (btnNavWa) {
    btnNavWa.href = getWhatsAppUrl('cuci-di-tempat');
  }
}

// Run everything on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initIcons();
  setupCategoryTabs();
  setupSplitSlider();
  setupAccordion();
  setupMobileMenu();
  setupStaticCtaLinks();
});
