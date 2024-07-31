import Erro404 from "../Errors/Erro404.js";
import { matricula } from "../models/Matricula.js";
import { turma } from "../models/Turma.js";
import { estudante } from "../models/Estudante.js";

class MatriculaController {

    static async listarMatriculas (req, res, next){
        try {
            const listaMatriculas = await matricula.find({});
            res.status(200).json(listaMatriculas);
        } catch (error) {
            next(error);
        }
    }

    static async listarMatriculasPorId (req, res, next){
        try {
            const id = req.params.id;
            const matriculaEncontrada = await matricula.findById(id);
            if(matriculaEncontrada !== null) res.status(200).json(matriculaEncontrada); 
            else next(new Erro404("Id da matricula não encontrado"));
                    
        } catch (error) {
            next(error);
        }
    }

    static async cadastrarMatricula (req, res, next){
        try {
            
            const estudanteEncontrado = await estudante.findById(req.body.estudante_id);
            
            if(estudanteEncontrado !== null) {
                const turmaEncontrada = await turma.findById(req.body.turma_id);
                if(turmaEncontrada !== null){
                    const novaMatricula = await matricula.create(req.body);
                    res.status(201).json({ message: "criado com sucesso", Matricula: novaMatricula });
                } else {
                    next(new Erro404("Id da turma não encontrado"));
                }
            } else {
                next(new Erro404("Id do estudante não encontrado"));
            }
        } catch (error){
            next(error);
        }
    }

    static async atualizarMatricula (req, res, next){
        try {
            const id = req.params.id;
            const matriculaEncontrada = await matricula.findByIdAndUpdate(id, req.body);
            if (matriculaEncontrada !== null) res.status(200).json({ message: "Matricula atualizada com sucesso"});
            else next(new Erro404("Id da matricula não encontrado"));
        } catch (error) {
            next(error);
        }
    }

    static async excluirMatricula (req, res, next){
        try {
            const id = req.params.id;
            const matriculaEncontrada = await matricula.findByIdAndDelete(id);
            if(matriculaEncontrada !== null) res.status(200).json({ message: "Matricula excluído com sucesso"});
            else next(new Erro404("Id da Matricula não encontrado"));
        } catch (error) {
            next(error);
        }
    }

    static async listarMatriculasPorFiltro(req, res, next){
        try {
            const busca = await processaBusca(req.query);
            if (busca !== null){
                const matriculaResultado = matricula.find(busca);
                req.resultado = matriculaResultado;
                next();
            } else {
                res.status(200).json([]);
            }
        } catch (error) {
            next(error);
        }
    }

}


async function processaBusca(parametros){
    const { turma, estudante } = parametros;
    let busca = {};

    if(turma) busca.turma_id = turma;
    if(estudante) busca.estudante_id = estudante;

    return busca;
}

export default MatriculaController;