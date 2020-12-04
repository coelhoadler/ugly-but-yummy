import { IProduto } from "./produto.interface";

export class ProdutoDto implements IProduto {
    _id: string;
    sku: string;
    nome: string;
    descricao: string;
    preco: number;
    createdAt: Date;
}
