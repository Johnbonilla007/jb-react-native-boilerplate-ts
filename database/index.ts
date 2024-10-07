import SQLite, {
  SQLiteDatabase,
  ResultSet,
  ResultSetRowList,
} from "react-native-sqlite-storage";


// Open the database
const db: SQLiteDatabase = SQLite.openDatabase(
  { name: "my.db", location: "default" },
  () => console.log("Database opened successfully"),
  (error) => console.error("Error opening database:", error)
);

// Function to create tables
export const createTables = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)",
      [],
      () => console.log("Table created successfully"),
      (error) => console.error("Error creating table:", error)
    );
  });
};

// Function to insert data
export const insertUser = (name: string) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO Users (name) VALUES (?)",
      [name],
      () => console.log("Data inserted successfully"),
      (error) => console.error("Error inserting data:", error)
    );
  });
};

// Function to query data
export const getUsers = (): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Users",
        [],
        (tx, results: ResultSet) => {
          const users: User[] = [];
          const rows: ResultSetRowList = results.rows;
          for (let i = 0; i < rows.length; i++) {
            users.push(rows.item(i));
          }
          resolve(users);
        },
        (error) => reject("Error querying data")
      );
    });
  });
};

// User type definition
interface User {
  id: number;
  name: string;
}
