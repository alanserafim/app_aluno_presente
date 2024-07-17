import ErroBase from "./ErroBase.js";

class Erro500 extends ErroBase {
    constructor(mensagem = "Erro interno no servidor") {
        super(mensagem, 500);
    }
}

export default Erro500;