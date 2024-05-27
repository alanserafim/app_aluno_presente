const Sequelize = require("sequelize")

const database = "sistema_web"
const user = "root"
const pass = "Dev@9192#"

const sequelize = new Sequelize(database, user, pass, {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado ao Banco de Dados com sucesso");
}).catch(function(erro){
    console.log("Erro na conexão com o Banco de Dados", erro)
})

module.exports = { 
    Sequelize: Sequelize, 
    sequelize: sequelize 
}