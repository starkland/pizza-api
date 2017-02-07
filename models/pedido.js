let mongoose = require('mongoose');

// ====

const Schema = mongoose.Schema;

// ====

const PedidoSchema = new Schema({
  name: {
    type: String,
    default: '',
    // required: true
  },

  created_at: {
    type: Date,
    default: Date.now
  }
});

// ====

module.exports = mongoose.model('Pedido', PedidoSchema);