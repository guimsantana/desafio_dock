const express = require('express')
const router = express.Router()
const contasService = require('../services/contasService')

router.post('/', async (req, res) => {
    if(req.body.idPessoa){
        const conta = await contasService.postConta(req.body.idPessoa)
        return res.status(201).send(conta)
    }
    else{
        return res.status(400).send("Faltando identificador da Pessoa")
    }

})

router.get('/saldo/:idConta', async (req, res) => {
    const { idConta } = req.params

    if(idConta){
        const conta = await contasService.getConta(idConta)
        if(conta.length > 0)
            return res.status(200).send(`O saldo da conta é: ${conta[0].saldo}`)
        else
            return res.status(400).send("Conta não existe")
    }
    else{
        return res.status(400).send("Faltando identificador da Conta")
    }
})

router.put('/desativar/:idConta', async (req, res) => {
    const { idConta } = req.params

    if(idConta){
        const conta = await contasService.getConta(idConta)
        if(conta.length > 0){
            await contasService.putDesativaConta(idConta)
            return res.status(200).send("Conta desativada com sucesso!")
        }
        else
            return res.status(400).send("Conta não existe")
    }
    else{
        return res.status(400).send("Faltando identificador da Conta")
    }
})

module.exports = app => app.use('/contas', router)