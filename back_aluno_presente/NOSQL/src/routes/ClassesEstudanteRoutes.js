import express from "express";
import ClasseEstudanteController from "../controllers/classeEstudanteController.js";

const routes = express.Router();

routes.get("/classeEstudante", ClasseEstudanteController.listarClassesEstudantes);
routes.get("/classeEstudante/:id", ClasseEstudanteController.listarClasseEstudantePorId);
routes.post("/classeEstudante", ClasseEstudanteController.cadastrarClasseEstudante);
routes.put("/classeEstudante/:id", ClasseEstudanteController.atualizarClasseEstudante);
routes.delete("/classeEstudante/:id", ClasseEstudanteController.excluirClasseEstudante);


export default routes;