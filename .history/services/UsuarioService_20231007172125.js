const UsuarioRepository = require('../repositories/UsuarioRepository');

class UsuarioService {
  static async criarUsuario(usuario) {
    try {
      return await UsuarioRepository.criar(usuario);
    } catch (error) {
      throw error;
    }
  }

  static async listarUsuarios() {
    try {
      return await UsuarioRepository.listar();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsuarioService;
