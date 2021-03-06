import { DadosBancariosDto } from "../dadosBancarios/dadosBancarios.dto";
import { EnderecoDto } from "../endereco/endereco.dto";

export class FornecedorDto {
    _id: String;
    uid: String;
    nome: String;
    doc: String;
    endereco: EnderecoDto
    dadosBancarios: DadosBancariosDto
    telefone: String;
    email: String;
    produtos: String[];
    createdAt: Date;
}