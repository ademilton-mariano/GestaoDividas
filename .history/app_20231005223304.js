// Importe o módulo express
const express = require('express');

// Crie uma instância do express
const app = express();

// Configure uma rota para a raiz da API
app.get('/', (req, res) => {
  res.send('Bem-vindo à API REST!');
});

// Configure uma rota para listar todos os itens
app.get('/api/items', (req, res) => {
  const items = ['item1', 'item2', 'item3'];
  res.json(items);
});

// Inicie o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});