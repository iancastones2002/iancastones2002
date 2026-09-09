/**
 * PORTFOLIO ARCHITECTURE & DOM CONTROLLER
 * ==========================================================================
 * Custom-tailored for Ian Van Lawrence Castones
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.PORTFOLIO_DATA;

  if (!data) {
    console.error("PORTFOLIO_DATA failed to load from js/portfolio-data.js.");
    return;
  }

  // Application Initialization Sequence
  initTheme();
  initMobileNavigation();

  renderHero(data);
  renderAbout(data);
  renderSkills(data);
  renderProjects(data);
  renderExperience(data);
  renderCertificates(data);
  renderContact(data);

  // Initialize interactive galleries after elements exist in DOM
  setupLightboxGallery(data);

  initContactForm();
  setupScrollReveal();
});

/* THEME & NAVIGATION CONTROLLERS */
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme") || "light";
    const newTheme = activeTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("color-scheme", newTheme);

    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) meta.setAttribute("content", newTheme);
  });
}

function initMobileNavigation() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const drawer = document.getElementById("mobile-drawer");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  if (!menuBtn || !drawer) return;

  menuBtn.addEventListener("click", () => {
    const isOpen = drawer.classList.contains("open");
    if (isOpen) {
      drawer.classList.remove("open");
      menuBtn.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    } else {
      drawer.classList.add("open");
      menuBtn.classList.add("open");
      menuBtn.setAttribute("aria-expanded", "true");
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      drawer.classList.remove("open");
      menuBtn.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

/* DOM RENDERERS */
function renderHero(data) {
  const { personal, socials } = data;
  if (!personal) return;

  const logoText = document.getElementById("logo-text");
  const heroName = document.getElementById("hero-name");
  const heroRole = document.getElementById("hero-role");
  const heroTagline = document.getElementById("hero-tagline");
  const heroAvatar = document.getElementById("hero-avatar");
  const footerName = document.getElementById("footer-name");

  if (logoText) logoText.textContent = personal.name;
  if (heroName) heroName.textContent = personal.name;
  if (heroRole) heroRole.textContent = personal.role;
  if (heroTagline) heroTagline.textContent = personal.tagline;
  if (heroAvatar && personal.avatar) heroAvatar.src = personal.avatar;
  if (footerName) footerName.textContent = personal.name;

  const socialsContainer = document.getElementById("hero-socials");
  if (socialsContainer && socials) {
    const iconMap = {
      linkedin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
      github: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
      facebook: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
      email: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
    };

    socialsContainer.innerHTML = socials.map(s => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="${s.name}">
        ${iconMap[s.icon] || '🔗'}
      </a>
    `).join("");
  }
}

function renderAbout(data) {
  const { about } = data;
  if (!about) return;

  const bioContainer = document.getElementById("about-bio");

  if (bioContainer && about.paragraphs) {
    const paragraphsHtml = about.paragraphs.map(p => `<p style="margin-bottom: 1.25rem;">${p}</p>`).join("");

    const formattedQuote = (about.quote || "")
      .replace("never done by one person", '<span style="background: var(--badge-bg); color: var(--badge-text); padding: 0.15rem 0.45rem; border-radius: var(--radius-sm); font-weight: 600; font-style: normal;">never done by one person</span>')
      .replace("a team of people", '<span style="background: var(--badge-bg); color: var(--badge-text); padding: 0.15rem 0.45rem; border-radius: var(--radius-sm); font-weight: 600; font-style: normal;">a team of people</span>');

    const quoteHtml = about.quote ? `
      <div style="margin-top: 2rem; padding-top: 1.75rem; border-top: 1px solid var(--border-color); text-align: center;">
        <blockquote style="font-family: var(--font-serif); font-size: 1.2rem; font-style: italic; color: var(--text-primary); margin-bottom: 0.5rem; line-height: 1.6;">
          "${formattedQuote}"
        </blockquote>
        <cite style="font-size: 0.875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--accent); font-style: normal;">
          — ${about.author || 'Steve Jobs'}
        </cite>
      </div>
    ` : '';

    bioContainer.innerHTML = paragraphsHtml + quoteHtml;
  }
}

function renderSkills(data) {
  const container = document.getElementById("skills-container") || document.getElementById("skills-grid");
  if (!container || !data || !data.skills) return;

  const categories = Array.isArray(data.skills) ? data.skills : (data.skills.categories || []);

  const icons = {
    layout: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
    server: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
    database: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    tools: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`
  };

  container.innerHTML = categories.map(cat => {
    const iconSvg = icons[cat.icon] || `<span style="color: var(--accent);">✦</span>`;
    const catName = cat.name || cat.category || "Skill Set";
    const items = cat.items || [];

    return `
      <div class="skill-category-card fade-in-element is-visible">
        <div class="skill-category-header">
          <div class="skill-cat-icon">${iconSvg}</div>
          <h3 class="skill-cat-title">${catName}</h3>
        </div>
        <ul class="skill-clean-list">
          ${items.map(item => {
            const itemName = typeof item === "string" ? item : item.name;
            return `
              <li class="skill-list-item">
                <span class="skill-bullet">✦</span>
                <span class="skill-text">${itemName}</span>
              </li>
            `;
          }).join("")}
        </ul>
      </div>
    `;
  }).join("");
}

function renderProjects(data) {
  const container = document.getElementById("projects-grid");
  const filterBar = document.getElementById("project-filters");
  if (!container || !data || !data.projects) return;

  const projects = data.projects;

  const categories = ["all", ...new Set(projects.map(p => p.category))];
  if (filterBar) {
    filterBar.innerHTML = categories.map((cat, idx) => `
      <button class="filter-btn ${idx === 0 ? 'active' : ''}" data-filter="${cat}">
        ${cat === 'all' ? 'All Work' : cat.toUpperCase()}
      </button>
    `).join("");

    filterBar.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.getAttribute("data-filter");
        
        container.querySelectorAll(".project-card").forEach(card => {
          if (filter === "all" || card.getAttribute("data-category") === filter) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  container.innerHTML = projects.map((proj, pIdx) => `
    <div class="project-card fade-in-element is-visible" data-category="${proj.category}" data-project-index="${pIdx}">
      <div class="project-thumb-container">
        <img src="${proj.image}" alt="${proj.title}" class="project-thumb" loading="lazy" />
        <span class="project-category-tag">${proj.categoryLabel || proj.category}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${proj.title}</h3>
        <span class="project-subtitle">${proj.subtitle}</span>
        <p class="project-summary">${proj.summary}</p>
        <div class="project-tech-tags">
          ${(proj.techStack || []).map(tech => `<span class="tech-pill">${tech}</span>`).join("")}
        </div>
        <div class="project-footer">
          <span style="font-size: 0.8125rem; font-weight: 600; color: var(--accent);">Explore Details →</span>
          <div class="project-links">
            ${proj.githubUrl ? `<a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-icon-link" onclick="event.stopPropagation();">GitHub</a>` : ''}
          </div>
        </div>
      </div>
    </div>
  `).join("");

  const modal = document.getElementById("project-modal");
  if (!modal) return;

  container.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      const pIdx = parseInt(card.getAttribute("data-project-index"), 10);
      const proj = projects[pIdx];
      if (!proj) return;

      const modalImg = document.getElementById("modal-image");
      const modalTitle = document.getElementById("modal-title");
      const modalSubtitle = document.getElementById("modal-subtitle");
      const modalRole = document.getElementById("modal-role");
      const modalMetrics = document.getElementById("modal-metrics");
      const modalDesc = document.getElementById("modal-desc");
      const modalFeatures = document.getElementById("modal-features");
      const modalTech = document.getElementById("modal-tech");
      const linkGithub = document.getElementById("modal-link-github");

      if (modalImg) modalImg.src = proj.image;
      if (modalTitle) modalTitle.textContent = proj.title;
      if (modalSubtitle) modalSubtitle.textContent = proj.subtitle;
      if (modalRole) {
        modalRole.innerHTML = proj.role 
          ? `<span style="color: var(--text-muted); font-weight: 600;">Role:</span> <span style="color: var(--accent); font-weight: 700;">${proj.role}</span>` 
          : "";
      }
      if (modalMetrics) modalMetrics.textContent = proj.metrics || "Featured Project";
      if (modalDesc) modalDesc.textContent = proj.description;

      if (modalFeatures && proj.keyFeatures) {
        modalFeatures.innerHTML = proj.keyFeatures.map(f => `<li>${f}</li>`).join("");
      }

      if (modalTech && proj.techStack) {
        modalTech.innerHTML = proj.techStack.map(t => `<span class="tech-pill">${t}</span>`).join("");
      }

      if (linkGithub) linkGithub.href = proj.githubUrl || "#";

      modal.showModal();
      document.body.style.overflow = "hidden";
    });
  });

  const modalCloseBtn = document.getElementById("modal-close-btn");
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", () => {
      modal.close();
      document.body.style.overflow = "";
    });
  }
}

function renderExperience(data) {
  const container = document.getElementById("timeline-container");
  if (!container || !data || !data.seminars) return;

  container.innerHTML = data.seminars.map((sem, sIdx) => {
    const imagesHtml = (sem.images && sem.images.length > 0)
      ? `<div class="seminar-gallery" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.75rem; margin-top: 1rem; margin-bottom: 1rem;">
          ${sem.images.map((img, imgIdx) => `
            <div class="seminar-img-card" data-seminar-index="${sIdx}" data-image-index="${imgIdx}" style="overflow: hidden; border-radius: var(--radius-md); aspect-ratio: 4/3; border: 1px solid var(--border-color); cursor: pointer;">
              <img src="${img}" alt="${sem.role}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" loading="lazy" />
            </div>
          `).join("")}
         </div>`
      : "";

    return `
      <div class="timeline-item fade-in-element is-visible">
        <div class="timeline-marker"></div>
        <div class="timeline-card">
          <div class="timeline-meta">
            <h3 class="timeline-role">${sem.role}</h3>
            <span class="timeline-period">${sem.period}</span>
          </div>
          <div class="timeline-company">${sem.company} • ${sem.location}</div>
          <p style="margin-bottom: 1rem; color: var(--text-secondary); font-size: 0.9375rem;">${sem.description}</p>
          
          ${imagesHtml}

          <ul class="timeline-achievements">
            ${(sem.achievements || []).map(a => `<li>${a}</li>`).join("")}
          </ul>
          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
            ${(sem.tags || []).map(t => `<span class="tech-pill">${t}</span>`).join("")}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function setupLightboxGallery(data) {
  const lightboxModal = document.getElementById("image-lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-main-img");
  const closeBtn = document.getElementById("lightbox-close-btn");
  const prevBtn = document.getElementById("lightbox-prev-btn");
  const nextBtn = document.getElementById("lightbox-next-btn");

  if (!lightboxModal || !lightboxImg) return;

  let activeImages = [];
  let currentImgIndex = 0;

  // Delegate click for seminar images
  document.querySelectorAll(".seminar-img-card").forEach(card => {
    card.addEventListener("click", () => {
      const semIdx = parseInt(card.getAttribute("data-seminar-index"), 10);
      const imgIdx = parseInt(card.getAttribute("data-image-index"), 10);
      
      const sem = data.seminars[semIdx];
      if (!sem || !sem.images || !sem.images.length) return;

      activeImages = sem.images;
      currentImgIndex = imgIdx;

      updateLightbox();
      lightboxModal.showModal();
      document.body.style.overflow = "hidden";
    });
  });

  // Delegate click for certificate gallery cards
  document.querySelectorAll(".cert-floating-card").forEach(card => {
    card.addEventListener("click", () => {
      const cIdx = parseInt(card.getAttribute("data-cert-index"), 10);
      const allCertImages = data.certificates.flatMap(cert => cert.images || []);
      if (!allCertImages.length) return;

      activeImages = allCertImages;
      currentImgIndex = cIdx;

      updateLightbox();
      lightboxModal.showModal();
      document.body.style.overflow = "hidden";
    });
  });

  function updateLightbox() {
    if (activeImages.length === 0) return;
    lightboxImg.src = activeImages[currentImgIndex];
    if (prevBtn && nextBtn) {
      prevBtn.style.display = activeImages.length > 1 ? "flex" : "none";
      nextBtn.style.display = activeImages.length > 1 ? "flex" : "none";
    }
  }

  if (prevBtn) {
    prevBtn.onclick = (e) => {
      e.stopPropagation();
      currentImgIndex = (currentImgIndex - 1 + activeImages.length) % activeImages.length;
      updateLightbox();
    };
  }

  if (nextBtn) {
    nextBtn.onclick = (e) => {
      e.stopPropagation();
      currentImgIndex = (currentImgIndex + 1) % activeImages.length;
      updateLightbox();
    };
  }

  if (closeBtn) {
    closeBtn.onclick = () => {
      lightboxModal.close();
      document.body.style.overflow = "";
    };
  }

  lightboxModal.addEventListener("click", (e) => {
    const rect = lightboxModal.getBoundingClientRect();
    const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
                        rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
    if (!isInDialog) {
      lightboxModal.close();
      document.body.style.overflow = "";
    }
  });
}

function renderCertificates(data) {
  const container = document.getElementById("certificates-container");
  const scrollLeftBtn = document.getElementById("cert-scroll-left");
  const scrollRightBtn = document.getElementById("cert-scroll-right");

  if (!container || !data || !data.certificates) return;

  const allCertImages = data.certificates.flatMap(cert => cert.images || []);

  container.innerHTML = allCertImages.map((imgSrc, cIdx) => `
    <div class="cert-floating-card fade-in-element is-visible" data-cert-index="${cIdx}" style="cursor: pointer;">
      <div style="overflow: hidden; border-radius: var(--radius-md); aspect-ratio: 4/3; background: var(--bg-input);">
        <img src="${imgSrc}" alt="Certificate Preview" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" />
      </div>
    </div>
  `).join("");

  // Horizontal Scroll Arrows for the Certifications Row
  if (scrollLeftBtn && scrollRightBtn) {
    scrollLeftBtn.onclick = () => {
      container.scrollBy({ left: -300, behavior: "smooth" });
    };
    scrollRightBtn.onclick = () => {
      container.scrollBy({ left: 300, behavior: "smooth" });
    };
  }
}

function renderContact(data) {
  const { personal } = data;
  if (!personal) return;

  const emailEl = document.getElementById("contact-email");
  const locationEl = document.getElementById("contact-location");
  const availabilityEl = document.getElementById("contact-availability");

  if (emailEl) {
    emailEl.href = `mailto:${personal.email}`;
    emailEl.textContent = personal.email;
  }
  if (locationEl) locationEl.textContent = personal.location;
  if (availabilityEl) availabilityEl.textContent = personal.availability;
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");

  if (!form || !statusEl) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    statusEl.className = "form-status success";
    statusEl.textContent = "Thank you! Your message has been received. I will get back to you shortly.";
    form.reset();

    setTimeout(() => {
      statusEl.className = "form-status";
      statusEl.textContent = "";
    }, 5000);
  });
}

function setupScrollReveal() {
  const elements = document.querySelectorAll(".fade-in-element");
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}