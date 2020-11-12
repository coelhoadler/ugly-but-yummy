import { ConsumidorDto } from "./consumidor.dto";
import { EnderecoDto } from "../endereco/endereco.dto";
import { ObjectID } from "mongodb";
import { DadosBancariosDto } from "../dadosBancarios/dadosBancarios.dto";

export class ConsumidorBuilder {
    private _consumidor: ConsumidorDto;

    constructor() {
        this._consumidor = new ConsumidorDto();
        this._consumidor._id = new ObjectID().toHexString();
        this._consumidor.createdAt = new Date();
        return this;
    }

    public setNome(nome: string): ConsumidorBuilder {
        this._consumidor.nome = nome;
        return this;
    }

    public setUid(uid: string): ConsumidorBuilder {
        this._consumidor.uid = uid;
        return this;
    }

    public setDoc(doc: string): ConsumidorBuilder {
        this._consumidor.doc = doc;
        return this;
    }

    public setEndereco(endereco: EnderecoDto): ConsumidorBuilder {
        this._consumidor.endereco = endereco;
        return this;
    }

    public setDadosBancarios(dadosBancarios: DadosBancariosDto): ConsumidorBuilder {
        this._consumidor.dadosBancarios = dadosBancarios;
        return this;
    }
    public setTelefone(telefone: string): ConsumidorBuilder {
        this._consumidor.telefone = telefone;
        return this;
    }

    public setEmail(email: string): ConsumidorBuilder {
        this._consumidor.email = email;
        return this;
    }

    public build(): ConsumidorDto {
        return this._consumidor;
    }
}