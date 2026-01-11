CREATE DATABASE IF NOT EXISTS hrms_mcd;
USE hrms_mcd;

-- Departments & Zones
CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    zone VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Users (Authentication & Roles)
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('ADMIN','HR','MANAGER','EMPLOYEE') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Employees
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNIQUE,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(15),
    department_id INT,
    designation VARCHAR(100),
    joining_date DATE,
    status ENUM('ACTIVE','ON_LEAVE','TRANSFERRED','RETIRED') DEFAULT 'ACTIVE',
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

-- Attendance
CREATE TABLE attendance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    date DATE NOT NULL,
    check_in TIME,
    check_out TIME,
    status ENUM('PRESENT','ABSENT','LEAVE') NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employees(id),
    UNIQUE (employee_id, date)
);

-- Leave Management
CREATE TABLE leave_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    leave_type ENUM('CASUAL','SICK','EARNED'),
    start_date DATE,
    end_date DATE,
    reason TEXT,
    status ENUM('PENDING','APPROVED','REJECTED') DEFAULT 'PENDING',
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);

-- Grievance Redressal
CREATE TABLE grievances (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    subject VARCHAR(200),
    description TEXT,
    status ENUM('OPEN','IN_REVIEW','RESOLVED') DEFAULT 'OPEN',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);

-- Payroll
CREATE TABLE payroll (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    month VARCHAR(20),
    basic_salary DECIMAL(10,2),
    allowances DECIMAL(10,2),
    deductions DECIMAL(10,2),
    net_salary DECIMAL(10,2),
    status ENUM('PENDING','PAID') DEFAULT 'PENDING',
    generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);

-- Employee Transfers
CREATE TABLE transfers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    from_department_id INT,
    to_department_id INT,
    transfer_date DATE,
    reason TEXT,
    status ENUM('REQUESTED','APPROVED','COMPLETED') DEFAULT 'REQUESTED',
    FOREIGN KEY (employee_id) REFERENCES employees(id),
    FOREIGN KEY (from_department_id) REFERENCES departments(id),
    FOREIGN KEY (to_department_id) REFERENCES departments(id)
);
