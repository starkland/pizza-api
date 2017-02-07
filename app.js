let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let cors = require('cors');

// ====

let app = express();
app.use(cors()); // habilita o CORS
app.use(logger('dev')); // habilita o log apenas em ambiente DEV
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// ====

let pedido = require('./routes/pedido.js');
app.use('/pedido', pedido);

// ====

// 404
app.use(function(req, res, next) {
  let err = new Error('Não encontrado');
  err.status = 404;

  next(err);
});

// Tratando erros
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

// ====

module.exports = app;