
class ClienteEspecial extends Cliente{
    constructor(nome, cpf, conta, contaEspecial) {
        super(nome, cpf, conta);
        this._contaEspecial = contaEspecial;
    }

    get get_contaEspecial(){
        return this._contaEspecial;
    }

    set set_contaEspecial(contaEspecial){
        this._contaEspecial = contaEspecial;
    }

    saldoTotal(){
        return super.conta.saldo + this.get_contaEspecial.saldo;
    }
}