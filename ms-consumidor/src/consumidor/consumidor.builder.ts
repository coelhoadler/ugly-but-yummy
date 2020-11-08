import { ConsumidorDto } from "./consumidor.dto";
import { EnderecoDto } from "../endereco/endereco.dto";

export class ConsumidorBuilder {
    private _consumidor: ConsumidorDto;

    public build(): ConsumidorBuilder {
        this._consumidor = new ConsumidorDto();
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

    public setTelefone(telefone: string): ConsumidorBuilder {
        this._consumidor.telefone = telefone;
        return this;
    }

    public setEmail(email: string): ConsumidorBuilder {
        this._consumidor.email = email;
        return this;
    }
}