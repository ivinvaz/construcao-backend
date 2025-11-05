const express = require('express');
const YAML = require('yaml');
const fs = require('fs');
const swaggerUi = require('swagger-ui-express');

//carrega o arquivo swagger.yaml
const file = fs.readFileSync("./swagger.yaml","utf-8");

//valida o formato YAML
const swaggerDoc = YAML.parse(file);

//cria o middleware de rota
const router = express.Router();

//carrega a aplicação
router.use('/',swaggerUi.serve)

//renderiza o swagger
router.get('/', swaggerUi.setup(swaggerDoc));

module.exports = router;