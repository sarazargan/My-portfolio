// ===== NAVIGATION =====
function navigate(page) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target
  document.getElementById('page-' + page).classList.add('active');
  // Update nav
  ['desktopNav', 'mobileNav'].forEach(navId => {
    const nav = document.getElementById(navId);
    if (!nav) return;
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('onclick') && link.getAttribute('onclick').includes("'" + page + "'")) {
        link.classList.add('active');
      }
    });
  });
  window.scrollTo(0, 0);
}

// ===== DRAWER =====
function openDrawer() {
  document.getElementById('mobileDrawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  document.getElementById('mobileDrawer').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== FILTER =====
function filterProjects(btn, cat) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.project-card').forEach(card => {
    if (cat === 'all') {
      card.style.display = '';
    } else {
      const cardCat = card.getAttribute('data-cat') || '';
      card.style.display = cardCat.includes(cat) ? '' : 'none';
    }
  });
}

// ===== ABOUT PROJECT =====
const projects = {
  aureum: {
    title: 'Aureum Sports Club',
    role: 'UI/UX Design · 2024',
    client: 'Aureum Group',
    duration: '6 Weeks',
    type: 'Web Design',
    color: '#1c3a1c',
    emoji: '⛳',
    overview: 'Aureum is a luxury sports club platform designed to elevate the membership experience. The goal was to create a digital presence that matches the prestige of the brand — where luxury meets sports excellence.',
    challenge: 'The existing website felt generic and failed to communicate the exclusivity of the brand. Users struggled to understand membership tiers and the unique value proposition, leading to low conversion on the inquiry form.',
    solution: 'I redesigned the entire landing page with a focus on premium aesthetics and clear information hierarchy. A full-bleed hero with cinematic imagery, a streamlined membership flow, and social proof elements were the key pillars of the redesign.',
    screens: ['⛳ Hero Section', '🏊 Facilities', '🤝 Membership', '📞 Contact'],
  },
  taskify: {
    title: 'Taskify',
    role: 'Product Design · 2024',
    client: 'Taskify Inc.',
    duration: '10 Weeks',
    type: 'SaaS / Mobile',
    color: '#7B61FF',
    emoji: '✅',
    overview: 'Taskify is a productivity platform that helps individuals and teams manage tasks, track habits, and stay organized. The design spans a marketing website and a full web + mobile app.',
    challenge: 'The previous product had powerful features buried under a cluttered interface. Users reported feeling overwhelmed on first use, and the onboarding drop-off rate was 62% within the first session.',
    solution: 'I redesigned the onboarding from scratch with a progressive disclosure pattern, simplified the navigation into three core modes, and introduced a "Good morning" personalized dashboard. Conversion rate improved by 38% after launch.',
    screens: ['🏠 Landing Page', '📊 Dashboard', '📝 Task View', '📱 Mobile App'],
  },
  nebrix: {
    title: 'Nebrix',
    role: 'UI Design · 2023',
    client: 'Nebrix Labs',
    duration: '8 Weeks',
    type: 'Dashboard / FinTech',
    color: '#1a1a40',
    emoji: '₿',
    overview: 'Nebrix is an intelligent crypto management dashboard that unifies wallet tracking, portfolio analytics, and market data in one dark, sophisticated interface.',
    challenge: 'Crypto dashboards are notorious for information overload. The brief was to make complex data feel approachable without sacrificing the depth power-users demand — a difficult balance to strike.',
    solution: 'A modular, card-based dark UI with clear visual hierarchy, color-coded asset categories, and a persistent sidebar for quick navigation. Interactive charts and a smart search made the data feel manageable even for newcomers.',
    screens: ['🌑 Dashboard', '📈 Portfolio', '💱 Trade View', '📊 Analytics'],
  }
};

function openAbout(slug) {
  const p = projects[slug];
  if (!p) return;

  const screenCards = p.screens.map(s => `
    <div class="about-screen">
      <div class="screen-placeholder" style="background: ${p.color}20; color: ${p.color}; font-size:36px;">${s.split(' ')[0]}</div>
    </div>
  `).join('');

  document.getElementById('about-content').innerHTML = `
    <div class="page-header">
      <div class="page-eyebrow">${p.type}</div>
      <h1 class="page-title">${p.title}</h1>
      <p class="page-desc">${p.role}</p>
    </div>

    <div class="about-hero" style="background: linear-gradient(135deg, ${p.color}, ${p.color}88);">
      <div style="width:100%; height:380px; display:flex; align-items:center; justify-content:center; font-size:80px;">${p.emoji}</div>
    </div>

    <div class="about-meta">
      <div class="meta-item">
        <div class="meta-label">Client</div>
        <div class="meta-value">${p.client}</div>
      </div>
      <div class="meta-item">
        <div class="meta-label">Duration</div>
        <div class="meta-value">${p.duration}</div>
      </div>
      <div class="meta-item">
        <div class="meta-label">Type</div>
        <div class="meta-value">${p.type}</div>
      </div>
    </div>

    <div class="about-section">
      <div class="about-section-title">Overview</div>
      <div class="about-body">${p.overview}</div>
    </div>

    <div class="about-section">
      <div class="about-section-title">The Challenge</div>
      <div class="about-body">${p.challenge}</div>
    </div>

    <div class="about-section">
      <div class="about-section-title">The Solution</div>
      <div class="about-body">${p.solution}</div>
    </div>

    <div class="about-section">
      <div class="about-section-title">Key Screens</div>
      <div class="about-screens">${screenCards}</div>
    </div>
  `;

  navigate('about');
}

// ===== CONTACT FORM =====
function sendMsg() {
  const btn = document.querySelector('.btn-primary');
  btn.textContent = '✓ Message Sent!';
  btn.style.background = '#2BB537';
  setTimeout(() => {
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message`;
    btn.style.background = '';
  }, 3000);
}