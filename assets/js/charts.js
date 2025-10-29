/**
 * CarbonEcoMarket - Chart Visualizations
 * Interactive financial charts and data visualizations
 */

// Revenue Breakdown Donut Chart
function initRevenueChart() {
  const canvas = document.getElementById('revenueChart');
  if (!canvas || typeof Chart === 'undefined') return;

  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [
        'B2C Carbon Neutral (€30B)',
        'B2B CBAM Compliance (€2B)',
        'Transport & Logistics (€12B)',
        'Carbon Derivatives (€10B)',
        'Data & Analytics (€12B)'
      ],
      datasets: [{
        data: [30, 2, 12, 10, 12],
        backgroundColor: [
          'rgba(39, 174, 96, 0.9)',
          'rgba(41, 128, 185, 0.9)',
          'rgba(230, 126, 34, 0.9)',
          'rgba(155, 89, 182, 0.9)',
          'rgba(52, 152, 219, 0.9)'
        ],
        borderWidth: 0,
        hoverOffset: 30,
        hoverBorderColor: '#fff',
        hoverBorderWidth: 3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: '#2c3e50',
            font: { size: 14, weight: '600', family: 'Inter' },
            padding: 20,
            usePointStyle: true,
            pointStyle: 'circle'
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          titleFont: { size: 16, weight: '700' },
          bodyFont: { size: 14 },
          padding: 15,
          cornerRadius: 10,
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.parsed;
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((value / total) * 100).toFixed(1);
              return `${label}: ${percentage}% (€${value}B)`;
            }
          }
        }
      },
      animation: {
        animateRotate: true,
        animateScale: true,
        duration: 2000,
        easing: 'easeInOutQuart'
      }
    }
  });
}

// Financial Growth Curve
function initGrowthChart() {
  const canvas = document.getElementById('growthChart');
  if (!canvas || typeof Chart === 'undefined') return;

  const ctx = canvas.getContext('2d');

  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(39, 174, 96, 0.6)');
  gradient.addColorStop(1, 'rgba(39, 174, 96, 0.0)');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
      datasets: [
        {
          label: 'Base Case',
          data: [0.6, 3.9, 25, 75, 150],
          borderColor: '#27ae60',
          backgroundColor: gradient,
          borderWidth: 4,
          tension: 0.4,
          pointRadius: 8,
          pointHoverRadius: 12,
          pointBackgroundColor: '#fff',
          pointBorderColor: '#27ae60',
          pointBorderWidth: 3,
          fill: true
        },
        {
          label: 'Conservative',
          data: [0.32, 1.2, 8, 35, 60],
          borderColor: '#95a5a6',
          borderWidth: 2,
          borderDash: [8, 4],
          tension: 0.4,
          pointRadius: 6,
          pointBackgroundColor: '#fff',
          pointBorderColor: '#95a5a6',
          pointBorderWidth: 2,
          fill: false
        },
        {
          label: 'Optimistic',
          data: [0.95, 6.5, 45, 120, 250],
          borderColor: '#e67e22',
          borderWidth: 2,
          borderDash: [8, 4],
          tension: 0.4,
          pointRadius: 6,
          pointBackgroundColor: '#fff',
          pointBorderColor: '#e67e22',
          pointBorderWidth: 2,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: value => '$' + value + 'B',
            font: { size: 13, weight: '600' },
            color: '#2c3e50'
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.05)',
            drawBorder: false
          }
        },
        x: {
          ticks: {
            font: { size: 13, weight: '600' },
            color: '#2c3e50'
          },
          grid: {
            display: false,
            drawBorder: false
          }
        }
      },
      plugins: {
        legend: {
          position: 'top',
          align: 'end',
          labels: {
            font: { size: 14, weight: '700' },
            padding: 20,
            usePointStyle: true,
            pointStyle: 'circle'
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          titleFont: { size: 16, weight: '700' },
          bodyFont: { size: 14 },
          padding: 15,
          cornerRadius: 10,
          displayColors: true,
          callbacks: {
            label: context => {
              return `${context.dataset.label}: $${context.parsed.y}B revenue`;
            }
          }
        }
      },
      animation: {
        duration: 3000,
        easing: 'easeInOutQuart'
      }
    }
  });
}

// TAM Breakdown Chart
function initTAMChart() {
  const canvas = document.getElementById('tamChart');
  if (!canvas || typeof Chart === 'undefined') return;

  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Mandatory\nMarket', 'Voluntary\nMarket'],
      datasets: [{
        label: 'TAM 2030 (Billions €)',
        data: [850, 650],
        backgroundColor: [
          'rgba(39, 174, 96, 0.8)',
          'rgba(52, 152, 219, 0.8)'
        ],
        borderColor: [
          'rgba(39, 174, 96, 1)',
          'rgba(52, 152, 219, 1)'
        ],
        borderWidth: 2,
        borderRadius: 10,
        hoverBackgroundColor: [
          'rgba(39, 174, 96, 1)',
          'rgba(52, 152, 219, 1)'
        ]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: value => '€' + value + 'B',
            font: { size: 13, weight: '600' },
            color: '#2c3e50'
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        },
        x: {
          ticks: {
            font: { size: 14, weight: '700' },
            color: '#2c3e50'
          },
          grid: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          titleFont: { size: 16, weight: '700' },
          bodyFont: { size: 14 },
          padding: 15,
          cornerRadius: 10,
          callbacks: {
            label: context => {
              return `Total: €${context.parsed.y}B`;
            }
          }
        }
      },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuart',
        onComplete: function() {
          // Add value labels on top of bars
          const chartInstance = this;
          const ctx = chartInstance.ctx;
          ctx.font = 'bold 18px Inter';
          ctx.fillStyle = '#2c3e50';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';

          chartInstance.data.datasets.forEach((dataset, i) => {
            const meta = chartInstance.getDatasetMeta(i);
            meta.data.forEach((bar, index) => {
              const data = dataset.data[index];
              ctx.fillText('€' + data + 'B', bar.x, bar.y - 5);
            });
          });
        }
      }
    }
  });
}

// Scenario switching for investor site
function initScenarioSwitch() {
  const tabs = document.querySelectorAll('.scenario-tabs .tab');
  if (!tabs.length) return;

  const scenarios = {
    conservative: {
      year5Revenue: 60,
      year5ARR: 60,
      customers: 2400,
      ltv: 100000,
      chartData: [0.32, 1.2, 8, 35, 60]
    },
    base: {
      year5Revenue: 150,
      year5ARR: 150,
      customers: 6000,
      ltv: 240000,
      chartData: [0.6, 3.9, 25, 75, 150]
    },
    optimistic: {
      year5Revenue: 250,
      year5ARR: 250,
      customers: 10000,
      ltv: 400000,
      chartData: [0.95, 6.5, 45, 120, 250]
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const scenario = tab.dataset.scenario;
      const data = scenarios[scenario];

      // Update active state
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Animate metrics
      document.querySelectorAll('.metric-value.counter').forEach(counter => {
        const metric = counter.dataset.metric;
        if (data[metric] !== undefined) {
          animateCounter(counter, data[metric] * 1e9);
        }
      });

      // Update chart if it exists
      if (window.mainGrowthChart) {
        window.mainGrowthChart.data.datasets[0].data = data.chartData;
        window.mainGrowthChart.update({
          duration: 1000,
          easing: 'easeInOutQuart'
        });
      }
    });
  });
}

// Sparkline charts for metrics
function initSparklines() {
  const sparklines = document.querySelectorAll('.sparkline');

  sparklines.forEach(canvas => {
    if (typeof Chart === 'undefined') return;

    const ctx = canvas.getContext('2d');
    const data = canvas.dataset.values ?
      canvas.dataset.values.split(',').map(Number) :
      [0.6, 3.9, 25, 75, 150];

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Y1', 'Y2', 'Y3', 'Y4', 'Y5'],
        datasets: [{
          data: data,
          borderColor: '#27ae60',
          borderWidth: 2,
          pointRadius: 0,
          fill: false,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        },
        scales: {
          x: { display: false },
          y: { display: false }
        },
        animation: {
          duration: 1500,
          easing: 'easeInOutQuart'
        }
      }
    });
  });
}

// Initialize all charts
function initCharts() {
  initRevenueChart();
  initGrowthChart();
  initTAMChart();
  initScenarioSwitch();
  initSparklines();
}

// Auto-initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCharts);
} else {
  initCharts();
}
