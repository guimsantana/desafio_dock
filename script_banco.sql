CREATE TABLE IF NOT EXISTS PESSOAS (
    idPessoa SERIAL PRIMARY KEY,
    nome varchar(60), 
    cpf varchar(14),
    dataNascimento date
);

CREATE TABLE IF NOT EXISTS CONTAS (
    idConta SERIAL PRIMARY KEY,
    idPessoa integer REFERENCES PESSOAS(idPessoa),
    saldo money,
    limiteSaqueDiario money,
    flagAtivo boolean,
    tipoConta integer,
    dataCriacao date
);

CREATE TABLE IF NOT EXISTS TRANSACOES (
    idTransacao SERIAL PRIMARY KEY,
    idConta integer REFERENCES CONTAS(idConta),
    valor money,
    dataTransacao date
);

INSERT INTO PESSOAS(nome, cpf, dataNascimento) VALUES ('teste', '12345678910', CURRENT_DATE);