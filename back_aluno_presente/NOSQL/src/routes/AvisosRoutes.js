import express from "express";
import AvisoController from "../controllers/AvisoController.js";

const routes = express.Router();

routes.get("/avisos", AvisoController.listarAvisos, paginar);
routes.get("/avisos/busca", AvisoController.listarAvisoPorFiltro, paginar);
routes.get("/avisos/:id", AvisoController.listarAvisosPorId);
routes.post("/avisos", AvisoController.cadastrarAviso);
routes.put("/avisos/:id", AvisoController.atualizarEstudante);
routes.delete("/avisos/:id", AvisoController.excluirEstudante);


export default routes;