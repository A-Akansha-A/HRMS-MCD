# System Architecture

The system follows a modular client-server architecture designed for large municipal organizations.

## Key Components
- Frontend: Interfaces for employees, managers, and HR administrators
- Backend: REST APIs handling business logic and workflows
- Database: Centralized MySQL database for HR data

## Data Flow
1. User interacts with dashboard
2. Request is sent to backend API
3. Backend processes workflow and approvals
4. Data is stored or retrieved from database
5. Updated information is reflected on dashboards