const express = require("express");
const router = require("express").Router()

const controller = require("../controllers/participantesController")

router.post("/criar", controller.abriCadastro);

router.get("/", controller.todasAsParticipantes);
router.get("/:id", controller.pesquisarPorId);

router.put("/atualizar/:id", controller.atualizarPorId)
router.delete("/:id", controller.deletarCadastro)

module.exports = router
