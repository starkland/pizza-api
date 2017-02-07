let express = require('express');
let mongoose = require('mongoose');
let PedidoCtrl = require('../controllers/pedido.js');

const router = express.Router();

// ====

router.get('/', (req, res, next) => PedidoCtrl.list(res));

// ====

module.exports = router;