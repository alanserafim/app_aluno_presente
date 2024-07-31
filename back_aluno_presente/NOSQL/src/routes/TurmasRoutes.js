import express from "express";
import TurmaController from "../controllers/TurmaController.js";

const routes = express.Router();

routes.get("/turmas", TurmaController.listarTurmas);
routes.get("/turmas/:id", TurmaController.listarTurmaPorId);
routes.post("/turmas", TurmaController.cadastrarTurma);
routes.put("/turmas/:id", TurmaController.atualizarTurma);
routes.delete("/turmas/:id", TurmaController.excluirTurma);


export default routes;