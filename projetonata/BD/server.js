
const express = require('express'); // Importa o modulo do Express.JS para a criação do servidor
const path = require('path'); // Importa o modulo PATH.
const connection = require('./connection'); // Importa a conexão com o banco de dados.

const app = express(); 
const port = 3000;

// Serve static files (like HTML) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to get data from the database
app.get('/data', (req, res) => {
  connection.query('SELECT * FROM tbl_clientes', (err, results) => {
    if (err) {
      console.error('Error executing query:', err.stack);
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
