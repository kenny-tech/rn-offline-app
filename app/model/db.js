import SQLite from 'react-native-sqlite-storage'

const database_name = "usersdb.db";

export const DB = SQLite.openDatabase({name: database_name , location: 'default'}, successcb, errorcb);

function successcb() {
  console.log('Database Opened')
}

function errorcb() {
   console.log('error DB')
}


