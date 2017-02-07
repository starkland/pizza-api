//
// Arquivo principal da aplicação
// configurações do servidor
//

let app = require('./app.js');
let debug = require('debug')('test:server');
let http = require('http');

// ====

const porta = process.env.PORT || '3000';

app.set('port', porta);

let server = http.createServer(app).listen(porta);

// ====

server.on('error', function(err) {
  console.log(err);
});

server.on('listening', function() {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
