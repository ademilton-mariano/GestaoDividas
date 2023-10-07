
const sql = require('mssql');
const database = require('../database');

class Usuario {
  static async criar(usuario) {
    try {
      const pool = await database.connect();
      const result = await pool.request()
        .input('nome', sql.NVarChar(255), usuario.nome)
        .input('email', sql.NVarChar(255), usuario.email)
        .query('INSERT INTO Usuarios (nome, email) VALUES (@nome, @email)');
      return result.recordset[0];
    } catch (error) {
      throw error;
    }
  }

  static async listar() {
    try {
      const pool = await database.connect();
      const result = await pool.request().query('SELECT * FROM Usuarios');
      return result.recordset;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = Usuario;
