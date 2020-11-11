import { DadosBancariosDto } from "../DadosBancarios/DadosBancarios.dto";

export class DadosBancariosBuilder {
    private _dadosBancarios: DadosBancariosDto;

    constructor() {
        this._dadosBancarios = new DadosBancariosDto();
        return this;
    }

    public setAg(ag: String): DadosBancariosBuilder {
        this._dadosBancarios.ag = ag;
        return this;
    }

    public setCc(cc: String): DadosBancariosBuilder {
        this._dadosBancarios.cc = cc;
        return this;
    }

    public setNomeBanco(nomeBanco: String): DadosBancariosBuilder {
        this._dadosBancarios.nomeBanco = nomeBanco;
        return this;
    }

    public build(): DadosBancariosDto {
        return this._dadosBancarios;
    }
}