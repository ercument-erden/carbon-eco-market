/**
 * CarbonEcoMarket - GSAP Animations
 * Smooth scroll animations and interactions
 */

// Initialize GSAP ScrollTrigger
if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
  gsap.registerPlugin(ScrollTrigger);
}

// Counter animation
function animateCounter(element, target, duration = 2000, suffix = '') {
  let current = 0;
  const increment = target / (duration / 16);
  const startTime = Date.now();

  function update() {
    current += increment;
    const elapsed = Date.now() - startTime;

    if (elapsed < duration) {
      element.textContent = formatNumber(current, suffix);
      requestAnimationFrame(update);
    } else {
      element.textContent = formatNumber(target, suffix);
    }
  }

  update();
}

function formatNumber(num, suffix = '') {
  if (num >= 1e12) return '$' + (num / 1e12).toFixed(1) + 'T' + suffix;
  if (num >= 1e9) return '$' + (num / 1e9).toFixed(1) + 'B' + suffix;
  if (num >= 1e6) return '$' + (num / 1e6).toFixed(1) + 'M' + suffix;
  if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K' + suffix;
  return Math.round(num) + suffix;
}

// Initialize counter animations on scroll
function initCounters() {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target'));
    const suffix = counter.getAttribute('data-suffix') || '';

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounter(counter, target, 2000, suffix);
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    observer.observe(counter);
  });
}

// Parallax effects with GSAP
function initParallax() {
  if (typeof gsap === 'undefined') return;

  // Parallax background layers
  gsap.utils.toArray('.parallax-layer').forEach((layer, i) => {
    const depth = layer.dataset.depth || (i + 1) * 0.5;

    gsap.to(layer, {
      y: () => -window.innerHeight * depth,
      ease: 'none',
      scrollTrigger: {
        trigger: layer.closest('section'),
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });
}

// Reveal animations on scroll
function initRevealAnimations() {
  if (typeof gsap === 'undefined') return;

  // Text reveals
  gsap.utils.toArray('.reveal-text').forEach((text, i) => {
    gsap.from(text, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: text,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Scale reveals
  gsap.utils.toArray('.reveal-scale').forEach((element, i) => {
    gsap.from(element, {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Slide in from left
  gsap.utils.toArray('.slide-left').forEach((element) => {
    gsap.from(element, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Slide in from right
  gsap.utils.toArray('.slide-right').forEach((element) => {
    gsap.from(element, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });
}

// 3D card tilt effect
function initCardTilt() {
  const cards = document.querySelectorAll('.stat-card-3d, .vision-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
  });
}

// Smooth scroll to anchors
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Page transition effect
function initPageTransitions() {
  // Fade in on load
  window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transform = 'translateY(0)';
  });

  // Fade out on navigation (for language switches, etc.)
  document.querySelectorAll('.lang-option, .page-transition').forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.href && !this.href.includes('#')) {
        e.preventDefault();
        document.body.style.opacity = '0';
        document.body.style.transform = 'translateY(-20px)';

        setTimeout(() => {
          window.location.href = this.href;
        }, 300);
      }
    });
  });
}

// Navbar scroll effect
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Mobile menu toggle
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  }
}

// Initialize all animations
function initAnimations() {
  initCounters();
  initParallax();
  initRevealAnimations();
  initCardTilt();
  initSmoothScroll();
  initPageTransitions();
  initNavbarScroll();
  initMobileMenu();
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}
