const mongoose = require('mongoose');
const participantesSchema = require('../models/participantesSchema');

const { query } = require('express');

const abriCadastro = async (req, res) => {}

const todasAsParticipantes = async (req, res) => {}

const pesquisarPorId = async (req, res) => {}

const atualizarPorId = async (req, res) => {}

const deletarCadastro = async (req, res) => {}

module.exports = {
    abriCadastro,
    todasAsParticipantes,
    pesquisarPorId,
    atualizarPorId,
    deletarCadastro
}