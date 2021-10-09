# Manual da aplicação

### Para conseguir rodar o desafio, se certifique que tem o **Node** instalado na sua máquina, de preferência versão 14.17.5 ou superior, também é necessário que o **docker-compose** esteja instalado, versão 1.23.1 ou superior de preferência.
  -------------
#### Clone o repositório para a sua máquina, entre no diretório do desafio e para instalar as dependências necessárias rode no terminal o comando:
    npm install

#### Após instalar os requisitos necessários para rodar a aplicação, é hora de subir a nossa aplicação, então rode o comando:
    docker-compose up -d

#### Esse comando irá subir o banco de dados Postgres, a aplicação também será iniciada, rodando na porta 3000. Então o Host para a aplicação é:
    localhost:3000/
  
### Foram implementadas as 6 funcionalidades requisitadas, fique a vontade para abrir um client de sua preferência e realizar as requisições utilizando o **base path / recurso desejado**.

|  Funcionalidade  |   Path  | Método |
|  --------------  |   ----  | ------ |
|  Criar uma Conta | /contas |  POST  |
|  Saldo de uma Conta | /contas/saldo/:idConta |  GET  |
|  Desativar uma Conta | /contas/desativar/:idConta |  PUT  |
|  Depósito em uma Conta | /transacoes/depositar |  POST  |
|  Saque em uma conta | /transacoes/sacar |  POST  |
|  Extrato de uma Conta | /transacoes/:idConta |  GET  |