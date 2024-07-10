import { estudante } from "../models/Estudante.js"
import { classe } from "../models/Classe.js"

class EstudanteController {

    static async listarEstudantes (req, res) {
        try {
            const listaEstudantes = await estudante.find({})
            res.status(200).json(listaEstudantes);
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao listar estudantes`})
        }
    }

    static async listarEstudantesPorId (req, res){
        try {
            const id = req.params.id;
            const estudanteEncontrado = await estudante.findById(id);
            res.status(200).json(estudanteEncontrado)            
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao listar estudante por id`})
        }

    }

    static async listarEstudantesPorClasse(req, res){
        const classeQuery = req.query.classe
        const classeEncontrada = await classe.findById(classeQuery)
        try {
            const alunosPorClasse = await estudante.find({ classe: classeEncontrada })
            res.status(200).json(alunosPorClasse)
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao listar estudantes`})
        }
    }

    static async cadastrarEstudante (req, res){
        const novoEstudante = req.body;

        try {
            const classeEncontrada = await classe.findById(novoEstudante.classe)
            const novoEstudanteCompleto = {
                ...novoEstudante, 
                classe: { ...classeEncontrada._doc }
            };
            const estudanteCriado = await estudante.create(novoEstudanteCompleto)
            res.status(201).json({ message: "criado com sucesso", estudante: estudanteCriado})
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao cadastrar estudante`})
            
        }

    }

    static async atualizarEstudante (req, res){
        try {
            const id = req.params.id;
            await estudante.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "estudante atualizado com sucesso"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao atualizar estudante`})
        }

    }

    static async excluirEstudante (req, res){
        try {
            const id = req.params.id;
            await estudante.findByIdAndDelete(id);
            res.status(200).json({ message: "estudante excluído com sucesso"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao excluir estudante`})
        }

    }

}

export default EstudanteController;