import { ProdutoDto } from "./produto.dto";
import { ObjectID } from "mongodb";
import { IProdutoBuilder } from "./produto.interface";

export class ProdutoBuilder implements IProdutoBuilder{
    private _produto: ProdutoDto;

    constructor(id: string = null) {
        this._produto = new ProdutoDto();
        this._produto._id = new ObjectID().toHexString();
        if(id) this._produto._id = id;
        this._produto.createdAt = new Date();
        return this;
    }

    public setNome(nome: string): ProdutoBuilder {
        this._produto.nome = nome;
        return this;
    }

    public setSku(sku: string): ProdutoBuilder {
        this._produto.sku = sku;
        return this;
    }

    public setDescricao(descricao: string): ProdutoBuilder {
        this._produto.descricao = descricao;
        return this;
    }

    public setPreco(preco: number): ProdutoBuilder {
        this._produto.preco = preco;
        return this;
    }

    public build(): ProdutoDto {
        return this._produto;
    }
}