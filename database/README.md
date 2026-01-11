# HRMS MCD – Database Layer

This folder contains the complete MySQL database design for the HRMS platform.

## Covered Modules
- Authentication & Roles
- Employee Management
- Department & Zone Management
- Attendance Tracking
- Leave Management
- Payroll Management
- Employee Transfers
- Grievance Redressal

## Design Goals
- Scalable for thousands of employees
- Audit-friendly
- Backend-ready
- Supports municipal workflows

## Tech
- MySQL 8.0.44

## Database Setup Instructions

### Prerequisites
- MySQL Server 8.0.44
- MySQL Workbench (optional)

### Steps to Set Up Database Locally

1. Start MySQL Server.
2. Open MySQL Workbench and connect to your local instance.
3. Open the file `schema.sql` and execute it to create the database and tables.
4. (Optional) Execute `seed.sql` to insert sample data for demo purposes.

### Verifying Setup
Run the following query:
```sql
USE hrms_mcd;
SHOW TABLES;