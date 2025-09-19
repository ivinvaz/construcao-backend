const express = require('express');
const { listarTarefas } = require('../controllers/tarefasController');

const router = express.Router();

const controller = require('../controllers/tarefasController')

router.get("/", controller.listarTarefas);

router.post("/", controller.criarTarefa);

router.get("/:id", controller.listarTarefasId);

router.put("/:id", controller.atualizarTarefa);
  
router.delete("/:id", controller.deletarTarefa);

module.exports = router;