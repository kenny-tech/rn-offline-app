import SQLite from 'react-native-sqlite-storage'

const database_name = "usersdb.db";

export const DB = SQLite.openDatabase({name: database_name , location: 'default'}, successcb, errorcb);

function successcb() {
  console.log('OK Databases changes')
}

function errorcb() {
   console.log('error DB')
}

// import SQLite from 'react-native-sqlite-storage';

// const database_name = "users.db";

// export const DB = SQLite.openDatabase({name: database_name, location: 'default'}, openCB, errorCB);

// function openCB() {
//   console.log("Database Opened");
// }

// function errorCB(err) {
//   console.log("SQL Error: " + err);
// }


