const ctx = document.getElementById('perfChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Rajesh', 'Priya', 'Amit', 'Sneha', 'Vikram'],
    datasets: [{
      label: 'Rating',
      data: [4.5, 4.8, 4.2, 4.0, 4.7],
      backgroundColor: '#2563eb'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 5
      }
    }
  }
});
