const express = require('express');
const usuarioController = require('./controllers/UsuarioController');


const app = express();

app.use(express.json());

app.post('/usuarios/cadastrar', usuarioController.criarUsuario);
app.get('/usuarios', usuarioController.listarUsuarios);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});