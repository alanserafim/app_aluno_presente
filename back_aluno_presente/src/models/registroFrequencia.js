const { DataTypes } = require("sequelize")
const db = require("../config/banco")

const RegistroFrequencia = db.sequelize.define("regsitrosFrequencias",{
    dataFrequencia: {
        type: db.Sequelize.STRING
    },
    classe: {
        type: db.Sequelize.STRING
    },
    frequencia: {
        type: db.Sequelize.ARRAY(DataTypes.BOOLEAN)
    }
})

RegistroFrequencia.sync({force: true})

module.exports = EstudantesRegistroFrequencia