/* ====================================
   INVESTOR SITE SCRIPT
   ==================================== */

// ============ TAB SWITCHING (Financials) ============
const finTabs = document.querySelectorAll('.fin-tab');
const finContents = document.querySelectorAll('.fin-content');

finTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-tab');
        
        finTabs.forEach(t => t.classList.remove('active'));
        finContents.forEach(c => c.classList.remove('active'));
        
        tab.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = 70;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============ COUNTER ANIMATION ============
function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            element.textContent = formatValue(end);
            clearInterval(timer);
        } else {
            element.textContent = formatValue(Math.floor(current));
        }
    }, 16);
}

function formatValue(value) {
    if (value >= 1000000) {
        return '$' + (value / 1000000).toFixed(1) + 'M';
    } else if (value >= 1000) {
        return '$' + (value / 1000).toFixed(0) + 'K';
    }
    return value.toString();
}

// ============ INTERSECTION OBSERVER ============
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animate counters
            if (entry.target.classList.contains('metric-value') || 
                entry.target.classList.contains('stat-number')) {
                const text = entry.target.textContent;
                const match = text.match(/[\d,]+/);
                if (match) {
                    const value = parseInt(match[0].replace(/,/g, ''));
                    entry.target.textContent = '0';
                    animateValue(entry.target, 0, value, 1000);
                }
            }
            
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.stat-card, .evidence-card, .term-card, .scenario-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    fadeInObserver.observe(el);
});

// Animate metric values
document.querySelectorAll('.metric-value, .stat-number').forEach(el => {
    fadeInObserver.observe(el);
});

// ============ PROGRESS TRACKING ============
let scrollProgress = 0;

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    scrollProgress = (window.pageYOffset / documentHeight) * 100;
    
    // Update navbar
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
    }
});

// ============ PRINT ANALYTICS ============
console.log('%c💼 CarbonEcoMarket Investment Deck', 'font-size: 24px; font-weight: bold; color: #27ae60;');
console.log('%cSeed Round: $1.5-2M | Target ROI: 30-50x', 'font-size: 14px; color: #2980b9;');
console.log('%cContact: ercument.erden@lionexia.com', 'font-size: 12px;');

// ============ COPY PROTECTION (Optional) ============
// Disable right-click on investment deck
document.addEventListener('contextmenu', (e) => {
    if (window.location.pathname.includes('/invest')) {
        e.preventDefault();
        console.log('⚠️ This content is confidential');
    }
});

// Watermark on print
window.addEventListener('beforeprint', () => {
    console.log('📄 Investment deck printed - tracking');
});
```

## _redirects (Netlify Routing)
```
# Netlify redirects file

# Main site language routing
/en  /en/index.html  200
/tr  /index.html  200

# Investor site routing
/invest  /invest/index.html  200
/invest/tr  /invest/tr/index.html  200
/invest/en  /invest/index.html  200

# Fallbacks
/*  /index.html  200
```

---

# DEPLOYMENT INSTRUCTIONS

## Netlify Deployment (5 dakika)

1. **Dosya Yapısını Oluştur:**
```
carbonecomarket/
├── index.html (TR ana site)
├── styles.css
├── script.js
├── en/
│   └── index.html (EN ana site - aynı içerik, İngilizce çevir)
├── invest/
│   ├── index.html (EN yatırımcı)
│   ├── invest-styles.css
│   ├── invest-script.js
│   └── tr/
│       └── index.html (TR yatırımcı - İngilizce'yi çevir)
└── _redirects