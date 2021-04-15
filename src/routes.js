const express = require('express');
const routes = express.Router();

// so pra incurtar as rotas e pegando os arquivos da pasta views
const views = __dirname + '/views/'; 

const profile = {
	name: 'Rodryggo',
	avatar: 'https://avatars.githubusercontent.com/u/67491104?v=4',
	'monthly-budget': 3000,
	'hours-per-day': 5,
	'day-per-week': 5,
	'vacation-per-year': 4
};


// req ->(request) requisição res->(response) resposta send('oque vai ser mostrado')->
// sendFile -> para pegar arquivos __dirname + 'caminho' -> para o caminho
// render -> para renderizar quando for ejs, nao vai mais precisar do arquivo e do sendFile
routes.get('/', (req, res) => res.render(views + 'index'));
routes.get('/job', (req, res) => res.render(views + 'job'));
routes.get('/job/edit', (req, res) => res.render(views + 'job-edit'));
routes.get('/profile', (req, res) => res.render(views + 'profile', {profile: profile}));



module.exports = routes; 
