import mongoose from "mongoose";
import { Erro400RequisicaoIncorreta, Erro400Validacao } from "../Errors/Erro400.js";
import Erro500 from "../Errors/Erro500.js";


// eslint-disable-next-line no-unused-vars
export default function manipuladorErros(error, req, res, next) {
    if (error instanceof mongoose.Error.CastError) {
        new Erro400RequisicaoIncorreta().enviarResposta(res);
    } else if (error instanceof mongoose.Error.ValidationError){
        new Erro400Validacao(error).enviarResposta(res);
    } else if (error instanceof Erro500){
        error.enviarResposta(res);
    }
    else {
        new Erro500().enviarResposta(res);
    }
}