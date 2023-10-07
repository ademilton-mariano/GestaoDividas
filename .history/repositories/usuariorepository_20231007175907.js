const sql = require('mssql');
const database = require('../database');

class UsuarioRepository {
  static async criar(usuario) {
    try {
      const pool = await database.connect();
      const result = await pool
        .request()
        .input('nome', sql.VarChar(50), usuario.nome)
        .input('email', sql.VarChar(100), usuario.email)
        .input('idade', sql.Int, usuario.idade)
        .input('senha', sql.VarChar(50), usuario.senha)
        .input('cidade', sql.VarChar(50), usuario.cidade)
        .query('INSERT INTO Usuarios (nome, email, idade, senha, cidade) VALUES (@nome, @email, @idade, @senha, @cidade)');
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

module.exports = UsuarioRepository;
