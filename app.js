/* ==========================================================================
   G. Joachim DKhar Portfolio - Project Ledger & Interactive Showcase
   ========================================================================== */

const PROJECTS = [
  {
    id: 'rentnanga',
    index: '01',
    title: 'Rentnanga',
    subtitle: 'Self-Drive Vehicle Rental Platform',
    url: 'https://rentnanga.com/',
    secondaryUrl: 'https://play.google.com/store/apps/details?id=com.gjdkhar.rent_nanga&pcampaignid=web_share',
    secondaryLabel: 'Play Store App',
    year: '2025—2026',
    role: 'Web Platform & Android App',
    desc: 'Production self-drive car, bike, and scooty rental platform serving Shillong and Meghalaya. Features interactive fleet browsing (4x4 SUVs, sedans, two-wheelers), live Supabase media integration, transparent daily rates, customer review integration, and instant WhatsApp booking.',
    bullets: [
      '<strong>Fleet Discovery & Daily Rates:</strong> Interactive vehicle catalog with real-time specs (Mahindra Thar, Scorpio, Swift, Royal Enfield), security deposit guidelines, and tiered pricing.',
      '<strong>WhatsApp Instant Booking:</strong> Frictionless reservation funnel routing customer bookings and travel dates directly to dispatch.',
      '<strong>Cross-Platform Architecture:</strong> Next.js web application deployed at rentnanga.com paired with a native Android app on Google Play.'
    ],
    tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'Vercel', 'Android SDK', 'WhatsApp API'],
    screenshots: []
  },
  {
    id: 'kitchen-pos-group',
    index: '02',
    title: 'Kitchen POS & Order Trackers',
    subtitle: 'Hospitality Management Deployments',
    url: null,
    year: '2026',
    role: 'Full-Stack POS Systems',
    desc: 'Bespoke point-of-sale and live kitchen tracking systems built to eliminate paper order chaos in busy food and beverage venues. Features synchronized kitchen displays, table-side billing, live item editors, and multi-format receipt dispatch.',
    bullets: [
      '<strong>Synchronized Kitchen Displays:</strong> Real-time status sync between counter order entry and kitchen preparation.',
      '<strong>Automated Bill Calculations:</strong> Split-second table bill generation, tax totals, and print-ready receipts.',
      '<strong>Instant Digital Dispatch:</strong> Direct WhatsApp receipt delivery and downloadable PDF cash memos.'
    ],
    tags: ['POS Systems', 'Kitchen Display', 'WhatsApp API', 'PDF Engine', 'Client Builds'],
    screenshots: [],
    // Expandable Group for House of Noodles & Click Cafe
    isGroup: true,
    groupType: 'deployments',
    expandLabel: '▾ View Deployments: House of Noodles & Click Cafe (2)',
    collapseLabel: '▴ Hide Deployments',
    subProjects: [
      {
        id: 'house-of-noodles',
        title: 'House of Noodles — Daily Kitchen Tracker & POS',
        url: null,
        status: 'Client Production (Staff Portal)',
        desc: 'Custom-built real-time kitchen tracking and point-of-sale platform developed for House of Noodles. Replaced paper slips with a synchronized kitchen display, live order statuses (Ongoing / Completed), dynamic menu management, and instant cash memos.',
        bullets: [
          '<strong>Kitchen Workflow Sync:</strong> Real-time order status toggling between "Ongoing" and "Completed".',
          '<strong>Instant Billing:</strong> Automated table bill calculation with itemized breakdown and printable receipts.',
          '<strong>WhatsApp & PDF Sharing:</strong> 1-click invoice delivery to customer WhatsApp and downloadable PDFs.',
          '<strong>Menu Management CMS:</strong> Instant catalog updates with price adjustments and category groupings.'
        ],
        tags: ['React/Next.js', 'POS Architecture', 'WhatsApp API', 'PDF Generator'],
        screenshots: [
          { src: 'assets/noodles-1.png', caption: 'House of Noodles - Live Kitchen Tracker & Completed Orders' },
          { src: 'assets/noodles-6.png', caption: 'Automated Cash Memo modal with Print, PDF & WhatsApp share' },
          { src: 'assets/noodles-7.png', caption: 'Real-time billing overview & itemized customer totals' },
          { src: 'assets/noodles-2.png', caption: 'Menu Management CMS - Add & Edit items modal' },
          { src: 'assets/noodles-3.png', caption: 'Menu category and pricing control panel' },
          { src: 'assets/noodles-4.png', caption: 'Category items list and inventory overview' },
          { src: 'assets/noodles-5.png', caption: 'Daily Kitchen Tracker - Ongoing live order monitoring' }
        ]
      },
      {
        id: 'click-cafe',
        title: 'Click Cafe Shillong — POS & Cafe Management',
        url: 'https://click-cafe.vercel.app/',
        status: 'Live on Vercel',
        desc: 'Digital point-of-sale and kitchen operations software built for a premier cafe in Shillong, handling high-turnover table ordering, barista authentication, dynamic menu adjustments, and daily sales auditing.',
        bullets: [
          '<strong>Role-Based Staff Access:</strong> Secure credential portal for cafe team members and baristas.',
          '<strong>Live Order Pipeline:</strong> Table order management with instant payment confirmation workflows.',
          '<strong>Category CMS:</strong> Real-time pricing controls across espresso, food items, and daily specials.',
          '<strong>Sales Reporting:</strong> Date-range data exporter generating spreadsheet summaries for audit reconciliation.'
        ],
        tags: ['POS Operations', 'Web Platform', 'Vercel', 'Data Reports'],
        screenshots: [
          { src: 'assets/click-7.png', caption: 'Click Cafe - Confirm Payment & Table Order Settlement' },
          { src: 'assets/click-1.png', caption: 'Secure Staff Login Portal' },
          { src: 'assets/click-3.png', caption: 'Menu Management CMS - Espresso, Specials & Food Categories' },
          { src: 'assets/click-8.png', caption: 'Table Billing & Order Pipeline' },
          { src: 'assets/click-9.png', caption: 'Date-Range Data Export - Order Summary & Item Breakdown' },
          { src: 'assets/click-2.png', caption: 'Cafe Dashboard - Real-Time Kitchen Tracker' },
          { src: 'assets/click-4.png', caption: 'Category items list and price configuration' },
          { src: 'assets/click-5.png', caption: 'Order creation and item modifier modal' },
          { src: 'assets/click-6.png', caption: 'Completed orders ledger with timestamped receipts' }
        ]
      }
    ]
  },
  {
    id: 'appointment-bot',
    index: '03',
    title: 'AppointmentBot Pro',
    subtitle: 'Smart Queue & Scheduling System',
    url: 'https://bot-appointment.vercel.app/',
    year: '2026',
    role: 'Full-Stack SaaS Platform',
    desc: 'Automated self-service appointment scheduling bot linked with an operations dashboard and real-time patient queue management system.',
    bullets: [
      '<strong>Conversational Booking Bot:</strong> Multi-step user onboarding with morning/afternoon slot picking and instant queue tokens.',
      '<strong>Operations Command Center:</strong> 7-day booking trend visualization, active status counters, and bulk status dispatch.',
      '<strong>Emergency Priority Tagging:</strong> Real-time visual triage indicators to spotlight urgent consultations.',
      '<strong>Search & Filter Engine:</strong> Rapid lookups by client name or reference ID (e.g. APT-MSC3FHQF).'
    ],
    tags: ['Next.js', 'Tailwind CSS', 'Vercel', 'Real-Time Queue', 'Analytics'],
    screenshots: [
      { src: 'assets/appointment-6.png', caption: 'Admin Panel - Dashboard Overview with 7-Day Trend Chart' },
      { src: 'assets/appointment-1.png', caption: 'Client-Facing Booking Bot - Interactive Step-by-Step Onboarding' },
      { src: 'assets/appointment-7.png', caption: 'Appointments Queue - Filter by Today, Upcoming, Past & Slots' },
      { src: 'assets/appointment-8.png', caption: 'Appointment Details Modal with Emergency triage badge' },
      { src: 'assets/appointment-10.png', caption: 'Admin queue management and direct reference lookup' },
      { src: 'assets/appointment-2.png', caption: 'Booking Flow Step 1 - Client Name and contact information' },
      { src: 'assets/appointment-3.png', caption: 'Booking Flow Step 2 - Morning vs Afternoon Slot Selection' },
      { src: 'assets/appointment-4.png', caption: 'Booking Flow Step 3 - Reason / Symptom details input' },
      { src: 'assets/appointment-5.png', caption: 'Booking Confirmation - Instant Queue Token Generated' },
      { src: 'assets/appointment-9.png', caption: 'Admin appointment filtering and bulk action controls' }
    ]
  },
  {
    id: 'order-teal',
    index: '04',
    title: 'Order Management & Invoicing',
    subtitle: 'Dalys Digital Agency CRM',
    url: 'https://order-teal.vercel.app/',
    year: '2025—',
    role: 'Agency CRM & Invoicing',
    desc: 'Internal client order management, contract tracking, and automated PDF invoicing portal engineered for creative agency Dalys Digital.',
    bullets: [
      '<strong>Custom Service Types:</strong> Flexible pipeline management (Consulting, Marketing, Brand Strategy).',
      '<strong>Automated Invoices:</strong> Dynamic invoice generation (INV-1785...) with printable formats and PDF downloads.',
      '<strong>Balance Reconciliation:</strong> Visual tracking of contract totals, payments collected, and outstanding balances.',
      '<strong>Searchable Ledger:</strong> Instant order filtering by client, contact phone, or deadline.'
    ],
    tags: ['Agency CRM', 'PDF Invoicing', 'Vercel', 'Client Portal'],
    screenshots: [
      { src: 'assets/order-1.png', caption: 'Dalys Digital - Order Management Dashboard with Filters & Search' },
      { src: 'assets/order-4.png', caption: 'Dalys Digital Automated Invoice Modal - PDF Download & Print' },
      { src: 'assets/order-2.png', caption: 'Manage Order Types - Consulting, Marketing & Custom Categories' },
      { src: 'assets/order-3.png', caption: 'New Order Creation Dialog with client fields and fee breakdowns' }
    ]
  },
  {
    id: 'meghrera',
    index: '05',
    title: 'Meghalaya Real Estate Regulatory Authority',
    subtitle: 'MeghRERA Statutory Portal',
    url: 'https://meghrera.org.in/',
    year: '2025',
    role: 'GovTech Web Portal',
    desc: 'Statutory public regulatory authority portal developed for the Government of Meghalaya Real Estate Regulatory Authority, facilitating transparent disclosures and consumer protection.',
    bullets: [
      '<strong>Public Registry:</strong> Searchable statutory disclosures of approved residential & commercial projects.',
      '<strong>Legal Repository:</strong> Direct access to official RERA acts, gazettes, circulars, and downloadable forms.',
      '<strong>Online Redressal:</strong> Public complaint lodgment guidance and developer compliance standards.'
    ],
    tags: ['GovTech', 'Statutory Portal', 'Public Sector', 'Compliance'],
    screenshots: []
  },
  {
    id: 'portfolios-group',
    index: '06',
    title: 'Brand & Agency Portfolios',
    subtitle: 'Brand Showcases & Creative Direction',
    url: null,
    year: '2025',
    role: 'Web Showcase & Portfolios',
    desc: 'High-performance brand showcases and creative portfolio websites built for international lifestyle franchises and digital creative agencies in Shillong.',
    bullets: [
      '<strong>Mobile-First Product Lookbooks:</strong> Curated visual catalogs designed for seamless customer exploration.',
      '<strong>Agency Creative Showcases:</strong> Typography-driven portfolios spotlighting strategy and case studies.',
      '<strong>Fast Asset Delivery:</strong> Optimized static architecture for instant page loads.'
    ],
    tags: ['Brand Portfolios', 'Retail Showcase', 'Creative Direction', 'Static Web'],
    screenshots: [],
    // Expandable Group for Ilahui & Dalys Digital
    isGroup: true,
    groupType: 'portfolios',
    expandLabel: '▾ View Portfolios: Ilahui Shillong & Dalys Digital (2)',
    collapseLabel: '▴ Hide Portfolios',
    subProjects: [
      {
        id: 'ilahui-shillong',
        title: 'Ilahui Shillong — Lifestyle Brand Showcase',
        url: 'https://ilahui-shillong.in/',
        status: 'Live Site',
        desc: 'Mobile-first brand showcase and visual lookbook created for the Shillong retail store of international lifestyle brand Ilahui, showcasing product collections, homeware, and store location discovery.',
        bullets: [
          '<strong>Product Showcase:</strong> Curated catalog of lifestyle accessories, homeware, and fashion arrivals.',
          '<strong>Store Discovery:</strong> Integrated store hours, location maps, and direct customer inquiry channels.'
        ],
        tags: ['Brand Web', 'Retail Showcase', 'Client Project'],
        screenshots: []
      },
      {
        id: 'dalys-agency',
        title: 'Dalys Digital — Creative Agency Portal',
        url: 'https://joa111.github.io/DALYS/',
        status: 'Live on GitHub Pages',
        desc: 'Portfolio and service landing page designed for Dalys Digital agency, spotlighting creative consulting, digital marketing, and web strategy.',
        bullets: [
          '<strong>Agency Reel:</strong> Clean typography showcasing brand strategy and client transformation case studies.',
          '<strong>Lead Funnel:</strong> Direct client inquiry touchpoints optimized for inbound conversion.'
        ],
        tags: ['Agency', 'Creative Direction', 'Web Showcase'],
        screenshots: []
      }
    ]
  },
  {
    id: 'ecom-platform',
    index: '07',
    title: 'Ecommerce Platform',
    subtitle: 'Storefront & Back-Office Demo',
    url: 'https://ecom-mang.vercel.app/',
    year: '2025',
    role: 'Web Application Prototype',
    desc: 'Full-featured eCommerce web application showcasing product catalog browsing, persistent cart state, responsive checkout, and administration overview.',
    bullets: [
      '<strong>Catalog & Filters:</strong> Real-time filtering by category, search queries, and inventory stock states.',
      '<strong>Cart & Checkout:</strong> Responsive cart drawer with instant subtotal and tax calculation.'
    ],
    tags: ['Ecommerce', 'Next.js', 'Vercel', 'State Management'],
    screenshots: []
  }
];

// Global Viewer State
let currentGallery = [];
let currentImageIndex = 0;
let currentProjectTitle = '';

// Helper to find project or sub-project by ID
function findProjectOrSubProject(id) {
  for (const p of PROJECTS) {
    if (p.id === id) return p;
    if (p.subProjects) {
      const sub = p.subProjects.find(sp => sp.id === id);
      if (sub) return sub;
    }
  }
  return null;
}

// Render Project Stream
function renderProjects() {
  const container = document.getElementById('projectsStream');
  if (!container) return;

  container.innerHTML = PROJECTS.map(p => {
    const hasScreenshots = p.screenshots && p.screenshots.length > 0;
    const isGroup = p.isGroup && p.subProjects && p.subProjects.length > 0;

    return `
      <article class="project-entry" id="entry-${p.id}">
        <div class="project-topbar">
          <div class="project-index-title">
            <span class="project-num">${p.index} //</span>
            <h3 class="project-name">
              ${p.url ? `
                <a href="${p.url}" target="_blank" rel="noopener noreferrer">
                  <span>${p.title}</span>
                  <span style="font-size:12px; font-weight:400; opacity:0.7">↗</span>
                </a>
              ` : `
                <span>${p.title}</span>
                ${isGroup ? `
                  <span style="font-size:11px; font-weight:500; color:var(--accent-rust); margin-left:4px">[${p.subProjects.length} Deployments]</span>
                ` : `
                  <span style="font-size:11px; font-weight:400; color:var(--ink-muted); margin-left:4px">[Staff Tool]</span>
                `}
              `}
            </h3>

            ${p.secondaryUrl ? `
              <a href="${p.secondaryUrl}" target="_blank" rel="noopener noreferrer" style="font-size:10.5px; font-family:var(--font-mono); color:var(--ink-muted); border:1px solid var(--rule); padding:2px 7px; border-radius:3px; display:inline-flex; align-items:center; gap:3px;">
                <span>${p.secondaryLabel}</span>
                <span>↗</span>
              </a>
            ` : ''}
          </div>
          <span class="project-meta-year">${p.year}</span>
        </div>

        <p class="project-summary-text">${p.desc}</p>

        <ul class="project-bullet-list">
          ${p.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>

        <div class="project-tech-chips">
          ${p.tags.map(t => `<span class="chip">${t}</span>`).join('')}
        </div>

        ${hasScreenshots ? `
          <div class="screenshot-dock">
            <div class="screenshot-dock-bar">
              <span class="dock-label">Screenshots (${p.screenshots.length})</span>
              <button type="button" class="dock-expand-btn" onclick="openViewer('${p.id}', 0)">
                <span>View Fullscreen</span>
                <span>↗</span>
              </button>
            </div>
            <div class="screenshot-strip">
              ${p.screenshots.map((s, idx) => `
                <div class="strip-item" onclick="openViewer('${p.id}', ${idx})" title="${s.caption}">
                  <img src="${s.src}" alt="${s.caption}" loading="lazy" />
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${isGroup ? `
          <div class="project-expand-action">
            <button 
              type="button" 
              class="expand-trigger-btn" 
              id="btn-${p.id}"
              data-expand-label="${p.expandLabel}"
              data-collapse-label="${p.collapseLabel}"
              onclick="toggleProjectDeck('deck-${p.id}', this)"
              aria-expanded="false">
              <span class="sign-text">${p.expandLabel}</span>
              <span class="sign-icon">▾</span>
            </button>

            <div class="expandable-deck" id="deck-${p.id}">
              ${p.subProjects.map(sp => {
                const subHasScreenshots = sp.screenshots && sp.screenshots.length > 0;
                return `
                  <div class="sub-project-card" id="sub-${sp.id}">
                    <div class="sub-project-header">
                      <h4 class="sub-project-title">
                        ${sp.url ? `
                          <a href="${sp.url}" target="_blank" rel="noopener noreferrer">
                            <span>${sp.title}</span>
                            <span style="font-size:12px; opacity:0.7">↗</span>
                          </a>
                        ` : `
                          <span>${sp.title}</span>
                        `}
                      </h4>
                      ${sp.status ? `<span style="font-family:var(--font-mono); font-size:10.5px; color:var(--ink-muted);">${sp.status}</span>` : ''}
                    </div>

                    <p class="sub-project-desc">${sp.desc}</p>

                    <ul class="project-bullet-list">
                      ${sp.bullets.map(b => `<li>${b}</li>`).join('')}
                    </ul>

                    <div class="project-tech-chips">
                      ${sp.tags.map(t => `<span class="chip">${t}</span>`).join('')}
                    </div>

                    ${subHasScreenshots ? `
                      <div class="screenshot-dock">
                        <div class="screenshot-dock-bar">
                          <span class="dock-label">Screenshots (${sp.screenshots.length})</span>
                          <button type="button" class="dock-expand-btn" onclick="openViewer('${sp.id}', 0)">
                            <span>View Fullscreen</span>
                            <span>↗</span>
                          </button>
                        </div>
                        <div class="screenshot-strip">
                          ${sp.screenshots.map((s, idx) => `
                            <div class="strip-item" onclick="openViewer('${sp.id}', ${idx})" title="${s.caption}">
                              <img src="${s.src}" alt="${s.caption}" loading="lazy" />
                            </div>
                          `).join('')}
                        </div>
                      </div>
                    ` : ''}
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        ` : ''}
      </article>
    `;
  }).join('');
}

// Toggle Group Accordion Deck
function toggleProjectDeck(deckId, btn) {
  const deck = document.getElementById(deckId);
  if (!deck) return;

  const isOpen = deck.classList.contains('open');
  if (isOpen) {
    deck.classList.remove('open');
    btn.classList.remove('active');
    btn.setAttribute('aria-expanded', 'false');
    btn.querySelector('.sign-text').textContent = btn.getAttribute('data-expand-label');
  } else {
    deck.classList.add('open');
    btn.classList.add('active');
    btn.setAttribute('aria-expanded', 'true');
    btn.querySelector('.sign-text').textContent = btn.getAttribute('data-collapse-label');
  }
}

// Fullscreen Viewer Handlers
function openViewer(projectId, index = 0) {
  const project = findProjectOrSubProject(projectId);
  if (!project || !project.screenshots || project.screenshots.length === 0) return;

  currentGallery = project.screenshots;
  currentProjectTitle = project.title;
  currentImageIndex = index;

  updateViewerContent();

  const modal = document.getElementById('viewerModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeViewer() {
  const modal = document.getElementById('viewerModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function nextViewerImage() {
  if (currentGallery.length <= 1) return;
  currentImageIndex = (currentImageIndex + 1) % currentGallery.length;
  updateViewerContent();
}

function prevViewerImage() {
  if (currentGallery.length <= 1) return;
  currentImageIndex = (currentImageIndex - 1 + currentGallery.length) % currentGallery.length;
  updateViewerContent();
}

function updateViewerContent() {
  const imgEl = document.getElementById('viewerImage');
  const titleEl = document.getElementById('viewerTitle');
  const captionEl = document.getElementById('viewerCaption');

  if (!currentGallery[currentImageIndex]) return;

  const item = currentGallery[currentImageIndex];
  if (imgEl) {
    imgEl.src = item.src;
    imgEl.alt = item.caption;
  }
  if (titleEl) {
    titleEl.textContent = currentProjectTitle;
  }
  if (captionEl) {
    captionEl.textContent = `${item.caption} (${currentImageIndex + 1} of ${currentGallery.length})`;
  }
}

// Keyboard shortcuts for Modal
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('viewerModal');
  if (!modal || !modal.classList.contains('active')) return;

  if (e.key === 'Escape') closeViewer();
  if (e.key === 'ArrowRight') nextViewerImage();
  if (e.key === 'ArrowLeft') prevViewerImage();
});

// Touch swipe support for Mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('DOMContentLoaded', () => {
  const stage = document.getElementById('viewerStage');
  if (stage) {
    stage.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    stage.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (Math.abs(touchEndX - touchStartX) > 40) {
        if (touchEndX < touchStartX) nextViewerImage();
        else prevViewerImage();
      }
    }, { passive: true });
  }

  // Scroll detection for sticky nav border
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.site-nav');
    if (nav) {
      if (window.scrollY > 20) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    }
  }, { passive: true });
});

// Toast notification helper
function showToast(msg) {
  let toast = document.getElementById('toastPill');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastPill';
    toast.className = 'toast-pill';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

function copyVal(val, label) {
  navigator.clipboard.writeText(val).then(() => {
    showToast(`Copied ${label}`);
  }).catch(() => {
    showToast('Failed to copy');
  });
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
});
