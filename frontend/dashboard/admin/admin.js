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
  // OPEN CREATE JOB
function openJob() {
  document.getElementById("jobModal").style.display = "flex";
}

// CLOSE
function closeJob() {
  document.getElementById("jobModal").style.display = "none";
}

// ADD JOB (FAKE FRONTEND)
function addJob() {
  const title = jobTitle.value;
  const dept = jobDept.value;
  const vac = jobVacancy.value;

  if (!title || !dept || !vac) {
    alert("Fill all fields");
    return;
  }

  const jobBox = document.querySelector(".box");
  const div = document.createElement("div");
  div.className = "job";
  div.innerHTML = `
    <div>
      <strong>${title}</strong>
      <p>${dept} · ${vac} positions</p>
    </div>
    <span class="tag green">New</span>
  `;

  jobBox.appendChild(div);
  closeJob();
}
function viewDetails(dept, emp) {
  alert(
    `Department: ${dept}\nEmployees: ${emp}\nStatus: Active`
  );
}


}
