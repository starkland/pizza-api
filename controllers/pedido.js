let mongoose = require('mongoose');
let db = require('../config/db.js');

const Pedido = mongoose.model('Pedido');

// ====

function list(res) {
  Pedido.find({}, (err, data) =>  err ? res.json(err) : res.json(data));
}

// ====

obj = {
  list
};

// ====

module.exports = obj;