from database.db import get_db_connection

def get_grievances():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute("""
        SELECT 
            g.subject,
            g.description,
            g.status,
            g.created_at,
            e.full_name
        FROM grievances g
        JOIN employees e ON g.employee_id = e.id
        ORDER BY g.created_at DESC
    """)

    grievances = cursor.fetchall()
    cursor.close()
    conn.close()
    return grievances
