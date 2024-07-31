import express from "express";
import estudanteController from "../controllers/EstudanteController.js";
import paginar from "../middlewares/paginar.js";

const routes = express.Router();

routes.get("/estudantes", estudanteController.listarEstudantes, paginar);
routes.get("/estudantes/busca", estudanteController.listarEstudantePorFiltro, paginar);
routes.get("/estudantes/:id", estudanteController.listarEstudantesPorId);
routes.post("/estudantes", estudanteController.cadastrarEstudante);
routes.put("/estudantes/:id", estudanteController.atualizarEstudante);
routes.delete("/estudantes/:id", estudanteController.excluirEstudante);


export default routes;