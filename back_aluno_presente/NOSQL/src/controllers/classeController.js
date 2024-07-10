import { classe } from "../models/Classe.js";

class ClasseController {

    static async listarClasses (req, res){
        try {
            const listaClasses = await classe.find({})
            res.status(200).json(listaClasses);
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao listar classes`})
        }
    }

    static async listarClassePorId (req, res){
        try {
            const id = req.params.id;
            const classeEncontrada = await classe.findById(id);
            res.status(200).json(classeEncontrada)            
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao listar classe por id`})
        }
    }

    static async cadastrarClasse (req, res){
        try {
            const novaClasse = await classe.create(req.body)
            res.status(201).json({ message: "criada com sucesso", autor: novaClasse });

        } catch (error){
            res.status(500).json({message: `${error.message} - falha ao cadastrar classe`})
        }

    }

    static async atualizarClasse (req, res){
        try {
            const id = req.params.id;
            await classe.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "classe atualizada com sucesso"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao atualizar classe`})
        }
    }

    static async excluirClasse (req, res){
        try {
            const id = req.params.id;
            await classe.findByIdAndDelete(id);
            res.status(200).json({ message: "classe excluída com sucesso"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao excluir classe`})
        }
    }

}

export default ClasseController;