let express = require('express');
let mongoose = require('mongoose');

let PedidoCtrl = require('../controllers/pedido.js');
let UsuariosCtrl = require('../controllers/usuarios.js');

const router = express.Router();

// ====

router.get('/', (req, res, next) => PedidoCtrl.list(res));

router.get('/:id', (req, res, next) => PedidoCtrl.get(req, res));

router.post('/create', (req, res, next) => {
  PedidoCtrl.create(req, res)
  UsuariosCtrl.create(req, res);
});

router.delete('/delete/:id', (req, res, next) => PedidoCtrl.remove(req, res));

// ====

module.exports = router;