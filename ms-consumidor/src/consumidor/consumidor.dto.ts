import { EnderecoDto } from "../endereco/endereco.dto";

export class ConsumidorDto {
    _id: String;
    uid: String;
    nome: String;
    doc: String;
    endereco: EnderecoDto
    telefone: String;
    email: String;
    createdAt: Date;
}
