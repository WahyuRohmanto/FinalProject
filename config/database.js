// TODO 3: SETUP CONFIG DATABASE

const req = require("express/lib/request");

// import mysql
const mysql = require("mysql");

// import dotenv
require("dotenv").config();

// membuat koneksi
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// konek ke database
db.connect(function (err) {
  if (err) {
    console.log(`koneksi eror ${err}`);
    return;
  } else {
    console.log("koneksi berhasil");
    return;
  }
});

// export db
module.exports = db;
