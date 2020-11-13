import { FornecedorDto } from "./fornecedor.dto";
import { EnderecoDto } from "../endereco/endereco.dto";
import { ObjectID } from "mongodb";
import { DadosBancariosDto } from "../dadosBancarios/dadosBancarios.dto";

export class FornecedorBuilder {
    private _fornecedor: FornecedorDto;

    constructor() {
        this._fornecedor = new FornecedorDto();
        this._fornecedor._id = new ObjectID().toHexString();
        this._fornecedor.createdAt = new Date();
        return this;
    }

    public setNome(nome: String): FornecedorBuilder {
        this._fornecedor.nome = nome;
        return this;
    }

    public setUid(uid: String): FornecedorBuilder {
        this._fornecedor.uid = uid;
        return this;
    }

    public setDoc(doc: String): FornecedorBuilder {
        this._fornecedor.doc = doc;
        return this;
    }

    public setEndereco(endereco: EnderecoDto): FornecedorBuilder {
        this._fornecedor.endereco = endereco;
        return this;
    }

    public setDadosBancarios(dadosBancarios: DadosBancariosDto): FornecedorBuilder {
        this._fornecedor.dadosBancarios = dadosBancarios;
        return this;
    }
    public setTelefone(telefone: String): FornecedorBuilder {
        this._fornecedor.telefone = telefone;
        return this;
    }

    public setEmail(email: String): FornecedorBuilder {
        this._fornecedor.email = email;
        return this;
    }

    public setProdutos(produtos: String[]): FornecedorBuilder {
        this._fornecedor.produtos = produtos;
        return this;
    }

    public build(): FornecedorDto {
        return this._fornecedor;
    }
}