class CarbonCalculator {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        const calculateBtn = document.getElementById('calculate-btn');
        if (calculateBtn) {
            calculateBtn.addEventListener('click', () => this.calculate());
        }

        // Enter key support
        document.querySelectorAll('.calc-form input').forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.calculate();
                }
            });
        });
    }

    calculate() {
        const electricity = parseFloat(document.getElementById('electricity').value) || 0;
        const gas = parseFloat(document.getElementById('gas').value) || 0;
        const fuel = parseFloat(document.getElementById('fuel').value) || 0;

        const carbonFootprint = (electricity * 0.5) + (gas * 2.0) + (fuel * 2.3);
        
        this.showResult(carbonFootprint);
    }

    showResult(footprint) {
        const resultElement = document.getElementById('calc-result');
        const message = `
            <h4>Karbon Ayak İzi Sonucu</h4>
            <div style="font-size: 2.5rem; font-weight: 800; margin: 1rem 0;">${footprint.toFixed(2)} kg CO₂</div>
            <p>Aylık karbon ayak iziniz</p>
        `;
        
        resultElement.innerHTML = message;
        resultElement.classList.add('show');
        
        // Scroll to result
        resultElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

// Initialize calculator
document.addEventListener('DOMContentLoaded', () => {
    new CarbonCalculator();
});
