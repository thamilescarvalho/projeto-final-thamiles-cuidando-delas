const mongoose = require('mongoose');
const participantesSchema = require('../models/participantesSchema');

const { query } = require('express');

const abriCadastro = async (req, res) => {
    const { nome, cpf, email, data_nascimento, endereco, idade, sexo, escolha_atividade } = req.body
        const cadastro = new participantesSchema({
            nome: nome,
            cpf: cpf,
            email: email,
            data_nascimento: data_nascimento,
            endereco: endereco,
            idade: idade,
            sexo: sexo,
            escolha_atividade: escolha_atividade
        })
        const salvarCadastro = await cadastro.save();
        return res.status(201).json({
            statusCode:201,
            message: 'Cadastro criado com sucesso!',
            cadastro: salvarCadastro
        })
}

const todasAsParticipantes = async (req, res) => {
    const cadastro = await participantesSchema.find({ query })
    res.status(200).json(cadastro)
}

const pesquisarPorId = async (req, res) => {
    try {
        const cadastro = await participantesSchema.findById(req.params.id)
    res.status(200).json(cadastro)

    } catch(error) {
    return res.status(500).send({
        message: error.message})
    }
}

const atualizarPorId = async (req, res) => {
    const { nome, cpf, email, data_nascimento, endereco, idade, sexo } = req.body;

        const procurarCadastro = await participantesSchema.findById(req.params.id)
        
        if (!procurarCadastro) {
        res.status(404).send({
        statusCode: 404,
        message:`Cadastro não localizado com o id: ${req.params.id}`})
    }
    try {
        procurarCadastro.nome = nome || procurarCadastro.nome;
        procurarCadastro.cpf = cpf || procurarCadastro.cpf;
        procurarCadastro.email = email || procurarCadastro.email;
        procurarCadastro.data_nascimento = data_nascimento || procurarCadastro.data_nascimento;
        procurarCadastro.endereco = endereco || procurarCadastro.endereco;
        procurarCadastro.idade = idade || procurarCadastro.idade;
        procurarCadastro.sexo = sexo || procurarCadastro.sexo;
        
        const cadastroAtualizado = await procurarCadastro.save()
        res.status(200).send({
        message: 'Cadastro atualizado com sucesso', 
        cadastro: cadastroAtualizado});

    } catch(error) {
        res.status(500).send({
            message: error.message
        })
    }
}

const deletarCadastro = async (req, res) => {
    const { id } = req.params
        const procurarCadastro = await participantesSchema.findById(id)

        if(!procurarCadastro) {
        res.status(404).send({
            statusCode: 404,
            message: `Cadastro ${id} não encontrado`})
        }
        await procurarCadastro.delete()

        return res.status(200).send({
        statusCode: 200,
        message: 'Cadastro deletado com sucesso'
    })
}

module.exports = {
    abriCadastro,
    todasAsParticipantes,
    pesquisarPorId,
    atualizarPorId,
    deletarCadastro
}