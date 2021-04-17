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

const jobs = [
	{
		id: 1,
		name: 'Pizzaria Guloso',
		'daily-hours': 2,
		'total-hours': 60,
		create_at: Date.now()
	},
	{
		id: 2,
		name: 'OneTwo Project',
		'daily-hours': 3,
		'total-hours': 47,
		create_at: Date.now()
	},
];

// req ->(request) requisição res->(response) resposta send('oque vai ser mostrado')->
// sendFile -> para pegar arquivos __dirname + 'caminho' -> para o caminho
// render -> para renderizar quando for ejs, nao vai mais precisar do arquivo e do sendFile
// metodo post vai precisar do req.body-> recebe as informações do  formulario em formato de objeto
routes.get('/', (req, res) => res.render(views + 'index', { jobs }));
routes.get('/job', (req, res) => res.render(views + 'job'));
routes.post('/job', (req, res) => {jobs.push(req.body)
   const lastId = jobs[jobs.length - 1]?.id || 1 ;
	  job.push({
	 	 	id:	lastbId + 1,
	 	  name: req.body.name,
	    'daily-hours': req.body['dailyi-hours'],
	 	  'total-hours': req.body['total-hours'],
	 	  create_at: Date.now() // atribuindo data de hoje
  	});
	 		return res.redirect('/');
});
routes.get('/job/edit', (req, res) => res.render(views + 'job-edit'));
routes.get('/job/edit', (req, res) => res.render(views + 'job-edit'));
routes.get('/profile', (req, res) => res.render(views + 'profile', {profile: profile}));


// exportando para o arquivo server.js
module.exports = routes; 
