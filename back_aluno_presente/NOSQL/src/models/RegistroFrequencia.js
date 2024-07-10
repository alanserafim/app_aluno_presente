import mongoose from "mongoose";
import { classeEstudanteSchema } from "./ClasseEstudante.js";

const registroFrequenciaSchema = new mongoose.Schema({
    id_frequencia: { type: mongoose.Schema.ObjectId },
    data: { type: Date },
    classeEstudante: classeEstudanteSchema,
    frequencia: [
        {
            numero: { type: Number },
            presenca: { type: Boolean } ,
            id_estudante: { type: String },
        }
    ]
}, { versionKey: false })

const registroFrequencia = mongoose.model("registro_frequencia", registroFrequenciaSchema);

export { registroFrequencia, registroFrequenciaSchema }