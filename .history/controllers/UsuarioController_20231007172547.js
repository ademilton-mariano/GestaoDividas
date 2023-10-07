const UsuarioService = require('../services/UsuarioService');

class UsuarioController {
  static async criarUsuario(req, res) {
    try {
      const usuario = await UsuarioService.criarUsuario(req.body);
      res.status(201).json(usuario);
    } catch (error) {
      res.status(500).json({ error: 'Não foi possível criar o usuário.' });
    }
  }

  static async listarUsuarios(req, res) {
    try {
      const usuarios = await UsuarioService.listarUsuarios();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Não foi possível listar os usuários.' });
    }
  }
}

module.exports = UsuarioController;
