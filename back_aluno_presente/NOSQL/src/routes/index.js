import express from 'express'
import estudantes from './EstudantesRoutes.js'
import classes from "./ClassesRoutes.js"
import classeEstudante from "./ClassesEstudanteRoutes.js"
import registroFrequencia from "./RegistroFrequenciaRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("API Aluno_Presente"))

    app.use(express.json(), estudantes, classes, classeEstudante, registroFrequencia);
}

export default routes;
