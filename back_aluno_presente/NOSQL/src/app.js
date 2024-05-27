import express from "express"

const PORT = 3000

const app = express()

app.get("/", (req, res) => {
    res.status(200).send("API Aluno Presente")
})

export default app;