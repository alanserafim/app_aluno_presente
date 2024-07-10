import { registroFrequencia } from "../models/RegistroFrequencia.js";
import { classeEstudante } from "../models/ClasseEstudante.js";

class RegistroFrequenciaController {

    static async cadastrarFrequencia (req, res) {

        const novaFrequencia = req.body

        try {
            const classeEstudanteEncontrada = await classeEstudante.findById(novaFrequencia.classeEstudante)
            
            const novaFrequenciaCompleta = {
                ...novaFrequencia, 
                classeEstudante: { ...classeEstudanteEncontrada._doc }
            };
            const frequenciaCriada = await registroFrequencia.create(novaFrequenciaCompleta)
            res.status(201).json({ message: "criado com sucesso", frequencia: frequenciaCriada})
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao cadastrar frequência`})
        }

    }

    static async listarFrequencia (req, res){
        try {
            const listaFrequencias = await registroFrequencia.find({})
            res.status(200).json(listaFrequencias);
            
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao listar frequência`})
        }
    }

    static async listarFrequenciaPorClasse (req, res){
        const classe = req.query.classe
        try {
           const frequenciaPorClasse = await registroFrequencia.find({ classe: classe })
           res.status(200).json(frequenciaPorClasse	) 
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao listar frequência`})
        }
    }

    static async listarFrequenciaPorId (req, res) {
        try {
            const id = req.params.id
            const frequenciaEncontrada = await registroFrequencia.findById(id)
            res.status(200).json(frequenciaEncontrada)
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao listar frequência`})
        }
    }

    static async listarFrequenciaPorClasseEstudante (req, res){
        const classeEstudanteReq = req.query.classe
        console.log("Req: ", classeEstudanteReq)
        try {
            const frequenciaPorClasseEstudante = await registroFrequencia.find({ 'classeEstudante._id': classeEstudanteReq });
            res.status(200).json(frequenciaPorClasseEstudante)
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao listar frequência`})
        }

    }

    static async atualizarFrequencia (req, res){
        try {
            const id = req.params.id;
            await registroFrequencia.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "Frequência atualizada com sucesso"});
            
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao atualizar frequência`})
        }

    }

    static async excluirFrequencia (req, res){
        try {
            const id = req.params.id;
            await registroFrequencia.findByIdAndDelete(id);
            res.status(200).json({ message: "frequencia excluída com sucesso"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao excluir frequência`})
        }

    }

}

export default RegistroFrequenciaController;