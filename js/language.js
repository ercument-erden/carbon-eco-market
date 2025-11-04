class LanguageManager {
    constructor() {
        this.currentLang = 'tr';
        this.translations = {
            tr: {
                // Navigation
                'nav.home': 'Ana Sayfa',
                'nav.services': 'Hizmetler',
                'nav.calculator': 'Hesaplayıcı',
                'nav.team': 'Ekibimiz',
                'nav.contact': 'İletişim',
                'nav.login': 'Giriş Yap',
                'nav.signup': 'Üye Ol',
                
                // Hero
                'hero.title': 'Küresel Karbon Pazar Yeri',
                'hero.subtitle': 'Karbon ayak izinizi hesaplayın, sertifika alın, sürdürülebilir geleceğe katkı sağlayın',
                'hero.cta1': 'Hemen Başla',
                'hero.cta2': 'Kurumsal Demo',
                
                // Services
                'services.title': 'Kullanıcı Tipleri',
                'services.subtitle': 'CarbonEcoMarket herkes için çözüm sunar',
                'services.individual.title': 'Bireysel Kullanıcılar',
                'services.individual.desc': 'Kişisel karbon ayak izinizi hesaplayın ve sertifika alın',
                'services.farmers.title': 'Çiftçiler',
                'services.farmers.desc': 'Karbon kredisi üretin ve satın',
                'services.corporate.title': 'Kurumsal',
                'services.corporate.desc': 'Şirketinizin karbon yönetimini optimize edin',
                'services.ngo.title': 'STK\'lar',
                'services.ngo.desc': 'Çevre projelerinizi karbon kredisine dönüştürün',
                'services.traders.title': 'Traderlar',
                'services.traders.desc': 'Profesyonel karbon ticareti yapın',
                'services.energy.title': 'Enerji Sektörü',
                'services.energy.desc': 'Enerji şirketleri için özel çözümler',
                'services.partners.title': 'İş Ortakları',
                'services.partners.desc': 'API entegrasyonu ile platformumuza entegre olun',
                
                // Calculator
                'calculator.title': 'Karbon Ayak İzinizi Hesaplayın',
                'calculator.subtitle': 'Basit hesaplama ile aylık karbon ayak izinizi öğrenin',
                'calculator.electricity': 'Elektrik Tüketimi (kWh/ay)',
                'calculator.gas': 'Doğalgaz Tüketimi (m³/ay)',
                'calculator.fuel': 'Yakıt Tüketimi (litre/ay)',
                'calculator.button': 'Hesapla',
                
                // Statistics
                'stats.co2': 'Dengelenen CO₂ (ton)',
                'stats.users': 'Aktif Kullanıcı',
                'stats.volume': 'Günlük İşlem Hacmi',
                'stats.projects': 'Desteklenen Proje',
                
                // Team
                'team.title': 'Ekibimiz',
                'team.subtitle': 'Deneyimli ekibimizle karbon piyasasını şekillendiriyoruz',
                'team.ceo': 'Kurucu & CEO',
                'team.cto': 'CTO',
                'team.advisor': 'Danışman',
                
                // Footer
                'footer.tagline': 'Sürdürülebilir bir gelecek için birlikte çalışıyoruz.',
                'footer.contact': 'İletişim',
                'footer.location': 'İstanbul, Türkiye',
                'footer.links': 'Bağlantılar',
                'footer.legal': 'Yasal',
                'footer.privacy': 'Gizlilik Politikası',
                'footer.terms': 'Kullanım Şartları',
                'footer.kvkk': 'KVKK',
                'footer.copyright': '© 2025 CarbonEcoMarket. Tüm hakları saklıdır.'
            },
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.services': 'Services',
                'nav.calculator': 'Calculator',
                'nav.team': 'Our Team',
                'nav.contact': 'Contact',
                'nav.login': 'Login',
                'nav.signup': 'Sign Up',
                
                // Hero
                'hero.title': 'Global Carbon Marketplace',
                'hero.subtitle': 'Calculate your carbon footprint, get certificates, contribute to sustainable future',
                'hero.cta1': 'Get Started',
                'hero.cta2': 'Enterprise Demo',
                
                // Services
                'services.title': 'User Types',
                'services.subtitle': 'CarbonEcoMarket provides solutions for everyone',
                'services.individual.title': 'Individual Users',
                'services.individual.desc': 'Calculate your personal carbon footprint and get certified',
                'services.farmers.title': 'Farmers',
                'services.farmers.desc': 'Produce and sell carbon credits',
                'services.corporate.title': 'Corporate',
                'services.corporate.desc': 'Optimize your company\'s carbon management',
                'services.ngo.title': 'NGOs',
                'services.ngo.desc': 'Transform your environmental projects into carbon credits',
                'services.traders.title': 'Traders',
                'services.traders.desc': 'Professional carbon trading',
                'services.energy.title': 'Energy Sector',
                'services.energy.desc': 'Specialized solutions for energy companies',
                'services.partners.title': 'Business Partners',
                'services.partners.desc': 'Integrate with our platform via API',
                
                // Calculator
                'calculator.title': 'Calculate Your Carbon Footprint',
                'calculator.subtitle': 'Learn your monthly carbon footprint with simple calculation',
                'calculator.electricity': 'Electricity Consumption (kWh/month)',
                'calculator.gas': 'Gas Consumption (m³/month)',
                'calculator.fuel': 'Fuel Consumption (liters/month)',
                'calculator.button': 'Calculate',
                
                // Statistics
                'stats.co2': 'CO₂ Offset (tons)',
                'stats.users': 'Active Users',
                'stats.volume': 'Daily Trading Volume',
                'stats.projects': 'Supported Projects',
                
                // Team
                'team.title': 'Our Team',
                'team.subtitle': 'Shaping the carbon market with our experienced team',
                'team.ceo': 'Founder & CEO',
                'team.cto': 'CTO',
                'team.advisor': 'Advisor',
                
                // Footer
                'footer.tagline': 'Working together for a sustainable future.',
                'footer.contact': 'Contact',
                'footer.location': 'Istanbul, Turkey',
                'footer.links': 'Links',
                'footer.legal': 'Legal',
                'footer.privacy': 'Privacy Policy',
                'footer.terms': 'Terms of Use',
                'footer.kvkk': 'GDPR',
                'footer.copyright': '© 2025 CarbonEcoMarket. All rights reserved.'
            }
        };
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateContent();
    }

    bindEvents() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.changeLanguage(lang);
            });
        });
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
    }
}

// Initialize language manager
document.addEventListener('DOMContentLoaded', () => {
    new LanguageManager();
});
