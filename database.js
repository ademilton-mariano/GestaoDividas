const config = require('./config');

const databaseConfig = config.database;

const sql = require('mssql');

const pool = new sql.ConnectionPool(databaseConfig);

pool.connect()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

module.exports = pool;
