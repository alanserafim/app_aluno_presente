const express = require("express")

const routes = express.Router();

const estudantes = require("./models/estudante")

routes.post("/estudante/cadastrar", (req, res) => {
    const { 
        nome, 
        ra, 
        telefone, 
        serie, 
        dataNascimento, 
        status
    } = req.body

    estudantes.create({
        nome: nome,
        ra: ra,
        telefone: telefone,
        serie: serie,
        dataNascimento: dataNascimento,
        status: status        
    }).then(()=>{
        console.log("Estudante cadastrado com sucesso.")
    }).catch((erro)=>{
        console.log(erro)
    })
})

routes.post("/estudante/atualizar", (req, res) => {
    const { 
        nome, 
        ra, 
        telefone, 
        serie, 
        dataNascimento, 
        status
    } = req.body

    estudantes.update({
        nome: nome,
        ra: ra,
        telefone: telefone,
        serie: serie,
        dataNascimento: dataNascimento,
        status: status        
    }, { where: { "id": req.body.id } }
).then(()=>{
        console.log("Estudante atualizado com sucesso.")
    }).catch((erro)=>{
        console.log(erro)
    })
})

routes.post("/estudante/excluir/:id", (req, res) => {
    estudantes.destroy({ where: { "id": req.params.id } }
).then(()=>{
        console.log("Estudante excluido com sucesso.")
    }).catch((erro)=>{
        console.log(erro)
    })
})


routes.get("/estudante/consultar", (req, res) => {
    estudantes.findAll().then((alunos)=>{
        console.log("Estudantes consultados com sucesso.")
        console.log("Estudante excluido com sucesso.")
    }).catch((erro)=>{
        console.log(erro)
    })
})

module.exports = routes