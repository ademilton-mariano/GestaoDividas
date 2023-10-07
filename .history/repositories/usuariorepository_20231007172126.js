const Usuario = require('../models/Usuario');

class UsuarioRepository {
  static async criar(usuario) {
    try {
      return await Usuario.criar(usuario);
    } catch (error) {
      throw error;
    }
  }

  static async listar() {
    try {
      return await Usuario.listar();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsuarioRepository;