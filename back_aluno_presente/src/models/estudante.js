const db = require("../config/banco")

const Estudantes = db.sequelize.define("estudantes",{
    nome: {
        type: db.Sequelize.STRING
    },
    ra: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING
    },
    serie: {
        type: db.Sequelize.STRING
    },
    dataNascimento: {
        type: db.Sequelize.STRING
    },
    status: {
        type: db.Sequelize.STRING
    }
})

Estudantes.sync({force: true})

module.exports = Estudantes   