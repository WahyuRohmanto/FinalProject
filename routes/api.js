// TODO 2: SETUP ROUTING (ROUTER)

// import PatiensController
const PatiensController = require("../controllers/PatiensController");

// import validation
const { runValidation, valdationDaftar } = require("../validation/Valid");

// import express
const express = require("express");

// Objecr route
const router = express.Router();

// Routing patiens
router.get("/patiens", PatiensController.index);
// menambahkan function dalam route post
router.post("/patiens", valdationDaftar, runValidation, PatiensController.store);
router.put("/patiens/:id", PatiensController.update);
router.delete("/patiens/:id", PatiensController.destroy);
router.get("/patiens/:id", PatiensController.show);
router.get("/patiens/search/:name", PatiensController.search);
router.get("/patiens/status/positive", PatiensController.positive);
router.get("/patiens/status/recovered", PatiensController.recovered);
router.get("/patiens/status/dead", PatiensController.dead);

// export routing
module.exports = router;
