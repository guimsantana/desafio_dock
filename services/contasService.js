const database = require('../database/database');

exports.postConta = idPessoa => {
	return database.query(`INSERT INTO CONTAS(idPessoa, saldo, limitesaquediario, flagativo, tipoconta, datacriacao) VALUES (${idPessoa}, 0, 1000, TRUE, 0, CURRENT_DATE)`);
};

exports.getConta = idConta => {
	return database.query(`SELECT idConta, saldo::numeric, limitesaquediario::numeric FROM CONTAS WHERE idConta = ${idConta}`);
};

exports.putDesativaConta = idConta => {
	return database.query(`UPDATE CONTAS SET flagAtivo = FALSE WHERE idConta = ${idConta}`);
};