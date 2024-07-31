import Erro404 from "../Errors/Erro404.js";
import { curso } from "../models/index.js";

class CursoController {

    static async listarCursos (req, res, next){
        try {
            const listaCursos = await curso.find({});
            res.status(200).json(listaCursos);
        } catch (error) {
            next(error);
        }
    }

    static async listarCursosPorId (req, res, next){
        try {
            const id = req.params.id;
            const cursoEncontrado = await curso.findById(id);

            if(cursoEncontrado !== null) res.status(200).json(cursoEncontrado); 
            else next(new Erro404("Id do curso não encontrado"));
                    
        } catch (error) {
            next(error);
        }
    }

    static async cadastrarCurso (req, res, next){
        try {
            const novoCurso = await curso.create(req.body);
            res.status(201).json({ message: "criado com sucesso", curso: novoCurso });
        } catch (error){
            next(error);
        }

    }

    static async atualizarCurso (req, res, next){
        try {
            const id = req.params.id;
            const cursoEncontrado = await curso.findByIdAndUpdate(id, req.body);
            if (cursoEncontrado !== null) res.status(200).json({ message: "curso atualizado com sucesso"});
            else next(new Erro404("Id do curso não encontrado"));
        } catch (error) {
            next(error);
        }
    }

    static async excluirCurso (req, res, next){
        try {
            const id = req.params.id;
            const cursoEncontrado = await curso.findByIdAndDelete(id);
            if(cursoEncontrado !== null) res.status(200).json({ message: "curso excluído com sucesso"});
            else next(new Erro404("Id do curso não encontrado"));
        } catch (error) {
            next(error);
        }
    }

}

export default CursoController;