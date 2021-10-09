const express = require('express')
const router = express.Router()
const transacoesService = require('../services/transacoesService')
const contasService = require('../services/contasService')

router.post('/depositar', async (req, res) => {
    const { idConta, valor } = req.body

    if(valor <= 0)
        return res.status(400).send("Digite um valor maior que 0 para depositar na conta")

    if(!idConta)
        return res.status(400).send("Faltando identificador da Conta")

    await transacoesService.postTransacao(idConta, valor)
    return res.status(201).send(`Depósito na conta ${idConta} realizado com sucesso!`)
    
})

router.post('/sacar', async (req, res) => {
    const { idConta, valor } = req.body

    if(valor <= 0)
        return res.status(400).send("Digite um valor maior que 0 para sacar da conta")

    if(!idConta)
        return res.status(400).send("Faltando identificador da Conta")

    const somaSaquesHoje = Number.parseFloat((await transacoesService.getSaquesHoje(idConta))[0].soma ? (await transacoesService.getSaquesHoje(idConta))[0].soma : 0)
    const conta = (await contasService.getConta(idConta))[0]
    const { limitesaquediario, saldo } = conta

    if(somaSaquesHoje == limitesaquediario)
        return res.status(400).send("Limite de saque diário atingido")

    if(somaSaquesHoje + valor > limitesaquediario)
        return res.status(400).send("Valor do saque excede limite diário")

    if(saldo < valor)
        return res.status(400).send("Saldo insuficiente para realizar o saque")

    await transacoesService.postTransacao(idConta, valor * -1)
    return res.status(201).send(`Saque na conta ${idConta} realizado com sucesso!`)
})

router.get('/:idConta', async (req, res) => {
    const { idConta } = req.params

    if(!idConta)
        return res.status(400).send("Conta não existe")

    const transacoes = await transacoesService.getTransacoes(idConta)
    return res.status(200).send(transacoes)
})

module.exports = app => app.use('/transacoes', router)