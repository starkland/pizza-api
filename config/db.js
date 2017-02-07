let mongoose = require('mongoose');

// ====

mongoose.connect('mongodb://admin:dsdsds@ds145039.mlab.com:45039/heroku_njxl57mx');

// ====

const db = mongoose.connection;

// ====

db.on('error', function(err) {
  console.log(`Erro de conexão: ${err}`);
});

db.on('open', function() {
  console.log('Conexão aberta!');
});

db.on('connected', function() {
  console.log('Conectado!');
});

db.on('disconnected', function() {
  console.log('Desconectado!');
});

// ====

process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('A conexão com o mongoose foi encerrada.');
    process.exit(0);
  });
});

// ====

require('../models/pedido.js');