import express from "express";
import estudantes from "./EstudantesRoutes.js";
import cursos from "./CursosRoutes.js";
import turmas from "./TurmasRoutes.js";
import matriculas from "./MatriculasRoutes.js";
//import registroFrequencia from "./RegistroFrequenciaRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("API Aluno_Presente"));

    app.use(
        express.json(),
        cursos, 
        estudantes, 
        turmas, 
        matriculas
        //registroFrequencia
    );
};

export default routes;
