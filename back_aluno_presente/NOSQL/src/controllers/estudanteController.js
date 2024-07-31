import Erro404 from "../Errors/Erro404.js";
import { estudante } from "../models/index.js";
import { curso  as cursoDB } from "../models/index.js";

class EstudanteController {

    static async listarEstudantes (req, res, next) {
        try {
            const buscaEstudantes = estudante.find({});
            req.resultado = buscaEstudantes;
            next();
        } catch (error) {
            next(error);
        }
    }

    static async listarEstudantesPorId (req, res, next){
        try {
            const id = req.params.id;
            const estudanteEncontrado = await estudante.findById(id);
            if(estudanteEncontrado !== null)res.status(200).json(estudanteEncontrado);       
            else next(new Erro404("Id do estudante não encontrado"));     
        } catch (error) {
            next(error);
        }
    }

    static async cadastrarEstudante (req, res, next){
        const novoEstudante = req.body;

        try {
            const estudanteCriado = await estudante.create(novoEstudante);
            res.status(201).json({ message: "criado com sucesso", estudante: estudanteCriado});
        } catch (error) {
            next(error);
            
        }

    }

    static async atualizarEstudante (req, res, next){
        try {
            const id = req.params.id;
            const estudanteEncontrado = await estudante.findByIdAndUpdate(id, req.body);
            if(estudanteEncontrado !== null) res.status(200).json({ message: "estudante atualizado com sucesso"});
            else next(new Erro404("Id do estudante não encontrado"));
        } catch (error) {
            next(error);
        }

    }

    static async excluirEstudante (req, res, next){
        try {
            const id = req.params.id;
            const estudanteEncontrado = await estudante.findByIdAndDelete(id);
            if(estudanteEncontrado !== null) res.status(200).json({ message: "estudante excluído com sucesso"});
            else next(new Erro404("Id do estudante não encontrado"));
        } catch (error) {
            next(error);
        }
    }

    static async listarEstudantePorFiltro(req, res, next){
        try {
            const busca = await processaBusca(req.query);
            if (busca !== null){
                const estudanteResultado = estudante.find(busca);
                req.resultado = estudanteResultado;
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
    const { nome } = parametros;
    let busca = {};

    if(nome) busca.nome = { $regex: nome, $options: "i"};
    // if(classe) {
    //     const classeEncontrada = await cursoDB.findById(classe);
    //     if(classeEncontrada !== null) busca.classe = classeEncontrada;
    //     else busca = null;
    // }
    return busca;
}

export default EstudanteController;