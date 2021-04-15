const express = require('express');
const server = express();
const routes = require('./routes');

// midlewer -> faz o meio de campo, serve como um filtro
server.use(express.static('public'));

// puxando do arquivo routes.js
server.use(routes)

server.listen(8080, () => console.log('Servidor Conectado'))

