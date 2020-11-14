export interface IProduto {
    _id: String;
    uid: String;
    nome: String;
    descricao: String;
    preco: Number;
    createdAt: Date;
}

export interface IProdutoBuilder {
    setUid(uid: string): IProdutoBuilder;
    setNome(nome: string): IProdutoBuilder;
    setDescricao(descricao: string): IProdutoBuilder;
    setPreco(preco: number): IProdutoBuilder;
    build(): IProduto
}   