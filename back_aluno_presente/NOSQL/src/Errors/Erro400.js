import ErroBase from "./ErroBase.js";

class Erro400RequisicaoIncorreta extends ErroBase {
    constructor(mensagem = "Um ou mais dados fornecidos estão incorretos") {
        super(mensagem, 404);
    }
}

class Erro400Validacao extends ErroBase {
    constructor(error) {
        const mensagemErro = Object.values(error.errors)
            .map(error => error.message)
            .join("; ");
        super(`Os seguintes erros foram encontrados: ${mensagemErro}`, 404);
    }
}

  
export { Erro400RequisicaoIncorreta, Erro400Validacao};