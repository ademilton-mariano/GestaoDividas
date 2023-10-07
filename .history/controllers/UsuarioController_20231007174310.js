const UsuarioService = require('../services/UsuarioService');

class UsuarioController {
  static async criarUsuario(req, res) {
    const { nome, email } = req.body;
    try {
      const novoUsuario = await UsuarioService.criarUsuario(nome, email);
      res.status(201).json(novoUsuario);
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
