import mongoose from "mongoose";

const DocumentosEntreguesSchema = new mongoose.Schema({
    rg: { type: Boolean },
    cpf: { type: Boolean },
    certidaoNascimento: { type: Boolean },
    endereco: { type: Boolean },
    carteiraVacinacao: { type: Boolean },

    responsavelDocs: { type: Boolean },
    dva: { type: Boolean },
    historicoEscolar: { type: Boolean },
    descHistoricoEscolar: { type: String },
    demaisDocs: { type: Boolean },
    descDemaisDocs: { type: String }

}, { versionKey: false, _id: false });


const contatoSchema = new mongoose.Schema({
    nome: { type: String },
    parentesco: { type: String },
    telefone: { type: String },

}, { versionKey: false, _id: false });

const estudantesSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.ObjectId },
    nome: { 
        type: String, 
        required: [true, "O nome do estudante é obrigatório."]
    },
    dataNascimento: { type: Date },
    contato: [contatoSchema],
    documentos: DocumentosEntreguesSchema,

}, {versionKey: false });

const estudante = mongoose.model("estudantes", estudantesSchema);

export { estudante, estudantesSchema };


