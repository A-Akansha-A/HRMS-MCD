// Department-wise Employees Chart
const deptCtx = document.getElementById('deptChart');

if (deptCtx) {
  new Chart(deptCtx, {
    type: 'bar',
    data: {
      labels: [
        'Engineering',
        'Sanitation',
        'Health',
        'Education',
        'Finance',
        'IT',
        'Transport'
      ],
      datasets: [{
        label: 'Employees',
        data: [145, 320, 210, 180, 95, 120, 80],
        backgroundColor: '#2563eb'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      }
    }
  });
}

// Attendance Chart
const attCtx = document.getElementById('attChart');

if (attCtx) {
  new Chart(attCtx, {
    type: 'doughnut',
    data: {
      labels: ['Present', 'Absent', 'On Leave'],
      datasets: [{
        data: [1080, 120, 117],
        backgroundColor: ['#22c55e', '#ef4444', '#facc15']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}
