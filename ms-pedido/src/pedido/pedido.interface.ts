export interface IPedido {
    _id: string;
    consumidorId: string;
    produtosIds: string[];
    endereco: string;
    valorFrete: number;
    descricao: string;
    totalPedido: number;
    status: number;
    createdAt: Date;
}

export interface IPedidoBuilder {
    setConsumidorId(consumidorId: string): IPedidoBuilder;
    setProdutosIds(produtosIds: string[]): IPedidoBuilder;
    addProdutoId(produtosIds: string): IPedidoBuilder;
    setEndereco(endereco: string): IPedidoBuilder;
    setValorFrete(valorFrete: number): IPedidoBuilder;
    setDescricao(descricao: string): IPedidoBuilder;
    setTotalPedido(totalPedido: number): IPedidoBuilder;
    
    build(): IPedido
}
