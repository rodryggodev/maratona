const express = require('express');
const routes = express.Router();

// so pra incurtar as rotas e pegando os arquivos da pasta views
const basePath = __dirname + '/views';

// req ->(request) requisição res->(response) resposta send('oque vai ser mostrado')->
// sendFile -> para pegar arquivos __dirname + 'caminho' -> para o caminho
routes.get('/', (req, res) => res.sendFile(basePath + '/index.html'));
routes.get('/job', (req, res) => res.sendFile(basePath + '/job.html'));
routes.get('/job/edit', (req, res) => res.sendFile(basePath + '/job-edit.html'));
routes.get('/profile', (req, res) => res.sendFile(basePath + '/profile.html'));



module.exports = routes; 
