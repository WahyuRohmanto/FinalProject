// TODO 4: SETUP CONTROLLER

const { param } = require("express/lib/request");
const req = require("express/lib/request");
const { DATETIME } = require("mysql/lib/protocol/constants/types");

// import model
const Patiens = require("../models/Patiens");

// Class PatiensController
class PatiensController {

  /**
   * Menampilkan semua data
   * @param {object} req  
   * @param {object} res 
   */
  async index(req, res) {
    // menampilkan data
    const patiens = await Patiens.all();
    const data = {
      messege: "Menampilkan data Pasien",
      data: patiens,
    };
    res.status(200).json(data);
  }

  
  /**
   * Mengirim data 
   * @param {object} req  
   * @param {object} res 
   */
  async store(req, res) {
    // tambah data create
    const patiens = await Patiens.create(req.body);
    const data = {
      messege: `menambahkan data patiens`,
      data: patiens,
    };
    res.json(data).status(201);
  }

  
  /**
   * Mengupdate data
   * @param {object} req  
   * @param {object} res 
   */
  async update(req, res) {
    const { id } = req.params;
    const patiens = await Patiens.find(id);
    req.body.updated_at = new Date();
    console.log(req.body);
    if (patiens) {
      // update data
      const patiensUpdated = await Patiens.update(id, req.body);
      const data = {
        messege: "mengedit data patiens",
        data: patiensUpdated,
      };
      res.json(data).status(200);
    } else {
      // data tidak tersedia
      const data = {
        messege: "data tidak tersedia",
      };
      res.status(404);
      res.json(data);
    }
  }

  
  /**
   * Menghaspus data
   * @param {object} req  
   * @param {object} res 
   */
  async destroy(req, res) {
    const { id } = req.params;
    const patiens = await Patiens.find(id);

    if (patiens) {
      // hapus data
      await Patiens.delete(id);
      const data = {
        messege: "menghapus data patiens ",
      };
      res.status(200).json(data);
    } else {
      // data tidak ada
      const data = {
        messege: "data tidak ada ",
      };
      res.status(404).json(data);
    }
  }

  
  /**
   * Menampilkan data berdasarkan id
   * @param {object} req  
   * @param {object} res 
   */
  async show(req, res) {
    const { id } = req.params;
    const patiens = await Patiens.find(id);
    if (patiens) {
      const data = {
        messege: "menampilkan data id yang dicari",
        data: patiens,
      };
      res.status(200).json(data);
    } else {
      const data = {
        messege: "data tidak ada",
      };
      res.status(404).json(data);
    }
  }

  
  /**
   * Menampilkan data berdasarkan nama
   * @param {object} req  
   * @param {object} res 
   */
  async search(req, res) {
    const { name } = req.params;
    const patiens = await Patiens.search(name);
    if (patiens.length == 0) {
      const data = {
        messege: "data tidak ada",
      };
      res.status(404).json(data);
    } else {
      const data = {
        messege: "menampilkan pasien ",
        total: patiens.length,
        data: patiens,
      };
      res.status(200).json(data);
    }
  }

  
  /**
   * Menampilkan pasien positif
   * @param {object} req  
   * @param {object} res 
   */
  async positive(req, res) {
    const patiens = await Patiens.findByStatus("positive");
    const data = {
      messege: "Menampilkan data Pasien",
      total: patiens.length,
      data: patiens,
    };
    res.status(200).json(data);
  }

  
  /**
   * Menampilkan pasien yang sembuh
   * @param {object} req  
   * @param {object} res 
   */
  async recovered(req, res) {
    const patiens = await Patiens.findByStatus("recovery");
    const data = {
      messege: "Menampilkan data Pasien",
      total: patiens.length,
      data: patiens,
    };
    res.status(200).json(data);
  }

  
  /**
   * Menampilkan pasien yang meninggal
   * @param {object} req  
   * @param {object} res 
   */
  async dead(req, res) {
    const patiens = await Patiens.findByStatus("dead");
    const data = {
      messege: "Menampilkan data Pasien",
      total: patiens.length,
      data: patiens,
    };
    res.status(200).json(data);
  }
}

// buat object student controller
const object = new PatiensController();

// export routing
module.exports = object;
