import { turma } from "../models/index.js";
import Erro404 from "../Errors/Erro404.js";
import { curso } from "../models/index.js";
//import { estudante } from "../models/index.js";
//import { classe } from "../models/index.js";

class TurmaController {

    // static async gerarListaDeEstudantes (lista){
    //     try {
    //         const listaDeEstudantes = await Promise.all(lista.map(async aluno => {
    //             const estudanteBd = await estudante.findById(aluno.estudante);
    //             return {
    //                 ...aluno,
    //                 estudante: estudanteBd._doc
    //             };
    //         }));
    //         return listaDeEstudantes;
    //     } catch (error) {
    //         throw new Error(`Erro ao gerar a lista de estudantes: ${error.message}`);
    //     }
    // }

    static async cadastrarTurma (req, res, next){
        const novaTurma = req.body;
        try {
            const cursoEncontrado = await curso.findById(novaTurma.curso_id);
            if(cursoEncontrado !== null){
                const classeEstudanteCriada = await turma.create(novaTurma);
                res.status(201).json({ message: "criada com sucesso", turma: classeEstudanteCriada });
            } else {
                next(new Erro404("Id do curso não encontrado"));
            }
        } catch (error){
            next(error);
        }
    }

    static async listarTurmas (req, res, next){
        try {
            const listaTurmas = await turma.find({});
            res.status(200).json(listaTurmas);
        } catch (error) {
            next(error);
        }
    }

    static async listarTurmaPorId (req, res, next){
        try {
            const id = req.params.id;
            const turmaEncontrada = await turma.findById(id);
            if(turmaEncontrada !== null) res.status(200).json(turmaEncontrada); 
            else next(new Erro404("Id da turma não encontrado"));            
        } catch (error) {
            next(error);
        }
    }

    static async atualizarTurma (req, res, next){
        try {
            const id = req.params.id;
            const turmaEncontrada = await turma.findByIdAndUpdate(id, req.body);
            if(turmaEncontrada !== null) res.status(200).json({ message: "Turma atualizada com sucesso"});
            else next(new Erro404("Id da turma não encontrado"));
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao atualizar turma`});
        }
    }

    static async excluirTurma (req, res, next){
        try {
            const id = req.params.id;
            const turmaEncontrada = await turma.findByIdAndDelete(id);
            if(turmaEncontrada !== null) res.status(200).json({ message: "Turma excluída com sucesso"});
            else next(new Erro404("Id da turma não encontrado"));
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao excluir turma`});
        }
    }

}

export default TurmaController;