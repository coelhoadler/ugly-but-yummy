import { DadosBancariosDto } from "../dadosBancarios/dadosBancarios.dto";
import { EnderecoDto } from "../endereco/endereco.dto";

export class ConsumidorDto {
    _id: string;
    uid: string;
    nome: string;
    doc: string;
    endereco: EnderecoDto
    dadosBancarios: DadosBancariosDto
    telefone: string;
    email: string;
    createdAt: Date;
}
