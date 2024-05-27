const db = require("../config/banco")

const Classes = db.sequelize.define("classes",{
    titulo: {
        type: db.Sequelize.STRING
    },
    tipoEnsino: {
        type: db.Sequelize.STRING
    },
    horario: {
        type: db.Sequelize.STRING
    },
    estudantes: {
        type: db.Sequelize.ARRAY(DataTypes.STRING)
    }
})

Classes.sync({force: true})

module.exports = Classes   