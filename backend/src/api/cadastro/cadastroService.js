const Cadastro = require('./cadastro');

Cadastro.methods(['get', 'post', 'put', 'delete']);

Cadastro.updateOptions({ new: true, runValidators: true});

module.exports = Cadastro;