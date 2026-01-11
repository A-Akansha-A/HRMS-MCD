USE hrms_mcd;

INSERT INTO departments (name, zone) VALUES
('Sanitation', 'Central'),
('Health', 'South'),
('Engineering', 'North');

INSERT INTO users (username, password_hash, role) VALUES
('admin_mcd', 'hashed_password', 'ADMIN'),
('hr_mcd', 'hashed_password', 'HR'),
('manager_1', 'hashed_password', 'MANAGER'),
('emp_1', 'hashed_password', 'EMPLOYEE');

INSERT INTO employees (user_id, full_name, email, department_id, designation, joining_date)
VALUES
(4, 'Ravi Kumar', 'ravi@mcd.gov.in', 1, 'Sanitation Worker', '2021-05-12');

INSERT INTO attendance (employee_id, date, check_in, check_out, status)
VALUES
(1, CURDATE(), '09:15:00', '17:30:00', 'PRESENT');

INSERT INTO leave_requests (employee_id, leave_type, start_date, end_date, reason)
VALUES
(1, 'CASUAL', '2024-07-15', '2024-07-16', 'Personal work');

INSERT INTO grievances (employee_id, subject, description)
VALUES
(1, 'Salary Delay', 'Salary not credited for last month');

INSERT INTO payroll (employee_id, month, basic_salary, allowances, deductions, net_salary)
VALUES
(1, 'July 2024', 25000, 3000, 2000, 26000);
