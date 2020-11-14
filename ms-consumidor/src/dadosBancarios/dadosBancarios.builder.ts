import { DadosBancariosDto } from "./dadosBancarios.dto";

export class DadosBancariosBuilder {
    private _dadosBancarios: DadosBancariosDto;

    constructor() {
        this._dadosBancarios = new DadosBancariosDto();
        return this;
    }

    public setAg(ag: string): DadosBancariosBuilder {
        this._dadosBancarios.ag = ag;
        return this;
    }

    public setCc(cc: string): DadosBancariosBuilder {
        this._dadosBancarios.cc = cc;
        return this;
    }

    public setNomeBanco(nomeBanco: string): DadosBancariosBuilder {
        this._dadosBancarios.nomeBanco = nomeBanco;
        return this;
    }

    public build(): DadosBancariosDto {
        return this._dadosBancarios;
    }
}