const database = require('../database/database');

exports.postTransacao = async (idConta, valor) => {
    await database.query(`INSERT INTO TRANSACOES(idConta, valor, dataTransacao) VALUES (${idConta}, ${valor}, CURRENT_DATE)`)
    return database.query(`UPDATE CONTAS SET saldo = saldo + (${valor})::money WHERE idConta = ${idConta}`);
}

exports.getSaquesHoje = idConta => {
    return database.query(`SELECT (SUM(valor) * -1)::numeric as soma FROM TRANSACOES WHERE idConta = ${idConta} AND valor < 0::money`)
}

exports.getTransacoes = idConta => {
    return database.query(`SELECT valor::numeric, dataTransacao FROM TRANSACOES WHERE idConta = ${idConta}`)
}