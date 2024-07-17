import express from "express";
import ClasseController from "../controllers/classeController.js";

const routes = express.Router();

routes.get("/classes", ClasseController.listarClasses);
routes.get("/classes/:id", ClasseController.listarClassePorId);
routes.post("/classes", ClasseController.cadastrarClasse);
routes.put("/classes/:id", ClasseController.atualizarClasse);
routes.delete("/classes/:id", ClasseController.excluirClasse);


export default routes;