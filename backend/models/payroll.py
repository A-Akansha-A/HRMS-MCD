from database.db import get_db_connection

def get_payroll_records():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute("""
        SELECT 
            p.month,
            p.basic_salary,
            p.allowances,
            p.deductions,
            p.net_salary,
            p.status,
            e.full_name
        FROM payroll p
        JOIN employees e ON p.employee_id = e.id
        ORDER BY p.month DESC
    """)

    payroll = cursor.fetchall()
    cursor.close()
    conn.close()
    return payroll
