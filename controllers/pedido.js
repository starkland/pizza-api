let mongoose = require('mongoose');
let db = require('../config/db.js');

const Pedido = mongoose.model('Pedido');

// ====

function list(res) {
  Pedido.find({}, (err, data) =>  err ? res.json(err) : res.json(data));
}

function get(req, res) {
  const query = {
    _id: req.params.id
  };

  Pedido.findOne(query, (err, data) =>  err ? res.json(err) : res.json(data));
}

function create(req, res) {
  const novoPedido = new Pedido(req.body);

  novoPedido.save((err, data) => err ? res.json(err) : res.json(data));
}

function remove(req, res) {
  const query = {
    _id: req.params.id
  }

  Pedido.remove(query, (err, data) => err ? res.json(err) : res.json(data));
}

// ====

obj = {
  list,
  get,
  create,
  remove
};

// ====

module.exports = obj;