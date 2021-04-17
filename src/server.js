const express = require('express');
const server = express();
const routes = require('./routes');

// configuração ejs engine, escrever js dentro do html
server.set('view engine', 'ejs');

// midlewer -> faz o meio de campo, serve como um filtro
server.use(express.static('public'));

// usar o req.body la da rota no metodo post
server.use(express.urlencoded({extended: true}))

// puxando do arquivo routes.js
server.use(routes)

server.listen(8080, () => console.log('Servidor Conectado'))

