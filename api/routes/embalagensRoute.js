const { Router } = require('express');
const EmbalagemController = require('../controllers/EmbalagensController');

const router = Router()

router.get('/embalagens', EmbalagemController.pegaTodasAsEmbalagens);
router.get('/embalagens/:id', EmbalagemController.pegaUmaEmbalagem);
router.post('/embalagens', EmbalagemController.criaEmbalagem);
router.put('/embalagens/:id', EmbalagemController.atualizaEmbalagem);
router.delete('/embalagens/:id', EmbalagemController.apagaEmbalagem);

module.exports = router