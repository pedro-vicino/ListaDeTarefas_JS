const db = require('./db')
const Tarefas = db.sequelize.define('tarefas', {
    nome: {
        type: db.Sequelize.STRING
    },
    descricao: {
        type: db.Sequelize.TEXT
    },
    data_limite: {
        type: db.Sequelize.DATE
    }
})
// Tarefas.sync({ force: true })
module.exports = Tarefas