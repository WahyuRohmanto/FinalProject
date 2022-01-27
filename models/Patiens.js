// TODO 5: SETUP MODEL

// import db
const res = require("express/lib/response");
const db = require("../config/database");

// Buat model patiens
class Patiens {

  /**
   * Method get all
   * @returns - semua data pasien
   */
  static all() {
    return new Promise((resolve, reject) => {
      // melakukan query ke db untuk ambil data
      const sql = "SELECT * FROM patiens";
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  /**
   * Method menambahkan data pasien
   * @param data - request body
   * @returns - Id 
   */
  static async create(data) {
    const id = await new Promise((resolve, reject) => {
      // query untuk menambahkan data
      const sql = "INSERT INTO patiens set ?";
      db.query(sql, data, (err, results) => {
        // hasil dalam bentuk id
        resolve(results.insertId);
      });
    });
    // ditampilkan melalui id yang dibuat
    const patiens = await this.find(id);
    return patiens;
  }

  /**
   * Menampilkan data Id
   * @param id - request params
   * @returns - data berdasarkan id
   */
  static find(id) {
    // lakukan promise, select by id
    return new Promise((resolve, reject) => {
      //  query menampilkan data berdasarkan id
      const sql = "SELECT * FROM patiens WHERE id = ?";
      db.query(sql, id, (err, results) => {
        // hasil tidak berbentuk array
        resolve(results[0]);
      });
    });
  }


  /**
   * update data pasien
   * @param id - request params
   * @param data - request body
   * @returns - data pasien yang sudah diubah
   */
  static async update(id, data) {
    // update data
    await new Promise((resolve, reject) => {
      const sql = "UPDATE patiens SET? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });
    // select data by id
    const patiens = await this.find(id);
    return patiens;
  }

  /**
   * Menghapus data 
   * @param id - req params
   * @returns - Data terhapus
   */
  static delete(id) {
    // query delete
    return new Promise((resolve, reject) => {
      // query sql
      const sql = "DELETE FROM patiens WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  /**
   * Menampilkan data nama
   * @param name - request body
   * @returns - menampilkan data berdasarkan nama
   */
  static search(name) {
    return new Promise((resolve, reject) => {
      // query sql
      const sql = "SELECT * FROM patiens WHERE name LIKE ?";
      db.query(sql, "%" + name + "%", (err, results) => {
        resolve(results);
      });
    });
  }

  /**
   * method status 
   * @param status - request body
   * @returns menampilkan status pasien
   */
  static findByStatus(status) {
    return new Promise((resolve, reject) => {
      // query sql
      const sql = "SELECT * FROM patiens WHERE status = ?";
      db.query(sql, status, (err, results) => {
        resolve(results);
      });
    });
  }
}

// export model
module.exports = Patiens;
