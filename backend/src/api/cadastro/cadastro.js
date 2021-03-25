const restful = require('node-restful');
const mongoose = restful.mongoose;

const cadastroSchema = new mongoose.Schema({
    nome: { type: String, required: true},
    data: {type: Date, default: Date.now}
})

module.exports = restful.model('Cadastro', cadastroSchema);