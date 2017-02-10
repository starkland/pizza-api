let mongoose = require('mongoose');

// ====

const Schema = mongoose.Schema;

// ====

const UsuarioSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: true
  },

  email: {
    type: String,
    required: true
  },

  endereco: {
    type: String,
    required: true
  },

  cep: {
    type: String,
    required: true
  },

  telefone: {
    type: String,
    required: true
  },

  created_at: {
    type: Date,
    default: Date.now
  }
});

// ====

module.exports = mongoose.model('Usuario', UsuarioSchema);