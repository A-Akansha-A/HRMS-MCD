let jobs = [
  { title: "Junior Engineer (Civil)", dept: "Engineering" },
  { title: "Sanitation Inspector", dept: "Sanitation" }
];

// ===== TAB SWITCH =====
function openTab(tabId, btn) {
  document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

  btn.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

// ===== RENDER JOBS =====
function renderJobs() {
  const jobBox = document.getElementById("jobs");
  jobBox.innerHTML = "";

  jobs.forEach((job, index) => {
    jobBox.innerHTML += `
      <div class="job-card">
        <div>
          <h4>${job.title}</h4>
          <p>Department: ${job.dept}</p>
        </div>
        <button onclick="viewDetails(${index})">View Details</button>
      </div>
    `;
  });
}

// ===== VIEW DETAILS =====
function viewDetails(index) {
  document.getElementById("detailsText").innerText =
    `Job Title: ${jobs[index].title}\nDepartment: ${jobs[index].dept}`;
  document.getElementById("detailsModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("detailsModal").style.display = "none";
}

// ===== CREATE JOB =====
function createJob() {
  const title = document.getElementById("jobTitle").value;
  const dept = document.getElementById("jobDept").value;

  if (!title || !dept) {
    alert("Please fill all fields");
    return;
  }

  jobs.push({ title, dept });
  renderJobs();

  alert("✅ Job Created Successfully");

  document.getElementById("jobTitle").value = "";
  document.getElementById("jobDept").value = "";

  function deleteJob(btn) {
  if (confirm("Are you sure you want to delete this job?")) {
    btn.closest(".job-card").remove();
  }
}

}

// INIT
document.addEventListener("DOMContentLoaded", renderJobs);
