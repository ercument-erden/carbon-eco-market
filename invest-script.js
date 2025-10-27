/* ====================================
   CARBONECOMARKET - MAIN SCRIPT
   Interactive functionality
   ==================================== */

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============ NAVBAR SCROLL EFFECT ============
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Scroll down - add shadow
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
    
    lastScroll = currentScroll;
});

// ============ MOBILE MENU ============
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// ============ TAB FUNCTIONALITY ============
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        
        // Remove active from all
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active to clicked
        btn.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// ============ INTERSECTION OBSERVER (Animations) ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.problem-card, .tech-card, .team-card, .traction-card, .advisor-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// ============ COUNTER ANIMATION ============
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(current));
        }
    }, 20);
}

function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// ============ STATS ANIMATION ============
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number, .breakdown-value');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const match = text.match(/\d+/);
                if (match) {
                    const value = parseInt(match[0]);
                    animateCounter(stat, value);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.hero-stats');
const marketSection = document.querySelector('.market-stats');

if (statsSection) statsObserver.observe(statsSection);
if (marketSection) statsObserver.observe(marketSection);

// ============ LANGUAGE SWITCHER (if exists) ============
const langBtns = document.querySelectorAll('.lang-btn');

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        const currentPath = window.location.pathname;
        
        if (lang === 'en') {
            if (currentPath === '/' || currentPath === '/index.html') {
                window.location.href = '/en';
            } else if (currentPath.includes('/invest') && !currentPath.includes('/en')) {
                window.location.href = '/invest';
            }
        } else if (lang === 'tr') {
            if (currentPath.includes('/en')) {
                window.location.href = '/';
            } else if (currentPath === '/invest' || currentPath === '/invest/') {
                window.location.href = '/invest/tr';
            }
        }
    });
});

// ============ FORM VALIDATION (if contact form exists) ============
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = contactForm.querySelector('input[type="email"]').value;
        const name = contactForm.querySelector('input[name="name"]').value;
        
        if (email && name) {
            // Here you would send to backend
            alert('Teşekkürler! En kısa sürede sizinle iletişime geçeceğiz.');
            contactForm.reset();
        }
    });
}

// ============ LAZY LOAD IMAGES ============
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============ NAVBAR ACTIVE LINK ============
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ============ CONSOLE MESSAGE (Easter Egg) ============
console.log('%c🌍 CarbonEcoMarket', 'font-size: 24px; font-weight: bold; color: #27ae60;');
console.log('%cHey developer! 👋', 'font-size: 16px; color: #2980b9;');
console.log('%cLooking for our API? Visit: api.carbonecomarket.com/docs', 'font-size: 14px;');
console.log('%cWant to join our team? careers@carbonecomarket.com', 'font-size: 14px;');

// ============ PERFORMANCE MONITORING ============
window.addEventListener('load', () => {
    // Page load time
    const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    console.log(`⚡ Page loaded in ${loadTime}ms`);
    
    // Send to analytics (if implemented)
    if (window.gtag) {
        gtag('event', 'timing_complete', {
            'name': 'load',
            'value': loadTime,
            'event_category': 'Performance'
        });
    }
});