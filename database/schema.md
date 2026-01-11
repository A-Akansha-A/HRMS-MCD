# Database Schema

## Core Tables
- Users & Roles
- Employees
- Departments (with Zones)
- Attendance
- Leave Requests
- Payroll
- Transfers
- Grievances

## Entity Relationships

- Each User is assigned a role that defines system access.
- Each Employee is linked to a User account.
- Employees belong to a Department and Zone.
- Attendance is recorded once per employee per day.
- Payroll is generated monthly for each employee.
- Transfers maintain department change history.
- Grievances ensure transparency and accountability.

## Design Rationale
- Prevents data duplication
- Supports hierarchical approvals
- Maintains audit trails
- Easily extensible for future modules