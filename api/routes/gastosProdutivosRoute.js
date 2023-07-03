const { Router } = require('express');
const GastosProdutivoController = require('../controllers/GastosProdutivosController');

const router = Router()

router.get('/gastosProdutivos', GastosProdutivoController.pegaTodosOsGastosProdutivos);
router.get('/gastosProdutivos/:id', GastosProdutivoController.pegaUmGastosProdutivos);
router.post('/gastosProdutivos', GastosProdutivoController.criaGastosProdutivos);
router.put('/gastosProdutivos/:id', GastosProdutivoController.atualizaGastosProdutivos);
router.delete('/gastosProdutivos/:id', GastosProdutivoController.apagaGastosProdutivos);

module.exports = router