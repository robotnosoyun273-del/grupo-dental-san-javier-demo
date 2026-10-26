document.addEventListener('DOMContentLoaded', () => {
    const config = window.clinicConfig;

    if (!config) {
        console.error("Configuración no encontrada.");
        return;
    }

    // ==========================================
    // 1. INYECTAR VARIABLES CSS (TEMA)
    // ==========================================
    const root = document.documentElement;
    root.style.setProperty('--color-primary', config.theme.colors.primary);
    root.style.setProperty('--color-accent', config.theme.colors.accent);
    root.style.setProperty('--color-background', config.theme.colors.background);
    root.style.setProperty('--color-bg', config.theme.colors.background);
    root.style.setProperty('--color-surface', config.theme.colors.surface);
    root.style.setProperty('--color-text', config.theme.colors.text);
    root.style.setProperty('--color-white', config.theme.colors.white);
    root.style.setProperty('--color-whatsapp', config.theme.colors.whatsapp);

    // ==========================================
    // HELPER: SAFE ASSIGNMENT
    // ==========================================
    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el && text !== undefined) el.textContent = text;
    };
    const setHTML = (id, html) => {
        const el = document.getElementById(id);
        if (el && html !== undefined) el.innerHTML = html;
    };
    const setImg = (id, src) => {
        const el = document.getElementById(id);
        if (el && src) el.src = src;
    };

    // ==========================================
    // 2. POBLAR DATOS GENERALES Y NAV (Sanamedic Style)
    // ==========================================
    document.title = `${config.info.name} - ${config.info.tagline}`;
    const navLogoEl = document.getElementById('nav-logo');
    if (navLogoEl) {
        const logoSrc = config.info.logoWhite || config.info.logo;
        navLogoEl.innerHTML = `<img src="${logoSrc}" alt="${config.info.name}" style="height: 38px; width: auto; max-width: 220px; object-fit: contain; display: block;">`;
    }
    const waUrl = `https://wa.me/${config.info.whatsapp}?text=${encodeURIComponent(config.info.whatsappMessage)}`;
    const navCta = document.getElementById('nav-cta');
    if (navCta) {
        navCta.textContent = config.nav.ctaText;
        navCta.href = waUrl;
        navCta.target = "_blank";
        navCta.rel = "noopener noreferrer";
    }

    const navLinksContainer = document.getElementById('nav-links-container');
    const navMobileLinksContainer = document.getElementById('nav-mobile-links-container');
    const navMobileMenu = document.getElementById('nav-mobile-menu');
    const navToggleBtn = document.getElementById('nav-toggle-btn');
    const navToggleIcon = document.getElementById('nav-toggle-icon');
    const navbar = document.getElementById('navbar');

    if (config.nav && config.nav.links) {
        if (navLinksContainer) navLinksContainer.innerHTML = '';
        if (navMobileLinksContainer) navMobileLinksContainer.innerHTML = '';
        config.nav.links.forEach(link => {
            // Desktop links
            if (navLinksContainer) {
                const a = document.createElement('a');
                a.href = link.href;
                a.textContent = link.text;
                navLinksContainer.appendChild(a);
            }
            // Mobile drawer links
            if (navMobileLinksContainer) {
                const a = document.createElement('a');
                a.href = link.href;
                a.textContent = link.text;
                a.addEventListener('click', () => {
                    if (navMobileMenu) navMobileMenu.classList.remove('open');
                    if (navToggleIcon) navToggleIcon.textContent = 'menu';
                });
                navMobileLinksContainer.appendChild(a);
            }
        });
    }

    // Toggle mobile menu drawer
    if (navToggleBtn && navMobileMenu) {
        navToggleBtn.addEventListener('click', () => {
            const isOpen = navMobileMenu.classList.toggle('open');
            if (navToggleIcon) {
                navToggleIcon.textContent = isOpen ? 'close' : 'menu';
            }
        });
    }

    // Close mobile menu on mobile CTA click & set WhatsApp link
    const navMobileCta = document.getElementById('nav-mobile-cta');
    if (navMobileCta) {
        navMobileCta.href = waUrl;
        navMobileCta.target = "_blank";
        navMobileCta.rel = "noopener noreferrer";
        if (navMobileMenu) {
            navMobileCta.addEventListener('click', () => {
                navMobileMenu.classList.remove('open');
                if (navToggleIcon) navToggleIcon.textContent = 'menu';
            });
        }
    }

    // Navbar scroll effect (blur & compact)
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // ==========================================
    // 3. POBLAR HERO
    // ==========================================
    setText('hero-top-label', config.hero.topLabel);
    setHTML('hero-title', `${config.hero.headline.part1} <i>${config.hero.headline.italic}</i>${config.hero.headline.part2}`);
    
    const heroBtnPrimary = document.getElementById('hero-btn-primary');
    if (heroBtnPrimary) {
        heroBtnPrimary.textContent = config.hero.buttons.primary;
        heroBtnPrimary.href = waUrl;
        heroBtnPrimary.target = "_blank";
        heroBtnPrimary.rel = "noopener noreferrer";
    }

    const heroBtnSecondary = document.getElementById('hero-btn-secondary');
    if (heroBtnSecondary) {
        heroBtnSecondary.textContent = config.hero.buttons.secondary;
        heroBtnSecondary.href = `tel:${config.info.phone.replace(/[^0-9+]/g, '')}`;
    }

    // Initial population for Carousels
    const bgContainer = document.getElementById('hero-bg-carousel');
    const descContainer = document.getElementById('hero-desc-carousel');

    if (bgContainer && config.hero.carouselImages) {
        // Clear previous images while preserving overlay
        const existingImgs = bgContainer.querySelectorAll('img');
        existingImgs.forEach(img => img.remove());

        const overlay = bgContainer.querySelector('.hero-v2-overlay');
        config.hero.carouselImages.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `${config.info.name} - Vista ${index + 1}`;
            if (index === 0) img.classList.add('active');
            if (overlay) {
                bgContainer.insertBefore(img, overlay);
            } else {
                bgContainer.appendChild(img);
            }
        });
    }

    if (descContainer && config.hero.carouselDescriptions) {
        descContainer.innerHTML = '';
        config.hero.carouselDescriptions.forEach((text, index) => {
            const p = document.createElement('p');
            p.className = 'hero-carousel-text';
            p.textContent = text;
            if (index === 0) p.classList.add('active');
            descContainer.appendChild(p);
        });
    }

    // Carousel Logic
    let currentSlide = 0;
    setInterval(() => {
        if (bgContainer && descContainer) {
            const imgs = bgContainer.querySelectorAll('img');
            const texts = descContainer.querySelectorAll('.hero-carousel-text');
            if (imgs.length > 0 && texts.length > 0) {
                imgs[currentSlide].classList.remove('active');
                texts[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % imgs.length;
                imgs[currentSlide].classList.add('active');
                texts[currentSlide].classList.add('active');
            }
        }
    }, 5000); // Change every 5 seconds

    // ==========================================
    // 4. POBLAR ABOUT US
    // ==========================================
    setText('about-label', config.about.label);
    setHTML('about-title', `${config.about.headline.part1} <i>${config.about.headline.italic1}</i>${config.about.headline.part2} <i>${config.about.headline.italic2}</i>${config.about.headline.part3}`);

    // ==========================================
    // 5. POBLAR SERVICIOS (SCROLL-DRIVEN FOLDERS)
    // ==========================================
    setText('services-label', config.services.label);
    setText('services-number', config.services.number);

    const runway = document.getElementById('services-scroll-runway');
    const viewport = document.getElementById('services-sticky-viewport');

    if (runway && viewport && config.services.list) {
        const numCards = config.services.list.length;
        // Dynamic tab height ensures 9 cards fit on any screen
        const TAB_HEIGHT = Math.min(65, Math.max(34, Math.floor((window.innerHeight * 0.40) / numCards)));
        const extraRunway = 1; // Extra 100vh for the final card to fold into a tab

        // Set runway height: each card gets 100vh, plus 1 for the gallery transition
        runway.style.height = `${(numCards + extraRunway) * 100}vh`;
        viewport.innerHTML = '';

        // Create all cards
        config.services.list.forEach((service, index) => {
            const card = document.createElement('div');
            card.className = 'service-card-3d';
            card.dataset.index = index;

            card.innerHTML = `
                <div class="service-card-bg">
                    <img src="${service.image}" alt="${service.title}">
                </div>
                <div class="service-card-content">
                    <div class="sc-header">
                        <div class="sc-id">ESPECIALIDAD ${service.id}</div>
                        <h3 class="sc-title">${service.title}</h3>
                    </div>
                    <h4 class="sc-subtitle">${service.subtitle}</h4>
                    <p class="sc-desc">${service.description}</p>
                    <a href="#contacto" class="btn-pill btn-pill-glass" style="width: max-content;">${config.hero.buttons.primary}</a>
                </div>
            `;

            // Click on a stacked tab → scroll to that card's position
            card.addEventListener('click', () => {
                if (card.dataset.stacked === 'true') {
                    const runwayTop = window.scrollY + runway.getBoundingClientRect().top;
                    const scrollableHeight = runway.offsetHeight - window.innerHeight;
                    const targetScroll = runwayTop + (index / numCards) * scrollableHeight;
                    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
                }
            });

            viewport.appendChild(card);
        });

        const allCards = viewport.querySelectorAll('.service-card-3d');

        // Scroll handler — maps scroll position to card transforms
        function updateCards() {
            const scrollableHeight = runway.offsetHeight - window.innerHeight;
            const scrolled = -runway.getBoundingClientRect().top;
            const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

            const activeFloat = progress * numCards;
            const behindCount = Math.floor(activeFloat);

            allCards.forEach((card, i) => {
                let ty, scale, brightness, zIdx;

                if (i < behindCount) {
                    // FULLY BEHIND: show as a tab at the top
                    ty = i * TAB_HEIGHT;
                    scale = 1;
                    brightness = Math.max(0.4, 1 - (behindCount - i) * 0.15);
                    zIdx = i + 1;
                    card.dataset.stacked = 'true';

                } else if (i === behindCount) {
                    // ACTIVE CARD (or transitioning to tab)
                    const frac = activeFloat - behindCount;
                    const fullPos = behindCount * TAB_HEIGHT;
                    ty = fullPos;
                    scale = 1;
                    brightness = 1 - frac * 0.15;
                    zIdx = i + 1;
                    card.dataset.stacked = frac > 0.7 ? 'true' : 'false';

                } else if (i === behindCount + 1) {
                    // ENTERING CARD: sliding up from below
                    const frac = activeFloat - behindCount;
                    const targetPos = (behindCount + 1) * TAB_HEIGHT;
                    ty = targetPos + (1 - frac) * (window.innerHeight - targetPos);
                    scale = 1;
                    brightness = 1;
                    zIdx = numCards + 1;
                    card.dataset.stacked = 'false';

                } else {
                    // FUTURE CARDS: hidden below
                    ty = window.innerHeight + 50;
                    scale = 1;
                    brightness = 1;
                    zIdx = 0;
                    card.dataset.stacked = 'false';
                }

                card.style.transform = `translateY(${ty}px) scale(${scale})`;
                card.style.filter = `brightness(${brightness})`;
                card.style.zIndex = zIdx;
            });
        }

        window.addEventListener('scroll', updateCards, { passive: true });
        updateCards(); // Initial paint
    }

    // ==========================================
    // 6. POBLAR GALERÍA (Instalaciones Reales)
    // ==========================================
    const galleryContainer = document.getElementById('gallery-container');
    if (galleryContainer && config.gallery) {
        galleryContainer.innerHTML = '';
        const galleryItems = Array.isArray(config.gallery) ? config.gallery : (config.gallery.images || []);
        galleryItems.forEach(item => {
            const src = typeof item === 'string' ? item : item.src;
            const alt = typeof item === 'string' ? `Instalaciones ${config.info.name}` : (item.alt || `Instalaciones ${config.info.name}`);
            const div = document.createElement('div');
            div.className = 'gallery-item fade-in-up';
            div.innerHTML = `<img src="${src}" alt="${alt}" loading="lazy">`;
            galleryContainer.appendChild(div);
        });
    }

    // ==========================================
    // 7. POBLAR DOCTORES & MODAL
    // ==========================================
    setText('doctors-heading', config.doctors.heading);
    const doctorsContainer = document.getElementById('doctors-container');

    // Create Doctor Modal
    const doctorModal = document.createElement('div');
    doctorModal.className = 'doctor-details-overlay';
    doctorModal.innerHTML = `
        <div class="doctor-details-card">
            <button class="close-modal" aria-label="Cerrar">&times;</button>
            <h2 id="modal-doc-name" style="font-family: var(--font-headlines); margin-bottom: 8px;"></h2>
            <p id="modal-doc-spec" style="color: var(--color-accent); margin-bottom: 16px; font-weight: 600;"></p>
            <p id="modal-doc-desc" style="line-height: 1.6; color: var(--color-text);"></p>
            <a href="#contacto" class="btn btn-primary pill modal-cta-btn" style="margin-top: 32px; display: inline-block;">Agendar Cita con Especialista &rarr;</a>
        </div>
    `;
    document.body.appendChild(doctorModal);

    const closeModalBtn = doctorModal.querySelector('.close-modal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            doctorModal.classList.remove('active');
        });
    }
    doctorModal.addEventListener('click', (e) => {
        if (e.target === doctorModal) {
            doctorModal.classList.remove('active');
        }
    });
    const modalCta = doctorModal.querySelector('.modal-cta-btn');
    if (modalCta) {
        modalCta.addEventListener('click', () => {
            doctorModal.classList.remove('active');
        });
    }

    function openDoctorModal(doc) {
        const modalName = document.getElementById('modal-doc-name');
        const modalSpec = document.getElementById('modal-doc-spec');
        const modalDesc = document.getElementById('modal-doc-desc');
        if (modalName) modalName.textContent = doc.name;
        if (modalSpec) modalSpec.textContent = doc.specialty;
        if (modalDesc) modalDesc.textContent = doc.details;
        doctorModal.classList.add('active');
    }

    if (doctorsContainer && config.doctors && config.doctors.list) {
        doctorsContainer.innerHTML = '';
        config.doctors.list.forEach(doc => {
            const div = document.createElement('div');
            div.className = 'doctor-card';
            div.innerHTML = `
                <div class="doctor-image">
                    <img src="${doc.image}" alt="${doc.name}" loading="lazy">
                </div>
                <div class="doctor-info">
                    <h3>${doc.name}</h3>
                    <p>${doc.specialty}</p>
                    <div class="doctor-socials">
                        ${doc.socials && doc.socials.instagram ? `<a href="${doc.socials.instagram}" target="_blank" rel="noopener noreferrer">IG</a>` : ''}
                        ${doc.socials && doc.socials.facebook ? `<a href="${doc.socials.facebook}" target="_blank" rel="noopener noreferrer">FB</a>` : ''}
                    </div>
                </div>
            `;

            div.addEventListener('click', () => {
                openDoctorModal(doc);
            });

            doctorsContainer.appendChild(div);
        });

        // Doctor Carousel Navigation Buttons
        const prevBtn = document.getElementById('doctors-prev-btn');
        const nextBtn = document.getElementById('doctors-next-btn');
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                doctorsContainer.scrollBy({ left: -340, behavior: 'smooth' });
            });
            nextBtn.addEventListener('click', () => {
                doctorsContainer.scrollBy({ left: 340, behavior: 'smooth' });
            });
        }
    }

    // ==========================================
    // 8. POBLAR TESTIMONIOS (GOOGLE REVIEWS)
    // ==========================================
    const reviewsTrack = document.getElementById('reviews-track');
    if (reviewsTrack && config.reviews && config.reviews.list) {
        reviewsTrack.innerHTML = '';

        const createCardHTML = (review) => `
            <div class="google-review-card">
                <div class="gr-header">
                    ${review.avatar ? `<img src="${review.avatar}" alt="${review.name}" class="gr-avatar" loading="lazy">` : `<div class="gr-avatar" style="background:${review.color || 'var(--color-accent)'};color:#fff;">${review.name.charAt(0)}</div>`}
                    <div class="gr-meta">
                        <span class="gr-name">${review.name}</span>
                        <span class="gr-time">${review.time}</span>
                    </div>
                    <svg class="gr-google-icon" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                </div>
                <div class="gr-stars">
                    ${Array(review.rating).fill(`
                        <svg viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                    `).join('')}
                </div>
                <p class="gr-text">"${review.text}"</p>
            </div>
        `;

        // Render reviews
        const reviewsHTML = config.reviews.list.map(createCardHTML).join('');
        // Duplicate for seamless infinite marquee scroll
        reviewsTrack.innerHTML = reviewsHTML + reviewsHTML;
    }

    // ==========================================
    // 9. POBLAR FAQ ACCORDION
    // ==========================================
    setText('faq-heading', config.faq.heading);
    const faqContainer = document.getElementById('faq-container');

    if (faqContainer && config.faq && config.faq.questions) {
        faqContainer.innerHTML = '';
        config.faq.questions.forEach((faqItem, idx) => {
            const item = document.createElement('div');
            item.className = 'faq-item';
            if (idx === 0) item.classList.add('active'); // First open by default

            item.innerHTML = `
                <div class="faq-question">
                    <h3>${faqItem.q}</h3>
                    <span class="material-symbols-outlined icon">expand_more</span>
                </div>
                <div class="faq-answer">
                    <p>${faqItem.a}</p>
                </div>
            `;

            const questionBtn = item.querySelector('.faq-question');
            questionBtn.addEventListener('click', () => {
                const wasActive = item.classList.contains('active');
                // Close others
                faqContainer.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
                if (!wasActive) {
                    item.classList.add('active');
                }
            });

            faqContainer.appendChild(item);
        });
    }

    // ==========================================
    // 10. POBLAR CONTACTO & FORMULARIO
    // ==========================================
    setText('contact-heading', config.contact.heading);
    setText('label-name', config.contact.labels.name);
    setText('label-email', config.contact.labels.email);
    setText('label-service', config.contact.labels.service);
    setText('label-date', config.contact.labels.date);
    setText('label-submit', config.contact.labels.submit);
    setText('clinic-address-map', config.contact.addressText);

    const mapIframe = document.getElementById('map-iframe');
    if (mapIframe && config.contact.mapIframeSrc) {
        mapIframe.src = config.contact.mapIframeSrc;
    }

    // Booking Form Interactive submission
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('form-name')?.value || '';
            const email = document.getElementById('form-email')?.value || '';

            const waMsg = `Hola ${config.info.name}, me comunico desde la página web.\n\n*Nombre:* ${name}\n*Correo:* ${email}\n\n${config.info.whatsappMessage}`;
            const waUrl = `https://wa.me/${config.info.whatsapp}?text=${encodeURIComponent(waMsg)}`;
            window.open(waUrl, '_blank');
        });
    }

    // ==========================================
    // 11. POBLAR FOOTER
    // ==========================================
    const footerLogo = document.getElementById('footer-logo');
    if (footerLogo) {
        const logoSrc = config.info.logoWhite || config.info.logo;
        footerLogo.innerHTML = `<img src="${logoSrc}" alt="${config.info.name}" style="height: 44px; width: auto; max-width: 250px; object-fit: contain; display: block; margin-bottom: 20px;">`;
    }
    setText('footer-desc', config.footer.desc);
    
    const footerPhone = document.getElementById('footer-phone');
    if (footerPhone) {
        footerPhone.innerHTML = `<a href="tel:${config.info.phone.replace(/[^0-9+]/g, '')}" style="color: inherit; text-decoration: none;">📞 ${config.info.phone}</a>`;
    }
    const footerEmail = document.getElementById('footer-email');
    if (footerEmail) {
        footerEmail.innerHTML = `<a href="mailto:${config.info.email}" style="color: inherit; text-decoration: none;">✉️ ${config.info.email}</a>`;
    }

    setText('footer-hours-week', config.footer.hours.week);
    setText('footer-hours-sat', config.footer.hours.sat);
    setText('footer-hours-sun', config.footer.hours.sun);
    setText('footer-copyright', config.footer.copyright);

    const footerNavLinks = document.getElementById('footer-nav-links');
    if (footerNavLinks && config.nav && config.nav.links) {
        footerNavLinks.innerHTML = '';
        config.nav.links.forEach(link => {
            const a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.text;
            footerNavLinks.appendChild(a);
        });
    }

    // ==========================================
    // 12. POBLAR WHATSAPP FAB
    // ==========================================
    const whatsappFab = document.getElementById('whatsapp-fab');
    if (whatsappFab) {
        whatsappFab.href = `https://wa.me/${config.info.whatsapp}?text=${encodeURIComponent(config.info.whatsappMessage)}`;
    }

    // ==========================================
    // 13. ANIMACIONES FADE-IN-UP (INTERSECTION OBSERVER)
    // ==========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
});
