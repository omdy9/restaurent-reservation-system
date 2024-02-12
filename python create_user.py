import sqlite3
from sqlite3 import Error

def create_connection(db_file):
    """Create a database connection to a SQLite database."""
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        print("Connected to SQLite database.")
        return conn
    except Error as e:
        print(e)

    return conn

def create_table(conn, create_table_sql):
    """Create a table from the create_table_sql statement."""
    try:
        c = conn.cursor()
        c.execute(create_table_sql)
        print("Table created successfully.")
    except Error as e:
        print(e)

def add_user(conn, user):
    """Add a new user into the users table."""
    sql = ''' INSERT INTO users(name, email, password)
              VALUES(?,?,?) '''
    cur = conn.cursor()
    cur.execute(sql, user)
    conn.commit()
    return cur.lastrowid

def main():
    database = r"users.db"  # Name of the SQLite database file

    # SQL statement to create a table
    create_table_sql = """ CREATE TABLE IF NOT EXISTS users (
                                id INTEGER PRIMARY KEY,
                                name TEXT NOT NULL,
                                email TEXT NOT NULL,
                                password TEXT
                            ); """

    # Create a database connection
    conn = create_connection(database)

    # Create table
    if conn is not None:
        # Create users table
        create_table(conn, create_table_sql)
    else:
        print("Error! Cannot create the database connection.")

    # Collect user input and add users automatically
    while True:
        name = input("Enter your name (or type 'quit' to exit): ")
        if name.lower() == 'quit':
            break
        email = input("Enter your email: ")
        password = input("Enter your password: ")

        user = (name, email, password)

        with conn:
            add_user(conn, user)
            print(f"User '{name}' added successfully.")

    # Close the database connection
    conn.close()
    print("Database connection closed.")

if __name__ == '__main__':
    main()
