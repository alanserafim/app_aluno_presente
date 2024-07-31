import express from "express";
import CursoController from "../controllers/CursoController.js";

const routes = express.Router();

routes.get("/cursos", CursoController.listarCursos);
routes.get("/cursos/:id", CursoController.listarCursosPorId);
routes.post("/cursos", CursoController.cadastrarCurso);
routes.put("/cursos/:id", CursoController.atualizarCurso);
routes.delete("/cursos/:id", CursoController.excluirCurso);


export default routes;