import express from "express";
import RegistroFrequenciaController from "../controllers/RegistroFrequenciaController.js";

const routes = express.Router();

routes.get("/frequencia", RegistroFrequenciaController.listarFrequencia);
routes.get("/frequencia/busca", RegistroFrequenciaController.listarFrequenciaPorClasseEstudante);
routes.get("/frequencia/:id", RegistroFrequenciaController.listarFrequenciaPorId);
routes.post("/frequencia", RegistroFrequenciaController.cadastrarFrequencia);
routes.put("/frequencia/:id", RegistroFrequenciaController.atualizarFrequencia);
routes.delete("/frequencia/:id", RegistroFrequenciaController.excluirFrequencia);

// routes.get("/classes", ClasseController.listarClasses);
// routes.get("/classes/:id", ClasseController.listarClassePorId);
// routes.post("/classes", ClasseController.cadastrarClasse);
// routes.put("/classes/:id", ClasseController.atualizarClasse);
// routes.delete("/classes/:id", ClasseController.excluirClasse);


export default routes;