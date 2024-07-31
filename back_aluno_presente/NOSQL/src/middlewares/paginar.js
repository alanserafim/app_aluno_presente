import { Erro400RequisicaoIncorreta } from "../Errors/Erro400.js";

export default async function paginar(req, res, next){
    
    try {
        let { limite = 10, pagina = 1, ordenacao = "_id:-1"} = req.query;
  
        let [campoOrdenacao, ordem] = ordenacao.split(":");
        limite = parseInt(limite);
        pagina = parseInt(pagina);
        ordem = parseInt(ordem);
  
        const resultado = req.resultado;
  
        if(limite > 0 && pagina > 0) {
            const resultadoPaginado = await resultado.find({})
                .skip((pagina - 1 ) * limite)
                .limit(limite)
                .sort({[campoOrdenacao]: ordem});
            res.status(200).json(resultadoPaginado);
        } else {
            next(new Erro400RequisicaoIncorreta);
        }
    } catch (error) {
        next(error);
    }
  
}