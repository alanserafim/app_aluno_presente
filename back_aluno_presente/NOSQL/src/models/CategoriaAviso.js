import mongoose from "mongoose";

const categoriaAvisoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.ObjectId },
    categoria: {type: String },
    titulo: {type: String },
    texto: {type: String },
}, { versionKey: false });

const categoriaAviso = mongoose.model("categorias_avisos", categoriaAvisoSchema);

export { categoriaAviso, categoriaAvisoSchema };