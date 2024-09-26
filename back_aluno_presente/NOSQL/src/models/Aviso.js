import mongoose from "mongoose";

const avisoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.ObjectId },
    estudante_id: {
        type: String, 
        required: [true, "o id do estudante é obrigatório."]
    },
    turma_id: {
        type: String, 
        required: [true, "o id da turma é obrigatório."]
    },
    data: { type: Date },
    categoria: { type: String },
    texto:  { type: String },
    status: { type: String },
    contato: { type: String }
}, { versionKey: false });

const aviso = mongoose.model("avisos", avisoSchema);

export { aviso, avisoSchema };