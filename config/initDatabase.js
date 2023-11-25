const sqlite3 = require('sqlite3').verbose();

const dbName = 'music-library.db'; // env

const db = new sqlite3.Database(dbName, (err) => {
  if (err) {
    console.error(`Error opening database ${dbName}: ${err.message}`);
  } else {
    console.log(`Connected to the database: ${dbName}`);
    createTables();
  }
});

function createTables() {
  db.run(`
    CREATE TABLE IF NOT EXISTS tracks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        artist TEXT NOT NULL,
        genre TEXT NOT NULL
    )
  `, (err) => {
    if (err) {
      console.error(`Error creating table: ${err.message}`);
    } else {
      console.log('Table created successfully.');
    }

    db.close();
  });
}