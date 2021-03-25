const express = require('express')

module.exports = function(server){
    const router = express.Router()

    server.use('/api', router)

    const todoService = require('../api/todo/todoService')
    const cadastroService = require('../api/cadastro/cadastroService')

    todoService.register(router, '/todos')
    cadastroService.register(router, '/cadastros')
}