from database.db import get_db_connection

def get_all_employees():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute("""
        SELECT 
            e.id,
            e.full_name,
            e.designation,
            d.name AS department,
            d.zone
        FROM employees e
        JOIN departments d ON e.department_id = d.id
    """)

    data = cursor.fetchall()
    cursor.close()
    conn.close()
    return data