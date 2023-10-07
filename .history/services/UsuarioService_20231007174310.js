const UsuarioRepository = require('../repositories/UsuarioRepository');
const Usuario = require('../models/Usuario');

class UsuarioService {
  static async criarUsuario(nome, email) {
    const novoUsuario = new Usuario(nome, email);
    return await UsuarioRepository.criar(novoUsuario);
  }

  static async listarUsuarios() {
    return await UsuarioRepository.listar();
  }
}

module.exports = UsuarioService;
