import mongoose from "mongoose";
import { classeSchema } from "./Classe.js";
import { estudantesSchema } from "./Estudante.js";

const classeEstudanteSchema = new mongoose.Schema({
    id_classe_estudante: { type: mongoose.Schema.ObjectId },
    classe: classeSchema,
    estudantes: [
        {
            numero: { type: String },
            estudante: estudantesSchema
        }
    ]
}, { versionKey: false })

const classeEstudante = mongoose.model("classes_estudantes", classeEstudanteSchema);


export { classeEstudante, classeEstudanteSchema }
