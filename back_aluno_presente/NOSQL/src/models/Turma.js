import mongoose from "mongoose";

const turmaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.ObjectId },
    titulo: { 
        type: String,
        required: [true, "O titulo da turma é obrigatório."]
    },
    curso_id: { 
        type: String,
        required: [true, "O id do curso é obrigatório."]
    },
    alunos: [ String ],
    anoLetivo: { type: Number },
    datainicio: { type: Date },
    dataFim: { type: Date },
    horario: { type: String },
    sala: { type: Number }
}, { versionKey: false });


const turma = mongoose.model("turmas", turmaSchema);

export { turma, turmaSchema };
