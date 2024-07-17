import { classeEstudante } from "../models/index.js";
import { estudante } from "../models/index.js";
import { classe } from "../models/index.js";

class ClasseEstudanteController {

    static async gerarListaDeEstudantes (lista){
        try {
            const listaDeEstudantes = await Promise.all(lista.map(async aluno => {
                const estudanteBd = await estudante.findById(aluno.estudante);
                return {
                    ...aluno,
                    estudante: estudanteBd._doc
                };
            }));
            return listaDeEstudantes;
        } catch (error) {
            throw new Error(`Erro ao gerar a lista de estudantes: ${error.message}`);
        }
    }

    static async cadastrarClasseEstudante (req, res){
        const alunos = req.body.estudantes;
        const sala = req.body.classe;    
        try {
            const classeEncontrada = await classe.findById(sala);
            const listaDeAlunos = await ClasseEstudanteController.gerarListaDeEstudantes(alunos);
            console.log(listaDeAlunos);
            const novaClasseEstudante = {
                classe: classeEncontrada,
                estudantes: listaDeAlunos
            };
            const classeEstudanteCriada = await classeEstudante.create(novaClasseEstudante);
            res.status(201).json({ message: "criada com sucesso", classEstudante: classeEstudanteCriada });
        } catch (error){
            res.status(500).json({message: `${error.message} - falha ao cadastrar ClasseEstudante`});
        }
    }

    static async listarClassesEstudantes (req, res){
        try {
            const listaClasses = await classeEstudante.find({});
            res.status(200).json(listaClasses);
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao listar classes`});
        }
    }

    static async listarClasseEstudantePorId (req, res){
        try {
            const id = req.params.id;
            const ClasseEstudanteEncontrada = await classeEstudante.findById(id);
            res.status(200).json(ClasseEstudanteEncontrada);            
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao listar ClasseEstudante por id`});
        }
    }

    static async atualizarClasseEstudante (req, res){
        try {
            const id = req.params.id;
            await classeEstudante.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "ClasseEstudante atualizada com sucesso"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao atualizar ClasseEstudante`});
        }
    }

    static async excluirClasseEstudante (req, res){
        try {
            const id = req.params.id;
            await classeEstudante.findByIdAndDelete(id);
            res.status(200).json({ message: "ClasseEstudante excluída com sucesso"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao excluir ClasseEstudante`});
        }
    }

}

export default ClasseEstudanteController;