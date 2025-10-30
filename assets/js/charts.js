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

// Use of Funds Pie Chart
function initUseOfFundsChart() {
  const canvas = document.getElementById('useOfFundsChart');
  if (!canvas || typeof Chart === 'undefined') return;

  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [
        'Product Development',
        'Sales & Marketing',
        'Team Expansion',
        'Operations & Legal'
      ],
      datasets: [{
        data: [40, 30, 20, 10],
        backgroundColor: [
          'rgba(39, 174, 96, 0.9)',
          'rgba(52, 152, 219, 0.9)',
          'rgba(241, 196, 15, 0.9)',
          'rgba(155, 89, 182, 0.9)'
        ],
        borderWidth: 3,
        borderColor: '#fff',
        hoverOffset: 20
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#333',
            font: { size: 15, weight: '700', family: 'Inter' },
            padding: 20,
            usePointStyle: true,
            pointStyle: 'circle',
            generateLabels: function(chart) {
              const data = chart.data;
              if (data.labels.length && data.datasets.length) {
                return data.labels.map(function(label, i) {
                  const value = data.datasets[0].data[i];
                  const percent = value + '%';
                  return {
                    text: label + ': ' + percent,
                    fillStyle: data.datasets[0].backgroundColor[i],
                    hidden: false,
                    index: i
                  };
                });
              }
              return [];
            }
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
              const amount = (value / 100) * 2000000; // $2M total
              return [`${label}: ${value}%`, `$${(amount/1000).toFixed(0)}K`];
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

// Market Opportunity Funnel Chart
function initMarketOpportunityChart() {
  const canvas = document.getElementById('marketOpportunityChart');
  if (!canvas || typeof Chart === 'undefined') return;

  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Global TAM\n$70B', 'MENA SAM\n$5B', '2030 Target\n$400M'],
      datasets: [{
        label: 'Market Size',
        data: [70, 5, 0.4],
        backgroundColor: [
          'rgba(39, 174, 96, 0.3)',
          'rgba(39, 174, 96, 0.6)',
          'rgba(39, 174, 96, 0.9)'
        ],
        borderColor: 'rgba(39, 174, 96, 1)',
        borderWidth: 2,
        borderRadius: 8
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
          type: 'logarithmic',
          ticks: {
            callback: value => '$' + value + 'B',
            font: { size: 12, weight: '600' }
          }
        },
        y: {
          ticks: {
            font: { size: 14, weight: '700' }
          }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: context => `$${context.parsed.x}B market size`
          }
        }
      }
    }
  });
}

// Unicorn Trajectory Chart - Shows path to $1B+ valuation
function initUnicornTrajectoryChart() {
  const canvas = document.getElementById('unicornTrajectoryChart');
  if (!canvas || typeof Chart === 'undefined') return;

  const ctx = canvas.getContext('2d');

  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(241, 196, 15, 0.3)');
  gradient.addColorStop(1, 'rgba(241, 196, 15, 0.0)');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Seed\n2025', 'Series A\n2027', 'Series B\n2029', 'Series C\n2031', 'Unicorn\n2032'],
      datasets: [{
        label: 'Valuation Trajectory',
        data: [9, 75, 300, 750, 1200],
        borderColor: '#f1c40f',
        backgroundColor: gradient,
        borderWidth: 4,
        tension: 0.4,
        pointRadius: 10,
        pointHoverRadius: 14,
        pointBackgroundColor: ['#27ae60', '#3498db', '#9b59b6', '#e74c3c', '#f1c40f'],
        pointBorderColor: '#fff',
        pointBorderWidth: 3,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: value => '$' + value + 'M',
            font: { size: 13, weight: '600' },
            color: '#2c3e50'
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        },
        x: {
          ticks: {
            font: { size: 13, weight: '700' },
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
              const value = context.parsed.y;
              if (value >= 1000) {
                return `Valuation: $${(value/1000).toFixed(1)}B`;
              }
              return `Valuation: $${value}M`;
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

// ARR Growth Chart with milestones
function initARRGrowthChart() {
  const canvas = document.getElementById('arrGrowthChart');
  if (!canvas || typeof Chart === 'undefined') return;

  const ctx = canvas.getContext('2d');

  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(39, 174, 96, 0.4)');
  gradient.addColorStop(1, 'rgba(39, 174, 96, 0.0)');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2026', '2027', '2028', '2029', '2030', '2031', '2032'],
      datasets: [{
        label: 'ARR Growth',
        data: [0.25, 3, 11, 30, 65, 120, 200],
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
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: value => '$' + value + 'M',
            font: { size: 13, weight: '600' },
            color: '#2c3e50'
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        },
        x: {
          ticks: {
            font: { size: 13, weight: '700' },
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
            label: context => `ARR: $${context.parsed.y}M`
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

// Customer Acquisition Funnel Chart
function initCustomerFunnelChart() {
  const canvas = document.getElementById('customerFunnelChart');
  if (!canvas || typeof Chart === 'undefined') return;

  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Total TAM\n15,000', 'Qualified Leads\n3,000', 'Sales Pipeline\n800', 'Pilot/POC\n200', 'Paying Customers\n100'],
      datasets: [{
        label: 'Customer Acquisition Funnel (Year 1)',
        data: [15000, 3000, 800, 200, 100],
        backgroundColor: [
          'rgba(52, 152, 219, 0.3)',
          'rgba(52, 152, 219, 0.5)',
          'rgba(39, 174, 96, 0.6)',
          'rgba(39, 174, 96, 0.8)',
          'rgba(39, 174, 96, 1)'
        ],
        borderColor: 'rgba(39, 174, 96, 1)',
        borderWidth: 2,
        borderRadius: 8
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            font: { size: 12, weight: '600' }
          }
        },
        y: {
          ticks: {
            font: { size: 13, weight: '700' }
          }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: context => {
              const value = context.parsed.x;
              const percentage = ((value / 15000) * 100).toFixed(1);
              return `${value} firms (${percentage}% of TAM)`;
            }
          }
        }
      }
    }
  });
}

// Market Share Projection Chart
function initMarketShareChart() {
  const canvas = document.getElementById('marketShareChart');
  if (!canvas || typeof Chart === 'undefined') return;

  const ctx = canvas.getContext('2d');

  const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient1.addColorStop(0, 'rgba(39, 174, 96, 0.4)');
  gradient1.addColorStop(1, 'rgba(39, 174, 96, 0.0)');

  const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient2.addColorStop(0, 'rgba(231, 76, 60, 0.4)');
  gradient2.addColorStop(1, 'rgba(231, 76, 60, 0.0)');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2026', '2027', '2028', '2029', '2030', '2031', '2032'],
      datasets: [{
        label: 'CarbonEcoMarket',
        data: [0.5, 2, 5, 8, 12, 16, 20],
        borderColor: '#27ae60',
        backgroundColor: gradient1,
        borderWidth: 4,
        tension: 0.4,
        pointRadius: 8,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#27ae60',
        pointBorderWidth: 3,
        fill: true
      }, {
        label: 'Competitors Combined',
        data: [1, 3, 6, 8, 9, 10, 11],
        borderColor: '#e74c3c',
        backgroundColor: gradient2,
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#e74c3c',
        pointBorderWidth: 2,
        fill: true,
        borderDash: [5, 5]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: value => value + '%',
            font: { size: 13, weight: '600' }
          }
        },
        x: {
          ticks: {
            font: { size: 13, weight: '700' }
          }
        }
      },
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: { size: 14, weight: '700' },
            padding: 20
          }
        },
        tooltip: {
          callbacks: {
            label: context => `${context.dataset.label}: ${context.parsed.y}% market share`
          }
        }
      }
    }
  });
}

// Revenue Breakdown by Segment Chart
function initRevenueSegmentChart() {
  const canvas = document.getElementById('revenueSegmentChart');
  if (!canvas || typeof Chart === 'undefined') return;

  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2026', '2027', '2028', '2029', '2030', '2031', '2032'],
      datasets: [
        {
          label: 'Enterprise SaaS',
          data: [0.15, 1.8, 6.5, 18, 39, 72, 120],
          backgroundColor: 'rgba(39, 174, 96, 0.8)',
          stack: 'revenue'
        },
        {
          label: 'Transaction Fees',
          data: [0.05, 0.6, 2.5, 7, 15, 28, 48],
          backgroundColor: 'rgba(52, 152, 219, 0.8)',
          stack: 'revenue'
        },
        {
          label: 'MRV/IoT Services',
          data: [0.03, 0.4, 1.5, 4, 9, 16, 26],
          backgroundColor: 'rgba(241, 196, 15, 0.8)',
          stack: 'revenue'
        },
        {
          label: 'Consulting & Training',
          data: [0.02, 0.2, 0.5, 1, 2, 4, 6],
          backgroundColor: 'rgba(155, 89, 182, 0.8)',
          stack: 'revenue'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          stacked: true,
          ticks: {
            callback: value => '$' + value + 'M',
            font: { size: 12, weight: '600' }
          }
        },
        x: {
          stacked: true,
          ticks: {
            font: { size: 13, weight: '700' }
          }
        }
      },
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: { size: 13, weight: '600' },
            padding: 15
          }
        },
        tooltip: {
          mode: 'index',
          callbacks: {
            footer: function(tooltipItems) {
              let sum = 0;
              tooltipItems.forEach(item => sum += item.parsed.y);
              return 'Total ARR: $' + sum.toFixed(1) + 'M';
            }
          }
        }
      }
    }
  });
}

// Geographic Expansion Roadmap Chart
function initGeoExpansionChart() {
  const canvas = document.getElementById('geoExpansionChart');
  if (!canvas || typeof Chart === 'undefined') return;

  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2026', '2027', '2028', '2029', '2030', '2031', '2032'],
      datasets: [
        {
          label: 'Turkey',
          data: [10, 50, 150, 300, 500, 700, 900],
          borderColor: '#e74c3c',
          borderWidth: 3,
          tension: 0.4,
          pointRadius: 6,
          fill: false
        },
        {
          label: 'MENA',
          data: [0, 15, 80, 200, 400, 650, 950],
          borderColor: '#27ae60',
          borderWidth: 3,
          tension: 0.4,
          pointRadius: 6,
          fill: false
        },
        {
          label: 'EU',
          data: [0, 0, 20, 100, 300, 600, 1000],
          borderColor: '#3498db',
          borderWidth: 3,
          tension: 0.4,
          pointRadius: 6,
          fill: false
        },
        {
          label: 'Global',
          data: [0, 0, 0, 50, 200, 450, 850],
          borderColor: '#f1c40f',
          borderWidth: 3,
          tension: 0.4,
          pointRadius: 6,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: value => value + ' customers',
            font: { size: 12, weight: '600' }
          }
        },
        x: {
          ticks: {
            font: { size: 13, weight: '700' }
          }
        }
      },
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: { size: 14, weight: '700' },
            padding: 15
          }
        }
      }
    }
  });
}

// Burn Rate & Runway Chart
function initBurnRateChart() {
  const canvas = document.getElementById('burnRateChart');
  if (!canvas || typeof Chart === 'undefined') return;

  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Q1 2026', 'Q2 2026', 'Q3 2026', 'Q4 2026', 'Q1 2027', 'Q2 2027'],
      datasets: [
        {
          label: 'Revenue',
          data: [0.02, 0.04, 0.08, 0.12, 0.25, 0.45],
          backgroundColor: 'rgba(39, 174, 96, 0.8)',
          borderColor: '#27ae60',
          borderWidth: 2
        },
        {
          label: 'Burn Rate',
          data: [0.35, 0.32, 0.30, 0.28, 0.25, 0.22],
          backgroundColor: 'rgba(231, 76, 60, 0.8)',
          borderColor: '#e74c3c',
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: value => '$' + value + 'M',
            font: { size: 12, weight: '600' }
          }
        },
        x: {
          ticks: {
            font: { size: 12, weight: '700' }
          }
        }
      },
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: { size: 14, weight: '700' }
          }
        }
      }
    }
  });
}

// Initialize all charts
function initCharts() {
  initRevenueChart();
  initGrowthChart();
  initTAMChart();
  initUseOfFundsChart();
  initMarketOpportunityChart();
  initUnicornTrajectoryChart();
  initARRGrowthChart();
  initCustomerFunnelChart();
  initMarketShareChart();
  initRevenueSegmentChart();
  initGeoExpansionChart();
  initBurnRateChart();
  initScenarioSwitch();
  initSparklines();
}

// Auto-initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCharts);
} else {
  initCharts();
}
