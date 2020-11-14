import { IProduto } from "./produto.interface";

export class ProdutoDto implements IProduto {
    _id: String;
    uid: String;
    nome: String;
    descricao: String;
    preco: Number;
    createdAt: Date;
}
