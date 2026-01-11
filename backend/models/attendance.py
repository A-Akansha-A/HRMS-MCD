from database.db import get_db_connection

def get_attendance_records():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute("""
        SELECT 
            a.date,
            a.status,
            e.full_name
        FROM attendance a
        JOIN employees e ON a.employee_id = e.id
        ORDER BY a.date DESC
    """)

    data = cursor.fetchall()
    cursor.close()
    conn.close()
    return data
