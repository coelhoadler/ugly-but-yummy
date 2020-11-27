import { PedidoDto } from "./pedido.dto";
import { ObjectID } from "mongodb";
import { IPedidoBuilder } from "./pedido.interface";

export class PedidoBuilder implements IPedidoBuilder{
    private _pedido: PedidoDto;

    constructor() {
        this._pedido = new PedidoDto();
        this._pedido._id = new ObjectID().toHexString();
        this._pedido.createdAt = new Date();
        return this;
    }
    
    setConsumidorId(consumidorId: string): IPedidoBuilder {
        this._pedido.consumidorId = consumidorId;
        return this;
    }
    setProdutosIds(produtosIds: string[]): IPedidoBuilder {
        this._pedido.produtosIds = produtosIds;
        return this;
    }
    addProdutoId(produtosIds: string): IPedidoBuilder {
        this._pedido.produtosIds.push(produtosIds);
        return this;
    }
    setEndereco(endereco: string): IPedidoBuilder {
        this._pedido.endereco = endereco;
        return this;
    }
    setValorFrete(valorFrete: number): IPedidoBuilder {
        this._pedido.valorFrete = valorFrete;
        return this;
    }
    setDescricao(descricao: string): IPedidoBuilder {
        this._pedido.descricao = descricao;
        return this;
    }
    setTotalPedido(totalPedido: number): IPedidoBuilder {
        this._pedido.totalPedido = totalPedido;
        return this;
    }

    public build(): PedidoDto {
        return this._pedido;
    }
}