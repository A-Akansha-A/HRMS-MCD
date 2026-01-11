document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const employeeId = document.getElementById("employeeId").value.trim();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value;

    if (employeeId === "" || password === "") {
        alert("Please fill all required fields");
        return;
    }

    // Temporary frontend logic
    if (role === "Admin") {
        alert("Admin login successful (demo)");
    } else if (role === "HR") {
        alert("HR login successful (demo)");
    } else {
        alert("Employee login successful (demo)");
    }

    // Later: backend API call here
});
