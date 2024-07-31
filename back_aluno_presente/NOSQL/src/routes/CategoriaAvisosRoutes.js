import express from "express";
import CategoriaAvisoController from "../controllers/CategoriaAvisoController.js";

const routes = express.Router();

routes.get("/avisos/categorias", CategoriaAvisoController.listarCategoriaAvisos);
routes.get("/avisos/categorias/:id", CategoriaAvisoController.listarCategoriaAvisosPorId);
routes.post("/avisos/categorias", CategoriaAvisoController.cadastrarCategoriaAviso);
routes.put("/avisos/categorias/:id", CategoriaAvisoController.atualizarCategoriaAviso);
routes.delete("/avisos/categorias/:id", CategoriaAvisoController.excluirCategoriaAviso);


export default routes;