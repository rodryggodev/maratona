const express = require('express');
const server = express();
const routes = require('./routes');

// configuração ejs engine, escrever js dentro do html
server.set('view engine', 'ejs');

// midlewer -> faz o meio de campo, serve como um filtro
server.use(express.static('public'));

// puxando do arquivo routes.js
server.use(routes)

server.listen(8080, () => console.log('Servidor Conectado'))

