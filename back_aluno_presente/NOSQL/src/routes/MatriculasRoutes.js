import express from "express";
import MatriculaController from "../controllers/MatriculaController.js";
import paginar from "../middlewares/paginar.js";

const routes = express.Router();

routes.get("/matriculas", MatriculaController.listarMatriculas);
routes.get("/matriculas/busca", MatriculaController.listarMatriculasPorFiltro, paginar);
routes.get("/matriculas/:id", MatriculaController.listarMatriculasPorId);
routes.post("/matriculas", MatriculaController.cadastrarMatricula);
routes.put("/matriculas/:id", MatriculaController.atualizarMatricula);
routes.delete("/matriculas/:id", MatriculaController.excluirMatricula);


export default routes;