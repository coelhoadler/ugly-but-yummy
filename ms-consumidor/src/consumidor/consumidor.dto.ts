export class EnderecoDto {
    cep: string;
    rua: string;
    numero: string;
    complemento: string;
    cidade: string;
    uf: string;
}

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
