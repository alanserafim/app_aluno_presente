import express from "express";
import conectaNaDatabase from "./config/db.js";
import routes from "./routes/index.js";
import manipulador404 from "./middlewares/manipulador404.js";
import manipuladorErros from "./middlewares/manipuladorErros.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});
conexao.once("open", ()=>{
    console.log("Conexão com o banco feita com suscesso");
});

const app = express();
routes(app);
app.use(manipulador404);
app.use(manipuladorErros);

export default app;