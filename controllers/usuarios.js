let mongoose = require('mongoose');
let db = require('../config/db.js');

const Usuario = mongoose.model('Usuario');

// ====

function list(res) {
  Usuario.find({}, (err, data) =>  err ? res.json(err) : res.json(data));
}

function get(req, res) {
  const query = {
    _id: req.params.id
  };

  Usuario.findOne(query, (err, data) =>  err ? res.json(err) : res.json(data));
}

function create(req, res) {
  const novoUsuario = new Usuario(req.body);

  novoUsuario.save((err, data) => err ? res.json(err) : res.json(data));
}

function remove(req, res) {
  const query = {
    _id: req.params.id
  }

  Usuario.remove(query, (err, data) => err ? res.json(err) : res.json(data));
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