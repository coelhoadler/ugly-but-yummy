import { IPedido } from "./pedido.interface";

export class PedidoDto implements IPedido {
    _id: string;
    consumidorId: string;
    produtosIds: string[];
    endereco: string;
    valorFrete: number;
    descricao: string;
    totalPedido: number;
    createdAt: Date;
}
