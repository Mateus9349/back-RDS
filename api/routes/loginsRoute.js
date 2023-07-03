const { Router } = require('express');
const LoginController = require('../controllers/LoginController');

const router = Router()

router.get('/logins', LoginController.pegaTodosOsLogins);
router.get('/logins/:id', LoginController.pegaUmLogin);
router.post('/logins', LoginController.criaLogin);
router.put('/logins/:id', LoginController.atualizaLogin);
router.delete('/logins/:id', LoginController.apagaLogin);

module.exports = router