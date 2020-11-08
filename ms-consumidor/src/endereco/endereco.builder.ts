import { EnderecoDto } from "../endereco/endereco.dto";

export class EnderecoBuilder {
    private _endereco: EnderecoDto;

    public build(): EnderecoBuilder {
        this._endereco = new EnderecoDto();
        return this;
    }

    public setCep(nome: string): EnderecoBuilder {
        this._endereco.cep = nome;
        return this;
    }

    public setRua(uid: string): EnderecoBuilder {
        this._endereco.rua = uid;
        return this;
    }

    public setNumero(doc: string): EnderecoBuilder {
        this._endereco.numero = doc;
        return this;
    }

    public setComplemento(endereco: string): EnderecoBuilder {
        this._endereco.complemento = endereco;
        return this;
    }

    public setCidade(telefone: string): EnderecoBuilder {
        this._endereco.cidade = telefone;
        return this;
    }

    public setUf(email: string): EnderecoBuilder {
        this._endereco.uf = email;
        return this;
    }
}