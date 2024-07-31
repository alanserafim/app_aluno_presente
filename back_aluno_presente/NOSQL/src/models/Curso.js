import mongoose from "mongoose";

const cursoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.ObjectId },
    titulo: { 
        type: String, 
        required: [true, "o titulo do curso é obrigatório."]
    },
    tipoEnsino: { 
        type: String,
        required: [true, "O tipo de Ensino é obrigatório,"],
        enum: ["Ensino Fundamental", "Ensino Médio"],
        message: "O tipo de Ensino {VALUE} não é um valor permitido"
    }
}, { versionKey: false });

const curso = mongoose.model("cursos", cursoSchema);

export { curso, cursoSchema };