import express from "express"

const PORT = 3000
const app = express()
app.use(express.json())


const estudantes = [
    {
        id: 1,
        nome: "Leonardo da Silva",
        ra: "100.200.300-4"
    },
    {
        id: 2,
        nome: "Rosana",
        ra: "100.215.398-8" 
    }
]
app.get("/", (req, res) => {
    res.status(200).send("API Aluno Presente")
})

app.get("/estudantes", (req, res)=>{
    res.status(200).json(estudantes)
})

app.get("estudantes/:id", (req, res) => {
    estudantes.find(req.params.id)
})

app.post("/estudantes", (req, res)=>{ 
    estudantes.push(req.body)
    res.status(201).send("estudantes cadastrados com sucesso")
})

export default app;