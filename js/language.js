class LanguageManager {
    constructor() {
        this.currentLang = 'tr';
        this.translations = {
            tr: {
                // Navigation
                'nav.home': 'Ana Sayfa',
                'nav.about': 'Hakkımızda',
                'nav.services': 'Hizmetler',
                'nav.contact': 'İletişim',
                'nav.login': 'Giriş Yap',
                'nav.signup': 'Üye Ol',
                
                // Hero
                'hero.title': 'Küresel Karbon Pazar Yeri',
                'hero.subtitle': 'Karbon ayak izinizi hesaplayın, sertifika alın, sürdürülebilir geleceğe katkı sağlayın',
                'hero.cta1': 'Hemen Başla',
                'hero.cta2': 'Kurumsal Demo',
                
                // Users
                'users.title': 'Kullanıcı Tipleri',
                'users.subtitle': 'CarbonEcoMarket herkes için çözüm sunar',
                
                // Calculator
                'calc.title': 'Karbon Ayak İzinizi Hesaplayın',
                'calc.subtitle': 'Basit hesaplama ile aylık karbon ayak izinizi öğrenin',
                'calc.electricity': 'Elektrik Tüketimi (kWh/ay)',
                'calc.gas': 'Doğalgaz Tüketimi (m³/ay)',
                'calc.fuel': 'Yakıt Tüketimi (litre/ay)',
                'calc.button': 'Hesapla',
                'calc.result': 'Karbon Ayak İzi Sonucu',
                'calc.monthly': 'Aylık karbon ayak iziniz',
                
                // Team
                'team.title': 'Ekibimiz',
                'team.subtitle': 'Deneyimli ekibimizle karbon piyasasını şekillendiriyoruz',
                
                // Footer
                'footer.contact': 'İletişim',
                'footer.links': 'Bağlantılar',
                'footer.legal': 'Yasal'
            },
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.about': 'About',
                'nav.services': 'Services',
                'nav.contact': 'Contact',
                'nav.login': 'Login',
                'nav.signup': 'Sign Up',
                
                // Hero
                'hero.title': 'Global Carbon Marketplace',
                'hero.subtitle': 'Calculate your carbon footprint, get certificates, contribute to sustainable future',
                'hero.cta1': 'Get Started',
                'hero.cta2': 'Enterprise Demo',
                
                // Users
                'users.title': 'User Types',
                'users.subtitle': 'CarbonEcoMarket provides solutions for everyone',
                
                // Calculator
                'calc.title': 'Calculate Your Carbon Footprint',
                'calc.subtitle': 'Learn your monthly carbon footprint with simple calculation',
                'calc.electricity': 'Electricity Consumption (kWh/month)',
                'calc.gas': 'Gas Consumption (m³/month)',
                'calc.fuel': 'Fuel Consumption (liters/month)',
                'calc.button': 'Calculate',
                'calc.result': 'Carbon Footprint Result',
                'calc.monthly': 'Your monthly carbon footprint',
                
                // Team
                'team.title': 'Our Team',
                'team.subtitle': 'Shaping the carbon market with our experienced team',
                
                // Footer
                'footer.contact': 'Contact',
                'footer.links': 'Links',
                'footer.legal': 'Legal'
            }
        };
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.detectLanguage();
    }

    bindEvents() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.changeLanguage(lang);
            });
        });
    }

    detectLanguage() {
        // Detect browser language or use default
        const browserLang = navigator.language.split('-')[0];
        if (browserLang === 'tr' || browserLang === 'en') {
            this.changeLanguage(browserLang);
        }
    }

    changeLanguage(lang) {
        this.currentLang = lang;
        document.documentElement.lang = lang;
        
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        // Update content
        this.updateContent();
        
        // Update URL for English version
        if (lang === 'en') {
            window.history.pushState({}, '', '/en');
        } else {
            window.history.pushState({}, '', '/');
        }
    }

    updateContent() {
        const translations = this.translations[this.currentLang];
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });
        
        // Update placeholders
        const electricityInput = document.getElementById('electricity');
        const gasInput = document.getElementById('gas');
        const fuelInput = document.getElementById('fuel');
        
        if (electricityInput) {
            electricityInput.placeholder = this.currentLang === 'tr' ? '300' : '300';
        }
        if (gasInput) {
            gasInput.placeholder = this.currentLang === 'tr' ? '50' : '50';
        }
        if (fuelInput) {
            fuelInput.placeholder = this.currentLang === 'tr' ? '100' : '100';
        }
    }
}

// Initialize language manager
document.addEventListener('DOMContentLoaded', () => {
    new LanguageManager();
});
