let express = require('express');
let mongoose = require('mongoose');
let UsuariosCtrl = require('../controllers/usuarios.js');

const router = express.Router();

// ====

router.get('/', (req, res, next) => UsuariosCtrl.list(res));
router.get('/:id', (req, res, next) => UsuariosCtrl.get(req, res));
router.post('/create', (req, res, next) => UsuariosCtrl.create(req, res));
router.delete('/delete/:id', (req, res, next) => UsuariosCtrl.remove(req, res));

// ====

module.exports = router;