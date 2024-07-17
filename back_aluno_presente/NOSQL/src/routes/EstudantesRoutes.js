import express from "express";
import estudanteController from "../controllers/estudanteController.js";

const routes = express.Router();

routes.get("/estudantes", estudanteController.listarEstudantes);
routes.get("/estudantes/busca", estudanteController.listarEstudantesPorClasse);
routes.get("/estudantes/:id", estudanteController.listarEstudantesPorId);
routes.post("/estudantes", estudanteController.cadastrarEstudante);
routes.put("/estudantes/:id", estudanteController.atualizarEstudante);
routes.delete("/estudantes/:id", estudanteController.excluirEstudante);


export default routes;