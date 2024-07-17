import mongoose from "mongoose";

const classeSchema = new mongoose.Schema({
    id_classe: { type: mongoose.Schema.ObjectId },
    titulo: { type: String, required: true},
    tipoEnsino: { type: String },
    horario: { type: String },
    sala: { type: Number },
}, { versionKey: false });

const classe = mongoose.model("classes", classeSchema);

export { classe, classeSchema };