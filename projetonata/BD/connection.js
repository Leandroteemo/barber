const mysql = require('mysql2'); // Importa o módulo de MySql

// Cria a conexão com o banco de dados.
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cadastro_barber'
});

// Conecta com o banco de dados.
connection.connect((err) => {
    if (err) {
        console.error('Erro na conexão com o banco de dados:', err.stack);
        return;
    }
    console.log('Conexão com o banco de dados realizada.')
})

connection.query('SELECT * FROM tbl_clientes', (err, results, fields) => {
    if (err) {
        console.error('Erro executando a consulta:', err.stack);
        return;
    }
    console.log('Resultado da consulta:', results)
})

// Exporta a conexão
module.exports = connection;

// Fecha a conexão.
connection.end();

