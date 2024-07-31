import mongoose from "mongoose";

const matriculaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.ObjectId },
    estudante_id: {
        type: String,
        required: [true, "o id do estudante é obrigatório."]
    },
    turma_id: {
        type: String,
        required: [true, "o id da turma é obrigatório."]
    },
    status: {
        type: String,
        required: [true, "O status da matricula é obrigatório"],
        enum: {
            values: ["ativo", "transferido", "remanejado", "inativo", "abandono", "não comparecimento"],
            message: "O status {VALUE} não é um valor permitido"
        },
    },
    data_matricula: { type: Date },
    numero_chamada: { type: Number }
}, { versionKey: false });

const matricula = mongoose.model("matriculas", matriculaSchema);

export { matricula, matriculaSchema };