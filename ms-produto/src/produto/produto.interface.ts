export interface IProduto {
    _id: String;
    sku: String;
    nome: String;
    descricao: String;
    preco: Number;
    createdAt: Date;
}

export interface IProdutoBuilder {
    setSku(sku: string): IProdutoBuilder;
    setNome(nome: string): IProdutoBuilder;
    setDescricao(descricao: string): IProdutoBuilder;
    setPreco(preco: number): IProdutoBuilder;
    build(): IProduto
}
