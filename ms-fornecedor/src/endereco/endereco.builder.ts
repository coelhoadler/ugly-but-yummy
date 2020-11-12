import { EnderecoDto } from "../endereco/endereco.dto";

export class EnderecoBuilder {
    private _endereco: EnderecoDto;

    constructor() {
        this._endereco = new EnderecoDto();
        return this;
    }

    public setCep(nome: String): EnderecoBuilder {
        this._endereco.cep = nome;
        return this;
    }

    public setRua(uid: String): EnderecoBuilder {
        this._endereco.rua = uid;
        return this;
    }

    public setNumero(doc: String): EnderecoBuilder {
        this._endereco.numero = doc;
        return this;
    }

    public setComplemento(endereco: String): EnderecoBuilder {
        this._endereco.complemento = endereco;
        return this;
    }

    public setCidade(telefone: String): EnderecoBuilder {
        this._endereco.cidade = telefone;
        return this;
    }

    public setUf(email: String): EnderecoBuilder {
        this._endereco.uf = email;
        return this;
    }

    public build(): EnderecoDto {
        return this._endereco;
    }
}