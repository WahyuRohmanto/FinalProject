const { check, validationResult } = require("express-validator");
const { param } = require("express/lib/request");
const req = require("express/lib/request");

// Eror validation
exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).json({
      status: false,
      messege: errors.array()[0].msg,
    });
  }
  next();
};

// Yang akan di validasi
exports.valdationDaftar = [
check("name", "username tidak boleh kosong").notEmpty(),
check("phone", "nomor handphone tidak boleh kosong").notEmpty(),
check("phone", "nomor handphone harus angka").isNumeric(),
check("phone", "nomor handphone kurang atau lebih").isLength({min : 12, max : 12}),
check("status", "status tidak boleh kosong").notEmpty(),
];
