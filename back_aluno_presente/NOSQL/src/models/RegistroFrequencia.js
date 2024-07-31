import mongoose from "mongoose";

const registroFrequenciaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.ObjectId },
    data: { 
        type: Date,
        required: [true, "A data do registro da frequência é obrigatória"]
    },
    turma_id: {
        type: String,
        required: [true, "o Id da classe é obrigatório"]
    },
    frequencia: [
        {
            matricula_id: { type: String },
            presenca: { type: Boolean } ,
        }
    ]
}, { versionKey: false });

const registroFrequencia = mongoose.model("registro_frequencia", registroFrequenciaSchema);

export { registroFrequencia, registroFrequenciaSchema };