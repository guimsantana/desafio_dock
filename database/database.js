const pgp = require('pg-promise')();
const db = pgp({
	user: 'postgres',
	password: 'desafio123',
	host: 'db',
	port: 5432,
	database: 'desafio'
});

module.exports = db;