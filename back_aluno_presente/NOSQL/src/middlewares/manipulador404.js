import Erro404 from "../Errors/Erro404.js";

export default function manipulador404(req, res, next){
    const erro404 = new Erro404();
    next(erro404);
}