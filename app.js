/**
 * TODO 1: SETUP SERVER USING EXPRESS.JS.
 * UBAH SERVER DI BAWAH MENGGUNAKAN EXPRESS.JS.
 * SERVER INI DIBUAT MENGGUNAKAN NODE.JS NATIVE.
 */

// import express
const express = require("express");

// Object express
const app = express();

// Middleware
app.use(express.json());

// Routing Home
app.get("/", (req, res) => {
  res.send("Project akhir uas");
});

// Mendifinisikan route
const router = require("./routes/api");
app.use(router);

// deefinisikan port
app.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
