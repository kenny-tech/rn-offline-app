import SQLite from 'react-native-sqlite-storage';

const database_name = "user.db";

export const DB = SQLite.openDatabase({name: database_name, location: 'default'}, openCB, errorCB);

function openCB() {
  console.log("Database Opened");
}

function errorCB(err) {
  console.log("SQL Error: " + err);
}