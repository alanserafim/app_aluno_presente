import mongoose from "mongoose";
import { classeSchema } from "./Classe.js";

const estudantesSchema = new mongoose.Schema({
    id_estudante: { type: mongoose.Schema.ObjectId },
    nome: { type: String, required: true},
    telefone: { type: String },
    dataNascimento: { type: String },
    status: { type: String, required: true},
    classe: classeSchema,
}, {versionKey: false});

const estudante = mongoose.model("estudantes", estudantesSchema);

export { estudante, estudantesSchema };