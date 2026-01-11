const data = [
  { name:"Rajesh Kumar", id:"EMP001", date:"04/01/2026", in:"09:15", out:"18:30", hrs:"9.3", status:"Present" },
  { name:"Priya Sharma", id:"EMP002", date:"04/01/2026", in:"09:00", out:"18:00", hrs:"9.0", status:"Present" },
  { name:"Amit Verma", id:"EMP003", date:"04/01/2026", in:"-", out:"-", hrs:"-", status:"Absent" },
  { name:"Sneha Gupta", id:"EMP004", date:"04/01/2026", in:"-", out:"-", hrs:"-", status:"Leave" },
  { name:"Vikram Singh", id:"EMP005", date:"04/01/2026", in:"09:30", out:"18:15", hrs:"8.8", status:"Present" }
];

const tbody = document.getElementById("attendanceBody");

data.forEach(emp => {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${emp.name}<br><small>${emp.id}</small></td>
    <td>${emp.date}</td>
    <td>${emp.in}</td>
    <td>${emp.out}</td>
    <td>${emp.hrs}</td>
    <td>
      <span class="tag ${
        emp.status === "Present" ? "green" :
        emp.status === "Absent" ? "danger" : "warn"
      }">${emp.status}</span>
    </td>
  `;

  tbody.appendChild(tr);
});
