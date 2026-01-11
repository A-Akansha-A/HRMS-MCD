from database.db import get_db_connection

def get_user_by_username(username):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute(
        "SELECT * FROM users WHERE username = %s",
        (username,)
    )

    user = cursor.fetchone()
    cursor.close()
    conn.close()
    return user
