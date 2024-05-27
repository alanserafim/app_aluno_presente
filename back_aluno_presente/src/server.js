const express = require("express")
const routes  = require("./routes")
const cors = require("cors")
const app = express()
const PORT = 3000

//const bodyParser = require("body-parser")
//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())


//app.use(express.static("assets"));
//app.set("view engine", "handlebars")
app.use(express.json())
app.use(routes)
app.use(cors())
// const estudantes = require("./models/estudante")
// const classes = require("./models/classe")
// const registrosFrencias = require("./models/registroFrequencia")


app.get('/', (req, res) => {
    res.send("Olá Mundo")
})



app.listen(PORT, function () {
    console.log(`Servidor ativo na porta ${PORT}`)
    console.log(`http://localhost:${PORT}`)
})

