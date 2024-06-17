const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');


//definindo as rotas

router.post('/', controllers.createAccount);
router.get('/:id', controllers.getId);
router.put('/:id', controllers.modelPut);
router.get('/', controllers.getAll);
router.delete('/:id', controllers.modelDelete);

module.exports = router;